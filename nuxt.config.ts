import { defineNuxtModule } from 'nuxt'
export default defineNuxtConfig({
  app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
    },
    pageTransition: { name: 'page', mode: 'out-in' }
  },

  css: ['~/assets/css/main.css'],

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {}
    },
  },

  modules: ['@nuxtjs/sanity', '@vueuse/nuxt', '@pinia/nuxt'],

  sanity: {
    projectId: "z2uq9iqi",
    dataset: "production"
  },

  compatibilityDate: '2024-07-22',
})