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
                    <button onclick="startAutoAnimation()">Animation Starten</button>
                    <label for="speedSlider">Geschwindigkeit:</label>
                    <!-- Der Slider wird jetzt in Prozent angegeben: 50% verlangsamt (2000ms) und 200% beschleunigt (500ms). -->
                    <input type="range" id="speedSlider" min="50" max="200" step="1" value="100">
                </div>
                <div>
                    <label for="numPoints">Anzahl der Punkte:</label>
                    <!-- Das Eingabefeld wurde auf doppelte Breite vergrößert und die standardmäßig angezeigte Zahl um 100% erhöht -->
                    <input type="number" id="numPoints" min="3" max="25" value="4" style="width:50px; height:30px;">
                    <button onclick="updateNumPoints()">Punkte Aktualisieren</button>
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
        // Skalierung des canvas: logische Koordinaten von 0 bis 50
        this.ctx.scale(canvas.width / 50, canvas.height / 50);
        this.numNodes = numNodes;
        this.nodes = [];
        this.mstEdges = [];
        this.oddNodes = [];
        this.matchingEdges = [];
        this.eulerianCircuit = [];
        this.tspPath = [];
        // Phasen: 'mst', 'odd', 'matching', 'euler', 'tsp'
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
    // Zeichnet ein Koordinatensystem als Raster mit fester Größe 50x50
    drawCoordinateSystem() {
        this.ctx.strokeStyle = "#ccc";
        this.ctx.lineWidth = 0.1;
        // Vertikale Linien alle 5 Einheiten
        for (let x = 0; x <= 50; x += 5) {
            this.ctx.beginPath();
            this.ctx.moveTo(x, 0);
            this.ctx.lineTo(x, 50);
            this.ctx.stroke();
        }
        // Horizontale Linien alle 5 Einheiten
        for (let y = 0; y <= 50; y += 5) {
            this.ctx.beginPath();
            this.ctx.moveTo(0, y);
            this.ctx.lineTo(50, y);
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
        if (this.phase !== this.lastPhase) {
            // Canvas nun mit fester Größe 50x50 leeren
            this.ctx.clearRect(0, 0, 50, 50);
            // Neu zeichnen: zuerst das Raster und dann die Knoten.
            this.drawNodes();
            this.drawnEdges.clear();
            this.lastPhase = this.phase;
        }
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
                this.phase = 'tsp';
                this.currentTSPIndex = 1;
            }
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
    let html = "<strong>Generierte Punkte:</strong><br>";
    html += animation.nodes.map(node => "P" + node.id + ": (" + node.x + ", " + node.y + ")").join("<br>") + "<hr>";
    if (animation.phase === 'mst') {
        html += "<strong>MST Schritt:</strong><br>";
        html += animation.mstEdges.slice(0, animation.currentMSTIndex)
            .map(e => "Von " + e.from + " nach " + e.to + " (Distanz: " + e.distance.toFixed(2) + ")")
            .join("<br>");
    }
    else if (animation.phase === 'odd' || (animation.phase === 'matching' && animation.currentMatchingIndex === 0)) {
        html += "<strong>Ungerade Knoten (Odd Nodes):</strong><br>" + animation.oddNodes.join(", ");
    }
    else if (animation.phase === 'matching') {
        html += "<strong>Matching Kanten:</strong><br>";
        html += animation.matchingEdges.slice(0, animation.currentMatchingIndex)
            .map(e => "Von " + e.from + " nach " + e.to + " (Distanz: " + e.distance.toFixed(2) + ")")
            .join("<br>");
    }
    else if (animation.phase === 'euler') {
        html += "<strong>Eulerischer Pfad (bis jetzt):</strong><br>" + animation.eulerianCircuit.slice(0, animation.currentEulerIndex).join(" → ");
    }
    else if (animation.phase === 'tsp') {
        if (animation.currentTSPIndex < animation.tspPath.length) {
            html += "<strong>TSP Zwischenpfad:</strong><br>" + animation.tspPath.slice(0, animation.currentTSPIndex).join(" → ");
        } else {
            let totalLength = 0;
            for (let i = 1; i < animation.tspPath.length; i++) {
                totalLength += animation.distance(animation.nodes[animation.tspPath[i-1]], animation.nodes[animation.tspPath[i]]);
            }
            html += "<strong>TSP Komplett:</strong><br>" + animation.tspPath.join(" → ") + "<br>" +
                    "Gesamtlänge: " + totalLength.toFixed(2);
        }
    } else {
        html += "Warte auf Abschluss des visuellen Schrittes...";
    }
    dataOutput.innerHTML = html;
}
function nextStep() {
    if (!animation) return;
    animation.nextStep();
}
function startAutoAnimation() {
    if (autoIntervalId) return;
    animation.ctx.clearRect(0, 0, 50, 50);
    animation.drawNodes();
    animation.drawnEdges.clear();
    animation.lastPhase = null;
    const slider = document.getElementById('speedSlider');
    const percent = parseInt(slider.value);
    // Bei 100% entspricht die Geschwindigkeit 1000ms.
    // Höhere Prozentwerte verringern das Intervall (schneller) und niedrigere erhöhen es (langsamer).
    const speed = 1000 * (100 / percent);
    autoIntervalId = setInterval(() => {
        animation.nextStep();
    }, speed);
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
        animation.ctx.clearRect(0, 0, 50, 50);
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
    animation.ctx.clearRect(0, 0, 50, 50);
    animation.drawNodes();
    updateInfoPanel();
}
    </script>
</body>
