<script setup lang="ts">
import { withTrailingSlash } from 'ufo'

const props = defineProps({
  path: {
    type: String,
    default: 'articles'
  }
})

// @ts-ignore
const { data: _articles } = await useAsyncData(props.path, async () => {
  const articles = await queryContent(withTrailingSlash(props.path)).find()
  
  // Sortiere erst nach order (falls vorhanden), dann nach Datum
  return articles.sort((a, b) => {
    // Wenn beide order haben, sortiere nach order
    if (a.order !== undefined && b.order !== undefined) {
      return a.order - b.order
    }
    // Wenn nur a order hat, a kommt zuerst
    if (a.order !== undefined && b.order === undefined) {
      return -1
    }
    // Wenn nur b order hat, b kommt zuerst
    if (a.order === undefined && b.order !== undefined) {
      return 1
    }
    // Wenn beide kein order haben, sortiere nach Datum (neueste zuerst)
    return new Date(b.date).getTime() - new Date(a.date).getTime()
  })
})

const articles = computed(() => _articles.value || [])
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
