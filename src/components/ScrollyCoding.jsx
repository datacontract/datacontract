import { useState, useEffect, useRef } from 'react'
import { Pre, highlight } from 'codehike/code'
import { tokenTransitions } from './token-transitions'
import { focus } from './focus'

// Progressive code snippets that build up the data contract
// Using # !focus(start:end) to highlight new sections
const codeSteps = [
  {
    id: 'foundation',
    title: 'Foundation',
    description: 'Every data contract starts with its foundation: the API version, kind, unique identifier, name, version number, and status. This metadata identifies the contract and enables versioning.',
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
    description: 'The schema defines the structure of your data. Here we define an "orders" table with fields like order_id, customer_id, order_total, and timestamps. Each property includes its type, description, and constraints.',
    code: `apiVersion: v3.1.0
kind: DataContract
id: orders
name: Orders
version: 1.0.0
status: active
# !focus(1:25)
schema:
  - name: orders
    physicalType: TABLE
    description: All historic web shop orders since 2020-01-01.
    properties:
      - name: order_id
        logicalType: string
        physicalType: UUID
        primaryKey: true
        required: true
        unique: true
      - name: customer_id
        logicalType: string
        physicalType: TEXT
        required: true
        classification: internal
        tags:
          - pii:true
      - name: order_total
        logicalType: integer
        physicalType: INTEGER
        required: true
      - name: order_status
        logicalType: string
        physicalType: TEXT`
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
    description: All historic web shop orders since 2020-01-01.
    properties:
      - name: order_id
        logicalType: string
        primaryKey: true
        required: true
      - name: order_status
        logicalType: string
# !focus(1:18)
        quality:
          - type: library
            metric: invalidValues
            arguments:
              validValues:
                - pending
                - paid
                - processing
                - shipped
                - delivered
                - cancelled
                - refunded
            mustBe: 0
    quality:
      - type: library
        metric: rowCount
        mustBeGreaterThan: 100000
        description: If there are less than 100k rows, something is wrong.`
  },
  {
    id: 'team',
    title: 'Team',
    description: 'Document who owns and maintains the data product. Include team name, description, members with their roles, and links to communication channels like Slack.',
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
# !focus(1:10)
team:
  name: sales
  description: This data product is owned by the "Sales" team
  members:
    - username: john@example.com
      name: John Doe
      role: Owner
  authoritativeDefinitions:
    - type: slack
      url: https://slack.example.com/teams/sales`
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
# !focus(1:6)
description:
  purpose: analytical
  usage: This data set can be used for analytical purposes
         and AI applications.
  limitations: Internal use only.
               Do not disclose with external parties.
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
    description: 'Service Level Agreements define expectations for data freshness, availability, and support. While not shown in this minimal example, SLAs can include update frequency, latency guarantees, and response times.',
    code: `apiVersion: v3.1.0
kind: DataContract
id: orders
name: Orders
version: 1.0.0
status: active
description:
  purpose: analytical
  usage: This data set can be used for analytical purposes.
# !focus(1:13)
slaProperties:
  - property: frequency
    value: daily
    description: Data is updated every 24 hours
  - property: latency
    value: < 1 hour
    description: Data available within 1 hour of source update
  - property: availability
    value: 99.9%
    description: Data warehouse uptime guarantee
  - property: support
    value: business hours
    description: Support available during business hours`
  },
  {
    id: 'server',
    title: 'Server',
    description: 'Finally, specify where the data lives. The server configuration includes connection details for different environments, enabling automated testing and data discovery.',
    code: `apiVersion: v3.1.0
kind: DataContract
id: orders
name: Orders
version: 1.0.0
status: active
description:
  purpose: analytical
  usage: This data set can be used for analytical purposes.
schema:
  - name: orders
    physicalType: TABLE
    properties:
      - name: order_id
        logicalType: string
        primaryKey: true
team:
  name: sales
# !focus(1:9)
servers:
  - server: production
    environment: prod
    type: postgres
    host: aws-1-eu-central-2.pooler.supabase.com
    port: 6543
    database: postgres
    schema: dp_orders_v1`
  }
]

export default function ScrollyCoding() {
  const [selectedIndex, setSelectedIndex] = useState(0)
  const [highlightedSteps, setHighlightedSteps] = useState([])
  const stepRefs = useRef([])

  // Pre-highlight all code snippets on mount for smooth transitions
  useEffect(() => {
    async function highlightAllCode() {
      const highlighted = await Promise.all(
        codeSteps.map((step) =>
          highlight({ value: step.code, lang: 'yaml', meta: '' }, 'github-dark')
        )
      )
      setHighlightedSteps(highlighted)
    }
    highlightAllCode()
  }, [])

  // Intersection observer for scroll-based selection
  useEffect(() => {
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
  }, [])

  return (
    <div className="flex gap-8">
      {/* Left side: Scrollable content */}
      <div className="w-1/2 space-y-4">
        <div className="h-[30vh]" /> {/* Top spacer */}

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

        <div className="h-[50vh]" /> {/* Bottom spacer */}
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
            <span className="text-gray-400 text-xs ml-2">orders.odcs.yaml</span>
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
