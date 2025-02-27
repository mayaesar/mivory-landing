// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: false },
  modules: ['@nuxt/ui', '@nuxt/image', 'nuxt-gtag', '@nuxtjs/turnstile', '@nuxtjs/sitemap'],
  app: {
    head: {
      title: 'Mivory - My second memory',
      meta: [
        { charset: 'utf-8' },
        { name: 'og:title', content: 'Mivory - My second memory' },
        { name: 'description', content: 'Mivory is a bookmarking manager that helps you save and organize your favourite links' },
        { name: 'og:description', content: 'Mivory is a bookmarking manager that helps you save and organize your favourite links'},
        { name: 'og:image', content: 'https://mivory.app/metaImg.png' },
        { name: 'og:url', content: 'https://mivory.app' },
      ]
    }
  },
  site: {
    name: 'Mivory',
    description: 'Mivory is a bookmarking manager that helps you save and organize your favourite links',
    url: 'https://mivory.app',
    image: 'https://mivory.app/metaImg.png',
  },
  runtimeConfig: {
    turnstile: {
      secretKey: process.env.TURNSTILE_SECRET_KEY || '',
    },
  },
  turnstile: {
    siteKey: process.env.NUXT_PUBLIC_TURNSTILE_SITE_KEY || '',
  },
  css: ['~/assets/style/app.css'],
  gtag: {
    enabled: process.env.NODE_ENV === 'production',
    id: 'G-VNNV6QT9NM'
  },
  colorMode: {
    preference: "light",
  },
  ssr: false
})