<template>
  <blockquote class="custom-blockquote">
    <slot />
  </blockquote>
</template>

<style>
/* Verwende hier keine scoped-Attribute für globale Nuxt-Content-Komponenten */
.custom-blockquote {
  background-color: #2a2a2a !important;
  border-left: 4px solid #59a5d8 !important;
  padding: 10px 15px !important;
  margin: 15px 0 !important;
  color: #e0e0e0 !important;
}

/* Rest der Stile... */
.custom-blockquote :deep(p) {
  margin: 0;
  font-style: italic;
}

.custom-blockquote :deep(strong) {
  color: #59a5d8;
}

.custom-blockquote :deep(a) {
  color: #71c4ff;
  text-decoration: underline;
}
</style>