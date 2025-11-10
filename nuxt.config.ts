import { createResolver, logger, defineNuxtModule } from '@nuxt/kit'
import { $fetch } from 'ofetch'
import { version } from './package.json'
import { defineNuxtConfig } from 'nuxt/config'

const { resolve } = createResolver(import.meta.url)

// That allows to overwrite these dependencies paths via `.env` for local development
const envModules = {
  tokens: process?.env?.THEME_DEV_TOKENS_PATH || '@nuxt-themes/tokens',
  elements: process?.env?.THEME_DEV_ELEMENTS_PATH || '@nuxt-themes/elements',
  studio: process?.env?.THEME_DEV_STUDIO_PATH || '@nuxthq/studio',
  typography: process?.env?.THEME_DEV_TYPOGRAPHY_PATH || '@nuxt-themes/typography'
}

const updateModule = defineNuxtModule({
  meta: {
    name: '@nuxt-themes/alpine'
  },
  setup (_, nuxt) {
    if (nuxt.options.dev) {
      $fetch('https://registry.npmjs.org/@nuxt-themes/alpine/latest').then((release) => {
        if (release.version > version) {
          logger.info(`A new version of Alpine (v${release.version}) is available: https://github.com/nuxt-themes/alpine/releases/latest`)
        }
      }).catch(() => {})
    }
  }
})

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  // Enable static site generation
  ssr: true,
  
  app: {
    // Für User/Organization Pages (username.github.io) baseURL auf '/' setzen
    baseURL: '/',
    head: {
      htmlAttrs: {
        lang: 'en'
      },
      meta: [
        // Desktop-Breite als initiale Einstellung, aber Zoomen erlauben
        { name: 'viewport', content: 'width=1280, initial-scale=1.0' }
      ],
      script: [
        { src: 'https://cdn.jsdelivr.net/npm/mermaid/dist/mermaid.min.js', tagPosition: 'bodyClose' },
        // Skript für Bildladeversuche
        { 
          innerHTML: `
            window.addEventListener('DOMContentLoaded', (event) => {
              document.querySelectorAll('img').forEach(img => {
                img.addEventListener('error', function() {
                  // Nur versuchen, wenn noch kein Fallback versucht wurde
                  if (!this.dataset.fallbackAttempted) {
                    this.dataset.fallbackAttempted = "true";
                    
                    // Wenn es ein relativer Pfad ist, versuche, ihn mit GitHub-Raw-URL zu laden
                    if (this.src.startsWith('/') && !this.src.includes('githubusercontent.com')) {
                      const githubPath = 'https://raw.githubusercontent.com/Nr44suessauer/nr44suessauer.github.io/main/nuxt-app' + this.src;
                      console.log('Attempting to load from GitHub raw: ', githubPath);
                      this.src = githubPath;
                    }
                  }
                });
              });
            });
          `,
          tagPosition: 'bodyClose'
        }
      ],
      link: [
        { rel: 'preconnect', href: 'https://raw.githubusercontent.com' },
        { rel: 'dns-prefetch', href: 'https://raw.githubusercontent.com' }
      ]
    }
  },

  extends: '@nuxt-themes/alpine',

  runtimeConfig: {
    public: {
      FORMSPREE_URL: process.env.FORMSPREE_URL,
      imgBaseUrl: 'https://raw.githubusercontent.com/Nr44suessauer/nr44suessauer.github.io/main/nuxt-app',
      imageOptimization: {
        enableAutomaticOptimization: true,
        preload: {
          hero: true,
          aboveTheFold: true
        }
      }
    }
  },

  pages: true,

  modules: [
    '@nuxtjs/plausible',
    '@nuxt/devtools',
    '@pinegrow/nuxt-module',
    '@nuxt/content',
    '@nuxt/image',
    '@nuxt/icon',
    updateModule as any
  ],

  // Icon configuration to ensure icons are properly bundled in production
  // @ts-ignore - icon config is provided by @nuxt/icon module
  icon: {
    serverBundle: 'auto'
  },

  image: {
    quality: 80,
    format: ['webp', 'avif', 'jpg'],  // AVIF Format hinzugefügt für noch bessere Kompression
    screens: {
      xs: 320,
      sm: 640,
      md: 768,
      lg: 1024,
      xl: 1280,
      xxl: 1536,
    },
    domains: ['raw.githubusercontent.com', 'github.com'],
    provider: 'ipx',
    providers: {
      github: {
        provider: 'github',
        options: {
          baseURL: 'https://raw.githubusercontent.com/Nr44suessauer/nr44suessauer.github.io/main/nuxt-app/assets/pictures/'
        }
      }
    },
    // Bildoptimierungen hinzufügen
    presets: {
      avatar: {
        modifiers: {
          format: 'webp',
          width: 50,
          height: 50,
          fit: 'cover',
        }
      },
      thumbnail: {
        modifiers: {
          format: 'webp',
          width: 320,
          height: 180,
          fit: 'cover',
        }
      },
      preview: {
        modifiers: {
          format: 'webp',
          width: 640,
          height: 480,
          fit: 'inside',
        }
      }
    },
    densities: [1, 2],
    // Caching verbessern
    imgix: {
      baseURL: 'https://images.your-domain.com'
    },
    cacheDir: '.nuxt/image'
  },

  components: [
    { path: './components', global: true },
    { path: './components/algo', global: true }
  ],

  css: [
    'nuxt-app/assets/css/custom.css',
    'nuxt-app/assets/css/contact-info.css',
    'nuxt-app/assets/css/TextBlock.css',
    'nuxt-app/assets/css/ProjectCard.css'//,
    //'nuxt-app/assets/css/picture-Row.css'  // Füge die CSS-Datei aus dem assets-Ordner hinzu
  ],

  colorMode: {
    preference: 'dark',
    fallback: 'dark',
    classSuffix: ''
  },

  pinceau: {
    studio: true
  },

  content: {
    documentDriven: true,
    sources: {
      content: {
        driver: 'fs',
        prefix: '/', // All contents will be prefixed by /
        base: resolve('./nuxt-app/content') // Where to look for content
      }
    },
    navigation: {
      fields: ['navTitle']
    },
    highlight: {
      theme: {
        default: 'github-light',
        dark: 'github-dark'
      },
      // PowerShell Sprache hinzugefügt um das WARNING zu beheben: "Language 'powershell' is not loaded to the Shiki highlighter"
      preload: ['json', 'js', 'ts', 'html', 'css', 'vue', 'diff', 'shell', 'markdown', 'yaml', 'bash', 'ini', 'c', 'cpp', 'powershell']
    },
    markdown: {
      remarkPlugins: []
    }
  },

  // MDC-spezifische Konfiguration für PowerShell-Support
  mdc: {
    highlight: {
      langs: ['json', 'js', 'ts', 'html', 'css', 'vue', 'diff', 'shell', 'markdown', 'yaml', 'bash', 'ini', 'c', 'cpp', 'powershell']
    }
  },

  experimental: {
    treeshakeClientOnly: true,
    componentIslands: true
  },

  typescript: {
    includeWorkspace: true
  },

  nitro: {
    prerender: {
      crawlLinks: true,
      routes: ['/elopment'],
      ignore: ['/__pinceau_tokens_config.json', '/__pinceau_tokens_schema.json'],
      // Explizit alle Routen scannen
      failOnError: false
    },
    compressPublicAssets: true,
    // Ensure static generation works properly
    storage: {
      fs: {
        driver: 'fs',
        base: './.output/public'
      }
    },
    // Explicitly include the elopment route
    output: {
      publicDir: '.output/public'
    }
  },

  compatibilityDate: '2025-04-17',

  pinegrow: {
    liveDesigner: {
      devServerUrl: 'http://localhost:3000',
      plugins: []
    },
  },

  server: {
    host: '0.0.0.0',
    port: 3000
  },

  devtools: {
    enabled: true
  },

  routeRules: {
    // Explizite Route-Regel für die versteckte Elopment-Seite
    '/elopment': { 
      prerender: true,
      headers: {
        'Cache-Control': 'public, max-age=3600'
      }
    },
    // Statische Assets mit Cache-Control-Header
    '/assets/**': { 
      headers: { 
        'Cache-Control': 'public, max-age=31536000, immutable'
      }
    },
    // Bilder Cache-Regeln
    '/pictures/**': {
      headers: {
        'Cache-Control': 'public, max-age=31536000, immutable'
      }
    },
    // Cache-Regeln für transformierte Bilder
    '/_ipx/**': {
      headers: {
        'Cache-Control': 'public, max-age=31536000, immutable'
      }
    }
  },

  vite: {
    build: {
      cssMinify: 'lightningcss',
      minify: 'terser',
      terserOptions: {
        compress: {
          drop_console: true
        }
      }
    },
    optimizeDeps: {
      include: ['vue', 'vue-router']
    }
  }
})