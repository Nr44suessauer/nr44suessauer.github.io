// h:\vueTemplate\nr44suessauer.github.io\utils\algo\tsp-utils.js
export class BruteForceAnimation {
    constructor(canvas, numNodes, startNode) {
      this.canvas = canvas
      this.ctx = canvas.getContext('2d')
      // Initialisiere hier deine Brute-Force-Logik
    }
  
    nextStep() {
      // Implementiere die Brute-Force-Schrittlogik
    }
  
    getFormattedInfo() {
      // Gib formatierte Informationen zurück
      return `
        <h4>Brute Force Status</h4>
        <p>Anzahl Knoten: ${this.numNodes}</p>
        <p>Geprüfte Permutationen: ${this.currentStep}/${this.totalSteps}</p>
      `
    }
  }