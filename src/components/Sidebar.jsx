function Sidebar({ isOpen, sections }) {
  return (
    <aside
      className={`fixed inset-y-0 left-0 bg-white border-r border-gray-200 ${
        isOpen ? 'w-68' : 'w-0'
      } overflow-hidden`}
    >
      <nav className="px-6 py-4">
        <div className="h-14"></div>
        <div className="mt-3">
          <div className="space-y-8">
          {sections.map((section) => (
            <div key={section.id}>
              <h3 className="text-sm font-semibold text-gray-900 mb-3">
                {section.title}
              </h3>
              <ul className="space-y-2 border-l border-gray-200">
                {section.items.map((item) => (
                  <li key={item.id}>
                    <a
                      href={item.href}
                      className="block -ml-px border-l border-transparent pl-4 text-sm text-gray-600 hover:text-gray-900 hover:border-gray-400 transition-colors"
                    >
                      {item.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
          </div>
        </div>
      </nav>
    </aside>
  )
}

export default Sidebar
