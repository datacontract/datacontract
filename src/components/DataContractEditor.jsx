import { useEffect, useRef } from 'react'
import { init } from 'datacontract-editor/dist/datacontract-editor.es.js'
import 'datacontract-editor/dist/datacontract-editor.css'
import defaultYaml from '../assets/orders-v1.odcs.yaml?raw'

export default function DataContractEditor({
  yaml = defaultYaml,
  onSave,
  onCancel,
  onDelete,
  mode = 'EMBEDDED',
  initialView = 'form',
  height = '800px'
}) {
  const containerRef = useRef(null)
  const editorRef = useRef(null)

  useEffect(() => {
    if (containerRef.current && !editorRef.current) {
      editorRef.current = init({
        container: containerRef.current,
        mode,
        yaml,
        initialView,
        onSave: (yamlContent) => {
          console.log('Data contract saved:', yamlContent)
          onSave?.(yamlContent)
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
  }, [])

  return (
    <div
      ref={containerRef}
      style={{ height, width: '100%' }}
      className="datacontract-editor-container"
    />
  )
}
