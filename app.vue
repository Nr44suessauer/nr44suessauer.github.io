<template>
  <AppLayout>
    <NuxtPage />
  </AppLayout>
</template>

<script setup>
// Initiale Einstellungen beim ersten Laden der App setzen
onMounted(() => {
  if (process.client) {
    // Erkennen ob es ein mobiles Gerät ist
    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    
    // Prüfen ob dies der erste Besuch in dieser Session ist
    const isFirstVisit = !sessionStorage.getItem('has-visited');
    
    // Für Mobile beim ersten Besuch Desktop-Modus als Ausgangspunkt setzen
    if (isMobile && isFirstVisit) {
      // Initiale Desktop-Breite setzen, aber nicht erzwingen
      document.body.style.minWidth = '1280px';
      document.documentElement.style.minWidth = '1280px';
      
      // Sicherstellen, dass der Viewport korrekt eingestellt ist
      const viewportMeta = document.querySelector('meta[name="viewport"]');
      if (viewportMeta) {
        viewportMeta.setAttribute('content', 'width=1280, initial-scale=1.0');
      }
      
      // Markieren, dass Seite besucht wurde
      sessionStorage.setItem('has-visited', 'true');
    } 
    // Für Desktop-Geräte das 150% Zoom anwenden (falls erster Besuch)
    else if (!isMobile && !sessionStorage.getItem('page-scaled')) {
      // Skalierung auf 150% setzen (nur für Desktop)
      document.documentElement.style.zoom = '150%';
      // Markieren, dass Skalierung gesetzt wurde
      sessionStorage.setItem('page-scaled', 'true');
    }
  }
})
</script>

<style>
html {
  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  color-scheme: dark;
}

body {
  background-color: #111;
  color: white;
}

/* Nur beim ersten Besuch wird die Desktop-Ansicht angezeigt */
/* Keine Einschränkungen für Zoomen oder Skalieren */
@media (max-width: 1280px) {
  html, body {
    /* Anfängliche Desktop-Größe, aber ohne !important um Änderungen zu erlauben */
    min-width: 1280px;
    overflow-x: auto;
  }
}
</style>
