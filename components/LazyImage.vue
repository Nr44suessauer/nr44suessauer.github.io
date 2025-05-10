<template>
  <div ref="imageContainer" class="lazy-image-container">
    <OptimizedImage
      v-if="isVisible || loading === 'eager'"
      :src="src"
      :alt="alt"
      :class="className"
      :loading="loading"
      :provider="provider"
      :preset="preset"
      :sizes="sizes"
      :usePicture="usePicture"
    />
    <div v-else class="placeholder" :style="{ aspectRatio: aspectRatio, backgroundColor: '#f0f0f0' }"></div>
  </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'

const props = defineProps({
  src: {
    type: String,
    required: true
  },
  alt: {
    type: String,
    default: ''
  },
  className: {
    type: String,
    default: ''
  },
  loading: {
    type: String,
    default: 'lazy'
  },
  provider: {
    type: String,
    default: undefined
  },
  preset: {
    type: String,
    default: undefined
  },
  sizes: {
    type: String,
    default: undefined
  },
  usePicture: {
    type: Boolean,
    default: true
  },
  aspectRatio: {
    type: String,
    default: '16/9'
  },
  rootMargin: {
    type: String,
    default: '200px'
  }
})

const imageContainer = ref(null)
const isVisible = ref(props.loading === 'eager')
let observer = null

onMounted(() => {
  if (props.loading === 'eager') return

  observer = new IntersectionObserver(
    (entries) => {
      const [entry] = entries
      if (entry.isIntersecting) {
        isVisible.value = true
        // Beobachter trennen, nachdem das Bild geladen wurde
        if (observer) {
          observer.disconnect()
          observer = null
        }
      }
    },
    {
      root: null,
      rootMargin: props.rootMargin,
      threshold: 0.01
    }
  )

  if (imageContainer.value) {
    observer.observe(imageContainer.value)
  }
})

onBeforeUnmount(() => {
  if (observer) {
    observer.disconnect()
    observer = null
  }
})
</script>

<style scoped>
.lazy-image-container {
  width: 100%;
  position: relative;
  overflow: hidden;
}
.placeholder {
  width: 100%;
  background-size: cover;
  background-position: center;
  transition: opacity 0.3s ease;
}
</style>