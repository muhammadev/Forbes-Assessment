export default defineNuxtConfig({
  modules: ['@nuxtjs/tailwindcss', '@nuxt/image'],

  css: ['~/assets/css/main.css'],

  tailwindcss: {
    cssPath: '~/assets/css/main.css',
  },

  image: {
    quality: 80,
    format: ['webp'],
    screens: {
      sm: 640,
      md: 768,
      lg: 1024,
      xl: 1280,
      xxl: 1536,
    },
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
