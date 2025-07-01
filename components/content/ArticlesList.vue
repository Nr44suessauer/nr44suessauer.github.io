<script setup lang="ts">
import { withTrailingSlash } from 'ufo'

const props = defineProps({
  path: {
    type: String,
    default: 'articles'
  }
})

// @ts-ignore
const { data: _articles } = await useAsyncData(props.path, async () => await queryContent(withTrailingSlash(props.path)).find())

const articles = computed(() => {
  if (!_articles.value) return []
  
  // Sort by gridPosition (higher numbers first), then by date
  const sorted = [..._articles.value].sort((a: any, b: any) => {
    const aGrid = Number(a.gridPosition) || 0
    const bGrid = Number(b.gridPosition) || 0
    
    if (aGrid !== bGrid) {
      return bGrid - aGrid  // Higher gridPosition numbers appear first
    }
    
    const aDate = new Date(a.date || 0).getTime()
    const bDate = new Date(b.date || 0).getTime()
    return bDate - aDate
  })
  
  console.log('Sorted articles:', sorted.map((a: any) => ({ 
    title: a.title, 
    gridPosition: a.gridPosition 
  })))
  
  return sorted
})
</script>

<template>
  <div v-if="articles?.length" class="articles-list">
    <div class="featured">
      <ArticlesListItem :article="articles[0]" :featured="true" />
    </div>
    <div class="layout">
      <ArticlesListItem v-for="(article, index) in articles.slice(1)" :key="index" :article="article" />
    </div>
  </div>
  <div v-else class="tour">
    <p>Seems like there are no articles yet.</p>
    <p>
      You can start by
      <!-- eslint-disable-next-line -->
      <ProseA href="https://alpine.nuxt.space/articles/write-articles">creating</ProseA> one in the <ProseCodeInline>articles</ProseCodeInline> folder.
    </p>
  </div>
</template>

<style scoped lang="ts">
css({
  '.articles-list': {
    '@sm': {
      px: '{space.12}',
    },
    '@md': {
      px: 0,
    },
    '.featured': {
      my: '{space.12}',
      '@md': {
        my: '{space.8}',
      }
    },
    '.layout': {
      display: 'grid',
      gridTemplateColumns: 'repeat(1, minmax(0, 1fr))',
      gap: '{space.12}',
      '@md': {
        gridTemplateColumns: 'repeat(2, minmax(0, 1fr))',
        gap: '{space.8}',
      },
      '@lg': {
        gridTemplateColumns: 'repeat(3, minmax(0, 1fr))',
      },
    }
  },
  '.tour': {
    minHeight: '30vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  }
})
</style>
