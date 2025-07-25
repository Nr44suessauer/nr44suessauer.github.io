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
    maxWidth: '100%',
    mx: 'auto',
    px: '{space.4}',
    py: '{space.4}',
    '@sm': {
      px: '{space.6}',
      py: '{space.12}',
    },
    '.back': {
      display: 'inline-flex',
      alignItems: 'center',
      fontSize: '{text.lg.fontSize}',
      borderBottom: '1px solid {elements.border.secondary.static}',
      '& :deep(svg)': {
        width: '{size.16}',
        height: '{size.16}',
        marginRight: '{space.2}'
      }
    },
    header: {
      marginTop: '{space.16}',
      marginBottom: '{space.12}',
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
      '.back-to-top': {
        display: 'flex',
        justifyContent: 'flex-end',
        alignItems: 'center',
        width: '100%',
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
