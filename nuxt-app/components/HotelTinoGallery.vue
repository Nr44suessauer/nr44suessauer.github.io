<template>
  <div class="hotel-tino-gallery">
    <div 
      class="slideshow-wrapper"
      @mouseenter="stopAutoSlide"
      @mouseleave="startAutoSlide"
    >
      <div class="slides-container">
        <img 
          v-for="(image, index) in hotelTinoImages" 
          :key="index"
          :src="image.src" 
          :alt="image.alt"
          :class="['slide', { active: currentSlide === index }]"
        />
      </div>
      
      <!-- Navigation dots -->
      <div class="indicators">
        <button 
          v-for="(image, index) in hotelTinoImages" 
          :key="`dot-${index}`"
          @click="goToSlide(index)"
          :class="['indicator', { active: currentSlide === index }]"
        ></button>
      </div>
      
      <!-- Arrow buttons -->
      <button @click="prevSlide" class="nav-button prev-button">‹</button>
      <button @click="nextSlide" class="nav-button next-button">›</button>
    </div>
    
    <p class="gallery-caption">Hotel Tino - Our base in Ohrid</p>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

// Hotel Tino images
const hotelTinoImages = [
  {
    src: 'https://github.com/Nr44suessauer/nr44suessauer.github.io/blob/main/nuxt-app/assets/pictures/BIP/ohridWork/HotelTino1.JPG?raw=true',
    alt: 'Hotel Tino - View 1'
  },
  {
    src: 'https://github.com/Nr44suessauer/nr44suessauer.github.io/blob/main/nuxt-app/assets/pictures/BIP/ohridWork/HotelTino2.JPG?raw=true',
    alt: 'Hotel Tino - View 2'
  }
]

// Reactive state
const currentSlide = ref(0)
let autoSlideTimer = null

// Methods
const goToSlide = (index) => {
  currentSlide.value = index
  restartAutoSlide()
}

const nextSlide = () => {
  currentSlide.value = (currentSlide.value + 1) % hotelTinoImages.length
  restartAutoSlide()
}

const prevSlide = () => {
  currentSlide.value = currentSlide.value === 0 ? hotelTinoImages.length - 1 : currentSlide.value - 1
  restartAutoSlide()
}

const startAutoSlide = () => {
  if (hotelTinoImages.length > 1) {
    autoSlideTimer = setInterval(() => {
      currentSlide.value = (currentSlide.value + 1) % hotelTinoImages.length
    }, 4000)
  }
}

const stopAutoSlide = () => {
  if (autoSlideTimer) {
    clearInterval(autoSlideTimer)
    autoSlideTimer = null
  }
}

const restartAutoSlide = () => {
  stopAutoSlide()
  startAutoSlide()
}

// Lifecycle
onMounted(() => {
  startAutoSlide()
})

onUnmounted(() => {
  stopAutoSlide()
})
</script>

<style scoped>
.hotel-tino-gallery {
  margin: 20px 0;
}

.slideshow-wrapper {
  position: relative;
  max-width: 600px;
  margin: 0 auto;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}

.slideshow-wrapper:hover .nav-button {
  opacity: 1;
}

.slides-container {
  position: relative;
  height: 400px;
  overflow: hidden;
}

.slide {
  width: 100%;
  height: 100%;
  object-fit: cover;
  position: absolute;
  top: 0;
  left: 0;
  opacity: 0;
  transition: opacity 0.5s ease-in-out;
}

.slide.active {
  opacity: 1;
}

.indicators {
  position: absolute;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: 10px;
}

.indicator {
  width: 12px;
  height: 12px;
  border-radius: 50%;
  border: 2px solid white;
  background: transparent;
  cursor: pointer;
  opacity: 0.7;
  transition: all 0.3s ease;
}

.indicator.active {
  background: white;
  opacity: 1;
}

.indicator:hover {
  opacity: 1;
  transform: scale(1.1);
}

.nav-button {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: rgba(0, 0, 0, 0.5);
  color: white;
  border: none;
  padding: 10px 15px;
  cursor: pointer;
  border-radius: 4px;
  font-size: 18px;
  opacity: 0;
  transition: all 0.3s ease;
}

.nav-button:hover {
  background: rgba(0, 0, 0, 0.7);
  transform: translateY(-50%) scale(1.1);
}

.prev-button {
  left: 15px;
}

.next-button {
  right: 15px;
}

.gallery-caption {
  text-align: center;
  margin-top: 10px;
  font-size: 14px;
  color: #666;
}
</style>
