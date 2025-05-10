<script setup>
import { ref } from 'vue'

// Zustand ob ausgeklappt oder nicht
const isOpen = ref(false)

// Toggle-Funktion zum Umschalten
const toggle = () => {
  isOpen.value = !isOpen.value
}

// URL des Jupyter Notebooks
const notebookUrl = ref('')
</script>

<template>
  <ClientOnly>
    <div class="jupyter-collapsible-container">
      <button 
        @click="toggle" 
        class="jupyter-collapsible-button"
        :class="{ 'is-open': isOpen }"
      >
        <slot name="title">Jupyter Notebook anzeigen</slot>
        <span class="toggle-icon">{{ isOpen ? '▲' : '▼' }}</span>
      </button>
      <div v-if="isOpen" class="jupyter-collapsible-content">
        <div v-if="$slots.default" class="jupyter-content">
          <slot></slot>
        </div>
        <div v-else-if="notebookUrl" class="jupyter-iframe-container">
          <iframe 
            :src="notebookUrl" 
            width="100%" 
            height="800px" 
            style="border: 1px solid #ddd; border-radius: 5px; overflow: hidden;"
            loading="lazy">
          </iframe>
        </div>
      </div>
    </div>
  </ClientOnly>
</template>

<style>
.jupyter-collapsible-container {
  margin: 1rem 0;
  border: 1px solid var(--color-gray-200);
  border-radius: 0.5rem;
  overflow: hidden;
}

.dark .jupyter-collapsible-container {
  border-color: var(--color-gray-700);
}

.jupyter-collapsible-button {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  background-color: var(--color-gray-100);
  border: none;
  cursor: pointer;
  font-weight: 600;
  text-align: left;
  transition: background-color 0.2s;
}

.dark .jupyter-collapsible-button {
  background-color: var(--color-gray-800);
  color: var(--color-gray-200);
}

.jupyter-collapsible-button:hover {
  background-color: var(--color-gray-200);
}

.dark .jupyter-collapsible-button:hover {
  background-color: var(--color-gray-700);
}

.jupyter-collapsible-button.is-open {
  border-bottom: 1px solid var(--color-gray-200);
}

.dark .jupyter-collapsible-button.is-open {
  border-bottom-color: var(--color-gray-700);
}

.toggle-icon {
  margin-left: 0.5rem;
  transition: transform 0.3s;
}

.jupyter-collapsible-content {
  animation: jupyterFadeIn 0.3s ease-in-out;
}

.jupyter-iframe-container {
  padding: 0;
  height: 800px;
  width: 100%;
}

@keyframes jupyterFadeIn {
  from { opacity: 0; transform: translateY(-10px); }
  to { opacity: 1; transform: translateY(0); }
}
</style>