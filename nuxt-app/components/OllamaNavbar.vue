<template>
  <div class="ollama-navbar-wrapper">
    <div id="ollama-navbar">
      <button :class="{active: section === 0}" @click="section = 0">Preparation</button>
      <button :class="{active: section === 1}" @click="section = 1">Setup</button>
      <button :class="{active: section === 2}" @click="section = 2">Model Playground</button>
      <button :class="{active: section === 3}" @click="section = 3">Troubleshooting</button>
    </div>
    <div id="ollama-content">
      <div v-html="sections[section]"></div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
const section = ref(0)
const sections = [
  `<h3>Preparation</h3><p>Before you start, make sure your PC meets the minimum requirements for AI models. Install the required software and check if your GPU supports CUDA.</p>`,
  `<h3>Setup</h3><p>Download and install the necessary software step by step. Start Ollama after installation and check if the service is running. Make sure Python and CUDA are set up correctly for optimal AI model performance.</p>`,
  `<h3>Model Playground</h3><p>Test different AI models in Ollama. Experiment with settings and observe performance on your system.</p>`,
  `<h3>Troubleshooting</h3><p>If you encounter problems, check installations, drivers, and console output. Refer to documentation or ask for help in forums.</p>`
]
</script>

<style scoped>
.ollama-navbar-wrapper {
  margin-bottom: 16px;
}
#ollama-navbar {
  display: flex;
  gap: 24px;
  font-size: 1.1em;
  margin-bottom: 16px;
}
#ollama-navbar button {
  background: none;
  border: none;
  color: #007bff;
  font-size: 1.1em;
  padding: 6px 12px;
  border-radius: 6px;
  cursor: pointer;
  transition: background 0.2s;
}
#ollama-navbar button.active,
#ollama-navbar button:hover {
  background: #e6f0ff;
  color: #0056b3;
}
#ollama-content {
  border: 1px solid #ddd;
  padding: 20px;
  border-radius: 8px;
  background: #fff;
  min-height: 120px;
}
</style>

