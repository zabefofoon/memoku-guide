const path = require('path')

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },
  css: ['~/assets/styles/basic.scss'],
  modules: ['@nuxtjs/tailwindcss', 'nuxt-gtag'],
  gtag: {
    id: 'G-TJHZ7TCTEY'
  },
  build: {
    postcss: {
      postcssOptions: {
        plugins: {
          tailwindcss: {},
          autoprefixer: {},
        },
      },
    },
  },
  app: {
    baseURL: '/memoku-guide/',
    buildAssetsDir: 'assets',
    head: {
      link: [
        {
          rel: 'icon',
          type: 'image/x-icon',
          href: '/memoku-guide/favicon.ico',
        },
      ],
    },
  },
  routeRules: {
    '/': { prerender: true },
  },
  nitro: {
    output: {
      publicDir: path.join(__dirname, '/docs'),
    },
  },
  experimental: {
    payloadExtraction: false,
  },
})
