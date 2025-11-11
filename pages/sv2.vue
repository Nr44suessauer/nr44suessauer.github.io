<template>
  <ContentDoc />
</template>

<script setup>
// Diese Seite wird verwendet, um die /sv2 Route explizit zu definieren
// und sicherzustellen, dass sie bei der statischen Generierung erstellt wird

// Setze Meta-Informationen
useHead({
  title: 'SV2 - DeadlineDriven.dev',
  meta: [
    {
      name: 'description',
      content: 'SV2 - Hidden Article'
    },
    {
      name: 'robots',
      content: 'noindex, nofollow' // Diese Seite soll nicht von Suchmaschinen indexiert werden
    }
  ]
})

// Explizit den Content für den sv2 Pfad laden
const { data: page } = await useAsyncData('sv2-page', () => 
  queryContent('/sv2').findOne()
)

// Falls die Seite nicht gefunden wird, 404 werfen
if (!page.value) {
  throw createError({
    statusCode: 404,
    statusMessage: 'Page not found'
  })
}
</script>
