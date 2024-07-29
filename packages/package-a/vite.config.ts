import { defineConfig } from 'vite'
import dts from 'vite-plugin-dts'
import { resolve} from 'path'

export default defineConfig({
    plugins: [dts({ include: "lib", rollupTypes: true })],
    build: {
        copyPublicDir: false,
        lib: {
            entry: resolve(__dirname, 'lib/main.ts'),
            // formats: ["es"],
            name: "@uio/package-a",
            fileName: "index"
        }
    }
})