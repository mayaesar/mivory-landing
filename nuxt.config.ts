// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: false },
  modules: ['@nuxt/ui', '@nuxt/image', 'nuxt-gtag'],
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