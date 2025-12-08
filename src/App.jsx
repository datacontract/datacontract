import ScrollyCoding from './components/ScrollyCoding'
import DataContractEditor from './components/DataContractEditor'
import Terminal from './components/Terminal'
import DeprecationBanner from './components/DeprecationBanner'
import datacontractImg from './assets/datacontract-diagram.png'
import '@fontsource/caveat/400.css'

function App() {
  return (
    <div className="min-h-screen bg-white">
            {/* Deprecation Banner */}
            <DeprecationBanner />

            <main>
            {/* Hero Section */}
            <div className="relative isolate">
              <div className="pt-24 pb-12">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                  <div className="mx-auto max-w-2xl text-center">
                    <h1 className="text-5xl font-bold tracking-tight text-balance text-gray-900 sm:text-7xl">
                      Data Contracts
                    </h1>
                    <p className="mt-3 text-lg font-medium text-pretty text-gray-500 sm:text-xl/8">
                      Trust in data
                    </p>
                  </div>
                  <div className="flow-root mt-12">
                    <div className="-m-2 p-2 lg:-m-4 lg:p-4">
                      <img src={datacontractImg} alt="Data Contract Diagram" className="mx-auto w-full max-w-2xl" />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Introduction */}
            <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-8">
                <div id="what-is" className="prose max-w-none">
                    <p>
                        A data contract is a document that defines the ownership, structure, semantics, quality, and terms
                        of use for exchanging data between a data producer and their consumers. Think of an API, but for
                        data.
                    </p>
                </div>
            </section>

            <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-24">
                <div id="odcs" className="prose mb-10 max-w-none">
                    <h2>Open Data Contract Standard</h2>

                    <p>
                        The industry standard for data contracts is the <a
                        href="https://bitol-io.github.io/open-data-contract-standard/latest/">Open Data Contract
                        Standard</a> (ODCS), led by Bitol (named after a mayan god, pronounced: bee-tohl), a Linux Foundation project.
                        We joined forces with Bitol, contributed concepts and learnings, and with the release of ODCS 3.1,
                        we can finally deprecate the <a href="https://datacontract-specification.com">Data Contract Specification</a> proposal in favor of a common single standard.
                    </p>
                    <p>
                        Let's build an ODCS data contract step-by-step:
                    </p>
                </div>
            </section>

            {/* Scrollycoding Section - Full Width */}
            <div className="px-8 py-12 max-w-6xl mx-auto">
                <ScrollyCoding/>
            </div>


            {/* Continue Main Content */}
            <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-48">


                {/* Why Data Contracts Matter */}
                <div id="why" className="prose max-w-none mb-48 scroll-mt-16">
                    <h2>Why Data Contracts Matter</h2>
                    <p>
                        Data contracts are not just documentation. They are the foundation for building trust and data
                        governance with a high degree of automation.
                    </p>
                    <ol>
                        <li>
                            <strong>Communication</strong>: Bring data producers and data consumers together. Work
                            through the
                            data contract sections to capture domain knowledge and specify consumer expectations.
                            Start contract-first using the visual <a href="https://github.com/datacontract/datacontract-editor">Data Contract
                            Editor</a> or the <a href="https://github.com/datacontract/open-data-contract-standard-excel-template">Data Contract Excel Template</a>.
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
                    <p>
                        Data Contracts are powerful when exchanging data with other teams or AI agents.
                    </p>
                </div>

                {/* Editor */}
                <div id="editor" className="prose max-w-none mb-8 scroll-mt-16">
                    <h2>Data Contract Editor</h2>
                    <p>
                        To create data contracts, we recommend using the <a href="https://editor.datacontract.com/">Data
                        Contract Editor</a> (<a href="https://github.com/datacontract/datacontract-editor">GitHub</a>)
                        which provides a visual interface for creating and editing contracts and comes with a live
                        preview as a HTML representation.
                    </p>
                </div>
            </section>

            {/* Editor Section - Browser Frame */}
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mb-8 overflow-visible">
                <div className="relative overflow-visible">
                    {/* Hand-written note - only visible on larger screens with enough space */}
                    <div className="block absolute -left-32 top-32 text-gray-400 select-none pointer-events-none">
                        <div className="text-xl -rotate-6 whitespace-nowrap" style={{ fontFamily: 'Caveat, cursive' }}>
                            <div>Try out,</div>
                            <div>it's interactive!</div>
                        </div>
                        <svg
                            className="w-12 h-12 ml-8 mt-1"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path d="M0.323784 0.04476C0.206088 0.098232 0.08712 0.22944 0.047496000000000003 0.34951200000000004C0.013344000000000002 0.453048 0.025248000000000003 0.701616 0.09806400000000001 1.4040000000000001C0.303264 3.3834960000000005 0.7845120000000001 5.344824 1.5114 7.164000000000001C3.127992 11.209848000000001 5.827848 14.607552 9.411984 17.106696C11.318688000000002 18.4362 13.583712000000002 19.510248 15.852 20.160504C17.755368 20.706144 19.821024 20.999232 21.76764 20.999856L22.259304 21 21.164160000000003 22.098C20.561832000000003 22.701912 20.052984000000002 23.2284 20.0334 23.268C19.866648 23.60508 20.102976 23.998944 20.472 23.998944C20.698248 23.998944 20.699928 23.99748 22.338648000000003 22.360752C23.368008 21.33264 23.89704 20.787528000000002 23.928648000000003 20.722416C23.990448 20.595096 23.990928 20.402808 23.929752 20.285040000000002C23.904024 20.235528000000002 23.182416 19.496568 22.303752 18.61992C20.867784 17.187312000000002 20.714256000000002 17.041296 20.617008000000002 17.015664C20.333784 16.941024 20.041272 17.126328 19.980216000000002 17.419056C19.971144 17.462544 19.976784 17.554344 19.992744 17.623056C20.021064 17.745 20.048712000000002 17.775024 21.140304 18.87L22.258824 19.992 21.755424 19.991976C20.649096 19.991952 19.467864 19.888464000000003 18.312 19.690272C14.663832000000001 19.064736 11.141328 17.412264 8.34 15.012167999999999C7.667568000000001 14.436072000000001 6.702768 13.48632 6.157776 12.864C4.178496 10.603944 2.712504 7.950216 1.84884 5.064C1.43652 3.68616 1.1415840000000002 2.0862480000000003 1.0435919999999999 0.6960000000000001C1.0356960000000002 0.5838 1.0183680000000002 0.44232 1.005096 0.381624C0.9406319999999999 0.086904 0.6008640000000001 -0.081096 0.323784 0.04476" fillRule="evenodd" />
                        </svg>
                    </div>
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
                    />
                </div>
                </div>
            </div>

          <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 ">
          <div className="prose max-w-none scroll-mt-16 pb-48">

            <p>
              Open the Data Contract Editor <a href="https://editor.datacontract.com" target="_blank">in a new window</a>,
                run it locally as <a href="https://github.com/datacontract/datacontract-editor">a standalone application</a>,
                or deploy it as a <a href="https://hub.docker.com/r/datacontract/editor">Docker container</a> in your own environment.
                The Data Contract Editor is also included in <a href="https://entropy-data.com">Entropy Data</a>.
            </p>
          </div>
          </section>

            <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 ">
                {/* CLI */}
                <div id="cli" className="prose max-w-none scroll-mt-16 pb-8">
                    <h2>Data Contract CLI</h2>
                    <p>
                        The <a href="https://github.com/datacontract/datacontract-cli">Data Contract CLI</a> is an
                        open-source command-line tool (and Python library and API server) that allows you to enforce
                        data contracts and to detect schema drift.
                        This is essential to build trust in your data product and ensure that the metadata is kept
                        up-to-date.
                    </p>
                </div>
            </section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
                    <Terminal
                        lines={[
                            {
                                type: 'command',
                                text: 'uv tool install --python python3.11 \'datacontract-cli[all]\''
                            },
                            {
                                type: 'command',
                                text: 'export DATACONTRACT_POSTGRES_USERNAME=datacontract_cli.egzhawjonpfweuutedfy'
                            },
                            {
                                type: 'command',
                                text: 'export DATACONTRACT_POSTGRES_PASSWORD=jio10JuQfDfl9JCCPdaCCpuZ1YO'
                            },
                            {type: 'command', text: 'datacontract test https://datacontract.com/orders-v1.odcs.yaml'},
                            '\n',
                            'Testing orders-v1.odcs.yaml',
                            'Server: production (type=postgres, host=aws-1-eu-central-2.pooler.supabase.com, port=6543, database=postgres, schema=dp_orders_v1)',
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
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 ">
        {/* CLI */}
        <div className="prose max-w-none scroll-mt-16 pb-48">
                    <p>
                        The <a href="https://github.com/datacontract/datacontract-cli">Data Contract CLI</a> supports
                        all major data platforms, including Databricks, Snowflake, AWS, BigQuery, and Azure.
                        Engineers can generate code and integrate with other systems using
                        the <em>import</em> and <em>export</em> command.
                        And the Data Contract CLI can also be used in Python scripts, notebooks, as a <a
                        href="https://github.com/datacontract/datacontract-action/">GitHub Action</a>, as a <a
                        href="https://api.datacontract.com/">web server</a>, and much more.

                    </p>
                </div>


                {/* Marketplace */}
                <div id="entropy-data" className="prose max-w-none scroll-mt-16 pb-8">
                    <h2>Entropy Data</h2>
                    <p>
                        <a href="https://entropy-data.com">Entropy Data</a> is our commercial product to manage data
                        products with data contracts.
                        It natively supports the Open Data Contract Standard, includes the Data Contract Editor, and
                        integrates the Data Contract CLI.
                    </p>
                </div>
            </section>

            {/* Entropy Data Section - Browser Frame */}
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
                <a href="https://demo.entropy-data.com/?ref=datacontract-com-preview">
                    <div className="-m-2 p-2 lg:-m-4 lg:p-4 rounded-xl lg:rounded-2xl bg-gray-900/5 ring-1 ring-inset ring-gray-900/10 hover:bg-indigo-500 hover:ring-indigo-900 transition-all duration-300">
                        <div className="rounded-lg bg-white shadow-2xl ring-1 ring-gray-900/10 overflow-hidden">
                            <div className="flex items-center gap-2 px-4 py-2 bg-gray-100 border-b border-gray-200">
                                <div className="flex gap-1.5">
                                    <div className="w-3 h-3 rounded-full bg-red-400"/>
                                    <div className="w-3 h-3 rounded-full bg-yellow-400"/>
                                    <div className="w-3 h-3 rounded-full bg-green-400"/>
                                </div>
                                <span className="text-gray-500 text-xs ml-2">entropy-data.com</span>
                            </div>
                            <img src="https://entropy-data.com/media/datamesh-manager-marketplace.webp"
                                 alt="Entropy Data Marketplace" className="w-full"/>
                        </div>
                    </div>
                </a>
            </div>

            <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="prose max-w-none mb-36">
                    The core features are:
                    <ul>
                        <li><strong>Marketplace</strong>: A self-service data product marketplace for teams and AI
                            agents to discover, request, and access data products with automated approval workflows.
                        </li>
                        <li><strong>Studio</strong>: Design and develop data products using Web UI, YAML editor, API,
                            or Excel templates with built-in testing to ensure compliance before production.
                        </li>
                        <li><strong>Governance</strong>: Define ownership rules, naming conventions, and data
                            classification standards with AI-powered automated compliance checks.
                        </li>
                        <li><strong>AI-Ready</strong>: Model Context Protocol (MCP) enables AI agents to access data
                            products and write queries in natural language.
                        </li>
                        <li><strong>Flexible Deployment</strong>: Available as cloud SaaS, self-hosted, or enterprise
                            single-tenant options.
                        </li>
                    </ul>

                    <p>
                        Try the <a href="https://demo.entropy-data.com/?ref=datacontract-com-playground">1-Click Playground</a> or run the free <a
                        href="https://github.com/entropy-data/entropy-data-ce">Community Edition</a> locally on your machine with
                        Docker.
                    </p>

                </div>

                {/* About Us */}
                <div id="about" className="prose max-w-none scroll-mt-16 pb-36">
                    <h2>About Us</h2>
                    <p>
                        This website is maintained by <a href="https://www.linkedin.com/in/jochenchrist/"><strong>Jochen</strong></a> and <a href="https://www.linkedin.com/in/simonharrer/"><strong>Simon</strong></a>.
                        We want to spread the word about data contracts and data products, because we believe that
                        high-quality data are the foundation effective decision-making, reliable AI, and long-term business impact.
                        Our mission is to bring software engineering best practices and principles into
                        the world of data, making data products as reliable and well-defined as APIs.
                    </p>
                    <p>
                        Our data journey started with <a href="https://datamesh-architecture.com">Data Mesh Architecture</a>,
                        where we published our perspective on data products and data mesh.
                        As software engineers and consultants, we helped enterprises adopt data mesh principles
                        and recognized the need for better tooling around data products. We created
                        the <a href="https://github.com/datacontract/datacontract-cli">Data Contract CLI</a> as
                        an open-source tool and initiated the <a href="https://www.datacontract-specification.com">Data Contract Specification</a> to bring
                        API-like contracts to the world of data.
                    </p>
                    <p>
                        Today, we are members of the Technical Steering Committee
                        of <a href="https://bitol.io">Bitol</a>, a Linux Foundation project that
                        maintains the <a href="https://bitol-io.github.io/open-data-contract-standard/latest/">Open Data Contract Standard</a> and
                        the <a href="https://bitol-io.github.io/open-data-product-standard/latest/">Open Data Product Standard</a>.
                    </p>
                    <p>
                        We believe in open standards. That's why we created
                        the Data Contract Specification based on OpenAPI principles,
                        and later deprecated it to bring our ideas into the Open Data Contract Standard,
                        because a standard supported by many is more important than your own specification.
                    </p>
                    <p>
                        In <a href="https://entropy-data.com">Entropy Data</a>, our commercial product, we bring everything together:
                        open standards, data contract tooling, and a platform to manage data products with data contracts in a beautiful user interface.
                    </p>
                </div>

            </section>
            </main>

            {/* Footer */}
            <footer className="bg-white">

                <div className="mx-auto max-w-6xl overflow-hidden pb-20 px-6 lg:px-8">


                    <div className="mt-10 text-xs leading-5 text-gray-500">
                        <div className="flex justify-center space-x-6">
                            <img src="https://entropy-data.com/media/logo_fuchsia_v2.svg" className="w-16" alt="Entropy Data Logo" />
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
