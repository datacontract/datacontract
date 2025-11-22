import { useState, useEffect } from 'react'
import Sidebar from './components/Sidebar'
import datacontractImg from './assets/datacontract.png'
import exampleContract from './assets/orders.odcs.yaml?raw'

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(() => {
    const saved = localStorage.getItem('sidebarOpen')
    return saved !== null ? JSON.parse(saved) : true
  })

  useEffect(() => {
    localStorage.setItem('sidebarOpen', JSON.stringify(isSidebarOpen))
  }, [isSidebarOpen])

  const sections = [
    {
      id: 'introduction',
      title: 'Introduction',
      items: [
        { id: 'datacontract', title: 'Data Contract', href: '/' },
      ]
    },
    {
      id: 'specification',
      title: 'Specification',
      items: [
        { id: 'open-data-contract-standard', title: 'Open Data Contract Standard', href: '/open-data-contract-standard' },
        { id: 'open-data-product-standard', title: 'Open Data Product Standard', href: '/open-data-product-standard' },
        { id: 'data-contract-specification', title: 'Data Contract Specification', href: '/open-data-contract-standard' },
        { id: 'bitol', title: 'Bitol', href: '/bitol' },
      ]
    },
    {
      id: 'tools',
      title: 'Tools',
      items: [
        { id: 'data-contract-editor', title: 'Data Contract Editor', href: '#' },
        { id: 'data-contract-cli', title: 'Data Contract CLI', href: '#' },
        { id: 'excel-template', title: 'Excel Template', href: '#' },
        { id: 'entropy-data', title: 'Entropy Data', href: '#' },
        { id: 'mcp', title: 'MCP', href: '#' },
      ]
    },
    {
      id: 'examples',
      title: 'Examples',
      items: [
        { id: 'example-minimal', title: 'Minimal Example', href: '#' },
        { id: 'example-full', title: 'Full Example', href: '#' },
      ]
    },
    {
      id: 'community',
      title: 'Community',
      items: [
        { id: 'slack', title: 'Slack', href: '#' },
      ]
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Toggle Button - Always Visible */}
      <div className="fixed top-4 left-4 z-20">
        <button
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          className="flex h-6 w-6 shrink-0 items-center justify-center rounded hover:bg-gray-950/5"
          aria-label={isSidebarOpen ? "Close sidebar" : "Open sidebar"}
        >
          <svg
            viewBox="0 0 16 14"
            fill="none"
            className="h-3.5 shrink-0 stroke-gray-950"
            strokeWidth={1.5}
          >
            <path d="M5.5 0.5H2.5C1.39543 0.5 0.5 1.39543 0.5 2.5V11.5C0.5 12.6046 1.39543 13.5 2.5 13.5H5.5M5.5 0.5H13.5C14.6046 0.5 15.5 1.39543 15.5 2.5V11.5C15.5 12.6046 14.6046 13.5 13.5 13.5H5.5M5.5 0.5V13.5" />
          </svg>
        </button>
      </div>

      {/* Sidebar */}
      <Sidebar isOpen={isSidebarOpen} sections={sections} />

      {/* Main Content */}
      <div
        className={isSidebarOpen ? 'ml-68' : 'ml-0'}
      >
        {/* Main Content */}
        <main className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {/* Title */}
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Data Contract</h1>
            <img src={datacontractImg} alt="Data Contract" className="mt-4" />
          </div>
          {/* Introduction */}
          <article id="what-is" className="prose prose-sm mb-10 max-w-none">
            <p>
                A data contract is a document that defines the structure, format, semantics, quality, and terms of use for exchanging data between a data provider and their consumers. Think of an API, but for data.
            </p>
          </article>


          {/* Why Data Contracts Matter */}
          <article id="why" className="prose prose-sm max-w-none mb-10 scroll-mt-16">
            <h2>Why Data Contracts Matter</h2>
            <ol>
              <li>
                <strong>Communication</strong>: Connect data teams by documenting domain knowledge and specifying consumer requirements. Start with a contract-first approach using the visual <a href="/data-contract-editor">Data Contract Editor</a> or the <a href="/excel-template">Excel Template</a>.
              </li>
              <li>
                <strong>Trust</strong>: Data Contract Testing (CLI!)
              </li>
              <li>
                <strong>Discover</strong>: Enterprise Data Marketplace (Entropy Data!)
              </li>
              <li>
                <strong>Context</strong>: Semantics, Structure, and SLAs (MCP!)
              </li>
              <li>
                <strong>Governance</strong>: Terms of Use (Entropy Data MCP!)
              </li>
            </ol>
          </article>

          {/* Example */}
          <article id="example" className="prose prose-sm max-w-none mb-10 scroll-mt-16">
            <h2>Example</h2>
            <p>
              Here's an example of what a data contract might look like:
            </p>
            <pre className="rounded p-4 overflow-x-auto text-xs">
{exampleContract}
            </pre>
          </article>

          {/* Implementation */}
          <article id="getting-started" className="prose prose-sm max-w-none mb-10 scroll-mt-16">
            <h2>Getting Started</h2>
            <ol>
              <li>
                <strong>Define Your Contract</strong> — Start by documenting the schema, quality expectations, and semantics of your data product.
              </li>
              <li>
                <strong>Validate on Write</strong> — Implement validation checks when data is produced to ensure contract compliance.
              </li>
              <li>
                <strong>Monitor & Alert</strong> — Set up monitoring to detect violations and alert the responsible teams.
              </li>
              <li>
                <strong>Version & Evolve</strong> — Use versioning to manage changes and coordinate updates with consumers.
              </li>
            </ol>
          </article>
        </main>

        {/* Footer */}
        <footer className="border-t border-gray-200 mt-12">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
            <p className="text-center text-gray-500 text-xs">
              Learn more about data contracts and data mesh principles
            </p>
          </div>
        </footer>
      </div>
    </div>
  )
}

export default App