<template>
  <div class="bip-gallery">
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

// Image data - All images from Hotel Tino
const allImages = [
  {
    src: "https://github.com/Nr44suessauer/nr44suessauer.github.io/blob/main/nuxt-app/assets/pictures/BIP/ohridWork/HotelTino2.JPG?raw=true",
    alt: "Hotel Tino - View 2"
  },
  {
    src: "https://github.com/Nr44suessauer/nr44suessauer.github.io/blob/main/nuxt-app/assets/pictures/BIP/ohridWork/HotelTino3.JPG?raw=true",
    alt: "Hotel Tino - View 3"
  },
  {
    src: "https://github.com/Nr44suessauer/nr44suessauer.github.io/blob/main/nuxt-app/assets/pictures/BIP/ohridWork/HotelTino1.JPG?raw=true",
    alt: "Hotel Tino - View 1"
  },
  {
    src: "https://github.com/Nr44suessauer/nr44suessauer.github.io/blob/main/nuxt-app/assets/pictures/BIP/ohridWork/HotelTino4.JPG?raw=true",
    alt: "Hotel Tino - View 4"
  }
]
</script>

<style scoped>
.bip-gallery {
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

/* Remove the old .gallery-img styles since we're using ImageTile now */

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