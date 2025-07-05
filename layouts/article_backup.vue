<template>
  <article ref="article">
    <!-- TODO: could be refactored as a transparent ButtonLink -->
    <NuxtLink
      :to="parentPath"
      class="back"
    >
      <Icon name="ph:arrow-left" />
      <span>
        Back
      </span>
    </NuxtLink>
    <header>
      <h1
        v-if="page?.title"
        class="title"
      >
        {{ page.title }}
      </h1>      <time
        v-if="shouldShowDate"
        :datetime="page.date"
      >
        {{ formatDate(page.date) }}
      </time>
    </header>

    <div class="prose">
      <slot />
      <div
        v-if="alpine?.backToTop"
        class="back-to-top"
      >
        <ProseA @click.prevent.stop="onBackToTop">
          {{ alpine?.backToTop?.text || 'Back to top' }}
          <Icon :name="alpine?.backToTop?.icon || 'material-symbols:arrow-upward'" />
        </ProseA>
      </div>
    </div>
  </article>
</template>

<script setup lang="ts">
const { page } = useContent()
const route = useRoute()
const alpine = useAppConfig().alpine

const article = ref<HTMLElement | null>(null)

// Computed property to determine if date should be shown
const shouldShowDate = computed(() => {
  if (!page.value?.date) return false
  
  // If showDate is explicitly set to false (boolean or string), don't show
  if (page.value.showDate === false || page.value.showDate === 'false') {
    return false
  }
  
  // Otherwise show the date (default behavior)
  return true
})

if (page.value) {
  const linkArray = []
  const metaArray = []
  
  if (page.value.cover) {
    metaArray.push({ property: 'og:image', content: page.value.cover })
  }
  if (page.value.canonical) {
    linkArray.push({ rel: 'canonical', href: page.value.canonical })
  }
  useHead({
    meta: metaArray,
    link: linkArray
  })
}

const parentPath = computed(
  () => {
    const pathTabl = route.path.split('/')
    pathTabl.pop()
    return pathTabl.join('/')
  }
)

const onBackToTop = () => {
  article.value?.scrollIntoView({
    behavior: 'smooth'
  })
}
</script>

<style scoped lang="ts">
css({
  article: {
    maxWidth: 'none !important',
    width: '100% !important',
    margin: '0 auto',
    py: '{space.4}',
    px: '0', // Remove all horizontal padding for full width
    '@sm': {
      py: '{space.12}',
      px: '0', // Remove all horizontal padding for full width
    },
    '.back': {
      display: 'inline-flex',
      alignItems: 'center',
      fontSize: '{text.lg.fontSize}',
      borderBottom: '1px solid {elements.border.secondary.static}',
      marginLeft: '{space.4}', // Add margin for readability
      '& :deep(svg)': {
        width: '{size.16}',
        height: '{size.16}',
        marginRight: '{space.2}'
      }
    },
    header: {
      marginTop: '{space.16}',
      marginBottom: '{space.12}',
      marginLeft: '{space.4}', // Add margin for readability
      marginRight: '{space.4}',
    },
    '.title': {
      fontSize: '{text.5xl.fontSize}',
      lineHeight: '{text.5xl.lineHeight}',
      fontWeight: '{fontWeight.semibold}',
      marginBottom: '{space.4}'
    },
    time: {
      color: '{elements.text.secondary.color.static}'
    },
    '.prose': {
      maxWidth: 'none !important',
      width: '100% !important',
      '& > *:not(.gallery):not(.image-grid):not(.photo-gallery):not(.bip-gallery)': {
        marginLeft: '{space.4}',
        marginRight: '{space.4}',
      },
      '.back-to-top': {
        display: 'flex',
        justifyContent: 'flex-end',
        alignItems: 'center',
        width: '100%',
        marginRight: '{space.4}',
        a: {
          cursor: 'pointer',
          fontSize: '{text.lg.fontSize}'
        }
      },
      '& :deep(h1)': {
        display: 'none'
      },
    }
  }
})
</style>

<style>
/* Global prose override - this will override any Tailwind Typography constraints */
.prose {
  max-width: none !important;
  width: 100% !important;
}

/* Override all possible prose max-width variants */
.prose-sm, .prose-base, .prose-lg, .prose-xl, .prose-2xl {
  max-width: none !important;
  width: 100% !important;
}

/* Ensure galleries within prose use full width and break out of padding */
.prose .gallery,
.prose .image-grid,
.prose .photo-gallery,
.prose .bip-gallery {
  max-width: none !important;
  width: 100% !important;
  margin-left: 0 !important;
  margin-right: 0 !important;
}

/* Ensure specific gallery components break out of container */
.prose .bip-gallery .gallery-grid {
  max-width: none !important;
  width: 100% !important;
}

/* Ensure all text content has proper margins while galleries are full width */
.prose p,
.prose h1,
.prose h2,
.prose h3,
.prose h4,
.prose h5,
.prose h6,
.prose ul,
.prose ol,
.prose blockquote,
.prose pre {
  margin-left: 1rem !important;
  margin-right: 1rem !important;
}

@media (min-width: 640px) {
  .prose p,
  .prose h1,
  .prose h2,
  .prose h3,
  .prose h4,
  .prose h5,
  .prose h6,
  .prose ul,
  .prose ol,
  .prose blockquote,
  .prose pre {
    margin-left: 1.5rem !important;
    margin-right: 1.5rem !important;
  }
}
</style>
