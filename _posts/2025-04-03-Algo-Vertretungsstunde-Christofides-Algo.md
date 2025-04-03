---
layout: post
title: Christofides Algorithm
date: 2026-12-30 10:00:00
description: Algorithm & Datastructure
tags: Algo Christofides NearestNeighbor BruteForce
categories: lecture
disqus_comments: true
featured: false
---

<head>
    <title>Christofides Algorithm Animation</title>
    <style>
        .container {
            display: flex;
        }
        .animation-container {
            flex: 1;
        }
        #infoPanel {
            flex: 0 0 300px;
            margin-left: 20px;
            background: #f2f2f2;
            padding: 10px;
            font-family: sans-serif;
            font-size: 14px;
            overflow-y: auto;
            max-height: 600px;
        }
        canvas {
            border: 1px solid black;
            display: block;
        }
        .controls > div {
            margin: 10px 0;
        }
        .controls > div > * {
            margin-right: 10px;
        }
        /* Reduziere die Eingabefelder um 50% in der Darstellung */
        #speedSlider,
        #numPoints {
            transform: scale(1);
            transform-origin: left center;
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="animation-container">
            <div class="controls">
                <div>
                    <button onclick="nextStep()">Nächster Schritt</button>
                    <button onclick="resetAnimation()">Reset</button>
                    <!-- Button mit Toggle-Funktion: startet oder stoppt die Animation -->
                    <button onclick="toggleAutoAnimation()">Animation Start/Stop</button>
                    <label for="speedSlider">Geschwindigkeit:</label>
                    <!-- Der Slider wird jetzt in Prozent angegeben: 50% verlangsamt (2000ms) und 200% beschleunigt (500ms). -->
                    <input type="range" id="speedSlider" min="50" max="200" step="1" value="100">
                </div>
                <div>
                    <label for="numPoints">Anzahl der Punkte:</label>
                    <!-- Das Eingabefeld wurde auf doppelte Breite vergrößert und die standardmäßig angezeigte Zahl um 100% erhöht -->
                    <input type="number" id="numPoints" min="3" max="25" value="4" style="width:50px; height:30px;">
                    <button onclick="updateNumPoints()">Punkte Aktualisieren</button>
                    <button onclick="downloadGraph()">Graph herunterladen</button>
                </div>
            </div>
            <canvas id="canvas" width="800" height="600"></canvas>
        </div>
        <div id="infoPanel">
            <h3>Animationsdaten</h3>
            <div id="dataOutput">Warte auf den ersten Schritt...</div>
        </div>
    </div>
    <script>
class ChristofidesAnimation {
    constructor(canvas, numNodes = 8) {
        this.canvas = canvas;
        this.ctx = canvas.getContext('2d');
        this.ctx.setTransform(1, 0, 0, 1, 0, 0);
        // Skalierung des canvas: logische Koordinaten von 0 bis 100 in X und 0 bis 50 in Y
        this.ctx.scale(canvas.width / 50, canvas.height / 50);
        this.numNodes = numNodes;
        this.nodes = [];
        this.mstEdges = [];
        this.oddNodes = [];
        this.matchingEdges = [];
        this.eulerianCircuit = [];
        this.tspPath = [];
        // Phasen: 'mst', 'odd', 'matching', 'euler', 'eulerComplete', 'tsp'
        this.phase = 'mst';
        this.lastPhase = null;  
        this.currentMSTIndex = 0;
        this.currentMatchingIndex = 0;
        this.currentEulerIndex = 1; 
        this.currentTSPIndex = 1;
        // Verfolgte bereits gezeichnete Kanten.
        this.drawnEdges = new Map();
        this.init();
        this.drawNodes(); 
    }
    // Zeichnet ein Koordinatensystem als Raster: X von 0 bis 100, Y von 0 bis 50
    drawCoordinateSystem() {
        this.ctx.strokeStyle = "#ccc";
        this.ctx.lineWidth = 0.1;
        // Vertikale Linien alle 10 Einheiten
        for (let x = 0; x <= 100; x += 10) {
            this.ctx.beginPath();
            this.ctx.moveTo(x, 0);
            this.ctx.lineTo(x, 50);
            this.ctx.stroke();
        }
        // Horizontale Linien alle 5 Einheiten
        for (let y = 0; y <= 50; y += 5) {
            this.ctx.beginPath();
            this.ctx.moveTo(0, y);
            this.ctx.lineTo(100, y);
            this.ctx.stroke();
        }
    }
    init() {
        this.generateNodes();
        this.computeMST();
        this.findOddNodes();
        this.computeMatching();
        this.computeEulerianCircuit();
        this.computeTSPPath();
    }
    // Generiert Knoten mit ganzzahligen Werten zwischen 5 und 40.
    generateNodes() {
        for (let i = 0; i < this.numNodes; i++) {
            this.nodes.push({
                x: Math.floor(Math.random() * (40 - 5 + 1)) + 5,
                y: Math.floor(Math.random() * (40 - 5 + 1)) + 5,
                id: i
            });
        }
    }
    computeMST() {
        const inTree = new Set([0]);
        this.mstEdges = [];
        while (inTree.size < this.numNodes) {
            let minEdge = null;
            for (const node of inTree) {
                for (let i = 0; i < this.numNodes; i++) {
                    if (!inTree.has(i)) {
                        const distance = this.distance(this.nodes[node], this.nodes[i]);
                        if (!minEdge || distance < minEdge.distance) {
                            minEdge = { from: node, to: i, distance };
                        }
                    }
                }
            }
            if (minEdge) {
                this.mstEdges.push(minEdge);
                inTree.add(minEdge.to);
            }
        }
    }
    distance(a, b) {
        return Math.sqrt((a.x - b.x) ** 2 + (a.y - b.y) ** 2);
    }
    findOddNodes() {
        const degrees = new Array(this.numNodes).fill(0);
        for (const edge of this.mstEdges) {
            degrees[edge.from]++;
            degrees[edge.to]++;
        }
        this.oddNodes = degrees.reduce((acc, d, i) => (d % 2 ? [...acc, i] : acc), []);
    }
    computeMatching() {
        const matchings = this.generateAllMatchings([...this.oddNodes]);
        let minMatching = null;
        let minDistance = Infinity;
        for (const matching of matchings) {
            const total = matching.reduce((sum, [a, b]) =>
                sum + this.distance(this.nodes[a], this.nodes[b]), 0);
            if (total < minDistance) {
                minDistance = total;
                minMatching = matching;
            }
        }
        this.matchingEdges = minMatching.map(([a, b]) => ({
            from: a,
            to: b,
            distance: this.distance(this.nodes[a], this.nodes[b])
        }));
    }
    generateAllMatchings(nodes) {
        if (nodes.length === 0) return [[]];
        const [first, ...rest] = nodes;
        return rest.flatMap((node, i) => {
            const newRest = rest.filter((_, j) => j !== i);
            return this.generateAllMatchings(newRest).map(match => [[first, node], ...match]);
        });
    }
    computeEulerianCircuit() {
        const adj = new Map();
        const addEdge = (from, to) => {
            if (!adj.has(from)) adj.set(from, []);
            adj.get(from).push(to);
        };
        [...this.mstEdges, ...this.matchingEdges].forEach(edge => {
            addEdge(edge.from, edge.to);
            addEdge(edge.to, edge.from);
        });
        const stack = [0];
        const circuit = [];
        while (stack.length) {
            let current = stack[stack.length - 1];
            if (adj.get(current)?.length) {
                const next = adj.get(current).pop();
                stack.push(next);
            } else {
                circuit.push(stack.pop());
            }
        }
        this.eulerianCircuit = circuit.reverse();
    }
    computeTSPPath() {
        const visited = new Set();
        this.tspPath = [];
        for (const node of this.eulerianCircuit) {
            if (!visited.has(node)) {
                visited.add(node);
                this.tspPath.push(node);
            }
        }
        this.tspPath.push(this.tspPath[0]);
    }
    drawNodes() {
        // Zeichnet zuerst das Koordinatensystem
        this.drawCoordinateSystem();
        this.nodes.forEach(node => {
            this.ctx.beginPath();
            this.ctx.arc(node.x, node.y, 0.5, 0, Math.PI * 2);
            this.ctx.fillStyle = 'black';
            this.ctx.fill();
            this.ctx.font = "1.5px sans-serif";
            this.ctx.fillStyle = 'black';
            this.ctx.textAlign = "center";
            const label = `P${node.id}`;
            this.ctx.fillText(label, node.x, node.y - 1.2);
        });
    }
    drawEdges(edges, color) {
        edges.forEach(edge => {
            const key = [Math.min(edge.from, edge.to), Math.max(edge.from, edge.to)].join('-');
            let useColor = color;
            if (this.drawnEdges.has(key) && this.drawnEdges.get(key) === color) {
                useColor = this.getComplementaryColor(color);
            }
            this.ctx.strokeStyle = useColor;
            this.ctx.lineWidth = 0.3;
            const from = this.nodes[edge.from];
            const to = this.nodes[edge.to];
            this.ctx.beginPath();
            this.ctx.moveTo(from.x, from.y);
            this.ctx.lineTo(to.x, to.y);
            this.ctx.stroke();
            this.drawnEdges.set(key, useColor);
        });
    }
    getComplementaryColor(color) {
        const comp = {
            "blue": "orange",
            "green": "magenta",
            "purple": "yellow",
            "orange": "blue"
        };
        return comp[color] || "black";
    }
    highlightOddNodes() {
        this.oddNodes.forEach(id => {
            const node = this.nodes[id];
            this.ctx.beginPath();
            this.ctx.arc(node.x, node.y, 0.8, 0, Math.PI * 2);
            this.ctx.fillStyle = 'rgba(255, 0, 0, 0.5)';
            this.ctx.fill();
        });
    }
    drawEulerEdge(index) {
        if (index <= 0 || index >= this.eulerianCircuit.length) return;
        const from = this.nodes[this.eulerianCircuit[index - 1]];
        const to = this.nodes[this.eulerianCircuit[index]];
        this.drawEdges([{ from: this.eulerianCircuit[index - 1], to: this.eulerianCircuit[index] }], 'purple');
    }
    drawTSPPath(index) {
        if (index <= 0 || index >= this.tspPath.length) return;
        this.ctx.strokeStyle = 'orange';
        this.ctx.lineWidth = 0.5;
        this.ctx.beginPath();
        const startNode = this.nodes[this.tspPath[0]];
        this.ctx.moveTo(startNode.x, startNode.y);
        for (let i = 1; i <= index; i++) {
            const node = this.nodes[this.tspPath[i]];
            this.ctx.lineTo(node.x, node.y);
        }
        this.ctx.stroke();
    }
    nextStep() {
        // Entfernt das Leeren des Canvas, sodass frühere MST-, Euler- und TSP-Darstellungen erhalten bleiben.
        if (this.phase === 'mst') {
            const edge = this.mstEdges[this.currentMSTIndex];
            if (edge) {
                this.drawEdges([edge], 'blue');
                this.currentMSTIndex++;
            }
            if (this.currentMSTIndex >= this.mstEdges.length) {
                this.phase = 'odd';
            }
        }
        else if (this.phase === 'odd') {
            this.highlightOddNodes();
            // Lösche das Canvas bevor wir zur matching Phase wechseln
            this.ctx.clearRect(0, 0, 100, 50);
            this.drawnEdges.clear();
            this.drawNodes();
            this.highlightOddNodes();
            this.phase = 'matching';
        }
        else if (this.phase === 'matching') {
            const edge = this.matchingEdges[this.currentMatchingIndex];
            if (edge) {
                this.drawEdges([edge], 'green');
                this.currentMatchingIndex++;
            }
            if (this.currentMatchingIndex >= this.matchingEdges.length) {
                this.phase = 'euler';
                this.currentEulerIndex = 1;
            }
        }
        else if (this.phase === 'euler') {
            this.drawEulerEdge(this.currentEulerIndex);
            this.currentEulerIndex++;
            if (this.currentEulerIndex >= this.eulerianCircuit.length) {
                this.phase = 'eulerComplete';
            }
        }
        else if (this.phase === 'eulerComplete') {
            // Übergang zur TSP-Phase: Lösche alle gezeichneten Pfade, behalte nur die Knoten
            this.ctx.clearRect(0, 0, 100, 50);
            this.drawnEdges.clear();
            this.drawNodes();
            // Markiere nur die ungeraden Knoten, ohne MST oder Matching neu zu zeichnen
            this.highlightOddNodes();
            this.phase = 'tsp';
            this.currentTSPIndex = 1;
        }
        else if (this.phase === 'tsp') {
            this.drawTSPPath(this.currentTSPIndex);
            this.currentTSPIndex++;
            if (this.currentTSPIndex >= this.tspPath.length) {
                stopAutoAnimation();
            }
        }
        updateInfoPanel();
    }
}
let animation = new ChristofidesAnimation(document.getElementById('canvas'), 8);
let autoIntervalId = null;
function updateInfoPanel() {
    const dataOutput = document.getElementById('dataOutput');
    
    // Show current phase at the top
    let html = "<strong>Aktuelle Phase:</strong> ";
    const phases = {
        'mst': 'Minimum Spanning Tree (MST)',
        'odd': 'Identifikation ungerader Knoten',
        'matching': 'Minimales perfektes Matching',
        'euler': 'Euler-Kreis im Multigraphen',
        'eulerComplete': 'Euler-Kreis komplett',
        'tsp': 'Hamilton-Kreis durch Shortcutting'
    };
    html += phases[animation.phase] || animation.phase.toUpperCase();
    html += "<hr>";
    
    html += "<strong>Generierte Punkte:</strong><br>";
    html += animation.nodes.map(node => "P" + node.id + ": (" + node.x + ", " + node.y + ")").join("<br>") + "<hr>";
    // Show MST edges
    html += "<strong>MST Kanten:</strong><br>";
    if (animation.currentMSTIndex === 0) {
        html += "Noch keine MST-Kanten gezeichnet";
    } else {
        html += animation.mstEdges.slice(0, animation.currentMSTIndex)
            .map(e => "Von " + e.from + " nach " + e.to + " (Distanz: " + e.distance.toFixed(2) + ")")
            .join("<br>");
    }
    html += "<hr>";
    // Show odd nodes
    html += "<strong>Ungerade Knoten:</strong><br>";
    if (animation.phase === 'mst' && animation.currentMSTIndex < animation.mstEdges.length) {
        html += "Wird nach Fertigstellung des MST berechnet";
    } else {
        html += animation.oddNodes.join(", ");
    }
    html += "<hr>"; 
    // Show matching edges
    html += "<strong>Matching Kanten:</strong><br>";
    if (animation.phase === 'mst' || animation.phase === 'odd') {
        html += "Wird nach Identifikation ungerader Knoten berechnet";
    } else if (animation.currentMatchingIndex === 0) {
        html += "Noch keine Matching-Kanten gezeichnet";
    } else {
        html += animation.matchingEdges.slice(0, animation.currentMatchingIndex)
            .map(e => "Von " + e.from + " nach " + e.to + " (Distanz: " + e.distance.toFixed(2) + ")")
            .join("<br>");
    }
    html += "<hr>";
    // Show Euler circuit
    html += "<strong>Eulerischer Pfad:</strong><br>";
    if (animation.phase === 'mst' || animation.phase === 'odd' || animation.phase === 'matching') {
        html += "Wird nach Abschluss des Matchings berechnet";
    } else if (animation.currentEulerIndex <= 1 && animation.phase === 'euler') {
        html += animation.eulerianCircuit[0];
    } else {
        html += animation.eulerianCircuit.slice(0, 
               animation.phase === 'eulerComplete' || animation.phase === 'tsp' ? 
                animation.eulerianCircuit.length : animation.currentEulerIndex).join(" → ");
    }
    html += "<hr>";
    // Show TSP path
    html += "<strong>TSP Pfad:</strong><br>";
    if (animation.phase !== 'tsp') {
        html += "Wird im letzten Schritt berechnet";
    } else if (animation.currentTSPIndex <= 1) {
        html += animation.tspPath[0];
    } else {
        let path = animation.tspPath.slice(0, animation.currentTSPIndex).join(" → ");
        if (animation.currentTSPIndex >= animation.tspPath.length) {
            let totalLength = 0;
            for (let i = 1; i < animation.tspPath.length; i++) {
                totalLength += animation.distance(animation.nodes[animation.tspPath[i-1]], animation.nodes[animation.tspPath[i]]);
            }
            path += "<br>Gesamtlänge: " + totalLength.toFixed(2);
        }
        html += path;
    }
    dataOutput.innerHTML = html;
}
function nextStep() {
    if (!animation) return;
    animation.nextStep();
}
function startAutoAnimation() {
    if (autoIntervalId) return;
    // Kein erneutes Leeren des Canvas, damit alle bisherigen Darstellungen sichtbar bleiben.
    const slider = document.getElementById('speedSlider');
    const percent = parseInt(slider.value);
    // Bei 100% entspricht die Geschwindigkeit 1000ms.
    // Höhere Prozentwerte verringern das Intervall (schneller) und niedrigere erhöhen es (langsamer).
    const speed = 1000 * (100 / percent);
    autoIntervalId = setInterval(() => {
        animation.nextStep();
    }, speed);
}
// Neue Toggle-Funktion: Startet die Animation, wenn sie gestoppt ist, und stoppt sie, wenn sie läuft.
function toggleAutoAnimation() {
    if (autoIntervalId) {
        stopAutoAnimation();
    } else {
        startAutoAnimation();
    }
}
document.getElementById('speedSlider').addEventListener('input', function() {
    if (autoIntervalId) {
        clearInterval(autoIntervalId);
        const percent = parseInt(this.value);
        const speed = 1000 * (100 / percent);
        autoIntervalId = setInterval(() => {
            animation.nextStep();
        }, speed);
    }
});
function stopAutoAnimation() {
    if (autoIntervalId) {
        clearInterval(autoIntervalId);
        autoIntervalId = null;
    }
}
function resetAnimation() {
    stopAutoAnimation();
    if (animation) {
        // Beim Reset wird das Canvas dennoch neu gezeichnet.
        animation.ctx.clearRect(0, 0, 100, 50);
        animation.phase = 'mst';
        animation.lastPhase = null;
        animation.currentMSTIndex = 0;
        animation.currentMatchingIndex = 0;
        animation.currentEulerIndex = 1;
        animation.currentTSPIndex = 1;
        animation.drawnEdges.clear();
        animation.drawNodes();
        updateInfoPanel();
    }
}
function updateNumPoints() {
    stopAutoAnimation();
    const numPoints = parseInt(document.getElementById('numPoints').value);
    animation = new ChristofidesAnimation(document.getElementById('canvas'), numPoints);
    animation.ctx.clearRect(0, 0, 100, 50);
    animation.drawNodes();
    updateInfoPanel();
}
// Neue Funktion: Ermöglicht das Herunterladen des Graphen als PNG-Bild.
// Hintergrund wird weiß gesetzt, bevor der Graph heruntergeladen wird.
function downloadGraph() {
    const canvas = document.getElementById('canvas');
    const tmpCanvas = document.createElement('canvas');
    tmpCanvas.width = canvas.width;
    tmpCanvas.height = canvas.height;
    const tmpCtx = tmpCanvas.getContext('2d');
    tmpCtx.fillStyle = 'white';
    tmpCtx.fillRect(0, 0, tmpCanvas.width, tmpCanvas.height);
    tmpCtx.drawImage(canvas, 0, 0);
    const link = document.createElement('a');
    link.download = 'graph.png';
    link.href = tmpCanvas.toDataURL('image/png');
    link.click();
}
function drawGraphData() {
    // Try to update the separate data canvas if it exists.
    const dataCanvas = document.getElementById('dataCanvas');
    if (dataCanvas) {
        const ctx = dataCanvas.getContext('2d');
        // Clear and prepare the data canvas
        ctx.clearRect(0, 0, dataCanvas.width, dataCanvas.height);
        ctx.fillStyle = 'white';
        ctx.fillRect(0, 0, dataCanvas.width, dataCanvas.height);
        // Set up text styling
        ctx.fillStyle = "black";
        ctx.font = "14px sans-serif";
        const lineHeight = 18;
        let y = lineHeight;
        // Title for the data box
        ctx.fillText("Graph Daten:", 10, y);
        y += lineHeight * 1.5;
        // Header for nodes
        ctx.fillText("Knoten:", 10, y);
        y += lineHeight;
        // List each node with its coordinates
        animation.nodes.forEach(node => {
            ctx.fillText(`P${node.id}: (${node.x}, ${node.y})`, 10, y);
            y += lineHeight;
        });
    } else {  
        // Otherwise, render the data on the main canvas in a dedicated info panel area.
        const canvas = document.getElementById('canvas');
        const ctx = canvas.getContext('2d');
        ctx.save();
        // Reset transformation to work in pixel coordinates                
        ctx.setTransform(1, 0, 0, 1, 0, 0);
        // Determine the position and size of the info panel on the right side
        const textBoxX = canvas.width - 250;
        const textBoxY = 0;
        const textBoxWidth = 250;
        const textBoxHeight = canvas.height;
        // Draw a semi-transparent white background for the info panel
        ctx.fillStyle = "rgba(255, 255, 255, 0.8)";
        ctx.fillRect(textBoxX, textBoxY, textBoxWidth, textBoxHeight);
        // Set the text style
        ctx.fillStyle = "black";
        ctx.font = "14px sans-serif";
        const lineHeight = 18;
        let y = textBoxY + lineHeight;
        // Title
        ctx.fillText("Graph Daten:", textBoxX + 10, y);
        y += lineHeight * 1.5;
        // Header for nodes
        ctx.fillText("Knoten:", textBoxX + 10, y);
        y += lineHeight;
        // List the generated nodes with their coordinates
        animation.nodes.forEach(node => {
            ctx.fillText(`P${node.id}: (${node.x}, ${node.y})`, textBoxX + 10, y);
            y += lineHeight;
        });
        ctx.restore();
    }
}
// Override nextStep so that after each animation step the data is updated.
const originalNextStep = nextStep;
nextStep = function() {
    originalNextStep();
    drawGraphData();
};
    </script>
</body>

<div style="display: flex; align-items: center; margin-top: 10px;">
    <p></p>
</div>


--- 

<div style="display: flex; align-items: center; margin-top: 10px;">
    <p></p>
</div>



# Ausführliche Beschreibung und grafische Darstellung 

## 1. Minimum Spanning Tree (MST)
**Ziel:**  
Erstelle einen Baum, der alle Knoten verbindet und dabei die Gesamtlänge aller Kanten minimiert.

**Beschreibung:**  
- Wir wählen einen Startknoten und erweitern schrittweise den Baum, indem immer die kürzeste Kante zu einem noch nicht verbundenen Knoten hinzugefügt wird (Prim-Algorithmus).  
- Der resultierende Baum enthält genau n–1 Kanten, wobei n die Anzahl der Knoten ist.

---

## 2. Identifikation ungerader Knoten
**Ziel:**  
Bestimme alle Knoten im MST, deren Anzahl der Verbindungen (Grad) ungerade ist.

**Beschreibung:**  
- Nach dem Aufbau des MST wird gezählt, wie viele Verbindungen jeder Knoten hat.  
- Das Handshaking-Lemma garantiert, dass die Anzahl der ungeraden Knoten immer gerade ist.  
- Diese ungeraden Knoten bilden die Basis, um das Matching im nächsten Schritt durchzuführen.

---

## 3. Minimales perfektes Matching (MWPM)
**Ziel:**  
Bilde Paare aus allen ungeraden Knoten, sodass die Summe der Kantenlängen minimal ist.

**Beschreibung:**  
- Alle möglichen Paarungen der ungeraden Knoten werden analysiert.  
- Die Paarung mit der geringsten Gesamtdistanz wird gewählt.  
- Damit wird sichergestellt, dass nicht unnötig teure Verbindungen in die spätere Tour aufgenommen werden.

---

## 4. Euler-Kreis im Multigraphen
**Ziel:**  
Verknüpfe MST und Matching zu einem multigraphischen Netzwerk, in dem alle Knoten einen geraden Grad besitzen, um einen Euler-Kreis zu bilden.

**Beschreibung:**  
- Durch Addition der Matching-Kanten zum MST wird ein Graph geschaffen, in dem jeder Knoten einen geraden Grad hat.  
- Aufgrund des Euler-Theorems existiert in einem solchen Graphen ein geschlossener Pfad (Euler-Kreis), der jede Kante genau einmal durchläuft.

---

## 5. Hamilton-Kreis durch Shortcutting
**Ziel:**  
Erzeuge aus dem Euler-Kreis eine gültige TSP-Tour, indem bereits besuchte Knoten übersprungen werden.

**Beschreibung:**  
- Beginne mit dem Euler-Kreis und entferne Wiederholungen, um eine einfache Rundreise zu bilden.  
- Die Dreiecksungleichung garantiert, dass das Überspringen von Knoten keine längere Strecke verursacht als die ursprüngliche Verbindung.

---

## Approximationsgarantie
**Mathematische Begründung:**  
- Durch die Kombination der oben genannten Schritte kann gezeigt werden, dass  
    w(Tₐₚₚᵣₒₓ) ≤ w(MST) + w(M) ≤ w(Tₒₚₜ) + ½ · w(Tₒₚₜ) = 1.5 · w(Tₒₚₜ)  
- Damit erhält man eine TSP-Lösung, die höchstens 1.5‐mal so lang ist wie die optimale Tour.

---

## Zusammenfassung der Darstellung

| Schritt                      | Beschreibung                                                       |
|------------------------------|--------------------------------------------------------------------|
| **MST bilden**               | Minimale Kantenbefüllung, die alle Knoten verbindet                |
| **Ungerade Knoten finden**   | Knoten mit ungeradem Grad im MST identifizieren                      |
| **Minimales Matching**       | Optimales Kantenpaar-Design, um ungerade Knoten zu verbinden         |
| **Euler-Kreis konstruieren** | Kombination zu einem Graphen, in dem ein Euler-Kreis existiert        |
| **Hamilton-Kreis erzeugen**  | Entferne Wiederholungen aus dem Euler-Kreis, um eine Rundtour zu formen |
