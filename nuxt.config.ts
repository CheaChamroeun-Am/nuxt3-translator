// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },

  modules: [
    '@nuxtjs/i18n'
  ],
  i18n: {
    locales: [
      {
        code: 'en',
        name: 'English',
        iso: 'en-US',
        file: 'en.json'
      },
      {
        code: 'km',
        name: 'Khmer',
        iso: 'km-KH',
        file: 'km.json'
      }
    ],
    langDir: 'locales/',
    defaultLocale: 'en',
    lazy: false,
    strategy: 'no_prefix'
  }

})
