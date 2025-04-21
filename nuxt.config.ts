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
  app: {
    // Für User/Organization Pages (username.github.io) baseURL auf '/' setzen
    baseURL: '/',
    head: {
      htmlAttrs: {
        lang: 'en'
      },
      script: [
        { src: 'https://cdn.jsdelivr.net/npm/mermaid/dist/mermaid.min.js', body: true }
      ]
    }
  },

  extends: '@nuxt-themes/alpine',

  runtimeConfig: {
    public: {
      FORMSPREE_URL: process.env.FORMSPREE_URL
    }
  },

  pages: true,

  modules: [
    '@nuxtjs/plausible',
    '@nuxt/devtools',
    '@pinegrow/nuxt-module',
    '@nuxt/content',
    updateModule as any
  ],

  components: [
    { path: './components', global: true },
    { path: './components/algo', global: true }
  ],

  css: [
    'nuxt-app/assets/css/custom.css',
    'nuxt-app/assets/css/contact-info.CSS',
    'nuxt-app/assets/css/TextBlock.css',
    'nuxt-app/assets/css/ProjectCard.css'
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
    navigation: {
      fields: ['navTitle']
    },
    highlight: {
      theme: {
        default: 'github-light',
        dark: 'github-dark'
      },
      preload: ['json', 'js', 'ts', 'html', 'css', 'vue', 'diff', 'shell', 'markdown', 'yaml', 'bash', 'ini', 'c', 'cpp']
    },
    markdown: {
      remarkPlugins: []
    }
  },

  experimental: {
    inlineSSRStyles: false
  },

  typescript: {
    includeWorkspace: true
  },

  nitro: {
    prerender: {
      ignore: ['/__pinceau_tokens_config.json', '/__pinceau_tokens_schema.json']
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
  }
})