---
layout: post
title: Christofides Algorithm & Nearest Neigbhor | Compare
date: 2025-04-02 10:00:00
description: Algorithm & Datastructure
tags: Algo Christofides NearestNeighbor BruteForce
categories: lecture
disqus_comments: true
featured: false
---

## STILL WORKING AT : official Release 10.04 | 

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
            max-height: 900px;
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
                    <button onclick="toggleConstellation()">Sternenbild</button>
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
    constructor(canvas, numNodes = 4) {
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
        this.drawNodes(true); // Draw coordinate system at initialization
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
    drawNodes(showCoordinateSystem = false) {
        // Draw coordinate system only if requested
        if (showCoordinateSystem) {
            this.drawCoordinateSystem();
        }
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
            this.drawNodes(false); // Don't draw coordinate system
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
            this.drawNodes(false); // Don't draw coordinate system
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
let animation = new ChristofidesAnimation(document.getElementById('canvas'), 4);
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
        animation.drawNodes(true); // Show coordinate system on reset
        updateInfoPanel();
    }
}
function updateNumPoints() {
    stopAutoAnimation();
    const numPoints = parseInt(document.getElementById('numPoints').value);
    animation = new ChristofidesAnimation(document.getElementById('canvas'), numPoints);
    animation.ctx.clearRect(0, 0, 100, 50);
    animation.drawNodes(true); // Show coordinate system when updating points
    updateInfoPanel();
}
function toggleConstellation() {
    updateNumPoints()
    // Ersetze zufällige Knoten durch fest definierte Punkte eines Sternenbilds
    animation.nodes = generateConstellationNodes();
    // Lösche das Canvas und zeichne das Koordinatensystem
    animation.ctx.clearRect(0, 0, 50, 50);
    animation.drawNodes(true);
}
function generateConstellationNodes() {
    // Zufällig eines von 5 Sternenbildern auswählen
    const constellationTypes = ['libra', 'orion', 'ursa_minor', 'cassiopeia', 'cygnus'];
    const selectedType = constellationTypes[Math.floor(Math.random() * constellationTypes.length)];   
    // Aktuelle Anzahl der gewünschten Punkte auslesen
    const count = parseInt(document.getElementById('numPoints').value, 10) || 10;   
    // Definition der 5 verschiedenen Sternbilder
        const constellations = {
            // Waage (Libra)
            libra: [
                { x: 5, y: 21 },
                { x: 13, y: 29 },
                { x: 21, y: 25 },
                { x: 29, y: 33 },
                { x: 37, y: 25 },
                { x: 45, y: 29 },
                { x: 45, y: 21 },
                { x: 37, y: 17 },
                { x: 29, y: 13 },
                { x: 21, y: 17 }
            ],
            // Orion (Der Jäger)
            orion: [
                { x: 21, y: 5 },  // Beteigeuze
                { x: 13, y: 13 },
                { x: 5, y: 21 },  // Bellatrix
                { x: 13, y: 29 }, // Orion-Gürtel 1
                { x: 21, y: 29 }, // Orion-Gürtel 2
                { x: 29, y: 29 }, // Orion-Gürtel 3
                { x: 37, y: 21 }, // Rigel
                { x: 29, y: 13 },
                { x: 21, y: 37 }, // Schwert
                { x: 21, y: 45 }  // Schwertspitze
            ],
            // Kleiner Wagen (Ursa Minor)
            ursa_minor: [
                { x: 5, y: 5 },   // Polarstern
                { x: 13, y: 17 },
                { x: 21, y: 25 },
                { x: 29, y: 33 },
                { x: 21, y: 41 },
                { x: 29, y: 45 },
                { x: 45, y: 37 }
            ],
            // Kassiopeia (W-Form)
            cassiopeia: [
                { x: 5, y: 5 },
                { x: 13, y: 29 },
                { x: 25, y: 5 },
                { x: 37, y: 29 },
                { x: 45, y: 5 }
            ],
            // Schwan (Cygnus/Nördliches Kreuz)
            cygnus: [
                { x: 25, y: 5 },
                { x: 25, y: 13 },
                { x: 25, y: 21 },
                { x: 25, y: 29 },
                { x: 25, y: 45 },
                { x: 5, y: 21 },
                { x: 13, y: 21 },
                { x: 37, y: 21 },
                { x: 45, y: 21 }
            ]
        };
    // Basispunkte für das gewählte Sternbild auswählen
    const baseNodes = constellations[selectedType];   
    let nodes = [];
    if (count === baseNodes.length) {
        nodes = baseNodes.map((pt, i) => ({ ...pt, id: i }));
    } else {
        // Interpoliere entlang des definierten Pfades, um die gewünschte Anzahl an Punkten zu erhalten
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
    </script>
</body>



<div style="display: flex; align-items: center; margin-top: 10px;">
    <p></p>
</div>

--- 

<div style="display: flex; align-items: center; margin-top: 10px;">
    <p></p>
</div>

<head>
    <title>Nearest Neighbor Animation</title>
    <style>
        .nn-container {
            display: flex;
        }
        .nn-animation-container {
            flex: 1;
        }
        #nnInfoPanel {
            flex: 0 0 500px;
            margin-left: 20px;
            background: #f2f2f2;
            padding: 10px;
            font-family: sans-serif;
            font-size: 14px;
            overflow-y: auto;
            max-height: 900px;
        }
        #nnCanvas {
            border: 1px solid black;
            display: block;
        }
        .nn-controls > div {
            margin: 10px 0;
        }
        .nn-controls > div > * {
            margin-right: 10px;
        }
        .selection-table {
            width: 100%;
            border-collapse: collapse;
            margin: 10px 0;
        }
        .selection-table th, .selection-table td {
            border: 1px solid #ddd;
            padding: 4px;
            text-align: center;
        }
        .selection-table .selected {
            background-color: #d4ffd4;
            font-weight: bold;
        }
    </style>
</head>
<body>
    <h3>Nearest Neighbor Algorithm</h3>
    <div class="nn-container">
        <div class="nn-animation-container">
            <div class="nn-controls">
                <div>
                    <button onclick="nnNextStep()">Nächster Schritt</button>
                    <button onclick="nnResetAnimation()">Reset</button>
                    <button onclick="nnToggleAutoAnimation()">Animation Start/Stop</button>
                    <label for="nnSpeedSlider">Geschwindigkeit:</label>
                    <input type="range" id="nnSpeedSlider" min="50" max="200" step="1" value="100">
                </div>
                <div>
                    <button onclick="nnImportPoints()">Punkte importieren</button>
                    <button onclick="nnDownloadGraph()">Graph herunterladen</button>
                </div>
            </div>
            <canvas id="nnCanvas" width="800" height="600"></canvas>
        </div>
        <div id="nnInfoPanel">
            <h3>Nearest Neighbor Daten</h3>
            <div id="nnDataOutput">Warte auf den ersten Schritt...</div>
            <hr>
            <label for="nnStepDropdown"><strong>Schritte:</strong></label>
            <select id="nnStepDropdown" onchange="nnShowStepDetails()">
                <option value="">Schritt auswählen...</option>
            </select>
            <button onclick="nnToggleFullTable()">Tabelle ein-/ausblenden</button>
            <div id="nnStepDetails"></div>
            <div id="nnFullTable" style="display: none; margin-top: 20px;"></div>
        </div>
    </div>
    <script>
// Nearest Neighbor Animation Class
class NearestNeighborAnimation {
    constructor(canvas, numNodes = 4) {
        this.canvas = canvas;
        this.ctx = canvas.getContext('2d');
        this.ctx.setTransform(1, 0, 0, 1, 0, 0);
        this.ctx.scale(canvas.width / 50, canvas.height / 50);
        this.numNodes = numNodes;
        this.nodes = [];
        this.nnPath = [];
        this.selectionSteps = []; // Store selection process
        this.currentPathIndex = 0;    
        this.init();
        this.drawNodes(true);
    }

    drawCoordinateSystem() {
        this.ctx.strokeStyle = "#ccc";
        this.ctx.lineWidth = 0.1;   
        for (let x = 0; x <= 100; x += 10) {
            this.ctx.beginPath();
            this.ctx.moveTo(x, 0);
            this.ctx.lineTo(x, 50);
            this.ctx.stroke();
        }  
        for (let y = 0; y <= 50; y += 5) {
            this.ctx.beginPath();
            this.ctx.moveTo(0, y);
            this.ctx.lineTo(100, y);
            this.ctx.stroke();
        }
    }

    init() {
        this.generateNodes();
        this.computeNearestNeighborPath();
    } 

    generateNodes() {
        for (let i = 0; i < this.numNodes; i++) {
            this.nodes.push({
                x: Math.floor(Math.random() * (40 - 5 + 1)) + 5,
                y: Math.floor(Math.random() * (40 - 5 + 1)) + 5,
                id: i
            });
        }
    }

    distance(a, b) {
        return Math.sqrt((a.x - b.x) ** 2 + (a.y - b.y) ** 2);
    }

    computeNearestNeighborPath() {
        const startNode = 0;
        const visited = new Set([startNode]);
        this.nnPath = [startNode]; 
        this.selectionSteps = [];
        
        let current = startNode;
        while (visited.size < this.numNodes) {
            let nearest = null;
            let minDistance = Infinity;
            
            // Create a record for this selection step
            const currentStep = {
                current: current,
                candidates: []
            };
            
            for (let i = 0; i < this.numNodes; i++) {
                if (!visited.has(i)) {
                    const dist = this.distance(this.nodes[current], this.nodes[i]);
                    
                    // Store all candidates and their distances
                    currentStep.candidates.push({
                        node: i,
                        distance: dist,
                        isNearest: false
                    });
                    
                    if (dist < minDistance) {
                        minDistance = dist;
                        nearest = i;
                    }
                }
            }
            
            // Mark the selected nearest neighbor
            const nearestCandidate = currentStep.candidates.find(c => c.node === nearest);
            if (nearestCandidate) {
                nearestCandidate.isNearest = true;
            }
            
            this.selectionSteps.push(currentStep);
            current = nearest;
            visited.add(current);
            this.nnPath.push(current);
        } 
        
        this.nnPath.push(startNode); // Return to start
    }  

    drawNodes(showCoordinateSystem = false) {
        if (showCoordinateSystem) {
            this.drawCoordinateSystem();
        }   
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

    drawPath(steps) {
        if (steps <= 0) return;   
        
        const pathSegments = Math.min(steps, this.nnPath.length - 1);
        
        this.ctx.strokeStyle = 'red';
        this.ctx.lineWidth = 0.5;
        this.ctx.beginPath();  
        
        const startNode = this.nodes[this.nnPath[0]];
        this.ctx.moveTo(startNode.x, startNode.y);  
        
        for (let i = 1; i <= pathSegments; i++) {
            const node = this.nodes[this.nnPath[i]];
            this.ctx.lineTo(node.x, node.y);
        }  
        
        this.ctx.stroke();
    }
    
    drawSelectionStep(stepIndex) {
        if (stepIndex < 0 || stepIndex >= this.selectionSteps.length) return;
        
        const step = this.selectionSteps[stepIndex];
        const currentNode = this.nodes[step.current];
        
        // Highlight current node
        this.ctx.beginPath();
        this.ctx.arc(currentNode.x, currentNode.y, 0.8, 0, Math.PI * 2);
        this.ctx.fillStyle = 'rgba(0, 128, 255, 0.6)';
        this.ctx.fill();
        
        // Draw lines to all candidate nodes
        step.candidates.forEach(candidate => {
            const candidateNode = this.nodes[candidate.node];
            
            // Line style depends on whether this is the nearest
            this.ctx.strokeStyle = candidate.isNearest ? 'green' : '#aaaaaa';
            this.ctx.lineWidth = candidate.isNearest ? 0.3 : 0.1;
            this.ctx.setLineDash(candidate.isNearest ? [] : [0.2, 0.2]);
            
            this.ctx.beginPath();
            this.ctx.moveTo(currentNode.x, currentNode.y);
            this.ctx.lineTo(candidateNode.x, candidateNode.y);
            this.ctx.stroke();
            this.ctx.setLineDash([]);
            
            // Highlight the nearest neighbor
            if (candidate.isNearest) {
                this.ctx.beginPath();
                this.ctx.arc(candidateNode.x, candidateNode.y, 0.8, 0, Math.PI * 2);
                this.ctx.fillStyle = 'rgba(0, 255, 0, 0.6)';
                this.ctx.fill();
            }
        });
    }

    nextStep() {
        // Clear and redraw
        this.ctx.clearRect(0, 0, 100, 50);
        this.drawNodes(true);
        
        if (this.currentPathIndex < this.selectionSteps.length) {
            // Show selection process
            this.drawSelectionStep(this.currentPathIndex);
            this.drawPath(this.currentPathIndex);
            this.currentPathIndex++;
        } else if (this.currentPathIndex === this.selectionSteps.length) {
            // Final path
            this.drawPath(this.nnPath.length - 1);
            this.currentPathIndex++;
        } else {
            nnStopAutoAnimation();
        }
    }

    importChristofidesPoints() {
        // Check if the Christofides animation exists
        if (typeof animation !== 'undefined' && animation && animation.nodes) {
            // Clone the nodes from Christofides
            this.nodes = JSON.parse(JSON.stringify(animation.nodes));
            this.numNodes = this.nodes.length;
            // Recalculate the path with the new points
            this.computeNearestNeighborPath();
            // Reset the animation
            this.ctx.clearRect(0, 0, 100, 50);
            this.currentPathIndex = 0;
            this.drawNodes(true);
        }
    }
}

// Global variables for Nearest Neighbor
let nnAnimation = null;
let nnAutoIntervalId = null;

// Initialize when the page loads
document.addEventListener('DOMContentLoaded', function() {
    const canvas = document.getElementById('nnCanvas');
    if (canvas) {
        nnAnimation = new NearestNeighborAnimation(canvas, 4);
        nnUpdateInfoPanel();
    }
});

function nnUpdateInfoPanel() {
    const dataOutput = document.getElementById('nnDataOutput');
    const stepDropdown = document.getElementById('nnStepDropdown');
    const stepDetails = document.getElementById('nnStepDetails');
    const fullTable = document.getElementById('nnFullTable');

    if (!dataOutput || !stepDropdown || !nnAnimation) return;

    // Allgemeine Informationen
    let html = "<strong>Algorithmus:</strong> Nearest Neighbor<br>";
    html += "<hr>";
    html += "<strong>Punkte:</strong><br>";
    html += nnAnimation.nodes.map(node => "P" + node.id + ": (" + node.x + ", " + node.y + ")").join("<br>");
    html += "<hr>";
    dataOutput.innerHTML = html;

    // Dropdown-Menü aktualisieren
    stepDropdown.innerHTML = '<option value="">Schritt auswählen...</option>';
    nnAnimation.selectionSteps.forEach((step, stepIndex) => {
        stepDropdown.innerHTML += `<option value="${stepIndex}">Schritt ${stepIndex + 1}: P${step.current}</option>`;
    });

    // Details des aktuellen Pfads
    const pathLength = Math.min(nnAnimation.currentPathIndex + 1, nnAnimation.nnPath.length);
    let path = nnAnimation.nnPath.slice(0, pathLength).map(node => "P" + node).join(" → ");
    if (nnAnimation.currentPathIndex >= nnAnimation.selectionSteps.length) {
        let totalLength = 0;
        for (let i = 1; i < nnAnimation.nnPath.length; i++) {
            totalLength += nnAnimation.distance(
                nnAnimation.nodes[nnAnimation.nnPath[i - 1]],
                nnAnimation.nodes[nnAnimation.nnPath[i]]
            );
        }
        path += `<br><br>Gesamtlänge: <strong>${totalLength.toFixed(2)}</strong>`;
    }
    html += `<strong>Aktueller Pfad:</strong><br>${path}`;
    dataOutput.innerHTML = html;

    // Schritt-Details zurücksetzen
    stepDetails.innerHTML = "";

    // Gesamte Tabelle zurücksetzen
    fullTable.style.display = "none";
    fullTable.innerHTML = "";
}

function nnShowStepDetails() {
    const stepDropdown = document.getElementById('nnStepDropdown');
    const stepDetails = document.getElementById('nnStepDetails');

    if (!stepDropdown || !stepDetails || !nnAnimation) return;

    const stepIndex = parseInt(stepDropdown.value);
    if (isNaN(stepIndex) || stepIndex < 0 || stepIndex >= nnAnimation.selectionSteps.length) {
        stepDetails.innerHTML = "";
        return;
    }

    const step = nnAnimation.selectionSteps[stepIndex];
    let html = `<strong>Schritt ${stepIndex + 1}:</strong><br>`;
    html += `<strong>Aktueller Knoten:</strong> P${step.current}<br>`;
    html += "<strong>Kandidaten:</strong><br>";
    html += "<ul>";
    step.candidates.forEach(candidate => {
        html += `<li>P${candidate.node}: Entfernung = ${candidate.distance.toFixed(2)} ${
            candidate.isNearest ? "(Ausgewählt)" : ""
        }</li>`;
    });
    html += "</ul>";
    stepDetails.innerHTML = html;
}

function nnShowFullTable() {
    const fullTableDiv = document.getElementById('nnFullTable');
    if (!fullTableDiv || !nnAnimation) return;

    // Generiere die Tabelle
    let html = "<h4>Gesamte Tabelle der Schritte</h4>";
    html += "<table style='width: 100%; border-collapse: collapse;'>";
    html += "<tr><th>Schritt</th><th>Aktueller Knoten</th><th>Kandidat</th><th>Entfernung</th><th>Ausgewählt</th></tr>";

    nnAnimation.selectionSteps.forEach((step, stepIndex) => {
        step.candidates.forEach(candidate => {
            html += "<tr>";
            html += `<td style="border: 1px solid #ddd; padding: 4px; text-align: center;">${stepIndex + 1}</td>`;
            html += `<td style="border: 1px solid #ddd; padding: 4px; text-align: center;">P${step.current}</td>`;
            html += `<td style="border: 1px solid #ddd; padding: 4px; text-align: center;">P${candidate.node}</td>`;
            html += `<td style="border: 1px solid #ddd; padding: 4px; text-align: center;">${candidate.distance.toFixed(2)}</td>`;
            html += `<td style="border: 1px solid #ddd; padding: 4px; text-align: center;">${candidate.isNearest ? "✓" : ""}</td>`;
            html += "</tr>";
        });
    });

    html += "</table>";

    // Zeige die Tabelle an
    fullTableDiv.innerHTML = html;
    fullTableDiv.style.display = 'block';
}

function nnToggleFullTable() {
    const fullTableDiv = document.getElementById('nnFullTable');
    if (!fullTableDiv) return;
    
    if (fullTableDiv.style.display === 'none' || !fullTableDiv.innerHTML.trim()) {
        // Wenn die Tabelle ausgeblendet oder leer ist, fülle sie und zeige sie an
        nnShowFullTable();
    } else {
        // Sonst blende sie aus
        fullTableDiv.style.display = 'none';
    }
}

function nnNextStep() {
    if (!nnAnimation) return;

    // Zeichne den nächsten Schritt
    nnAnimation.nextStep();

    // Aktualisiere das Info-Panel
    nnUpdateInfoPanel();

    // Wenn die Animation abgeschlossen ist, zeige die vollständige Route
    if (nnAnimation.currentPathIndex > nnAnimation.selectionSteps.length) {
        nnAnimation.ctx.clearRect(0, 0, 100, 50); // Canvas bereinigen
        nnAnimation.drawNodes(true); // Knoten erneut zeichnen
        nnAnimation.drawPath(nnAnimation.nnPath.length - 1); // Finale Route zeichnen
        nnUpdateInfoPanel(); // Finale Tabelle aktualisieren
    }
}

function nnResetAnimation() {
    nnStopAutoAnimation();
    if (nnAnimation) {
        nnAnimation.ctx.clearRect(0, 0, 100, 50);
        nnAnimation.currentPathIndex = 0;
        nnAnimation.drawNodes(true);
        nnUpdateInfoPanel();
    }
}

function nnToggleAutoAnimation() {
    if (nnAutoIntervalId) {
        nnStopAutoAnimation();
    } else {
        nnStartAutoAnimation();
    }
}

function nnStartAutoAnimation() {
    if (nnAutoIntervalId) return;
    const slider = document.getElementById('nnSpeedSlider');
    if (!slider) return;
    const percent = parseInt(slider.value);
    const speed = 1000 * (100 / percent);
    nnAutoIntervalId = setInterval(() => {
        nnNextStep();
    }, speed);
}

function nnStopAutoAnimation() {
    if (nnAutoIntervalId) {
        clearInterval(nnAutoIntervalId);
        nnAutoIntervalId = null;
    }
}

function nnImportPoints() {
    if (nnAnimation) {
        nnAnimation.importChristofidesPoints();
        nnResetAnimation();
    }
}

function nnDownloadGraph() {
    const canvas = document.getElementById('nnCanvas');
    if (!canvas) return;
    const tmpCanvas = document.createElement('canvas');
    tmpCanvas.width = canvas.width;
    tmpCanvas.height = canvas.height;
    const tmpCtx = tmpCanvas.getContext('2d');
    tmpCtx.fillStyle = 'white';
    tmpCtx.fillRect(0, 0, tmpCanvas.width, tmpCanvas.height);
    tmpCtx.drawImage(canvas, 0, 0);
    const link = document.createElement('a');
    link.download = 'nearest-neighbor-graph.png';
    link.href = tmpCanvas.toDataURL('image/png');
    link.click();
}

// Add event listener for speed slider
document.getElementById('nnSpeedSlider')?.addEventListener('input', function() {
    if (nnAutoIntervalId) {
        clearInterval(nnAutoIntervalId);
        const percent = parseInt(this.value);
        const speed = 1000 * (100 / percent);
        nnAutoIntervalId = setInterval(() => {
            nnNextStep();
        }, speed);
    }
});
    </script>
</body>
