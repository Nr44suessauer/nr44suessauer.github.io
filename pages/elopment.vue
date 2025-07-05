<template>
  <AppLayout>
    <div>
      <div style="display: flex; justify-content: center; align-items: center; min-height: 50vh;">
        <a href="https://phdcomics.com/comics/archive_list.php" target="_blank">
          <img src="http://www.phdcomics.com/comics/archive/phd072915s.gif" alt="PhD Comics" style="max-width: 100%; height: auto;" />
        </a>
      </div>
    </div>
  </AppLayout>
</template>

<script setup>
// Page meta
definePageMeta({
  title: 'elopment',
  description: 'Development insights and methodologies',
  layout: false, // Use AppLayout instead of default layout
  path: '/elopment'
})

// SEO
useHead({
  title: 'elopment',
  meta: [
    { name: 'description', content: 'Development insights and methodologies' },
    { property: 'og:image', content: '/social-card-preview.png' }
  ]
})
</script>
