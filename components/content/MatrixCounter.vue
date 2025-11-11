<template>
  <div class="counter-container matrix-theme">
    <div class="counter-display">{{ count }}</div>
    <button class="counter-button increment" @click.stop="increment" @mousedown="increment">+ 1</button>
    <button class="counter-button reset" @click.stop="reset" @mousedown="reset">Reset</button>
  </div>
</template>

<script>
export default {
  name: 'MatrixCounter',
  data() {
    return {
      count: 0
    }
  },
  mounted() {
    console.log('MatrixCounter mounted, count:', this.count)
  },
  methods: {
    increment() {
      console.log('INCREMENT CALLED - before:', this.count)
      this.count = this.count + 1
      console.log('INCREMENT CALLED - after:', this.count)
      this.$forceUpdate()
    },
    reset() {
      console.log('RESET CALLED - before:', this.count)
      this.count = 0
      console.log('RESET CALLED - after:', this.count)
      this.$forceUpdate()
    }
  }
}
</script>

<style scoped>
.counter-container.matrix-theme {
  padding: 20px;
  background: linear-gradient(135deg, #1a1a1a 0%, #0d0208 100%);
  border: 2px solid #00ff41;
  border-radius: 10px;
  text-align: center;
  max-width: 350px;
  margin: 20px auto;
  box-shadow: 0 4px 20px rgba(0, 255, 65, 0.3);
}

.counter-container.matrix-theme .counter-display {
  font-size: 3rem;
  color: #00ff41;
  font-weight: bold;
  margin-bottom: 20px;
  font-family: 'Courier New', monospace;
  text-shadow: 0 0 10px rgba(0, 255, 65, 0.8);
}

.counter-container.matrix-theme .counter-button {
  padding: 15px 30px;
  font-size: 1.2rem;
  border-radius: 8px;
  cursor: pointer;
  font-weight: bold;
  transition: all 0.3s;
  margin: 5px;
  border: 2px solid;
}

.counter-container.matrix-theme .counter-button.increment {
  background: rgba(0, 255, 65, 0.2);
  color: #00ff41;
  border-color: #00ff41;
  text-shadow: 0 0 5px rgba(0, 255, 65, 0.5);
}

.counter-container.matrix-theme .counter-button.increment:hover {
  background: rgba(0, 255, 65, 0.3);
  box-shadow: 0 0 20px rgba(0, 255, 65, 0.5);
}

.counter-container.matrix-theme .counter-button.reset {
  background: rgba(255, 0, 0, 0.2);
  color: #ff4444;
  border-color: #ff4444;
}

.counter-container.matrix-theme .counter-button.reset:hover {
  background: rgba(255, 0, 0, 0.3);
  box-shadow: 0 0 20px rgba(255, 0, 0, 0.5);
}
</style>
