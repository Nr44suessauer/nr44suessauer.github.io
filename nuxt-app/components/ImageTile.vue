<template>
  <div class="image-tile" @click="openModal" style="cursor: pointer;">
    <img 
      :src="image.src" 
      :alt="image.alt" 
      :loading="loading"
      class="tile-img"
    />
    <div v-if="showCaption && image.caption" class="tile-caption">
      {{ image.caption }}
    </div>
    
    <!-- Modal for enlarged image -->
    <div v-if="isModalOpen" class="modal-overlay" @click="closeModal">
      <div class="modal-content" @click.stop>
        <button class="modal-close" @click="closeModal">&times;</button>
        
        <!-- Zoom controls -->
        <div class="zoom-controls">
          <button class="zoom-btn" @click="toggleZoom" :title="isZoomed ? 'Zoom Out' : 'Zoom In'">
            <span v-if="isZoomed">🔍−</span>
            <span v-else>🔍+</span>
          </button>
        </div>
        
        <div class="image-container" :class="{ 'zoomed': isZoomed }">
          <img 
            :src="image.src" 
            :alt="image.alt" 
            class="modal-image"
            :class="{ 'zoomed': isZoomed }"
            @click="toggleZoom"
          />
        </div>
        
        <div v-if="image.caption" class="modal-caption">
          {{ image.caption }}
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

// Props
const props = defineProps({
  image: {
    type: Object,
    required: true,
    validator: (value) => {
      return value && typeof value.src === 'string' && typeof value.alt === 'string'
    }
  },
  loading: {
    type: String,
    default: 'lazy',
    validator: (value) => ['lazy', 'eager'].includes(value)
  },
  showCaption: {
    type: Boolean,
    default: false
  }
})

// Reactive state
const isModalOpen = ref(false)
const isZoomed = ref(false)

// Methods
const openModal = () => {
  console.log('Opening modal for image:', props.image.alt) // Debug log
  isModalOpen.value = true
  isZoomed.value = false // Reset zoom when opening modal
  if (typeof window !== 'undefined') { // Better client check
    document.body.style.overflow = 'hidden'
  }
}

const closeModal = () => {
  console.log('Closing modal') // Debug log
  isModalOpen.value = false
  isZoomed.value = false // Reset zoom when closing
  if (typeof window !== 'undefined') { // Better client check
    document.body.style.overflow = 'auto'
  }
}

const toggleZoom = () => {
  isZoomed.value = !isZoomed.value
  console.log('Zoom toggled:', isZoomed.value) // Debug log
}

// Keyboard support - close on Escape
const handleKeydown = (event) => {
  if (event.key === 'Escape' && isModalOpen.value) {
    closeModal()
  }
}

onMounted(() => {
  if (typeof window !== 'undefined') { // Better client check
    document.addEventListener('keydown', handleKeydown)
  }
})

onUnmounted(() => {
  if (typeof window !== 'undefined') { // Better client check
    document.removeEventListener('keydown', handleKeydown)
    document.body.style.overflow = 'auto'
  }
})
</script>

<style scoped>
.image-tile {
  position: relative;
  width: 100%;
  border-radius: 8px;
  overflow: visible;
  background: #f5f5f5;
  cursor: pointer;
}

.image-tile:hover {
  z-index: 1000; /* Bringt das gehöverte Bild auf den obersten Layer */
}

.tile-img {
  width: 100%;
  height: auto;
  display: block;
  border-radius: 8px;
  transition: transform 0.3s ease;
}

.tile-img:hover {
  transform: scale(3); /* 100% Vergrößerung (100% + 100% = 200% Gesamtgröße) */
}

.tile-caption {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background: linear-gradient(to top, rgba(0,0,0,0.8), transparent);
  color: white;
  padding: 12px;
  font-size: 14px;
  text-align: center;
  pointer-events: none;
}

/* Modal styles */
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.9);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9999;
  animation: fadeIn 0.3s ease;
}

.modal-content {
  position: relative;
  max-width: 90vw;
  max-height: 90vh;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.zoom-controls {
  position: absolute;
  top: -50px;
  left: 0;
  z-index: 10001;
}

.zoom-btn {
  background: rgba(255, 255, 255, 0.2);
  border: none;
  color: white;
  font-size: 20px;
  cursor: pointer;
  padding: 0.5rem;
  border-radius: 4px;
  transition: background 0.2s ease;
  margin-right: 10px;
}

.zoom-btn:hover {
  background: rgba(255, 255, 255, 0.3);
}

.image-container {
  overflow: auto;
  max-width: 90vw;
  max-height: 80vh;
  display: flex;
  align-items: center;
  justify-content: center;
}

.image-container.zoomed {
  overflow: auto;
  cursor: grab;
}

.image-container.zoomed:active {
  cursor: grabbing;
}

.modal-image {
  max-width: 100%;
  max-height: 80vh;
  width: auto;
  height: auto;
  object-fit: contain;
  border-radius: 8px;
  box-shadow: 0 20px 40px rgba(0,0,0,0.5);
  transition: transform 0.3s ease;
  cursor: pointer;
}

.modal-image.zoomed {
  transform: scale(2);
  max-width: none;
  max-height: none;
  cursor: grab;
}

.modal-caption {
  color: white;
  text-align: center;
  padding: 1rem;
  max-width: 500px;
  font-size: 16px;
  margin-top: 10px;
}

.modal-close {
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
  transition: opacity 0.2s ease;
}

.modal-close:hover {
  opacity: 0.7;
}

@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}

/* Mobile optimization */
@media (max-width: 768px) {
  .tile-caption {
    font-size: 12px;
    padding: 8px;
  }
  
  .modal-image {
    max-height: 70vh;
  }
  
  .modal-image.zoomed {
    transform: scale(1.5); /* Smaller zoom on mobile */
  }
  
  .modal-caption {
    font-size: 14px;
    padding: 0.5rem;
  }
  
  .modal-close {
    top: 10px;
    right: 10px;
    font-size: 30px;
  }
  
  .zoom-controls {
    top: 10px;
    left: 10px;
  }
  
  .zoom-btn {
    font-size: 16px;
    padding: 0.3rem;
  }
}

/* Ensure the container doesn't clip the scaled image */
.bip-gallery {
  overflow: visible;
}
</style>
