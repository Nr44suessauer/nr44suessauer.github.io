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
        
        <div class="image-container">
          <img 
            :src="image.src" 
            :alt="image.alt" 
            class="modal-image"
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

// Methods
const openModal = () => {
  console.log('Opening modal for image:', props.image.alt) // Debug log
  isModalOpen.value = true
  if (typeof window !== 'undefined') { // Better client check
    document.body.style.overflow = 'hidden'
  }
}

const closeModal = () => {
  console.log('Closing modal') // Debug log
  isModalOpen.value = false
  if (typeof window !== 'undefined') { // Better client check
    document.body.style.overflow = 'auto'
  }
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
  justify-content: center;
}

.image-container {
  max-width: 90vw;
  max-height: 80vh;
  display: flex;
  align-items: center;
  justify-content: center;
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
  
  .modal-caption {
    font-size: 14px;
    padding: 0.5rem;
  }
  
  .modal-close {
    top: 10px;
    right: 10px;
    font-size: 30px;
  }
}

/* Ensure the container doesn't clip the scaled image */
.bip-gallery {
  overflow: visible;
}
</style>
