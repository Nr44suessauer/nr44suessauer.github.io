<script setup>
import { ref } from 'vue'

// Reaktiver State mit ref - funktioniert zuverlässig auf Client-Seite
const count = ref(0)

// Methoden für die Interaktivität
const increment = () => count.value++
const decrement = () => count.value--
const reset = () => count.value = 0
</script>

<template>
  <ClientOnly>
    <div class="counter-container">
      <p class="counter-display">Aktuelle Zahl: <span class="counter-value">{{ count }}</span></p>
      <div class="button-container">
        <button class="counter-button" @click="increment">Erhöhen</button>
        <button class="counter-button" @click="decrement">Verringern</button>
        <button class="counter-button reset" @click="reset">Zurücksetzen</button>
      </div>
    </div>
  </ClientOnly>
</template>

<style>
.counter-container {
  margin: 20px 0;
  padding: 15px;
  border: 1px solid #555;
  border-radius: 8px;
  background-color: #2a2a2a;
  text-align: center;
}

.counter-display {
  font-size: 1.2rem;
  margin-bottom: 12px;
  color: #fff;
}

.counter-value {
  font-weight: bold;
  font-size: 1.5rem;
  color: #42b883; /* Vue-Grün für besseren Kontrast */
  background-color: rgba(0, 0, 0, 0.2);
  padding: 3px 10px;
  border-radius: 4px;
  margin-left: 5px;
}

.button-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 10px;
}

.counter-button {
  padding: 8px 16px;
  background-color: #3498db;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s;
  font-weight: bold;
}

.counter-button:hover {
  background-color: #2980b9;
}

.counter-button.reset {
  background-color: #e74c3c;
}

.counter-button.reset:hover {
  background-color: #c0392b;
}
</style>