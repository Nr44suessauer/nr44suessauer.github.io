<template>
  <div class="travel-gallery">
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

// Image data - Travel images
const allImages = [
  {
    src: "https://github.com/Nr44suessauer/nr44suessauer.github.io/blob/main/nuxt-app/assets/pictures/BIP/church/chruchbetweenohridandskope1.JPG?raw=true",
    alt: "Church Between Ohrid and Skopje 1"
  },
  {
    src: "https://github.com/Nr44suessauer/nr44suessauer.github.io/blob/main/nuxt-app/assets/pictures/BIP/church/chruchbetweenohridandskope2.JPG?raw=true",
    alt: "Church Between Ohrid and Skopje 2"
  },
  {
    src: "https://github.com/Nr44suessauer/nr44suessauer.github.io/blob/main/nuxt-app/assets/pictures/BIP/church/chruchoben.JPG?raw=true",
    alt: "Church from Above"
  },
  {
    src: "https://github.com/Nr44suessauer/nr44suessauer.github.io/blob/main/nuxt-app/assets/pictures/BIP/church/stairs.JPG?raw=true",
    alt: "Church Stairs"
  },
  {
    src: "https://github.com/Nr44suessauer/nr44suessauer.github.io/blob/main/nuxt-app/assets/pictures/BIP/landscape.JPG?raw=true",
    alt: "North Macedonia Landscape"
  }
]
</script>

<style scoped>
.travel-gallery {
  margin: 20px 0;
}

.gallery-grid {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
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
