<template>
  <div>
    <div class="ollama-guide">
      <div class="guide-section">
        <button class="section-header" :class="{active: active==='prep'}" @click="active='prep'">📋 Preparation</button>
      </div>
      <div class="guide-section">
        <button class="section-header" :class="{active: active==='setup'}" @click="active='setup'">⚙️ Setup</button>
      </div>
      <div class="guide-section">
        <button class="section-header" :class="{active: active==='playground'}" @click="active='playground'">🎮 Model Playground</button>
      </div>
      <div class="guide-section">
        <button class="section-header" :class="{active: active==='troubleshooting'}" @click="active='troubleshooting'">🔧 Troubleshooting</button>
      </div>
    </div>
    <div class="section-content-area">
      <div v-html="sectionContents[active]"></div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
const active = ref('prep');
const sectionContents = {
  prep: `<h4>Before You Start</h4><p>Before you start, make sure your PC meets the minimum requirements for AI models. Install the required software and check if your GPU supports CUDA. Ensure you have at least 8GB of RAM and a compatible NVIDIA graphics card for optimal performance. Check your system specifications and available disk space before proceeding.</p>`,
  setup: `<h4>Installation Process</h4><p>Download and install the necessary software step by step. Start Ollama after installation and check if the service is running. Make sure Python and CUDA are set up correctly for optimal AI model performance. Configure your environment variables and test the installation. Verify that all components are working together properly.</p>`,
  playground: `<h4>Testing and Experimentation</h4><p>Test different AI models in Ollama. Experiment with settings and observe performance on your system. Start with smaller models like Llama 2 7B before moving to larger ones. Monitor GPU memory usage and adjust batch sizes as needed. Try different prompting techniques and compare model responses.</p>`,
  troubleshooting: `<h4>Common Issues and Solutions</h4><p>If you encounter problems, check installations, drivers, and console output. Refer to documentation or ask for help in forums. Common issues include CUDA driver conflicts, insufficient GPU memory, and network connectivity problems when downloading models. Keep your drivers updated and monitor system resources.</p>`
};
</script>

<style scoped>
.ollama-guide {
  margin: 20px 0;
  display: flex;
  gap: 16px;
  justify-content: center;
}
.section-content-area {
  margin: 24px auto 0 auto;
  max-width: 900px;
  background: white;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.12);
  padding: 24px 32px;
  border-top: 2px solid #007bff;
}
@media (max-width: 900px) {
  .ollama-guide {
    flex-wrap: wrap;
  }
  .section-content-area {
    padding: 16px 8px;
  }
}
@media (max-width: 600px) {
  .ollama-guide {
    flex-direction: column;
    align-items: stretch;
  }
}
.guide-section {
  flex: 1;
  min-width: 120px;
  background: none;
  box-shadow: none;
  margin-bottom: 0;
  overflow: visible;
  border-radius: 0;
}
.section-header {
  background: #007bff;
  color: white;
  padding: 14px 0;
  font-size: 1.1em;
  font-weight: bold;
  margin: 0;
  border: none;
  cursor: pointer;
  transition: background-color 0.2s ease;
  position: relative;
  user-select: none;
  width: 100%;
  border-radius: 8px;
  text-align: center;
}
.section-header.active,
.section-header:hover {
  background: #0056b3;
}
</style>
