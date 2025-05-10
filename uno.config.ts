import { defineConfig, presetUno } from 'unocss'

export default defineConfig({
  presets: [
    presetUno,
  ],
  content: {
    pipeline: {
      include: [
        /\.(vue|svelte|[jt]sx|mdx?|astro|elm|php|phtml|html|ts)($|\?)/,

      ]
    }
  },
  shortcuts: {
    'description': 'text-gray-500 leading-6',
  },
  // ...UnoCSS options
})
