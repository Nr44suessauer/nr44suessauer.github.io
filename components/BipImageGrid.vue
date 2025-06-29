<template>
  <div class="bip-image-grid">
    <div 
      v-for="(image, index) in images" 
      :key="index"
      class="image-item"
      @click="openLightbox(index)"
    >
      <OptimizedImage 
        :src="image.src"
        :alt="image.alt"
        :loading="'lazy'"
        class="grid-image"
      />
      <div class="image-caption">
        <h3>{{ image.title }}</h3>
        <p>{{ image.description }}</p>
      </div>
    </div>
    
    <!-- Lightbox Modal -->
    <div v-if="lightboxOpen" class="lightbox-overlay" @click="closeLightbox">
      <div class="lightbox-content" @click.stop>
        <button class="lightbox-close" @click="closeLightbox">&times;</button>
        <OptimizedImage 
          :src="images[currentImageIndex].src"
          :alt="images[currentImageIndex].alt"
          class="lightbox-image"
        />
        <div class="lightbox-caption">
          <h3>{{ images[currentImageIndex].title }}</h3>
          <p>{{ images[currentImageIndex].description }}</p>
        </div>
        <button class="lightbox-prev" @click="prevImage">&#8249;</button>
        <button class="lightbox-next" @click="nextImage">&#8250;</button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

// Reactive data
const lightboxOpen = ref(false)
const currentImageIndex = ref(0)

// Image data
const images = [
  {
    src: '/assets/pictures/BIP/GroupPic.JPG',
    alt: 'Group Picture',
    title: 'Group Picture',
    description: 'Team photo from our AI in Education program'
  },
  {
    src: '/assets/pictures/BIP/seeu.JPG',
    alt: 'S.E.E.U. Campus',
    title: 'S.E.E.U. Campus',
    description: 'South East European University campus'
  },
  {
    src: '/assets/pictures/BIP/inseeu.JPG',
    alt: 'Inside S.E.E.U.',
    title: 'Inside S.E.E.U.',
    description: 'Interior view of the university'
  },
  {
    src: '/assets/pictures/BIP/ohrid.JPG',
    alt: 'Ohrid',
    title: 'Ohrid',
    description: 'Beautiful view of Ohrid city'
  },
  {
    src: '/assets/pictures/BIP/ohridpart.JPG',
    alt: 'Ohrid Part',
    title: 'Ohrid Part',
    description: 'Another perspective of Ohrid'
  },
  {
    src: '/assets/pictures/BIP/bridge.JPG',
    alt: 'Bridge',
    title: 'Bridge',
    description: 'Historic bridge in North Macedonia'
  },
  {
    src: '/assets/pictures/BIP/chruchbetweenohridandskope1.JPG',
    alt: 'Church Between Ohrid and Skopje 1',
    title: 'Church on the Way',
    description: 'Beautiful church between Ohrid and Skopje'
  },
  {
    src: '/assets/pictures/BIP/chruchbetweenohridandskope2.JPG',
    alt: 'Church Between Ohrid and Skopje 2',
    title: 'Church Interior',
    description: 'Inside the historic church'
  },
  {
    src: '/assets/pictures/BIP/viewfromchruce.JPG',
    alt: 'View from Church',
    title: 'View from Church',
    description: 'Scenic view from the church location'
  },
  {
    src: '/assets/pictures/BIP/hoteltino.JPG',
    alt: 'Hotel Tino',
    title: 'Hotel Tino',
    description: 'Our accommodation during the trip'
  },
  {
    src: '/assets/pictures/BIP/BW-Sticker.JPG',
    alt: 'BW Sticker',
    title: 'BW Sticker',
    description: 'Baden-Württemberg representation'
  },
  {
    src: '/assets/pictures/BIP/me.JPG',
    alt: 'Personal Photo',
    title: 'Personal Moment',
    description: 'A memorable moment from the journey'
  }
]

// Methods
const openLightbox = (index) => {
  currentImageIndex.value = index
  lightboxOpen.value = true
  document.body.style.overflow = 'hidden'
}

const closeLightbox = () => {
  lightboxOpen.value = false
  document.body.style.overflow = 'auto'
}

const nextImage = () => {
  currentImageIndex.value = (currentImageIndex.value + 1) % images.length
}

const prevImage = () => {
  currentImageIndex.value = currentImageIndex.value === 0 ? images.length - 1 : currentImageIndex.value - 1
}

// Keyboard navigation
const handleKeydown = (event) => {
  if (!lightboxOpen.value) return
  
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

onMounted(() => {
  window.addEventListener('keydown', handleKeydown)
})

onUnmounted(() => {
  window.removeEventListener('keydown', handleKeydown)
  document.body.style.overflow = 'auto'
})
</script>

<style scoped>
.bip-image-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1.5rem;
  margin: 2rem 0;
  padding: 1rem;
}

.image-item {
  position: relative;
  overflow: hidden;
  border-radius: 12px;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  cursor: pointer;
  background: var(--color-gray-50);
}

.image-item:hover {
  transform: translateY(-4px);
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
}

.grid-image {
  width: 100%;
  height: 250px;
  object-fit: cover;
  transition: transform 0.4s ease;
}

.image-item:hover .grid-image {
  transform: scale(1.1);
}

.image-caption {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background: linear-gradient(to top, rgba(0, 0, 0, 0.8), transparent);
  color: white;
  padding: 1rem;
  transform: translateY(100%);
  transition: transform 0.3s ease;
}

.image-item:hover .image-caption {
  transform: translateY(0);
}

.image-caption h3 {
  margin: 0 0 0.5rem 0;
  font-size: 1.1rem;
  font-weight: 600;
}

.image-caption p {
  margin: 0;
  font-size: 0.9rem;
  opacity: 0.9;
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
  z-index: 1000;
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
}

.lightbox-caption h3 {
  margin: 0 0 0.5rem 0;
  font-size: 1.5rem;
}

.lightbox-caption p {
  margin: 0;
  opacity: 0.9;
}

.lightbox-close {
  position: absolute;
  top: -50px;
  right: 0;
  background: none;
  border: none;
  color: white;
  font-size: 2rem;
  cursor: pointer;
  padding: 0.5rem;
  z-index: 1001;
}

.lightbox-prev,
.lightbox-next {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: rgba(255, 255, 255, 0.2);
  border: none;
  color: white;
  font-size: 2rem;
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
@media (max-width: 768px) {
  .bip-image-grid {
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 1rem;
    padding: 0.5rem;
  }
  
  .grid-image {
    height: 200px;
  }
  
  .lightbox-prev,
  .lightbox-next {
    font-size: 1.5rem;
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
    font-size: 1.5rem;
  }
}

/* Dark mode support */
@media (prefers-color-scheme: dark) {
  .image-item {
    background: var(--color-gray-800);
  }
}
</style>
