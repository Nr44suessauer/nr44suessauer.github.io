<template>
  <div class="travel-gallery">
    <div class="gallery-grid">
      <ImageTile
        v-for="(image, index) in allImages" 
        :key="index"
        :image="image"
        :loading="index < 3 ? 'eager' : 'lazy'"
        class="gallery-item"
      />
    </div>
  </div>
</template>

<script setup>
import ImageTile from './ImageTile.vue'

// Image data - Travel photos
const allImages = [
  {
    src: "https://github.com/Nr44suessauer/nr44suessauer.github.io/blob/main/nuxt-app/assets/pictures/BIP/chruchbetweenohridandskope1.JPG?raw=true",
    alt: "Church Between Ohrid and Skopje 1"
  },
  {
    src: "https://github.com/Nr44suessauer/nr44suessauer.github.io/blob/main/nuxt-app/assets/pictures/BIP/chruchbetweenohridandskope2.JPG?raw=true",
    alt: "Church Between Ohrid and Skopje 2"
  }
]
</script>

<style scoped>
.travel-gallery {
  margin: 20px 0;
}

.gallery-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 15px;
  width: 100%;
  margin: 20px 0;
  align-items: start;
}

.gallery-item {
  width: 100%;
}

/* Mobile Responsive */
@media (max-width: 900px) {
  .gallery-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 768px) {
  .gallery-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 480px) {
  .gallery-grid {
    grid-template-columns: 1fr;
  }
}
</style>
