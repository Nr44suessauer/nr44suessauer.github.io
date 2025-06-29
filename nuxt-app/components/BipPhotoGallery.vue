<template>
  <div>    <!-- Photo Gallery -->
    <div class="bip-gallery">
      <!-- Gallery Configuration Panel (for development/testing) -->
      <div class="config-panel" v-if="showConfig">
        <h4>Grid Configuration</h4>        <div class="config-row">
          <label>Columns: <input type="number" v-model="gridConfig.columns" min="1" max="10"></label>
          <label>Gap: <input type="text" v-model="gridConfig.gap" placeholder="15px"></label>
          <label>Border Radius: <input type="text" v-model="gridConfig.borderRadius" placeholder="8px"></label>
        </div>
        <div class="config-row">
          <label>Hover Scale: <input type="number" v-model="gridConfig.hoverScale" step="0.1" min="1" max="3"></label>
        </div>
      </div>

      <!-- All Images in One Grid -->
      <div class="gallery-grid" :style="gridStyles">        <div 
          v-for="(image, index) in allImages" 
          :key="index"
          class="gallery-item"
          @dblclick="openLightbox(index)"
          :style="itemStyles"
        >
          <img 
            :src="image.src" 
            :alt="image.alt" 
            loading="lazy"
            class="gallery-img"
            :style="imageStyles"
          />
        </div>
      </div>
    </div>

    <!-- Lightbox Modal -->
    <div 
      v-if="lightboxOpen" 
      class="lightbox-overlay"
      @click="closeLightbox"
    >
      <div class="lightbox-content" @click.stop>
        <button class="lightbox-close" @click="closeLightbox">&times;</button>
        
        <img 
          :src="allImages[currentImageIndex].src"
          :alt="allImages[currentImageIndex].alt"
          class="lightbox-image"
        />
          <div class="lightbox-caption">
          {{ allImages[currentImageIndex].caption }}
        </div>
        
        <button class="lightbox-prev" @click="prevImage">&#10094;</button>
        <button class="lightbox-next" @click="nextImage">&#10095;</button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue'

// Reactive state
const lightboxOpen = ref(false)
const currentImageIndex = ref(0)
const showConfig = ref(false) // Set to true to show config panel

// Grid Configuration
const gridConfig = ref({
  columns: 5,
  gap: '15px',
  borderRadius: '8px',
  hoverScale: 4.0,
  shadowIntensity: 0.1,
  hoverShadowIntensity: 0.2,
  transitionDuration: '0.3s'
})

// Image data
const groupImages = [
  {
    src: "https://github.com/Nr44suessauer/nr44suessauer.github.io/blob/main/nuxt-app/assets/pictures/BIP/GroupPic.JPG?raw=true",
    alt: "Group Picture",
    caption: "Team photo from our AI in Education program"
  },
  {
    src: "https://github.com/Nr44suessauer/nr44suessauer.github.io/blob/main/nuxt-app/assets/pictures/BIP/seeu.JPG?raw=true",
    alt: "S.E.E.U. Campus",
    caption: "South East European University campus"
  },
  {
    src: "https://github.com/Nr44suessauer/nr44suessauer.github.io/blob/main/nuxt-app/assets/pictures/BIP/inseeu.JPG?raw=true",
    alt: "Inside S.E.E.U.",
    caption: "Interior view of the university"
  },
  {
    src: "https://github.com/Nr44suessauer/nr44suessauer.github.io/blob/main/nuxt-app/assets/pictures/BIP/me.JPG?raw=true",
    alt: "Personal Photo",
    caption: "A memorable moment from the journey"
  }
]

const ohridImages = [
  {
    src: "https://github.com/Nr44suessauer/nr44suessauer.github.io/blob/main/nuxt-app/assets/pictures/BIP/ohrid.JPG?raw=true",
    alt: "Ohrid",
    caption: "Beautiful view of Ohrid city"
  },
  {
    src: "https://github.com/Nr44suessauer/nr44suessauer.github.io/blob/main/nuxt-app/assets/pictures/BIP/ohridpart.JPG?raw=true",
    alt: "Ohrid Part",
    caption: "Another perspective of Ohrid"
  },
  {
    src: "https://github.com/Nr44suessauer/nr44suessauer.github.io/blob/main/nuxt-app/assets/pictures/BIP/bridge.JPG?raw=true",
    alt: "Bridge",
    caption: "Historic bridge in North Macedonia"
  },
  {
    src: "https://github.com/Nr44suessauer/nr44suessauer.github.io/blob/main/nuxt-app/assets/pictures/BIP/hoteltino.JPG?raw=true",
    alt: "Hotel Tino",
    caption: "Our accommodation during the trip"
  }
]

const artImages = [
  {
    src: "https://github.com/Nr44suessauer/nr44suessauer.github.io/blob/main/nuxt-app/assets/pictures/BIP/chruchbetweenohridandskope1.JPG?raw=true",
    alt: "Church Between Ohrid and Skopje 1",
    caption: "Beautiful church between Ohrid and Skopje"
  },
  {
    src: "https://github.com/Nr44suessauer/nr44suessauer.github.io/blob/main/nuxt-app/assets/pictures/BIP/chruchbetweenohridandskope2.JPG?raw=true",
    alt: "Church Between Ohrid and Skopje 2",
    caption: "Inside the historic church"
  },
  {
    src: "https://github.com/Nr44suessauer/nr44suessauer.github.io/blob/main/nuxt-app/assets/pictures/BIP/viewfromchruce.JPG?raw=true",
    alt: "View from Church",
    caption: "Scenic view from the church location"
  },
  {
    src: "https://github.com/Nr44suessauer/nr44suessauer.github.io/blob/main/nuxt-app/assets/pictures/BIP/BW-Sticker.JPG?raw=true",
    alt: "BW Sticker",
    caption: "Baden-Württemberg representation"
  }
]

// Computed property for all images
const allImages = computed(() => [...groupImages, ...ohridImages, ...artImages])

// Computed styles for grid
const gridStyles = computed(() => ({
  display: 'grid',
  gridTemplateColumns: `repeat(${gridConfig.value.columns}, 1fr)`,
  gap: gridConfig.value.gap,
  width: '100%',
  margin: '20px 0'
}))

const itemStyles = computed(() => ({
  cursor: 'pointer',
  transition: `transform ${gridConfig.value.transitionDuration} ease`
}))

const imageStyles = computed(() => ({
  width: '100%',
  height: 'auto',
  objectFit: 'contain',
  borderRadius: gridConfig.value.borderRadius,
  boxShadow: `0 4px 8px rgba(0,0,0,${gridConfig.value.shadowIntensity})`,
  transition: `transform ${gridConfig.value.transitionDuration} ease, box-shadow ${gridConfig.value.transitionDuration} ease`
}))

// Methods
const openLightbox = (index) => {
  currentImageIndex.value = index
  lightboxOpen.value = true
  if (process.client) {
    document.body.style.overflow = 'hidden'
  }
}

const closeLightbox = () => {
  lightboxOpen.value = false
  if (process.client) {
    document.body.style.overflow = 'auto'
  }
}

const nextImage = () => {
  currentImageIndex.value = (currentImageIndex.value + 1) % allImages.value.length
}

const prevImage = () => {
  currentImageIndex.value = currentImageIndex.value === 0 
    ? allImages.value.length - 1 
    : currentImageIndex.value - 1
}

// Keyboard navigation
const handleKeydown = (event) => {
  if (lightboxOpen.value) {
    switch (event.key) {
      case 'Escape':
        closeLightbox()
        break
      case 'ArrowLeft':
        prevImage()
        break
      case 'ArrowRight':
        nextImage()
        break
    }
  }
}

onMounted(() => {
  if (process.client) {
    window.addEventListener('keydown', handleKeydown)
    // Set CSS custom properties for hover effects
    document.documentElement.style.setProperty('--hover-scale', gridConfig.value.hoverScale)
    document.documentElement.style.setProperty('--hover-shadow', gridConfig.value.hoverShadowIntensity)
  }
})

onUnmounted(() => {
  if (process.client) {
    window.removeEventListener('keydown', handleKeydown)
    document.body.style.overflow = 'auto'
  }
})
</script>

<style scoped>
.bip-gallery {
  margin: 20px 0;
}

.bip-gallery h3 {
  margin: 30px 0 15px 0;
  color: var(--color-gray-900);
}

/* Configuration Panel */
.config-panel {
  background: #f5f5f5;
  padding: 20px;
  border-radius: 8px;
  margin-bottom: 30px;
  border: 1px solid #ddd;
}

.config-panel h4 {
  margin-top: 0;
  color: #333;
}

.config-row {
  display: flex;
  gap: 20px;
  margin-bottom: 15px;
  flex-wrap: wrap;
}

.config-row label {
  display: flex;
  flex-direction: column;
  gap: 5px;
  font-size: 14px;
  color: #666;
}

.config-row input {
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
  width: 120px;
}

/* Gallery Grid - now using CSS Grid instead of Flexbox */
.gallery-grid {
  /* Styles are now applied via computed styles */
}

.gallery-item {
  /* Styles are now applied via computed styles */
}

.gallery-item:hover {
  transform: translateY(-4px);
}

.gallery-img {
  /* Base styles are now applied via computed styles */
}

.gallery-item:hover .gallery-img {
  transform: scale(var(--hover-scale, 4.0));
  box-shadow: 0 8px 16px rgba(0,0,0,var(--hover-shadow, 0.2));
  z-index: 100;
  position: relative;
}

.gallery-caption {
  text-align: center;
  font-size: 0.9em;
  margin-top: 8px;
  color: #666;
}

/* Lightbox Styles */
.lightbox-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.9);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9999;
  animation: fadeIn 0.3s ease;
}

.lightbox-content {
  position: relative;
  max-width: 90vw;
  max-height: 90vh;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.lightbox-image {
  max-width: 100%;
  max-height: 80vh;
  object-fit: contain;
  border-radius: 8px;
}

.lightbox-caption {
  color: white;
  text-align: center;
  padding: 1rem;
  max-width: 500px;
  font-size: 16px;
}

.lightbox-close {
  position: absolute;
  top: -50px;
  right: 0;
  background: none;
  border: none;
  color: white;
  font-size: 40px;
  cursor: pointer;
  padding: 0.5rem;
  z-index: 10000;
}

.lightbox-prev,
.lightbox-next {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: rgba(255, 255, 255, 0.2);
  border: none;
  color: white;
  font-size: 30px;
  padding: 1rem;
  cursor: pointer;
  border-radius: 50%;
  transition: background 0.3s ease;
}

.lightbox-prev {
  left: -60px;
}

.lightbox-next {
  right: -60px;
}

.lightbox-prev:hover,
.lightbox-next:hover {
  background: rgba(255, 255, 255, 0.3);
}

@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}

/* Mobile Responsive */
@media (max-width: 1200px) {
  .gallery-grid {
    grid-template-columns: repeat(4, 1fr) !important;
  }
}

@media (max-width: 900px) {
  .gallery-grid {
    grid-template-columns: repeat(3, 1fr) !important;
  }
}

@media (max-width: 768px) {
  .gallery-grid {
    grid-template-columns: repeat(2, 1fr) !important;
  }
  
  .lightbox-image {
    max-height: 70vh;
  }
  
  .lightbox-caption {
    font-size: 14px;
    padding: 0.5rem;
  }
  
  .lightbox-prev,
  .lightbox-next {
    font-size: 24px;
    padding: 0.5rem;
  }
  
  .lightbox-prev {
    left: 10px;
  }
  
  .lightbox-next {
    right: 10px;
  }
  
  .lightbox-close {
    top: 10px;
    right: 10px;
    font-size: 30px;
  }
}

@media (max-width: 480px) {
  .gallery-grid {
    grid-template-columns: 1fr !important;
  }
}

/* Dark mode support */
.dark .gallery-caption {
  color: #ccc;
}

.dark .bip-gallery h3 {
  color: var(--color-gray-100);
}
</style>
