export default defineNuxtConfig({
  // https://github.com/nuxt-themes/alpine
  extends: '@nuxt-themes/alpine',
  
  colorMode: {
    preference: 'dark', // Setzt Dark Mode als Standardeinstellung
    fallback: 'dark',   // Fallback, falls keine Präferenz festgelegt ist
    //classSuffix: '',    // Entfernt das Suffix in den generierten CSS-Klassen
  },

  modules: [
    // https://github.com/nuxt-modules/plausible
    '@nuxtjs/plausible',
    // https://github.com/nuxt/devtools
    '@nuxt/devtools'
  ],

  compatibilityDate: '2025-04-17',

  css: [
    // ...andere CSS-Dateien...
   // '~/assets/css/custom.css'
    //'~/plugins/dark-mode-fix.js'
  ]
})