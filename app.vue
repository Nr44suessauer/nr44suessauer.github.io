<template>
  <AppLayout>
    <NuxtPage />
  </AppLayout>
</template>

<script setup>
// Skalierung beim ersten Laden der App setzen und Desktop-Ansicht für Mobile erzwingen
onMounted(() => {
  if (process.client) {
    // Prüfen ob bereits eine Skalierung gesetzt wurde in dieser Session
    const hasScaled = sessionStorage.getItem('page-scaled')
    
    if (!hasScaled) {
      // Skalierung auf 150% setzen
      document.documentElement.style.zoom = '150%'
      // Markieren, dass Skalierung bereits gesetzt wurde
      sessionStorage.setItem('page-scaled', 'true')
    }
    
    // Desktop-Ansicht für Mobile-Geräte erzwingen
    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
      // Zusätzliche Anpassungen für Mobile-Geräte, falls nötig
      document.documentElement.style.minWidth = '1024px';
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
</style>
