<script setup>
import { ref } from 'vue'

// Zustand ob ausgeklappt oder nicht
const isOpen = ref(false)

// Toggle-Funktion zum Umschalten
const toggle = () => {
  isOpen.value = !isOpen.value
}
</script>

<template>
  <ClientOnly>
    <div class="collapsible-container">
      <button 
        @click="toggle" 
        class="collapsible-button"
        :class="{ 'is-open': isOpen }"
      >
        <slot name="title">Inhalt anzeigen</slot>
        <span class="toggle-icon">{{ isOpen ? '▲' : '▼' }}</span>
      </button>
      <div v-if="isOpen" class="collapsible-content">
        <slot></slot>
      </div>
    </div>
  </ClientOnly>
</template>

<style>
.collapsible-container {
  margin: 1rem 0;
  border: 1px solid var(--color-gray-200);
  border-radius: 0.5rem;
  overflow: hidden;
}

.collapsible-button {
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

.dark .collapsible-button {
  background-color: var(--color-gray-800);
}

.collapsible-button:hover {
  background-color: var(--color-gray-200);
}

.dark .collapsible-button:hover {
  background-color: var(--color-gray-700);
}

.collapsible-button.is-open {
  border-bottom: 1px solid var(--color-gray-200);
}

.toggle-icon {
  margin-left: 0.5rem;
  transition: transform 0.3s;
}

.collapsible-content {
  padding: 1rem;
  animation: fadeIn 0.3s ease-in-out;
}

@keyframes fadeIn {
  from { opacity: 0; transform: translateY(-10px); }
  to { opacity: 1; transform: translateY(0); }
}
</style>