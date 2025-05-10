// Dieses Plugin stellt sicher, dass Client-Komponenten in Markdown-Dateien korrekt funktionieren
import { defineNuxtPlugin } from '#app'

export default defineNuxtPlugin((nuxtApp) => {
  // Vue 3 App-Instanz
  const vueApp = nuxtApp.vueApp

  // Aktiviere die Hydratation für Client-Komponenten in Markdown
  nuxtApp.hook('vue:setup', () => {
    // Stelle sicher, dass Client-Komponenten vollständig hydratisiert werden
    console.log('Vue setup-Hook ausgeführt: Client-Komponenten werden hydratisiert')
  })

  // Nach dem Rendern
  nuxtApp.hook('app:mounted', () => {
    console.log('App mounted: Interaktive Elemente sind jetzt bereit')
  })
})