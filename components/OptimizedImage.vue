<template>
  <nuxt-picture
    v-if="usePicture"
    :src="src"
    :sizes="sizes"
    :alt="alt"
    :class="className"
    :loading="loading || 'lazy'"
    :provider="provider"
    :preset="preset"
    width="auto"
    height="auto"
    format="webp"
    quality="80"
  />
  <nuxt-img
    v-else
    :src="src"
    :sizes="sizes"
    :alt="alt"
    :class="className"
    :loading="loading || 'lazy'"
    :provider="provider"
    :preset="preset"
    format="webp"
    quality="80"
  />
</template>

<script setup>
defineProps({
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
  }
})
</script>