import { useEffect, useRef, useState } from 'react'
import { init } from 'datacontract-editor/dist/datacontract-editor.es.js'
import 'datacontract-editor/dist/datacontract-editor.css'

export default function DataContractEditor({
  yaml,
  onSave,
  onCancel,
  onDelete,
  mode = 'EMBEDDED',
  initialView = 'form',
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
          console.log('Data contract saved:', content)
          onSave?.(content)
        },
        onCancel: () => {
          console.log('Edit cancelled')
          onCancel?.()
        },
        onDelete: () => {
          console.log('Delete requested')
          onDelete?.()
        },
        enablePersistence: false,
      })
    }

    return () => {
      editorRef.current = null
    }
  }, [yamlContent])

  return (
    <div
      ref={containerRef}
      style={{ height, width: '100%' }}
      className="datacontract-editor-container"
    />
  )
}
