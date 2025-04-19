<!-- h:\vueTemplate\nr44suessauer.github.io\components\algo\BruteForceVisualizer.vue -->
<template>
    <div class="bf-container">
      <h3>Brute Force Algorithm</h3>
      <div class="controls">
        <button @click="nextStep">Next Step</button>
        <button @click="reset" class="reset-btn">Reset</button>
        <input type="number" v-model.number="numPoints" min="3" max="25">
      </div>
      <canvas ref="canvas" width="800" height="600"></canvas>
      <div class="info-panel" v-html="infoContent"></div>
    </div>
  </template>
  
  <script>
  import { BruteForceAnimation } from '~/utils/algo/tsp-utils'
  
  export default {
    data() {
      return {
        animation: null,
        numPoints: 4,
        infoContent: ''
      }
    },
    mounted() {
      this.initAnimation()
    },
    methods: {
      initAnimation() {
        this.animation = new BruteForceAnimation(
          this.$refs.canvas,
          this.numPoints,
          0
        )
        this.updateInfo()
      },
      nextStep() {
        if (this.animation) {
          this.animation.nextStep()
          this.updateInfo()
        }
      },
      reset() {
        this.animation = null
        this.initAnimation()
      },
      updateInfo() {
        this.infoContent = this.animation
          ? this.animation.getFormattedInfo()
          : ''
      }
    },
    watch: {
      numPoints() {
        this.reset()
      }
    }
  }
  </script>
  
  <style scoped>
  .bf-container {
    margin: 2rem 0;
    border: 1px solid #eee;
    padding: 1rem;
  }
  
  canvas {
    border: 1px solid #ccc;
    margin: 1rem 0;
  }
  
  .info-panel {
    background: var(--bg-secondary);
    padding: 1rem;
    border-radius: 4px;
  }
  
  .reset-btn {
    background-color: #ff5555;
    color: white;
  }
  </style>