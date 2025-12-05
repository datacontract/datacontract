import ScrollyCoding from './components/ScrollyCoding'
import DataContractEditor from './components/DataContractEditor'
import Terminal from './components/Terminal'
import DeprecationBanner from './components/DeprecationBanner'
import datacontractImg from './assets/datacontract-diagram.png'

function App() {
  return (
    <div className="min-h-screen bg-white">
            {/* Deprecation Banner */}
            <DeprecationBanner />

            {/* Main Content */}
            <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                {/* Title */}
                <div className="mb-8">
                    <h1 className="text-3xl font-bold text-gray-900 mb-2">Data Contracts</h1>

                    <article className="prose mb-3 max-w-none">
                        <p>
                            Build trust in data.
                        </p>
                    </article>

                    <img src={datacontractImg} alt="Data Contract" className="my-8 w-full md:max-w-3/5 mx-auto py-4"/>
                </div>

                {/* Introduction */}
                <article id="what-is" className="prose mb-10 max-w-none">
                    <p>
                        A data contract is a document that defines the structure, format, semantics, quality, and terms
                        of
                        use for exchanging data between a data producer and their consumers. Think of an API, but for
                        data.
                    </p>
                    <p>
                        The industry standard for building data contracts is the <a
                        href="https://bitol-io.github.io/open-data-contract-standard/latest/">Open Data Contract
                        Standard</a> (ODCS), led by Bitol, a Linux Foundation project.
                        Let's build a data contract step-by-step:
                    </p>
                </article>
            </main>

            {/* Scrollycoding Section - Full Width */}
            <div className="px-8 py-12 max-w-6xl mx-auto">
                <ScrollyCoding/>
            </div>


            {/* Continue Main Content */}
            <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-48">


                {/* Why Data Contracts Matter */}
                <article id="why" className="prose max-w-none mb-48 scroll-mt-16">
                    <h2>Why Data Contracts Matter</h2>
                    <p>
                        Data contracts are not just documentation. They are the foundation for building trust and data
                        governance with a high degree of automation.
                    </p>
                    <ol>
                        <li>
                            <strong>Communication</strong>: Bring data producers and data consumers together. Work
                            through the
                            data contract sections and capture domain knowledge and specify consumer expectations.
                            Start contract-first using the visual <a href="/data-contract-editor">Data Contract
                            Editor</a> or the <a href="/excel-template">Data Contract Excel Template</a>.
                        </li>
                        <li>
                            <strong>Trust</strong>: Automatically check that the data conforms to the data contract.
                            Integrate the open-source <a href="https://github.com/datacontract/datacontract-cli">Data
                            Contract CLI</a> into your CI/CD or data pipelines to enforce data quality and contract
                            compliance.
                        </li>
                        <li>
                            <strong>Discovery</strong>: Data contracts provide the best possible metadata. Make them
                            available
                            in a central data marketplace, such as <a href="https://entropy-data.com">Entropy Data</a>,
                            for potential data consumers to explore, request, and use.
                            With <a href="https://entropy-data.com/learn/mcp">MCP</a>, AI agents can leverage the data
                            contract metadata as necessary context to chat and work with business data.
                        </li>
                    </ol>
                </article>

                {/* Editor */}
                <article id="editor" className="prose max-w-none mb-8 scroll-mt-16">
                    <h2>Data Contract Editor</h2>
                    <p>
                        To create data contracts, we recommend using the <a href="https://editor.datacontract.com/">Data
                        Contract Editor</a> (<a href="https://github.com/datacontract/datacontract-editor">GitHub</a>)
                        which provides a visual interface for creating and editing contracts and comes with a live
                        preview as a HTML representation.
                    </p>
                </article>
            </main>

            {/* Editor Section - Browser Frame */}
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
                <div className="rounded-lg bg-white border border-gray-200 shadow-xl overflow-hidden">
                    {/* Browser-like header */}
                    <div className="flex items-center gap-2 px-4 py-2 bg-gray-100 border-b border-gray-200">
                        <div className="flex gap-1.5">
                            <div className="w-3 h-3 rounded-full bg-red-400"/>
                            <div className="w-3 h-3 rounded-full bg-yellow-400"/>
                            <div className="w-3 h-3 rounded-full bg-green-400"/>
                        </div>
                        <span className="text-gray-500 text-xs ml-2"><a
                            href="https://editor.datacontract.com">editor.datacontract.com</a></span>
                    </div>
                    {/* Editor content */}
                    <DataContractEditor
                        height="700px"
                        onSave={(yaml) => console.log('Saved:', yaml)}
                    />
                </div>

            </div>

          <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 ">
          <article className="prose max-w-none scroll-mt-16 pb-48">
            <p>
              Open the Data Contract Editor <a href="https://editor.datacontract.com" target="_blank">in a new window</a>, run it <a href="https://github.com/datacontract/datacontract-editor">locally as a standalone application</a>, or deploy it as a <a href="https://hub.docker.com/r/datacontract/editor">Docker container in your own environment</a>.
            </p>
          </article>
          </main>

            <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 ">
                {/* CLI */}
                <article id="cli" className="prose max-w-none scroll-mt-16 pb-8">
                    <h2>Data Contract CLI</h2>
                    <p>
                        The <a href="https://github.com/datacontract/datacontract-cli">Data Contract CLI</a> is an
                        open-source command-line tool (and Python library and API server) that allows you to enforce
                        data contracts and to detect schema drift.
                        This is essential to build trust in your data product and ensure that the metadata is kept
                        up-to-date.
                    </p>
                </article>
            </main>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
                    <Terminal
                        lines={[
                            {
                                type: 'command',
                                text: 'export DATACONTRACT_POSTGRES_USERNAME=datacontract_cli.egzhawjonpfweuutedfy'
                            },
                            {
                                type: 'command',
                                text: 'export DATACONTRACT_POSTGRES_PASSWORD=jio10JuQfDfl9JCCPdaCCpuZ1YO'
                            },
                            {type: 'command', text: 'datacontract test orders-v1.odcs.yaml'},
                            '',
                            'Testing orders-v1.odcs.yaml',
                            '╭────────┬──────────────────────────────────────────────────────────┬─────────────────────────┬─────────╮',
                            '│ Result │ Check                                                    │ Field                   │ Details │',
                            '├────────┼──────────────────────────────────────────────────────────┼─────────────────────────┼─────────┤',
                            '│ passed │ Check that field \'line_item_id\' is present               │ line_items.line_item_id │         │',
                            '│ passed │ Check that field line_item_id has type UUID              │ line_items.line_item_id │         │',
                            '│ passed │ Check that field line_item_id has no missing values      │ line_items.line_item_id │         │',
                            '│ passed │ Check that field \'order_id\' is present                   │ line_items.order_id     │         │',
                            '│ passed │ Check that field order_id has type UUID                  │ line_items.order_id     │         │',
                            '│ passed │ Check that field \'price\' is present                      │ line_items.price        │         │',
                            '│ passed │ Check that field price has type INTEGER                  │ line_items.price        │         │',
                            '│ passed │ Check that field price has no missing values             │ line_items.price        │         │',
                            '│ passed │ Check that field \'sku\' is present                        │ line_items.sku          │         │',
                            '│ passed │ Check that field sku has type TEXT                       │ line_items.sku          │         │',
                            '│ passed │ Check that field sku has no missing values               │ line_items.sku          │         │',
                            '│ passed │ Check that field \'customer_id\' is present                │ orders.customer_id      │         │',
                            '│ passed │ Check that field customer_id has type TEXT               │ orders.customer_id      │         │',
                            '│ passed │ Check that field customer_id has no missing values       │ orders.customer_id      │         │',
                            '│ passed │ Check that field \'order_id\' is present                   │ orders.order_id         │         │',
                            '│ passed │ Check that field order_id has type UUID                  │ orders.order_id         │         │',
                            '│ passed │ Check that field order_id has no missing values          │ orders.order_id         │         │',
                            '│ passed │ Check that unique field order_id has no duplicate values │ orders.order_id         │         │',
                            '│ passed │ Check that field \'order_status\' is present               │ orders.order_status     │         │',
                            '│ passed │ Check that field order_status has type TEXT              │ orders.order_status     │         │',
                            '│ passed │ Check that field \'order_timestamp\' is present            │ orders.order_timestamp  │         │',
                            '│ passed │ Check that field order_timestamp has type TIMESTAMPTZ    │ orders.order_timestamp  │         │',
                            '│ passed │ Check that field \'order_total\' is present                │ orders.order_total      │         │',
                            '│ passed │ Check that field order_total has type INTEGER            │ orders.order_total      │         │',
                            '│ passed │ Check that field order_total has no missing values       │ orders.order_total      │         │',
                            '╰────────┴──────────────────────────────────────────────────────────┴─────────────────────────┴─────────╯',
                            '🟢 data contract is valid. Run 25 checks. Took 1.615702 seconds.',
                        ]}
                    />
      </div>
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 ">
        {/* CLI */}
        <article className="prose max-w-none scroll-mt-16 pb-48">
                    <p>
                        The <a href="https://github.com/datacontract/datacontract-cli">Data Contract CLI</a> supports
                        all major data platforms, including Databricks, Snowflake, AWS, BigQuery, and Azure.
                        Engineers can generate code and integrate with other systems using
                        the <em>import</em> and <em>export</em> command.
                        And the Data Contract CLI can also be used in Python scripts, notebooks, as a <a
                        href="https://github.com/datacontract/datacontract-action/">GitHub Action</a>, as a <a
                        href="https://api.datacontract.com/">web server</a>, and much more.

                    </p>
                </article>


                {/* Marketplace */}
                <article id="entropy-data" className="prose max-w-none scroll-mt-16 pb-8">
                    <h2>Entropy Data</h2>
                    <p>
                        <a href="https://entropy-data.com">Entropy Data</a> is our commercial product to manage data
                        products with data contracts.
                        It natively supports the Open Data Contract Standard, includes the Data Contract Editor, and
                        integrates the Data Contract CLI.
                    </p>
                </article>
            </main>

            {/* Entropy Data Section - Browser Frame */}
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
                <a href="http://demo.entropy-data.com">
                    <div className="rounded-lg bg-white border border-gray-200 shadow-xl overflow-hidden">
                        <div className="flex items-center gap-2 px-4 py-2 bg-gray-100 border-b border-gray-200">
                            <div className="flex gap-1.5">
                                <div className="w-3 h-3 rounded-full bg-red-400"/>
                                <div className="w-3 h-3 rounded-full bg-yellow-400"/>
                                <div className="w-3 h-3 rounded-full bg-green-400"/>
                            </div>
                            <span className="text-gray-500 text-xs ml-2"><a
                                href="https://entropy-data.com">entropy-data.com</a></span>
                        </div>
                        <img src="https://entropy-data.com/media/datamesh-manager-marketplace.webp"
                             alt="Entropy Data Marketplace" className="w-full"/>
                    </div>
                </a>
            </div>

            <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <article className="prose max-w-none mb-10">
                    The core features are:
                    <ul>
                        <li><strong>Marketplace</strong> — A self-service data product marketplace for teams and AI
                            agents to discover, request, and access data products with automated approval workflows.
                        </li>
                        <li><strong>Studio</strong> — Design and develop data products using Web UI, YAML editor, API,
                            or Excel templates with built-in testing to ensure compliance before production.
                        </li>
                        <li><strong>Governance</strong> — Define ownership rules, naming conventions, and data
                            classification standards with AI-powered automated compliance checks.
                        </li>
                        <li><strong>AI-Ready</strong> — Model Context Protocol (MCP) enables AI agents to access data
                            products and write queries in natural language.
                        </li>
                        <li><strong>Flexible Deployment</strong> — Available as cloud SaaS, self-hosted, or enterprise
                            single-tenant options.
                        </li>
                    </ul>

                    <p>
                        Try the <a href="https://demo.entropy-data.com/">1-Click Playground</a> or <a
                        href="https://github.com/entropy-data/entropy-data-ce">run it locally on your machine with
                        Docker</a>.
                    </p>

                </article>


            </main>

            {/* Footer */}
            <footer className="bg-white">

                <div className="mx-auto max-w-6xl overflow-hidden py-20 px-6 sm:py-24 lg:px-8">


                    <div className="mt-10 text-xs leading-5 text-gray-500">
                        <div className="flex justify-center space-x-6">
                            <img src="https://entropy-data.com/media/logo_fuchsia_v2.svg" className="w-16"/>
                        </div>

                        <div className="text-center mt-3">
                            This website is maintained by <a href="https://www.entropy-data.com/">Entropy Data</a>
                        </div>
                    </div>


                    <nav className="-mb-6 mt-10 md:columns-2 text-center sm:flex sm:justify-center sm:space-x-12"
                         aria-label="Footer">
                        <div className="pb-6">
                            <a href="https://entropy-data.com/legal-notice"
                               className="text-sm leading-6 text-gray-600 hover:text-gray-900">Legal Notice</a>
                        </div>

                    </nav>
                </div>
            </footer>
    </div>
  )
}

export default App
