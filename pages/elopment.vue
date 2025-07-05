<template>
  <ContentDoc />
</template>

<script setup>
// Diese Seite wird verwendet, um die /elopment Route explizit zu definieren
// und sicherzustellen, dass sie bei der statischen Generierung erstellt wird

// Setze Meta-Informationen
useHead({
  title: 'Elopment - DeadlineDriven.dev',
  meta: [
    {
      name: 'description',
      content: 'Versteckte Seite - nur über direkteingabe erreichbar'
    },
    {
      name: 'robots',
      content: 'noindex, nofollow' // Diese Seite soll nicht von Suchmaschinen indexiert werden
    }
  ]
})

// Explizit den Content für den elopment Pfad laden
const { data: page } = await useAsyncData('elopment-page', () => 
  queryContent('/elopment').findOne()
)

// Falls die Seite nicht gefunden wird, 404 werfen
if (!page.value) {
  throw createError({
    statusCode: 404,
    statusMessage: 'Page not found'
  })
}
</script>
