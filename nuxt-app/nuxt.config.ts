import { defineNuxtConfig } from 'nuxt/config'

export default defineNuxtConfig({
  // https://github.com/nuxt-themes/alpine
  extends: '@nuxt-themes/alpine',
  
  // Auto-Import von Komponenten aktivieren
  components: {
    global: true,
    dirs: [
      '~/components',
      '~/components/algo'
    ]
  },
  
  content: {
    markdown: {
      // Deaktiviere die Plugins vorübergehend
      remarkPlugins: []
    }
  },
  
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
    '~/assets/css/custom.css',
    '~/assets/css/contact-info.CSS',
    '~/assets/css/TextBlock.css'
  ],

  // Clientseitige Skripts für Mermaid
  app: {
    head: {
      script: [
        { src: 'https://cdn.jsdelivr.net/npm/mermaid/dist/mermaid.min.js', body: true }
      ]
    }
  }
})