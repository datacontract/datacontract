import { useState, useEffect, useRef } from 'react'
import { Pre, highlight } from 'codehike/code'
import { tokenTransitions } from './token-transitions'
import { focus } from './focus'

// Progressive code snippets that build up the data contract
// Using # !focus(start:end) to highlight new sections
const getCodeSteps = (fullContractYaml) => [
  {
    id: 'fundamentals',
    title: 'Fundamentals',
    description: 'Every data contract starts with its fundamentals: the version of the standard, unique identifier, name, data contract version number, and status. This metadata identifies the contract and enables versioning.',
    code: `# !focus(1:6)
apiVersion: v3.1.0
kind: DataContract
id: orders
name: Orders
version: 1.0.0
status: active`
  },
  {
    id: 'schema',
    title: 'Schema',
    description: 'The schema defines the structure and semantics of your data. Here we define an "orders" table with fields like order_id, customer_id, order_total, and timestamps. Each property includes its type, description, and constraints.',
    code: `apiVersion: v3.1.0
kind: DataContract
id: orders
name: Orders
version: 1.0.0
status: active
# !focus(1:30)
schema:
  - name: orders
    physicalType: TABLE
    description: All successful and cancelled web-shop orders since 2020-01-01
    properties:
      - name: order_id
        logicalType: string
        primaryKey: true
      - name: customer_id
        businessName: "Customer Identifier"
        logicalType: string
        physicalType: VARCHAR(10)
        required: true
        examples:
          - "C-10000001"
        classification: internal
        tags:
          - pii:true
      - name: order_total
        logicalType: integer
        physicalType: INTEGER
        description: "Total order amount in cent"
        required: true
        logicalTypeOptions:
          minimum: 0
      - name: order_status
        logicalType: string
        physicalType: TEXT
        examples:
          - "shipped"`
  },
  {
    id: 'quality',
    title: 'Data Quality',
    description: 'Data quality rules ensure your data meets expectations. Define checks like valid value constraints, row count thresholds, and custom validation logic. These can be tested automatically with the Data Contract CLI.',
    code: `apiVersion: v3.1.0
kind: DataContract
id: orders
name: Orders
version: 1.0.0
status: active
schema:
  - name: orders
    physicalType: TABLE
    description: All successful and cancelled web-shop orders since 2020-01-01
    properties:
      - name: order_id
        logicalType: string
        primaryKey: true
      - name: order_status
        logicalType: string
# !focus(1:19)
        quality:
          - type: library
            description: Only valid order statuses
            metric: invalidValues
            arguments:
              validValues:
                - pending
                - shipped
                - cancelled
            mustBe: 0
    # table-level quality checks
    quality:
      - type: sql
        description: Expect 100k+ rows
        query: select count(*) from orders
        mustBeGreaterThan: 100000`
  },
  {
    id: 'team',
    title: 'Team',
    description: 'Document who owns and maintains the data contract. Include team name, description, and members with their roles. Add support channels, how data consumers can reach out to the owners.',
    code: `apiVersion: v3.1.0
kind: DataContract
id: orders
name: Orders
version: 1.0.0
status: active
schema:
  - name: orders
    physicalType: TABLE
    description: All successful and cancelled web-shop orders since 2020-01-01
    properties:
      - name: order_id
        logicalType: string
        primaryKey: true
# !focus(1:12)
team:
  name: sales
  description: Owned by the "Sales" team
  members:
    - username: john@example.com
      name: John Doe
      role: Owner
support:
  - channel: "#sales-support"
    tool: "slack"
    url: "https://example.slack.com/archives/C123456789"
    description: "Support and collaboration"
`
  },
  {
    id: 'description',
    title: 'Terms of Use',
    description: 'Define the purpose, usage guidelines, and limitations for your data. This helps consumers understand what they can and cannot do with the data, establishing clear governance boundaries.',
    code: `apiVersion: v3.1.0
kind: DataContract
id: orders
name: Orders
version: 1.0.0
status: active
# !focus(1:12)
description:
  purpose: "Provides order and line item data for analytics and reporting"
  usage: "Used by analytics team for sales analysis and business intelligence"
  limitations: "Contains only the last 2 years of data"
  customProperties:
    - property: "sensitivity"
      value: "secret"
      description: "Data contains personally identifiable information"
  authoritativeDefinitions:
    - url: "https://entropy-data.com/policies/gdpr-compliance"
      type: "businessDefinition"
      description: "GDPR compliance policy for handling customer data"
schema:
  - name: orders
    physicalType: TABLE
    properties:
      - name: order_id
        logicalType: string
        primaryKey: true
team:
  name: sales`
  },
  {
    id: 'sla',
    title: 'SLAs',
    description: 'Service Level Agreements define non-functional guarantees. Data consumers can match these with their use-case requirements.',
    code: `apiVersion: v3.1.0
kind: DataContract
id: orders
name: Orders
version: 1.0.0
status: active
# !focus(1:16)
slaProperties:
  - property: availability
    value: 99.9%
    description: Data platform uptime guarantee
  - property: retention
    value: 1
    unit: year
    description: Data will be deleted after 1 year
  - property: freshness
    value: 24
    unit: hours
    element: orders.order_date
    description: Within 24 hours of order placement
  - property: support
    value: business hours
    description: Support only during business hours`
  },
  {
    id: 'servers',
    title: 'Servers',
    description: 'Finally, specify where the data lives. The server configuration includes connection details for different environments.',
    code: `apiVersion: v3.1.0
kind: DataContract
id: orders
name: Orders
version: 1.0.0
status: active
schema:
  - name: orders
    physicalType: TABLE
    properties:
      - name: order_id
        logicalType: string
        primaryKey: true
# !focus(1:9)
servers:
  - server: postgres
    type: postgres
    environment: prod
    host: aws-1-eu-central-2.pooler.supabase.com
    port: 6543
    database: postgres
    schema: dp_orders_v1`
  },
  {
    id: 'full-contract',
    title: 'Full Example',
    description: 'Here is the full data contract bringing all the elements together: fundamentals, a schema with two tables, data quality rules, team, terms of use, servers, and custom properties.',
    code: fullContractYaml
  }
]

export default function ScrollyCoding() {
  const [selectedIndex, setSelectedIndex] = useState(0)
  const [highlightedSteps, setHighlightedSteps] = useState([])
  const [codeSteps, setCodeSteps] = useState([])
  const stepRefs = useRef([])

  // Fetch full contract YAML and initialize code steps
  useEffect(() => {
    async function init() {
      const response = await fetch('/orders-v1.odcs.yaml')
      const fullContractYaml = await response.text()
      const steps = getCodeSteps(fullContractYaml)
      setCodeSteps(steps)

      // Pre-highlight all code snippets for smooth transitions
      const highlighted = await Promise.all(
        steps.map((step) =>
          highlight({ value: step.code, lang: 'yaml', meta: '' }, 'github-dark')
        )
      )
      setHighlightedSteps(highlighted)
    }
    init()
  }, [])

  // Intersection observer for scroll-based selection
  useEffect(() => {
    if (codeSteps.length === 0) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = stepRefs.current.indexOf(entry.target)
            if (index !== -1) {
              setSelectedIndex(index)
            }
          }
        })
      },
      {
        rootMargin: '-40% 0px -40% 0px',
        threshold: 0
      }
    )

    stepRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref)
    })

    return () => observer.disconnect()
  }, [codeSteps])

  // Don't render until code steps are loaded
  if (codeSteps.length === 0) {
    return <div className="flex gap-8 min-h-[600px]" />
  }

  return (
    <div className="flex gap-8">
      {/* Left side: Scrollable content */}
      <div className="w-1/2 space-y-4">
        <div className="h-[10vh]" /> {/* Top spacer */}

        {codeSteps.map((step, index) => (
          <div
            key={step.id}
            ref={(el) => (stepRefs.current[index] = el)}
            data-selected={selectedIndex === index}
            className={`
              border-l-4 px-5 py-4 rounded-r-lg transition-all duration-300 cursor-pointer
              ${selectedIndex === index
                ? 'border-blue-500 bg-blue-50'
                : 'border-gray-200 bg-gray-50 hover:border-gray-300 hover:bg-gray-100'
              }
            `}
            onClick={() => setSelectedIndex(index)}
          >
            <h3 className={`text-lg font-semibold mb-2 ${
              selectedIndex === index ? 'text-blue-900' : 'text-gray-700'
            }`}>
              {step.title}
            </h3>
            <p className={`text-sm leading-relaxed ${
              selectedIndex === index ? 'text-blue-800' : 'text-gray-600'
            }`}>
              {step.description}
            </p>
          </div>
        ))}
          <p className="prose prose-sm ">
              Reference: <a href="https://bitol-io.github.io/open-data-contract-standard/latest/">Open Data Contract Standard</a>
          </p>

        <div className="h-[10vh]" /> {/* Bottom spacer */}
      </div>

      {/* Right side: Sticky code panel */}
      <div className="w-1/2">
        <div className="sticky top-20 max-h-[80vh] overflow-auto rounded-lg bg-[#0d1117] shadow-xl">
          <div className="flex items-center gap-2 px-4 py-2 border-b border-gray-700">
            <div className="flex gap-1.5">
              <div className="w-3 h-3 rounded-full bg-red-500" />
              <div className="w-3 h-3 rounded-full bg-yellow-500" />
              <div className="w-3 h-3 rounded-full bg-green-500" />
            </div>
            <span className="text-gray-400 text-xs ml-2">orders-v1.odcs.yaml</span>
          </div>
          <div className="p-4 text-sm min-w-[500px]">
            {highlightedSteps[selectedIndex] ? (
              <Pre
                code={highlightedSteps[selectedIndex]}
                handlers={[tokenTransitions, focus]}
                className="!bg-transparent !p-0 min-h-[24rem]"
              />
            ) : (
              <pre className="text-gray-300 font-mono text-sm whitespace-pre min-h-[24rem]">
                {codeSteps[selectedIndex].code}
              </pre>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
