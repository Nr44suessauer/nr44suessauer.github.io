document.addEventListener('DOMContentLoaded', function() {
  const matrixBg = document.createElement('div');
  matrixBg.classList.add('matrix-bg');
  
  const matrixRain = document.createElement('div');
  matrixRain.classList.add('matrix-rain');
  matrixBg.appendChild(matrixRain);
  
  document.body.appendChild(matrixBg);
  
  // Matrix Charaktere
  const matrixChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@#$%^&*()_+-=[]{}|;:,.<>?/~`';
  
  // Anzahl der Spalten basierend auf der Bildschirmbreite
  const columns = Math.floor(window.innerWidth / 20);
  
  // Arrays für Drop-Position und -Geschwindigkeit
  const drops = [];
  const speeds = [];
  const delays = [];
  const opacities = [];
  
  // Initialisiere die Arrays
  for(let i = 0; i < columns; i++) {
    drops[i] = -Math.random() * 100; // Starte außerhalb des Bildschirms
    speeds[i] = 1 + Math.random() * 3; // Unterschiedliche Fallgeschwindigkeiten
    delays[i] = Math.random() * 5000; // Zufällige Startverzögerungen
    opacities[i] = 0.7 + Math.random() * 0.3; // Unterschiedliche Opazitäten
  }
  
  // Funktion zum Erstellen und Animieren der Tropfen
  function createMatrixRain() {
    matrixRain.innerHTML = ''; // Bereinige bestehende Tropfen
    
    for(let i = 0; i < columns; i++) {
      const drop = document.createElement('div');
      drop.classList.add('matrix-drop');
      
      // Zufälliges Zeichen aus matrixChars
      drop.textContent = matrixChars.charAt(Math.floor(Math.random() * matrixChars.length));
      
      // Positionierung und Styling
      drop.style.left = (i * 20) + 'px';
      drop.style.animationDuration = (8 / speeds[i]) + 's';
      drop.style.animationDelay = delays[i] + 'ms';
      drop.style.opacity = opacities[i];
      
      matrixRain.appendChild(drop);
    }
  }
  
  // Erzeuge die Tropfen
  createMatrixRain();
  
  // Aktualisiere die Matrix in regelmäßigen Abständen
  setInterval(createMatrixRain, 10000);
  
  // Bei Größenänderung des Fensters die Matrix anpassen
  window.addEventListener('resize', function() {
    createMatrixRain();
  });
});

// Optional: Canvas-basierte Matrix-Animation (kann mit dem CSS-Effekt kombiniert werden)
document.addEventListener('DOMContentLoaded', function() {
  const canvas = document.createElement('canvas');
  canvas.id = 'matrix-canvas';
  
  const matrixBg = document.querySelector('.matrix-bg');
  if (matrixBg) {
    matrixBg.appendChild(canvas);
  } else {
    document.body.appendChild(canvas);
  }
  
  const ctx = canvas.getContext('2d');
  
  // Größe des Canvas an den Bildschirm anpassen
  function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }
  
  resizeCanvas();
  window.addEventListener('resize', resizeCanvas);
  
  // Matrix-Charaktere
  const matrix = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%^&*()_+-=[]{}|;:,./<>?~`';
  
  // Schriftgröße
  const fontSize = 16;
  
  // Anzahl der Spalten für die Matrix
  let columns = Math.floor(canvas.width / fontSize);
  
  // Ein Array für jede Spalte (Y-Position)
  const drops = [];
  
  // Initialisiere alle Tropfen auf Position 1
  for (let i = 0; i < columns; i++) {
    drops[i] = Math.random() * -100;
  }
  
  // Zeichne die Matrix
  function draw() {
    // Schwarzer Hintergrund mit Transparenz für Trail-Effekt
    ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    
    // Grüne Text-Farbe
    ctx.fillStyle = '#00ff41';
    ctx.font = fontSize + 'px monospace';
    
    // Loop über jede Spalte
    for (let i = 0; i < drops.length; i++) {
      // Wähle ein zufälliges Zeichen
      const text = matrix[Math.floor(Math.random() * matrix.length)];
      
      // Zeichne das Zeichen
      ctx.fillText(text, i * fontSize, drops[i] * fontSize);
      
      // Erhöhe Y-Position für den nächsten Frame
      drops[i]++;
      
      // Wenn der Tropfen das Ende des Bildschirms erreicht, setze ihn zurück
      if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
        drops[i] = 0;
      }
    }
  }
  
  // Rufe draw() alle 35ms auf
  setInterval(draw, 35);
});
