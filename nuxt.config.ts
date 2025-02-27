// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: false },
  modules: ['@nuxt/ui', '@nuxt/image', 'nuxt-gtag', '@nuxtjs/turnstile', '@nuxtjs/sitemap'],
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
  nitro: {
    prerender: {
      autoSubfolderIndex: false
    }
  },
})