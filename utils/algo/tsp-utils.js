/**
 * Utility-Funktionen für die TSP-Algorithmus-Visualisierungen
 */

// Konstante für die Sternbildkoordinaten
export const CONSTELLATIONS = {
    // Waage (Libra)
    libra: [
      { x: 21, y: 5 },
      { x: 13, y: 13 },
      { x: 5, y: 21 },
      { x: 13, y: 29 },
      { x: 21, y: 29 },
      { x: 29, y: 29 },
      { x: 37, y: 21 },
      { x: 29, y: 13 },
      { x: 21, y: 21 },
      { x: 29, y: 37 }
    ],
    orion: [
      { x: 21, y: 5 },
      { x: 13, y: 13 },
      { x: 5, y: 21 },
      { x: 13, y: 29 },
      { x: 21, y: 29 },
      { x: 29, y: 29 },
      { x: 37, y: 21 },
      { x: 29, y: 13 },
      { x: 21, y: 37 },
      { x: 21, y: 45 }
    ],
    cassiopeia: [
      { x: 7, y: 10 },
      { x: 13, y: 25 },
      { x: 21, y: 10 },
      { x: 33, y: 25 },
      { x: 43, y: 10 }
    ],
    myrtana: [
      { x: 40, y: 20 },
      { x: 36, y: 32 },
      { x: 25, y: 20 },
      { x: 10, y: 35 },
      { x: 18, y: 10 },
    ]
  };
  
  /**
   * Überprüft, ob der Dark Mode aktiv ist
   * @returns {boolean} true wenn Dark Mode aktiv ist
   */
  export function isDarkMode() {
    if (typeof window === 'undefined') return false;
    
    return document.documentElement.getAttribute('data-theme-setting') === "dark" ||
      (document.documentElement.getAttribute('data-theme-setting') === null && 
        window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches);
  }
  
  /**
   * Gibt die Rasterfarbe basierend auf dem Theme zurück
   * @returns {string} Farbe für das Raster
   */
  export function getGridColor() {
    return isDarkMode() ? "#999" : "#ccc";
  }
  
  /**
   * Gibt die Textfarbe basierend auf dem Theme zurück
   * @returns {string} Farbe für Text
   */
  export function getTextColor() {
    return isDarkMode() ? "#fff" : "black";
  }
  
  /**
   * Gibt die Punktfarbe basierend auf dem Theme zurück
   * @returns {string} Farbe für Punkte
   */
  export function getPointColor() {
    return isDarkMode() ? "#ffffff" : "#000000";
  }
  
  /**
   * Erstellt Knoten aus Sternbildkoordinaten
   * @param {string} selectedType - Schlüssel des Sternbilds
   * @param {number} count - Anzahl der Punkte (0 für alle)
   * @returns {Array} Array mit Knotendaten
   */
  export function createConstellationNodes(selectedType, count) {
    const baseNodes = CONSTELLATIONS[selectedType];
    if (!baseNodes) return [];
    
    let nodes = [];
    
    if (count === baseNodes.length || count <= 0) {
      // Wenn die Anzahl gleich ist oder keine Anzahl angegeben wurde, 
      // verwenden wir alle Punkte des Sternbilds
      nodes = baseNodes.map((pt, i) => ({ ...pt, id: i }));
    } else {
      // Interpolation für andere Anzahlen
      const totalSegments = baseNodes.length - 1;
      for (let i = 0; i < count; i++) {
        const t = i / (count - 1);
        const segment = Math.min(Math.floor(t * totalSegments), totalSegments - 1);
        const localT = (t * totalSegments) - segment;
        const p0 = baseNodes[segment];
        const p1 = baseNodes[segment + 1];
        const x = p0.x + (p1.x - p0.x) * localT;
        const y = p0.y + (p1.y - p0.y) * localT;
        nodes.push({ x: Math.round(x), y: Math.round(y), id: i });
      }
    }
    
    return nodes;
  }