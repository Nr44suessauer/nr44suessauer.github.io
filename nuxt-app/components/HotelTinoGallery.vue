<template>
  <div class="hotel-tino-gallery">
    <div class="gallery-grid">
      <ImageTile
        v-for="(image, index) in hotelTinoImages" 
        :key="index"
        :image="image"
        :loading="index < 3 ? 'eager' : 'lazy'"
        class="gallery-item"
      />
    </div>
  </div>
</template>

<script setup>
// Hotel Tino image data
const hotelTinoImages = [
  {
    src: "https://github.com/Nr44suessauer/nr44suessauer.github.io/blob/main/nuxt-app/assets/pictures/BIP/ohridWork/HotelTino2.JPG?raw=true",
    alt: "Hotel Tino - View 2",
    caption: "Hotel Tino workspace area"
  },
  {
    src: "https://github.com/Nr44suessauer/nr44suessauer.github.io/blob/main/nuxt-app/assets/pictures/BIP/ohridWork/HotelTino3.JPG?raw=true",
    alt: "Hotel Tino - View 3", 
    caption: "Hotel Tino meeting room"
  },
  {
    src: "https://github.com/Nr44suessauer/nr44suessauer.github.io/blob/main/nuxt-app/assets/pictures/BIP/ohridWork/HotelTino1.JPG?raw=true",
    alt: "Hotel Tino - View 1",
    caption: "Hotel Tino main area"
  }
]
</script>

<style scoped>
.hotel-tino-gallery {
  margin: 20px 0;
}

.gallery-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 15px;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 15px;
}

.gallery-item {
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.gallery-item:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
}

/* Mobile responsiveness */
@media (max-width: 768px) {
  .gallery-grid {
    grid-template-columns: 1fr;
    gap: 10px;
    padding: 0 10px;
  }
}

@media (min-width: 769px) and (max-width: 1024px) {
  .gallery-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (min-width: 1025px) {
  .gallery-grid {
    grid-template-columns: repeat(3, 1fr);
  }
}
</style>