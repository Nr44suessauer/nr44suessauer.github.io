export default defineNuxtPlugin((nuxtApp) => {
  /**
   * Ersetzt Standard-img-Tags in Markdown-gerenderten Inhalten durch optimierte Bilder
   */
  nuxtApp.hook('vue:setup', () => {
    if (process.client) {
      setTimeout(() => {
        updateImagesInMarkdown();
        
        // MutationObserver für dynamisch geladene Inhalte
        const observer = new MutationObserver((mutations) => {
          mutations.forEach((mutation) => {
            if (mutation.type === 'childList' && mutation.addedNodes.length) {
              updateImagesInMarkdown();
            }
          });
        });
        
        observer.observe(document.body, {
          childList: true,
          subtree: true
        });
      }, 200);
    }
  });
});

/**
 * Findet Standard-Bilder in der Markdown-Ausgabe und optimiert sie
 */
function updateImagesInMarkdown() {
  // Nur Bilder innerhalb Markdown-Elementen oder Content-Klassen auswählen
  const markdownContainers = document.querySelectorAll('.nuxt-content, .content, .prose, article');
  
  markdownContainers.forEach(container => {
    const images = container.querySelectorAll('img:not([data-optimized])');
    
    images.forEach(img => {
      const src = img.getAttribute('src');
      // Bereits optimierte oder externe Bilder überspringen
      if (!src || img.hasAttribute('data-optimized') || (src.startsWith('http') && !src.includes('githubusercontent.com'))) {
        return;
      }
      
      // Bilder markieren, damit sie nicht mehrfach verarbeitet werden
      img.setAttribute('data-optimized', 'true');
      
      // Lazy-Loading-Attribut hinzufügen
      if (!img.hasAttribute('loading')) {
        img.setAttribute('loading', 'lazy');
      }
      
      // Größeninformationen hinzufügen
      if (!img.hasAttribute('sizes')) {
        img.setAttribute('sizes', '(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw');
      }
      
      // Decodieren verzögern bis Anzeige
      img.setAttribute('decoding', 'async');
      
      // Falls verfügbar, srcset oder verschiedene Formate verwenden
      if (window.__NUXT__ && window.__NUXT__.config && window.__NUXT__.config.public && window.__NUXT__.config.public.imgBaseUrl) {
        const baseUrl = window.__NUXT__.config.public.imgBaseUrl;
        if (src.startsWith('/')) {
          const webpSrc = `${baseUrl}${src}?format=webp`;
          const avifSrc = `${baseUrl}${src}?format=avif`;
          
          // Picture-Element für mehrere Bildformate
          const picture = document.createElement('picture');
          
          // AVIF-Format
          const avifSource = document.createElement('source');
          avifSource.setAttribute('type', 'image/avif');
          avifSource.setAttribute('srcset', avifSrc);
          picture.appendChild(avifSource);
          
          // WebP-Format
          const webpSource = document.createElement('source');
          webpSource.setAttribute('type', 'image/webp');
          webpSource.setAttribute('srcset', webpSrc);
          picture.appendChild(webpSource);
          
          // Originalbild als Fallback
          const clonedImg = img.cloneNode(true);
          picture.appendChild(clonedImg);
          
          // Bild durch optimiertes Picture-Element ersetzen
          img.parentNode.replaceChild(picture, img);
        }
      }
    });
  });
}