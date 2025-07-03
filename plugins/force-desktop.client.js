// Plugin zur Erzwingung des Desktop-Modus auf Mobilgeräten

export default defineNuxtPlugin({
  name: 'force-desktop-view',
  enforce: 'pre', // Führe dieses Plugin vor anderen aus
  setup() {
    // Nur im Browser ausführen
    if (process.client) {
      // Das Viewport-Meta-Tag regelmäßig überprüfen und ggf. korrigieren
      const interval = setInterval(() => {
        const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
        if (isMobile) {
          const viewportMeta = document.querySelector('meta[name="viewport"]');
          const correctContent = 'width=1280, initial-scale=1.0, maximum-scale=1.0, user-scalable=no';
          
          if (viewportMeta && viewportMeta.getAttribute('content') !== correctContent) {
            viewportMeta.setAttribute('content', correctContent);
            console.log('Viewport für Desktop-Ansicht korrigiert');
          }
          
          // Zusätzliche CSS-Korrekturen anwenden
          document.body.style.minWidth = '1280px';
          document.documentElement.style.minWidth = '1280px';
        }
      }, 1000); // Überprüfe jede Sekunde

      // Cleanup bei Seiten-Navigation
      return () => clearInterval(interval);
    }
  }
});
