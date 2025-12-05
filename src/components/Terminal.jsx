import { useState } from 'react'

function CopyButton({ text }) {
  const [copied, setCopied] = useState(false)

  const handleCopy = async () => {
    await navigator.clipboard.writeText(text)
    setCopied(true)
    setTimeout(() => setCopied(false), 1200)
  }

  return (
    <button
      onClick={handleCopy}
      className="p-1.5 rounded hover:bg-gray-700 transition-colors"
      title="Copy to clipboard"
    >
      {copied ? (
        <svg className="w-4 h-4 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
        </svg>
      ) : (
        <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
        </svg>
      )}
    </button>
  )
}

function TerminalLine({ line }) {
  const isCommand = typeof line === 'string' ? false : line.type === 'command'
  const text = typeof line === 'string' ? line : line.text

  if (isCommand) {
    return (
      <div className="flex">
        <span className="text-gray-500 select-none mr-2">$</span>
        <span className="text-gray-300">{text}</span>
      </div>
    )
  }

  return <div className="text-gray-300">{text}</div>
}

export default function Terminal({ lines, title = "Data Contract CLI" }) {
  // Extract just the command text for copying (no $ prompts, no output)
  const copyText = lines
    .filter(line => typeof line !== 'string' && line.type === 'command')
    .map(line => line.text)
    .join('\n')

  return (
    <div className="rounded-lg bg-[#0d1117] shadow-xl overflow-hidden not-prose">
      <div className="flex items-center justify-between px-4 py-2 border-b border-gray-700">
        <div className="flex items-center gap-2">
          <div className="flex gap-1.5">
            <div className="w-3 h-3 rounded-full bg-red-500" />
            <div className="w-3 h-3 rounded-full bg-yellow-500" />
            <div className="w-3 h-3 rounded-full bg-green-500" />
          </div>
          <span className="text-gray-400 text-xs ml-2">{title}</span>
        </div>
        <CopyButton text={copyText} />
      </div>
      <pre className="p-4 overflow-x-auto text-sm font-mono">
        {lines.map((line, index) => (
          <TerminalLine key={index} line={line} />
        ))}
      </pre>
    </div>
  )
}
