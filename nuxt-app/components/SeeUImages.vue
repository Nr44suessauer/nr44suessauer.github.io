<template>
  <div class="seeu-gallery">
    <div class="gallery-grid">
      <ImageTile
        v-for="(image, index) in allImages" 
        :key="index"
        :image="image"
        :loading="index < 4 ? 'eager' : 'lazy'"
        class="gallery-item"
      />
    </div>
  </div>
</template>

<script setup>
import ImageTile from './ImageTile.vue'

// Image data - SEEU University images
const allImages = [
{
    src: "https://github.com/Nr44suessauer/nr44suessauer.github.io/blob/main/nuxt-app/assets/pictures/BIP/seeu.JPG?raw=true",
    alt: "SEEU University Campus"
  },
{
    src: "https://github.com/Nr44suessauer/nr44suessauer.github.io/blob/main/nuxt-app/assets/pictures/BIP/inseeu.JPG?raw=true",
    alt: "Inside SEEU University"
  },
  {
    src: "https://github.com/Nr44suessauer/nr44suessauer.github.io/blob/main/nuxt-app/assets/pictures/BIP/presentation2.JPG?raw=true",
    alt: "Presentation at SEEU 2"
  },
    {
    src: "https://github.com/Nr44suessauer/nr44suessauer.github.io/blob/main/nuxt-app/assets/pictures/BIP/presentation.JPG?raw=true",
    alt: "Presentation at SEEU"
  }
]
</script>

<style scoped>
.seeu-gallery {
  margin: 20px 0;
}

.gallery-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 15px;
  width: 100%;
  margin: 20px 0;
  align-items: start;
}

.gallery-item {
  width: 100%;
}

/* Mobile Responsive */
@media (max-width: 1200px) {
  .gallery-grid {
    grid-template-columns: repeat(4, 1fr);
  }
}

@media (max-width: 900px) {
  .gallery-grid {
    grid-template-columns: repeat(3, 1fr);
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
