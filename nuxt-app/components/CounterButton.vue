<template>
  <div class="counter-container">
    <p class="counter-display">Aktuelle Zahl: <span class="counter-value">{{ count }}</span></p>
    <button class="counter-button" @click="increment">Erhöhen</button>
    <button class="counter-button" @click="decrement">Verringern</button>
    <button class="counter-button reset" @click="reset">Zurücksetzen</button>
  </div>
</template>

<script>
export default {
  name: 'CounterButton',
  data() {
    return {
      count: 0
    }
  },
  methods: {
    increment() {
      this.count++
    },
    decrement() {
      this.count--
    },
    reset() {
      this.count = 0
    }
  }
}
</script>

<style scoped>
.counter-container {
  margin: 20px 0;
  padding: 15px;
  border: 1px solid #555;
  border-radius: 8px;
  background-color: #2a2a2a;
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

.counter-button {
  padding: 8px 16px;
  margin-right: 8px;
  margin-bottom: 8px;
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