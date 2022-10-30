import { defineConfig } from 'tsup'

export default defineConfig({
  entry: ['src/index.ts', 'src/client.ts'],
  format: ['cjs', 'esm'],
  splitting: false,
  clean: true,
  external: ['#app'],
  dts: true,
})