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

<!-- ================ STYLING ================ -->
<head>
    <title>Algorithmus-Animationen</title>
    <style>
        /* Gemeinsame Stile */
        canvas {
            border: 1px solid black;
            display: block;
        }   
        /* Christofides Stile */
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
        .controls > div {
            margin: 10px 0;
        }
        .controls > div > * {
            margin-right: 10px;
        }
        #speedSlider,
        #numPoints {
            transform: scale(1);
            transform-origin: left center;
        }     
        /* Nearest Neighbor Stile */
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
<!-- ================ CHRISTOFIDES ALGORITHMUS ================ -->
<body>
    <div class="container">
        <div class="animation-container">
            <div class="controls">
                <div>
                    <button onclick="nextStep()">Nächster Schritt</button>
                    <button onclick="resetAnimation()">Reset</button>
                    <button onclick="toggleAutoAnimation()">Animation Start/Stop</button>
                    <label for="speedSlider">Geschwindigkeit:</label>
                    <input type="range" id="speedSlider" min="50" max="200" step="1" value="100">
                </div>
                <div>
                    <label for="numPoints">Anzahl der Punkte:</label>
                    <input type="number" id="numPoints" min="3" max="25" value="4" style="width:50px; height:30px;">
                    <button onclick="updateNumPoints()">Zufällige Punkte</button>
                    <button onclick="importNNPoints()">NN-Punkte importieren</button>
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
    <!-- Trennlinie zwischen den Algorithmen -->
    <div style="display: flex; align-items: center; margin-top: 10px;"><p></p></div>
    --- 
    <div style="display: flex; align-items: center; margin-top: 10px;"><p></p></div>
    <!-- ================ NEAREST NEIGHBOR ALGORITHMUS ================ -->
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
                    <label for="nnNumPoints">Anzahl der Punkte:</label>
                    <input type="number" id="nnNumPoints" min="3" max="25" value="4" style="width:50px; height:30px;">
                    <button onclick="nnGenerateRandomPoints()">Zufällige Punkte</button>
                    <button onclick="nnImportPoints()">Christofides Punkte importieren</button>
                    <button onclick="nnToggleConstellation()">Sternenbild</button>
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
    <!-- ================ JAVASCRIPT CODE ================ -->
    <script>
    // ================ CHRISTOFIDES ALGORITHMUS ================  
    // Christofides Animation Klasse
    class ChristofidesAnimation {
        constructor(canvas, numNodes = 4) {
            this.canvas = canvas;
            this.ctx = canvas.getContext('2d');
            this.ctx.setTransform(1, 0, 0, 1, 0, 0);
            this.ctx.scale(canvas.width / 50, canvas.height / 50);
            this.numNodes = numNodes;
            this.nodes = [];
            this.mstEdges = [];
            this.oddNodes = [];
            this.matchingEdges = [];
            this.eulerianCircuit = [];
            this.tspPath = [];
            this.phase = 'mst';
            this.lastPhase = null;  
            this.currentMSTIndex = 0;
            this.currentMatchingIndex = 0;
            this.currentEulerIndex = 1; 
            this.currentTSPIndex = 1;
            this.drawnEdges = new Map();
            this.init();
            this.drawNodes(true);
        }
        // Zeichnet ein Koordinatensystem als Raster
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
            this.computeMST();
            this.findOddNodes();
            this.computeMatching();
            this.computeEulerianCircuit();
            this.computeTSPPath();
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
                this.ctx.clearRect(0, 0, 100, 50);
                this.drawnEdges.clear();
                this.drawNodes(false);
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
                this.ctx.clearRect(0, 0, 100, 50);
                this.drawnEdges.clear();
                this.drawNodes(false);
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
    
    // Globale Variablen für Christofides
    let animation = new ChristofidesAnimation(document.getElementById('canvas'), 4);
    let autoIntervalId = null;
    
    // Christofides Funktionen
    function updateInfoPanel() {
        const dataOutput = document.getElementById('dataOutput'); 
        // Aktuelle Phase
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
        
        // Punkte
        html += "<strong>Generierte Punkte:</strong><br>";
        html += animation.nodes.map(node => "P" + node.id + ": (" + node.x + ", " + node.y + ")").join("<br>") + "<hr>";
        
        // MST Kanten
        html += "<strong>MST Kanten:</strong><br>";
        if (animation.currentMSTIndex === 0) {
            html += "Noch keine MST-Kanten gezeichnet";
        } else {
            html += animation.mstEdges.slice(0, animation.currentMSTIndex)
                .map(e => "Von " + e.from + " nach " + e.to + " (Distanz: " + e.distance.toFixed(2) + ")")
                .join("<br>");
        }
        html += "<hr>";
        
        // Ungerade Knoten
        html += "<strong>Ungerade Knoten:</strong><br>";
        if (animation.phase === 'mst' && animation.currentMSTIndex < animation.mstEdges.length) {
            html += "Wird nach Fertigstellung des MST berechnet";
        } else {
            html += animation.oddNodes.join(", ");
        }
        html += "<hr>"; 
        
        // Matching Kanten
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
        
        // Eulerischer Pfad
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
        
        // TSP Pfad
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
                path += "<br><br><span style='font-size: 1.2em;'><strong>Gesamtlänge: " + totalLength.toFixed(2) + "</strong></span>";
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
        const slider = document.getElementById('speedSlider');
        const percent = parseInt(slider.value);
        const speed = 1000 * (100 / percent);
        autoIntervalId = setInterval(() => {
            animation.nextStep();
        }, speed);
    }

    function toggleAutoAnimation() {
        if (autoIntervalId) {
            stopAutoAnimation();
        } else {
            startAutoAnimation();
        }
    }

    function stopAutoAnimation() {
        if (autoIntervalId) {
            clearInterval(autoIntervalId);
            autoIntervalId = null;
        }
    }

    function resetAnimation() {
        stopAutoAnimation();
        if (animation) {
            animation.ctx.clearRect(0, 0, 100, 50);
            animation.phase = 'mst';
            animation.lastPhase = null;
            animation.currentMSTIndex = 0;
            animation.currentMatchingIndex = 0;
            animation.currentEulerIndex = 1;
            animation.currentTSPIndex = 1;
            animation.drawnEdges.clear();
            animation.drawNodes(true);
            updateInfoPanel();
        }
    }

    function updateNumPoints() {
        stopAutoAnimation();
        const numPoints = parseInt(document.getElementById('numPoints').value);
        animation = new ChristofidesAnimation(document.getElementById('canvas'), numPoints);
        animation.ctx.clearRect(0, 0, 100, 50);
        animation.drawNodes(true);
        updateInfoPanel();
    }

    function toggleConstellation() {
        updateNumPoints()
        animation.nodes = generateConstellationNodes();
        animation.ctx.clearRect(0, 0, 50, 50);
        animation.drawNodes(true);
    }

    function generateConstellationNodes() {
        const constellationTypes = ['libra', 'orion', 'ursa_minor', 'cassiopeia', 'cygnus'];
        const selectedType = constellationTypes[Math.floor(Math.random() * (5))];   
        const count = parseInt(document.getElementById('numPoints').value, 10) || 10;   
        
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
            // Kleiner Wagen (Ursa Minor)
            ursa_minor: [
                { x: 5, y: 5 },
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
        
        const baseNodes = constellations[selectedType];   
        let nodes = [];
        
        if (count === baseNodes.length) {
            nodes = baseNodes.map((pt, i) => ({ ...pt, id: i }));
        } else {
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
        const dataCanvas = document.getElementById('dataCanvas');
        if (dataCanvas) {
            const ctx = dataCanvas.getContext('2d');
            ctx.clearRect(0, 0, dataCanvas.width, dataCanvas.height);
            ctx.fillStyle = 'white';
            ctx.fillRect(0, 0, dataCanvas.width, dataCanvas.height);
            ctx.fillStyle = "black";
            ctx.font = "14px sans-serif";
            const lineHeight = 18;
            let y = lineHeight;
            ctx.fillText("Graph Daten:", 10, y);
            y += lineHeight * 1.5;
            ctx.fillText("Knoten:", 10, y);
            y += lineHeight;
            animation.nodes.forEach(node => {
                ctx.fillText(`P${node.id}: (${node.x}, ${node.y})`, 10, y);
                y += lineHeight;
            });
        } else {  
            const canvas = document.getElementById('canvas');
            const ctx = canvas.getContext('2d');
            ctx.save();
            const textBoxX = canvas.width - 250;
            const textBoxY = 0;
            const textBoxWidth = 250;
            const textBoxHeight = canvas.height;
            ctx.fillStyle = "rgba(255, 255, 255, 0.8)";
            ctx.fillRect(textBoxX, textBoxY, textBoxWidth, textBoxHeight);
            ctx.fillStyle = "black";
            ctx.font = "14px sans-serif";
            const lineHeight = 18;
            let y = textBoxY + lineHeight;
            ctx.fillText("Graph Daten:", textBoxX + 10, y);
            y += lineHeight * 1.5;
            ctx.fillText("Knoten:", textBoxX + 10, y);
            y += lineHeight;
            animation.nodes.forEach(node => {
                ctx.fillText(`P${node.id}: (${node.x}, ${node.y})`, textBoxX + 10, y);
                y += lineHeight;
            });
            ctx.restore();
        }
    }

    function importNNPoints() {
        if (typeof nnAnimation !== 'undefined' && nnAnimation && nnAnimation.nodes) {
            stopAutoAnimation();
            const numPoints = nnAnimation.nodes.length;
            animation = new ChristofidesAnimation(document.getElementById('canvas'), numPoints);
            animation.nodes = JSON.parse(JSON.stringify(nnAnimation.nodes));
            animation.mstEdges = [];
            animation.oddNodes = [];
            animation.matchingEdges = [];
            animation.eulerianCircuit = [];
            animation.tspPath = [];
            animation.phase = 'mst';
            animation.lastPhase = null;
            animation.currentMSTIndex = 0;
            animation.currentMatchingIndex = 0;
            animation.currentEulerIndex = 1;
            animation.currentTSPIndex = 1;
            animation.drawnEdges.clear();
            animation.computeMST();
            animation.findOddNodes();
            animation.computeMatching();
            animation.computeEulerianCircuit();
            animation.computeTSPPath();
            animation.ctx.clearRect(0, 0, 100, 50);
            animation.drawNodes(true);
            updateInfoPanel();
        } else {
            console.log("NN-Animation nicht gefunden oder keine Punkte verfügbar");
        }
    }
    
    // Event-Listener
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

    // ================ NEAREST NEIGHBOR ALGORITHMUS ================
    
    // Nearest Neighbor Animation Klasse
    class NearestNeighborAnimation {
        constructor(canvas, numNodes = 4) {
            this.canvas = canvas;
            this.ctx = canvas.getContext('2d');
            this.ctx.setTransform(1, 0, 0, 1, 0, 0);
            this.ctx.scale(canvas.width / 50, canvas.height / 50);
            this.numNodes = numNodes;
            this.nodes = [];
            this.nnPath = [];
            this.selectionSteps = []; 
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
                const currentStep = {
                    current: current,
                    candidates: []
                };
                for (let i = 0; i < this.numNodes; i++) {
                    if (!visited.has(i)) {
                        const dist = this.distance(this.nodes[current], this.nodes[i]);
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
                const nearestCandidate = currentStep.candidates.find(c => c.node === nearest);
                if (nearestCandidate) {
                    nearestCandidate.isNearest = true;
                }
                this.selectionSteps.push(currentStep);
                current = nearest;
                visited.add(current);
                this.nnPath.push(current);
            } 
            this.nnPath.push(startNode);
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
            this.ctx.beginPath();
            this.ctx.arc(currentNode.x, currentNode.y, 0.8, 0, Math.PI * 2);
            this.ctx.fillStyle = 'rgba(0, 128, 255, 0.6)';
            this.ctx.fill();
            step.candidates.forEach(candidate => {
                const candidateNode = this.nodes[candidate.node];
                this.ctx.strokeStyle = candidate.isNearest ? 'green' : 'blue';
                this.ctx.lineWidth = candidate.isNearest ? 0.3 : 0.1;
                this.ctx.setLineDash(candidate.isNearest ? [] : [0.2, 0.2]);
                this.ctx.beginPath();
                this.ctx.moveTo(currentNode.x, currentNode.y);
                this.ctx.lineTo(candidateNode.x, candidateNode.y);
                this.ctx.stroke();
                this.ctx.setLineDash([]);
                if (candidate.isNearest) {
                    this.ctx.beginPath();
                    this.ctx.arc(candidateNode.x, candidateNode.y, 0.8, 0, Math.PI * 2);
                    this.ctx.fillStyle = 'rgba(0, 255, 0, 0.6)';
                    this.ctx.fill();
                }
            });
        }
        
        nextStep() {
            this.ctx.clearRect(0, 0, 100, 50);
            this.drawNodes(true);
            if (this.currentPathIndex < this.selectionSteps.length) {
                this.drawSelectionStep(this.currentPathIndex);
                this.drawPath(this.currentPathIndex);
                this.currentPathIndex++;
            } else if (this.currentPathIndex === this.selectionSteps.length) {
                this.drawPath(this.nnPath.length - 1);
                this.currentPathIndex++;
            } else {
                nnStopAutoAnimation();
            }
        }
        
        importChristofidesPoints() {
            if (typeof animation !== 'undefined' && animation && animation.nodes) {
                this.nodes = JSON.parse(JSON.stringify(animation.nodes));
                this.numNodes = this.nodes.length;
                this.computeNearestNeighborPath();
                this.ctx.clearRect(0, 0, 100, 50);
                this.currentPathIndex = 0;
                this.drawNodes(true);
            }
        }
    }
    
    // Globale Variablen für Nearest Neighbor
    let nnAnimation = null;
    let nnAutoIntervalId = null;
    
    // Nearest Neighbor Funktionen
    function nnUpdateInfoPanel() {
        const dataOutput = document.getElementById('nnDataOutput');
        const stepDropdown = document.getElementById('nnStepDropdown');
        const stepDetails = document.getElementById('nnStepDetails');
        const fullTable = document.getElementById('nnFullTable');
        
        if (!dataOutput || !stepDropdown || !nnAnimation) return;
        
        let html = "<strong>Algorithmus:</strong> Nearest Neighbor<br>";
        html += "<hr>";
        html += "<strong>Punkte:</strong><br>";
        html += nnAnimation.nodes.map(node => "P" + node.id + ": (" + node.x + ", " + node.y + ")").join("<br>");
        html += "<hr>";
        
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
            path += `<br><br><span style='font-size: 1.2em;'><strong>Gesamtlänge: ${totalLength.toFixed(2)}</strong></span>`;
        }
        
        html += `<strong>Aktueller Pfad:</strong><br>${path}`;
        dataOutput.innerHTML = html;
        
        stepDropdown.innerHTML = '<option value="">Schritt auswählen...</option>';
        nnAnimation.selectionSteps.forEach((step, stepIndex) => {
            stepDropdown.innerHTML += `<option value="${stepIndex}">Schritt ${stepIndex + 1}: P${step.current}</option>`;
        });
        
        stepDetails.innerHTML = "";
        
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
        
        let html = "<h4></h4>";
        html += "<table class='selection-table' style='width: 100%; border-collapse: collapse;'>";
        html += "<tr><th>Schritt</th><th>Aktueller Knoten</th><th>Kandidat</th><th>Entfernung</th><th>Ausgewählt</th></tr>";
        
        nnAnimation.selectionSteps.forEach((step, stepIndex) => {
            step.candidates.forEach(candidate => {
                html += candidate.isNearest ? "<tr class='selected'>" : "<tr>";
                html += `<td style="border: 1px solid #ddd; padding: 4px; text-align: center;">${stepIndex + 1}</td>`;
                html += `<td style="border: 1px solid #ddd; padding: 4px; text-align: center;">P${step.current}</td>`;
                html += `<td style="border: 1px solid #ddd; padding: 4px; text-align: center;">P${candidate.node}</td>`;
                html += `<td style="border: 1px solid #ddd; padding: 4px; text-align: center;">${candidate.distance.toFixed(2)}</td>`;
                html += `<td style="border: 1px solid #ddd; padding: 4px; text-align: center;">${candidate.isNearest ? "✓" : ""}</td>`;
                html += "</tr>";
            });
        });
        
        html += "</table>";
        
        fullTableDiv.innerHTML = html;
        fullTableDiv.style.display = 'block';
    }

    function nnToggleFullTable() {
        const fullTableDiv = document.getElementById('nnFullTable');
        if (!fullTableDiv) return;
        if (fullTableDiv.style.display === 'none' || !fullTableDiv.innerHTML.trim()) {
            nnShowFullTable();
        } else {
            fullTableDiv.style.display = 'none';
        }
    }

    function nnNextStep() {
        if (!nnAnimation) return;
        
        if (nnAnimation.currentPathIndex > nnAnimation.selectionSteps.length) {
            nnAnimation.ctx.clearRect(0, 0, 100, 50);
            nnAnimation.drawNodes(true);
            nnAnimation.drawPath(nnAnimation.nnPath.length - 1);
            return;
        }
        
        nnAnimation.nextStep();
        
        nnUpdateInfoPanel();
        
        if (nnAnimation.currentPathIndex > nnAnimation.selectionSteps.length) {
            nnAnimation.ctx.clearRect(0, 0, 100, 50);
            nnAnimation.drawNodes(true);
            nnAnimation.drawPath(nnAnimation.nnPath.length - 1);
            
            let totalLength = 0;
            for (let i = 1; i < nnAnimation.nnPath.length; i++) {
                totalLength += nnAnimation.distance(
                    nnAnimation.nodes[nnAnimation.nnPath[i - 1]],
                    nnAnimation.nodes[nnAnimation.nnPath[i]]
                );
            }
            
            nnUpdateInfoPanel();
            
            nnStopAutoAnimation();
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

    function nnUpdateNumPoints() {
        nnStopAutoAnimation();
        const numPoints = parseInt(document.getElementById('nnNumPoints').value);
        
        if (isNaN(numPoints) || numPoints < 3 || numPoints > 25) {
            alert("Bitte geben Sie eine gültige Anzahl von Punkten zwischen 3 und 25 ein.");
            return;
        }
        
        nnAnimation = new NearestNeighborAnimation(document.getElementById('nnCanvas'), numPoints);
        
        nnAnimation.ctx.clearRect(0, 0, 100, 50);
        nnAnimation.drawNodes(true);
        
        nnUpdateInfoPanel();
    }

    function nnImportPoints() {
        if (typeof animation !== 'undefined' && animation && animation.nodes) {
            if (nnAnimation) {
                nnAnimation.importChristofidesPoints();
                nnResetAnimation();
                nnUpdateInfoPanel();
            }
        } else {
            console.log("Christofides-Animation nicht gefunden oder keine Punkte verfügbar");
        }
    }

    function nnToggleConstellation() {
        nnStopAutoAnimation();
        
        const numPoints = nnAnimation.numNodes;
        
        nnAnimation = new NearestNeighborAnimation(document.getElementById('nnCanvas'), numPoints);
        
        nnAnimation.nodes = nnGenerateConstellationNodes();
        nnAnimation.numNodes = nnAnimation.nodes.length;
        
        nnAnimation.computeNearestNeighborPath();
        
        nnAnimation.currentPathIndex = 0;
        nnAnimation.ctx.clearRect(0, 0, 100, 50);
        nnAnimation.drawNodes(true);
        
        nnUpdateInfoPanel();
    }

    function nnGenerateConstellationNodes() {
        const constellationTypes = ['libra', 'orion', 'ursa_minor', 'cassiopeia', 'cygnus'];
        const selectedType = constellationTypes[Math.floor(Math.random() * constellationTypes.length)];
        
        const count = parseInt(document.getElementById('nnNumPoints').value, 10) || 4;
        
        const constellations = {
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
            ursa_minor: [
                { x: 5, y: 5 },
                { x: 13, y: 17 },
                { x: 21, y: 25 },
                { x: 29, y: 33 },
                { x: 21, y: 41 },
                { x: 29, y: 45 },
                { x: 45, y: 37 }
            ],
            cassiopeia: [
                { x: 5, y: 5 },
                { x: 13, y: 29 },
                { x: 25, y: 5 },
                { x: 37, y: 29 },
                { x: 45, y: 5 }
            ],
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
        
        const baseNodes = constellations[selectedType];
        let nodes = [];
        
        if (count === baseNodes.length) {
            nodes = baseNodes.map((pt, i) => ({ ...pt, id: i }));
        } else {
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

    function nnGenerateRandomPoints() {
        nnStopAutoAnimation();
        
        const numPoints = nnAnimation.numNodes;
        
        nnAnimation = new NearestNeighborAnimation(document.getElementById('nnCanvas'), numPoints);
        
        nnAnimation.ctx.clearRect(0, 0, 100, 50);
        nnAnimation.drawNodes(true);
        
        nnUpdateInfoPanel();
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
    
    // Event-Listener
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
    
    // Initialisierung beim Laden der Seite
    document.addEventListener('DOMContentLoaded', function() {
        const canvas = document.getElementById('nnCanvas');
        if (canvas) {
            nnAnimation = new NearestNeighborAnimation(canvas, 4);
            nnAnimation.drawNodes(true);
            nnUpdateInfoPanel();
        }
    });
    </script>
</body>
