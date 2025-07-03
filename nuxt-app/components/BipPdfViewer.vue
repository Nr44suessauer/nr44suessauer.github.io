<template>
  <div class="pdf-viewer">
    <h3>BIP Program Documents</h3>
    
    <div class="pdf-list">
      <div 
        v-for="(pdf, index) in pdfFiles" 
        :key="index"
        class="pdf-item"
      >
        <div class="pdf-icon">📄</div>
        <div class="pdf-info">
          <h4>{{ pdf.title }}</h4>
          <p>{{ pdf.description }}</p>
        </div>
        <div class="pdf-actions">
          <a :href="pdf.src" target="_blank" class="action-btn primary">
            📥 Download PDF
          </a>
          <a :href="pdf.githubSrc" target="_blank" class="action-btn secondary">
            🔗 View on GitHub
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
// PDF files data
const pdfFiles = [
  {
    src: "https://github.com/Nr44suessauer/nr44suessauer.github.io/raw/main/nuxt-app/assets/pdf/BIP/BIP-2025-program_SEEU_V3.pdf",
    githubSrc: "https://github.com/Nr44suessauer/nr44suessauer.github.io/blob/main/nuxt-app/assets/pdf/BIP/BIP-2025-program_SEEU_V3.pdf",
    title: "BIP 2025 Program - S.E.E.U. V3",
    description: "Official program documentation for the BIP 2025 exchange at South East European University"
  },
  {
    src: "https://github.com/Nr44suessauer/nr44suessauer.github.io/raw/main/nuxt-app/assets/pdf/BIP/output_bip.pdf",
    githubSrc: "https://github.com/Nr44suessauer/nr44suessauer.github.io/blob/main/nuxt-app/assets/pdf/BIP/output_bip.pdf",
    title: "BIP Output Document", 
    description: "Summary and output documentation from the BIP program"
  }
]
</script>

<style scoped>
.pdf-viewer {
  margin: 30px 0;
}

.pdf-viewer h3 {
  color: #333;
  margin-bottom: 25px;
  font-size: 1.6rem;
  text-align: center;
}

.pdf-list {
  display: flex;
  flex-direction: column;
  gap: 20px;
  max-width: 800px;
  margin: 0 auto;
}

.pdf-item {
  display: flex;
  align-items: center;
  padding: 20px;
  border: 2px solid #e0e0e0;
  border-radius: 12px;
  background: linear-gradient(135deg, #fafafa 0%, #f0f0f0 100%);
  transition: all 0.3s ease;
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
}

.pdf-item:hover {
  border-color: #007bff;
  background: linear-gradient(135deg, #f0f8ff 0%, #e6f3ff 100%);
  transform: translateY(-3px);
  box-shadow: 0 6px 20px rgba(0,123,255,0.2);
}

.pdf-icon {
  font-size: 3rem;
  margin-right: 20px;
  color: #dc3545;
  min-width: 60px;
  text-align: center;
}

.pdf-info {
  flex: 1;
  margin-right: 20px;
}

.pdf-info h4 {
  margin: 0 0 8px 0;
  color: #333;
  font-size: 1.2rem;
  font-weight: 600;
}

.pdf-info p {
  margin: 0;
  color: #666;
  font-size: 0.95rem;
  line-height: 1.4;
}

.pdf-actions {
  display: flex;
  flex-direction: column;
  gap: 10px;
  min-width: 180px;
}

.action-btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: 10px 16px;
  border-radius: 6px;
  text-decoration: none;
  font-weight: 500;
  font-size: 0.9rem;
  transition: all 0.3s ease;
  text-align: center;
}

.action-btn.primary {
  background: #007bff;
  color: white;
  border: 2px solid #007bff;
}

.action-btn.primary:hover {
  background: #0056b3;
  border-color: #0056b3;
  transform: translateY(-1px);
  box-shadow: 0 4px 12px rgba(0,123,255,0.3);
}

.action-btn.secondary {
  background: transparent;
  color: #6c757d;
  border: 2px solid #6c757d;
}

.action-btn.secondary:hover {
  background: #6c757d;
  color: white;
  transform: translateY(-1px);
  box-shadow: 0 4px 12px rgba(108,117,125,0.3);
}

/* Mobile Responsive */
@media (max-width: 768px) {
  .pdf-item {
    flex-direction: column;
    text-align: center;
    gap: 15px;
  }
  
  .pdf-icon {
    margin-right: 0;
    margin-bottom: 10px;
  }
  
  .pdf-info {
    margin-right: 0;
    margin-bottom: 15px;
  }
  
  .pdf-actions {
    flex-direction: row;
    justify-content: center;
    min-width: auto;
    width: 100%;
  }
  
  .action-btn {
    flex: 1;
    min-width: 120px;
  }
}

@media (max-width: 480px) {
  .pdf-actions {
    flex-direction: column;
  }
  
  .action-btn {
    width: 100%;
  }
}
</style>
