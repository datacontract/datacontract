import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from "@tailwindcss/vite";
import { readFileSync } from 'fs'

// Publishes the bundled editor version as datacontract-editor-version.json, so the
// daily deployment check in datacontract/datacontract-editor can keep it up to date
function editorVersionFilePlugin() {
  return {
    name: 'editor-version-file',
    apply: 'build',
    generateBundle() {
      const { version } = JSON.parse(readFileSync('node_modules/datacontract-editor/package.json', 'utf-8'));
      this.emitFile({
        type: 'asset',
        fileName: 'datacontract-editor-version.json',
        source: JSON.stringify({ version }) + '\n',
      });
    },
  };
}

// https://vite.dev/config/
export default defineConfig({
  plugins: [
      react(),
      tailwindcss(),
      editorVersionFilePlugin(),
  ],
})
