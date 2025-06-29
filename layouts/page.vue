<template>
  <main>
    <!-- Show article header with date if this is a content page with date -->
    <header v-if="page && page.title">
      <h1 v-if="page.title" class="title">{{ page.title }}</h1>
      <time v-if="shouldShowDate" :datetime="page.date">
        {{ formatDate(page.date) }}
      </time>
    </header>
    <slot />
  </main>
</template>

<script setup lang="ts">
const { page } = useContent()

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
</script>

<style scoped>
header {
  margin-bottom: 2rem;
}

.title {
  margin-bottom: 0.5rem;
}

time {
  color: var(--color-gray-500);
  font-size: 0.875rem;
}
</style>
