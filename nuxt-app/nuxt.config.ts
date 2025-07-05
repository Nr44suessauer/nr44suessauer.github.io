import { defineNuxtConfig } from 'nuxt/config'

export default defineNuxtConfig({
  // https://github.com/nuxt-themes/alpine
  extends: '@nuxt-themes/alpine',
  
  // Enable static site generation
  ssr: true,
  
  // Nitro-Konfiguration für statische Generierung
  nitro: {
    prerender: {
      crawlLinks: true,
      routes: ['/elopment'], // Explizit die elopment Route hinzufügen
      failOnError: false
    }
  },
  
  // Route Rules für explizites Prerendering
  routeRules: {
    '/elopment': { 
      prerender: true,
      headers: {
        'Cache-Control': 'public, max-age=3600'
      }
    }
  },
  
  // Auto-Import von Komponenten aktivieren
  components: {
    global: true,
    dirs: [
      '~/components',
      '~/components/algo',
      '~/components/content' // Explizit Content-Komponenten hinzufügen
    ]
  },
  
  content: {
    markdown: {
      // Deaktiviere die Plugins vorübergehend
      remarkPlugins: []
    },
    // Erlaubt die Verwendung von Komponenten in Markdown-Dateien
    experimental: {
      clientDB: true,
      componentIslands: true
    }
  },
  
  // Stelle sicher, dass clientseitige Komponenten korrekt hydratisiert werden
  vite: {
    optimizeDeps: {
      include: ['vue']
    }
  },
  
  // Stärkere Client-Hydratation
  ssr: true,
  
  colorMode: {
    preference: 'dark', // Setzt Dark Mode als Standardeinstellung
    fallback: 'dark',   // Fallback, falls keine Präferenz festgelegt ist
    //classSuffix: '',    // Entfernt das Suffix in den generierten CSS-Klassen
  },

  // Nur EINE modules-Deklaration verwenden
  modules: [
    // https://github.com/nuxt-modules/plausible
    '@nuxtjs/plausible',
    // https://github.com/nuxt/devtools
    '@nuxt/devtools',
    '@pinegrow/nuxt-module',
    // Füge hier @nuxt/content hinzu, wenn nicht durch alpine bereits enthalten
    // '@nuxt/content'
  ],

  compatibilityDate: '2025-04-17',
  
  pinegrow: {
    liveDesigner: {
      // Konfiguriere den Server, den Vue Designer verwenden soll
      devServerUrl: 'http://localhost:3000', // Der Standard-Port für Nuxt
      plugins: []
    },
  },
  
  // Server-Konfiguration für externe Verbindungen
  server: {
    host: '0.0.0.0', // Erlaubt Verbindungen von allen Netzwerkschnittstellen
    port: 3000
  },
  
  devtools: {
    // Enable devtools (default: true)
    enabled: true
  },
  
  css: [
    '~/assets/css/custom.css',
    '~/assets/css/contact-info.CSS',
    '~/assets/css/TextBlock.css',
    '~/assets/css/ProjectCard.css'
  ],

  // Clientseitige Skripts für Mermaid und interaktive Funktionen
  app: {
    head: {
      script: [
        { src: 'https://cdn.jsdelivr.net/npm/mermaid/dist/mermaid.min.js', body: true },
        { src: '/js/interactive-fallback.js', body: true } // Füge das Fallback-Skript hinzu
      ]
    }
  }
})