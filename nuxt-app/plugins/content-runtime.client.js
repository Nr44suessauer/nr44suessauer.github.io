// Diese Datei sorgt dafür, dass Komponenten in Markdown-Dateien korrekt im Browser ausgeführt werden
import { defineNuxtPlugin } from '#app'

export default defineNuxtPlugin((nuxtApp) => {
  // Setze einen globalen Hook für nach dem Client-seitigen Mounting
  nuxtApp.hook('app:suspense:resolve', () => {
    console.log('Content wurde geladen und hydratisiert')
    
    // Verzögerung hinzufügen, um sicherzustellen, dass alle DOM-Elemente bereit sind
    setTimeout(() => {
      // Überprüfe, ob Komponenten korrekt geladen wurden
      const components = document.querySelectorAll('.counter-container')
      
      if (components.length > 0) {
        console.log('Counter-Komponenten gefunden:', components.length)
      } else {
        console.warn('Keine Counter-Komponenten gefunden')
      }
    }, 500)
  })
})