<template>
  <div>
    <div class="bf-container">
      <div class="bf-animation-container">
        <div class="bf-controls">
          <div>
            <button @click="nextStep">Nächster Schritt</button>
            <button @click="resetAnimation" style="background-color: #ff5555; color: white;">Reset</button>
            <button @click="toggleAutoAnimation">{{ autoAnimationRunning ? 'Animation stoppen' : 'Animation starten' }}</button>
            <label for="bfSpeedSlider">Geschwindigkeit:</label>
            <input type="range" id="bfSpeedSlider" min="50" max="4000" step="1" v-model="speed">
          </div>
          <div>
            <label for="bfNumPoints">Anzahl der Punkte:</label>
            <input type="number" id="bfNumPoints" min="3" max="25" v-model="numPoints" style="width:50px; height:30px;">
            <button @click="updateNumPoints">Zufällige Punkte</button>
            <button @click="importChristofidesPoints">Christofides Punkte importieren</button>
            <button @click="importNNPoints">NN-Punkte importieren</button>
            <label for="bfStartPoint">Startpunkt:</label>
            <input type="number" id="bfStartPoint" min="0" :max="numPoints-1" v-model="startPoint" style="width:50px; height:30px;">
            <button @click="updateStartPoint">Startpunkt setzen</button>
            <select id="bfConstellationSelect" @change="toggleConstellation($event.target.value)" style="height:30px;">
              <option value="">Sternenbild wählen...</option>
              <option v-for="(constellation, key) in constellations" :key="key" :value="key">
                {{ constellation }}
              </option>
            </select>
            <button @click="downloadGraph">Graph herunterladen</button>
          </div>
        </div>
        <canvas ref="canvas" width="800" height="600"></canvas>
      </div>
      <div class="bf-info-panel">
        <h3>Brute Force Daten</h3>
        <div v-html="dataOutputHtml"></div>
        <button @click="toggleFullTable">{{ showFullTable ? 'Tabelle ausblenden' : 'Tabelle anzeigen' }}</button>
        <div v-show="showFullTable" style="margin-top: 20px;" v-html="fullTableHtml"></div>
      </div>
    </div>
  </div>
</template>

<script>
import { isDarkMode, getGridColor, getTextColor, getPointColor, CONSTELLATIONS, createConstellationNodes } from '~/utils/algo/tsp-utils';

export default {
  name: 'BruteForceVisualizer',
  
  data() {
    return {
      // Konfiguration
      nodes: [],
      paths: [],
      canvas: null,
      ctx: null,
      width: 800,
      height: 600,
      gridSize: 50,
      
      // Animation
      currentStep: 0,
      startPoint: 0,
      numPoints: 4,
      speed: 1000,
      isAnimating: false,
      autoAnimationRunning: false,
      autoIntervalId: null,
      
      // UI
      showFullTable: false,
      dataOutputHtml: '',
      fullTableHtml: '',
      
      // Algorithmus
      bestPath: null,
      bestDistance: Infinity,
      
      // Sternbilder
      constellations: {
        libra: 'Waage (Libra)',
        orion: 'Orion',
        cassiopeia: 'Kassiopeia',
        myrtana: 'Myrtana'
      }
    };
  },
  
  mounted() {
    this.canvas = this.$refs.canvas;
    this.ctx = this.canvas.getContext('2d');
    this.width = this.canvas.width;
    this.height = this.canvas.height;
    
    // Zufällige Knotenpunkte generieren
    this.generateRandomPoints();
    
    // Alle möglichen Pfade berechnen
    this.calculateAllPaths();
    
    // Initial zeichnen
    this.draw();
    this.updateDataOutput();
  },
  
  methods: {
    nextStep() {
      if (this.currentStep < this.paths.length - 1) {
        this.currentStep++;
        this.draw();
        this.updateDataOutput();
      } else {
        if (this.autoAnimationRunning) {
          this.stopAutoAnimation();
        }
      }
    },
    
    resetAnimation() {
      this.stopAutoAnimation();
      this.currentStep = 0;
      this.draw();
      this.updateDataOutput();
    },
    
    toggleAutoAnimation() {
      if (this.autoAnimationRunning) {
        this.stopAutoAnimation();
      } else {
        this.startAutoAnimation();
      }
    },
    
    startAutoAnimation() {
      if (!this.autoAnimationRunning) {
        this.autoAnimationRunning = true;
        this.autoIntervalId = setInterval(() => {
          this.nextStep();
          if (this.currentStep >= this.paths.length - 1) {
            this.stopAutoAnimation();
          }
        }, this.speed);
      }
    },
    
    stopAutoAnimation() {
      if (this.autoIntervalId) {
        clearInterval(this.autoIntervalId);
        this.autoIntervalId = null;
        this.autoAnimationRunning = false;
      }
    },
    
    draw() {
      const ctx = this.ctx;
      
      // Canvas löschen
      ctx.clearRect(0, 0, this.width, this.height);
      
      // Hilfslinien zeichnen
      ctx.strokeStyle = getGridColor();
      ctx.lineWidth = 0.5;
      
      for (let i = 0; i <= this.width; i += this.gridSize) {
        ctx.beginPath();
        ctx.moveTo(i, 0);
        ctx.lineTo(i, this.height);
        ctx.stroke();
      }
      
      for (let i = 0; i <= this.height; i += this.gridSize) {
        ctx.beginPath();
        ctx.moveTo(0, i);
        ctx.lineTo(this.width, i);
        ctx.stroke();
      }
      
      // Aktuellen Pfad zeichnen
      const currentPath = this.paths[this.currentStep];
      if (currentPath) {
        // Pfad zeichnen
        ctx.strokeStyle = 'blue';
        ctx.lineWidth = 2;
        ctx.beginPath();
        
        const firstNodeId = currentPath[0];
        const firstNode = this.nodes.find(node => node.id === firstNodeId);
        ctx.moveTo(firstNode.x * this.gridSize, firstNode.y * this.gridSize);
        
        for (let i = 1; i < currentPath.length; i++) {
          const nodeId = currentPath[i];
          const node = this.nodes.find(node => node.id === nodeId);
          ctx.lineTo(node.x * this.gridSize, node.y * this.gridSize);
        }
        
        // Zurück zum Start für geschlossenen Pfad
        ctx.lineTo(firstNode.x * this.gridSize, firstNode.y * this.gridSize);
        ctx.stroke();
      }
      
      // Knoten zeichnen
      ctx.fillStyle = getPointColor();
      for (const node of this.nodes) {
        ctx.beginPath();
        ctx.arc(node.x * this.gridSize, node.y * this.gridSize, 5, 0, Math.PI * 2);
        ctx.fill();
        
        // ID darstellen
        ctx.fillStyle = getTextColor();
        ctx.font = '12px Arial';
        ctx.fillText(node.id.toString(), node.x * this.gridSize + 8, node.y * this.gridSize - 8);
        ctx.fillStyle = getPointColor();
      }
      
      // Startknoten markieren
      const startNode = this.nodes.find(node => node.id === this.startPoint);
      if (startNode) {
        ctx.fillStyle = 'green';
        ctx.beginPath();
        ctx.arc(startNode.x * this.gridSize, startNode.y * this.gridSize, 8, 0, Math.PI * 2);
        ctx.fill();
      }
    },
    
    calculateDistance(path) {
      let totalDistance = 0;
      for (let i = 0; i < path.length - 1; i++) {
        const node1 = this.nodes.find(node => node.id === path[i]);
        const node2 = this.nodes.find(node => node.id === path[i + 1]);
        
        // Euklidischer Abstand berechnen
        const dx = node2.x - node1.x;
        const dy = node2.y - node1.y;
        totalDistance += Math.sqrt(dx * dx + dy * dy);
      }
      
      // Entfernung vom letzten Knoten zurück zum ersten
      const firstNode = this.nodes.find(node => node.id === path[0]);
      const lastNode = this.nodes.find(node => node.id === path[path.length - 1]);
      const dx = lastNode.x - firstNode.x;
      const dy = lastNode.y - firstNode.y;
      totalDistance += Math.sqrt(dx * dx + dy * dy);
      
      return totalDistance;
    },
    
    generateRandomPoints() {
      this.nodes = [];
      for (let i = 0; i < this.numPoints; i++) {
        this.nodes.push({
          id: i,
          x: Math.floor(Math.random() * 15) + 1,
          y: Math.floor(Math.random() * 10) + 1
        });
      }
    },
    
    calculateAllPaths() {
      // Alle Knoten außer dem Startpunkt
      const otherNodes = this.nodes
        .filter(node => node.id !== parseInt(this.startPoint))
        .map(node => node.id);
      
      this.paths = [];
      this.bestPath = null;
      this.bestDistance = Infinity;
      
      // Permutationen berechnen
      this.generatePermutations([parseInt(this.startPoint)], otherNodes);
      
      // Nach Kosten sortieren
      this.paths.sort((a, b) => {
        return this.calculateDistance(a) - this.calculateDistance(b);
      });
    },
    
    generatePermutations(current, remaining) {
      if (remaining.length === 0) {
        // Eine vollständige Pfad-Permutation
        this.paths.push([...current]);
        
        // Distanz berechnen und ggf. als besten Pfad speichern
        const distance = this.calculateDistance([...current]);
        if (distance < this.bestDistance) {
          this.bestDistance = distance;
          this.bestPath = [...current];
        }
      } else {
        for (let i = 0; i < remaining.length; i++) {
          const next = remaining[i];
          
          // Nächste Permutationen generieren
          current.push(next);
          const newRemaining = [...remaining.slice(0, i), ...remaining.slice(i + 1)];
          this.generatePermutations(current, newRemaining);
          current.pop();
        }
      }
    },
    
    updateDataOutput() {
      const currentPath = this.paths[this.currentStep];
      if (!currentPath) return;
      
      const distance = this.calculateDistance(currentPath);
      let isOptimal = false;
      
      // Wenn dieser Pfad die kürzeste Distanz hat
      if (Math.abs(distance - this.bestDistance) < 0.0001) {
        isOptimal = true;
      }
      
      this.dataOutputHtml = `
        <p><strong>Aktueller Schritt:</strong> ${this.currentStep + 1} / ${this.paths.length}</p>
        <p><strong>Aktueller Pfad:</strong> ${currentPath.join(' → ')} → ${currentPath[0]}</p>
        <p><strong>Aktueller Abstand:</strong> ${distance.toFixed(2)} ${isOptimal ? '(optimal! ✓)' : ''}</p>
        <p><strong>Kürzester Pfad:</strong> ${this.bestPath ? this.bestPath.join(' → ') + ' → ' + this.bestPath[0] : '-'}</p>
        <p><strong>Kürzester Abstand:</strong> ${this.bestDistance < Infinity ? this.bestDistance.toFixed(2) : '-'}</p>
      `;
      
      this.showFullTable();
    },
    
    showFullTable() {
      let tableHtml = '<table class="selection-table">';
      tableHtml += '<thead><tr><th>Nr.</th><th>Pfad</th><th>Distanz</th><th>Optimal</th></tr></thead>';
      tableHtml += '<tbody>';
      
      for (let i = 0; i < this.paths.length; i++) {
        const pathDistance = this.calculateDistance(this.paths[i]);
        const isOptimal = Math.abs(pathDistance - this.bestDistance) < 0.0001;
        const isCurrentPath = i === this.currentStep;
        
        tableHtml += `<tr class="${isCurrentPath ? 'selected' : ''}">`;
        tableHtml += `<td>${i + 1}</td>`;
        tableHtml += `<td>${this.paths[i].join(' → ')} → ${this.paths[i][0]}</td>`;
        tableHtml += `<td>${pathDistance.toFixed(2)}</td>`;
        tableHtml += `<td>${isOptimal ? '✓' : ''}</td>`;
        tableHtml += '</tr>';
      }
      
      tableHtml += '</tbody></table>';
      
      this.fullTableHtml = tableHtml;
    },
    
    toggleFullTable() {
      this.showFullTable = !this.showFullTable;
    },
    
    updateNumPoints() {
      const newNumPoints = parseInt(this.numPoints);
      if (newNumPoints >= 3 && newNumPoints <= 25) {
        this.numPoints = newNumPoints;
        this.startPoint = 0;
        this.generateRandomPoints();
        this.calculateAllPaths();
        this.resetAnimation();
      }
    },
    
    updateStartPoint() {
      const newStartPoint = parseInt(this.startPoint);
      if (newStartPoint >= 0 && newStartPoint < this.numPoints) {
        this.startPoint = newStartPoint;
        this.calculateAllPaths();
        this.resetAnimation();
      }
    },
    
    toggleConstellation(selectedType) {
      if (!selectedType) return;
      
      const points = createConstellationNodes(selectedType, parseInt(this.numPoints));
      if (points && points.length > 0) {
        this.nodes = points;
        this.startPoint = 0;
        this.calculateAllPaths();
        this.resetAnimation();
      }
    },
    
    downloadGraph() {
      const link = document.createElement('a');
      link.download = 'brute_force_graph.png';
      link.href = this.canvas.toDataURL('image/png');
      link.click();
    },
    
    importChristofidesPoints() {
      // Hier würden die Christofides-Punkte importiert werden
      console.log('Import von Christofides-Punkten noch nicht implementiert');
      alert("Diese Funktion verlangt die Implementierung der Christofides-Komponente");
    },
    
    importNNPoints() {
      // Hier würden die Nearest-Neighbor-Punkte importiert werden
      console.log('Import von NN-Punkten noch nicht implementiert');
      alert("Diese Funktion verlangt die Implementierung der Nearest-Neighbor-Komponente");
    }
  },
  
  watch: {
    speed(newValue) {
      if (this.autoAnimationRunning) {
        this.stopAutoAnimation();
        this.startAutoAnimation();
      }
    }
  }
};
</script>

<style scoped>
.bf-container {
  display: flex;
  margin-bottom: 30px;
}

.bf-animation-container {
  flex: 1;
}

.bf-info-panel {
  flex: 0 0 500px;
  margin-left: 20px;
  background: #f2f2f2;
  padding: 10px;
  font-family: sans-serif;
  font-size: 14px;
  overflow-y: auto;
  max-height: 900px;
  border-radius: 4px;
}

.bf-controls {
  margin-bottom: 10px;
}

.bf-controls > div {
  margin: 10px 0;
}

.bf-controls > div > * {
  margin-right: 10px;
}

canvas {
  border: 1px solid black;
  display: block;
}

button {
  padding: 6px 12px;
  background-color: #4CAF50;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

button:hover {
  background-color: #45a049;
}

.selection-table {
  width: 100%;
  border-collapse: collapse;
  margin: 10px 0;
}

.selection-table th,
.selection-table td {
  border: 1px solid #ddd;
  padding: 4px;
  text-align: center;
}

.selection-table .selected {
  background-color: #d4ffd4;
  font-weight: bold;
}

/* Dark mode tweaks */
:global([data-theme-setting="dark"]) .bf-info-panel {
  background: #333;
  color: #eee;
}

:global([data-theme-setting="dark"]) .selection-table th,
:global([data-theme-setting="dark"]) .selection-table td {
  border-color: #444;
  background-color: #222;
}

:global([data-theme-setting="dark"]) .selection-table .selected {
  background-color: #2a4d2a;
}
</style>