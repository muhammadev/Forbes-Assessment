export default defineNuxtConfig({
  modules: ['@nuxtjs/tailwindcss', '@nuxt/image'],

  css: ['~/assets/css/main.css'],

  tailwindcss: {
    cssPath: '~/assets/css/main.css',
  },

  app: {
    head: {
      htmlAttrs: {
        lang: 'en',
      },
      title: 'Forbes Middle East',
      meta: [
        {
          name: 'description',
          content: 'Forbes Middle East news and insights.',
        },
      ],
    },
  },

  typescript: {
    strict: true,
    typeCheck: true,
  },

  compatibilityDate: '2025-04-01',
})
