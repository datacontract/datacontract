import { useEffect, useRef, useState } from 'react'
import { init } from 'datacontract-editor/dist/datacontract-editor.es.js'
import 'datacontract-editor/dist/datacontract-editor.css'

export default function DataContractEditor({
  yaml,
  mode = 'SERVER',
  initialView = 'diagram',
  height = '800px'
}) {
  const containerRef = useRef(null)
  const editorRef = useRef(null)
  const [defaultYaml, setDefaultYaml] = useState(null)

  // Fetch default YAML if none provided
  useEffect(() => {
    if (!yaml) {
      fetch('/orders-v1.odcs.yaml')
        .then(res => res.text())
        .then(setDefaultYaml)
    }
  }, [yaml])

  const yamlContent = yaml || defaultYaml

  useEffect(() => {
    if (containerRef.current && !editorRef.current && yamlContent) {
      editorRef.current = init({
        container: containerRef.current,
        mode,
        yaml: yamlContent,
        initialView,
        onSave: (content) => {
          const blob = new Blob([content], { type: 'application/x-yaml' })
          const url = URL.createObjectURL(blob)
          const a = document.createElement('a')
          a.href = url
          a.download = 'datacontract.yaml'
          a.click()
          URL.revokeObjectURL(url)
        },
        isPreviewVisible: false,
        enablePersistence: false,
        tests: {
          enabled: true,
          dataContractCliApiServerUrl: 'https://api.datacontract.com',
        },
      })
    }

    return () => {
      editorRef.current = null
    }
  }, [yamlContent, mode, initialView])

  return (
    <div
      ref={containerRef}
      style={{ height, width: '100%' }}
      className="datacontract-editor-container"
    />
  )
}
