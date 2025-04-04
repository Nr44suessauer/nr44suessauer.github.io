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
            flex: 0 0 500px;
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
        /* Brute Force Stile */
        .bf-container {
            display: flex;
        }
        .bf-animation-container {
            flex: 1;
        }
        #bfInfoPanel {
            flex: 0 0 500px;
            margin-left: 20px;
            background: #f2f2f2;
            padding: 10px;
            font-family: sans-serif;
            font-size: 14px;
            overflow-y: auto;
            max-height: 900px;
        }
        #bfCanvas {
            border: 1px solid black;
            display: block;
        }
        .bf-controls > div {
            margin: 10px 0;
        }
        .bf-controls > div > * {
            margin-right: 10px;
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
                    <input type="range" id="speedSlider" min="50" max="4000" step="1" value="300">
                </div>
                <div>
                    <label for="numPoints">Anzahl der Punkte:</label>
                    <input type="number" id="numPoints" min="3" max="25" value="4" style="width:50px; height:30px;">
                    <button onclick="updateNumPoints()">Zufällige Punkte</button>
                    <button onclick="importNNPoints()">NN-Punkte importieren</button>
                    <button onclick="importBFPoints()">BF-Punkte importieren</button>
                    <label for="startPointChristofides">Startpunkt:</label>
                    <input type="number" id="startPointChristofides" min="0" max="24" value="0" style="width:50px; height:30px;">
                    <button onclick="updateStartPoint()">Startpunkt setzen</button>
                    <!-- Für Christofides: Dropdown-Menü mit neuen Sternbilder-Optionen -->
                    <select id="constellationSelect" onchange="toggleConstellation(this.value)" style="height:30px;">
                        <option value="">Sternenbild wählen...</option>
                        <option value="libra">Waage (Libra) - 10 Punkte</option>
                        <option value="orion">Orion - 10 Punkte</option>
                        <option value="ursa_minor">Kleiner Bär - 7 Punkte</option>
                        <option value="cassiopeia">Kassiopeia - 5 Punkte</option>
                        <option value="cygnus">Schwan - 9 Punkte</option>
                        <option value="ursa_major">Großer Bär - 7 Punkte</option>
                        <option value="leo">Löwe - 9 Punkte</option>
                        <option value="draco">Drache - 11 Punkte</option>
                        <option value="gemini">Zwillinge - 9 Punkte</option>
                        <option value="southern_cross">Kreuz des Südens - 4 Punkte</option>
                        <option value="pegasus">Pegasus - 5 Punkte</option>
                        <option value="andromeda">Andromeda - 7 Punkte</option>
                        <option value="sagittarius">Schütze - 8 Punkte</option>
                        <option value="scorpius">Skorpion - 10 Punkte</option>
                        <option value="cancer">Krebs - 6 Punkte</option>
                        <option value="pisces">Fische - 11 Punkte</option>
                        <option value="aquila">Adler - 7 Punkte</option>
                        <option value="hercules">Herkules - 8 Punkte</option>
                    </select>
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
                    <input type="range" id="nnSpeedSlider" min="50" max="4000" step="1" value="300">
                </div>
                <div>
                    <label for="nnNumPoints">Anzahl der Punkte:</label>
                    <input type="number" id="nnNumPoints" min="3" max="25" value="4" style="width:50px; height:30px;">
                    <button onclick="nnGenerateRandomPoints()">Zufällige Punkte</button>
                    <button onclick="nnImportPoints()">Christofides Punkte importieren</button>
                    <button onclick="nnImportBFPoints()">BF-Punkte importieren</button>
                    <label for="nnStartPoint">Startpunkt:</label>
                    <input type="number" id="nnStartPoint" min="0" max="24" value="0" style="width:50px; height:30px;">
                    <button onclick="nnUpdateStartPoint()">Startpunkt setzen</button>
                    <!-- Für Nearest Neighbor: Dropdown-Menü mit neuen Sternbilder-Optionen -->
                    <select id="nnConstellationSelect" onchange="nnToggleConstellation(this.value)" style="height:30px;">
                        <option value="">Sternenbild wählen...</option>
                        <option value="libra">Waage (Libra) - 10 Punkte</option>
                        <option value="orion">Orion - 10 Punkte</option>
                        <option value="ursa_minor">Kleiner Bär - 7 Punkte</option>
                        <option value="cassiopeia">Kassiopeia - 5 Punkte</option>
                        <option value="cygnus">Schwan - 9 Punkte</option>
                        <option value="ursa_major">Großer Bär - 7 Punkte</option>
                        <option value="leo">Löwe - 9 Punkte</option>
                        <option value="draco">Drache - 11 Punkte</option>
                        <option value="gemini">Zwillinge - 9 Punkte</option>
                        <option value="southern_cross">Kreuz des Südens - 4 Punkte</option>
                        <option value="pegasus">Pegasus - 5 Punkte</option>
                        <option value="andromeda">Andromeda - 7 Punkte</option>
                        <option value="sagittarius">Schütze - 8 Punkte</option>
                        <option value="scorpius">Skorpion - 10 Punkte</option>
                        <option value="cancer">Krebs - 6 Punkte</option>
                        <option value="pisces">Fische - 11 Punkte</option>
                        <option value="aquila">Adler - 7 Punkte</option>
                        <option value="hercules">Herkules - 8 Punkte</option>
                    </select>
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
    <div style="display: flex; align-items: center; margin-top: 10px;"><p></p></div>
    --- 
    <div style="display: flex; align-items: center; margin-top: 10px;"><p></p></div>
    <!-- ================ BRUTE FORCE ALGORITHMUS ================ -->
    <h3>Brute Force Algorithm</h3>
    <div class="bf-container">
        <div class="bf-animation-container">
            <div class="bf-controls">
                <div>
                    <button onclick="bfNextStep()">Nächster Schritt</button>
                    <button onclick="bfResetAnimation()">Reset</button>
                    <button onclick="bfToggleAutoAnimation()">Animation Start/Stop</button>
                    <label for="bfSpeedSlider">Geschwindigkeit:</label>
                    <input type="range" id="bfSpeedSlider" min="50" max="4000" step="1" value="300">
                </div>
                <div>
                    <label for="bfNumPoints">Anzahl der Punkte:</label>
                    <input type="number" id="bfNumPoints" min="3" max="25" value="4" style="width:50px; height:30px;">
                    <button onclick="bfUpdateNumPoints()">Zufällige Punkte</button>
                    <button onclick="bfImportChristofidesPoints()">Christofides Punkte importieren</button>
                    <button onclick="bfImportNNPoints()">NN-Punkte importieren</button>
                    <label for="bfStartPoint">Startpunkt:</label>
                    <input type="number" id="bfStartPoint" min="0" max="24" value="0" style="width:50px; height:30px;">
                    <button onclick="bfUpdateStartPoint()">Startpunkt setzen</button>
                    <select id="bfConstellationSelect" onchange="bfToggleConstellation(this.value)" style="height:30px;">
                        <option value="">Sternenbild wählen...</option>
                        <option value="libra">Waage (Libra) - 10 Punkte</option>
                        <option value="orion">Orion - 10 Punkte</option>
                        <option value="ursa_minor">Kleiner Bär - 7 Punkte</option>
                        <option value="cassiopeia">Kassiopeia - 5 Punkte</option>
                        <option value="cygnus">Schwan - 9 Punkte</option>
                        <option value="ursa_major">Großer Bär - 7 Punkte</option>
                        <option value="leo">Löwe - 9 Punkte</option>
                        <option value="draco">Drache - 11 Punkte</option>
                        <option value="gemini">Zwillinge - 9 Punkte</option>
                        <option value="southern_cross">Kreuz des Südens - 4 Punkte</option>
                        <option value="pegasus">Pegasus - 5 Punkte</option>
                        <option value="andromeda">Andromeda - 7 Punkte</option>
                        <option value="sagittarius">Schütze - 8 Punkte</option>
                        <option value="scorpius">Skorpion - 10 Punkte</option>
                        <option value="cancer">Krebs - 6 Punkte</option>
                        <option value="pisces">Fische - 11 Punkte</option>
                        <option value="aquila">Adler - 7 Punkte</option>
                        <option value="hercules">Herkules - 8 Punkte</option>
                    </select>
                    <button onclick="bfDownloadGraph()">Graph herunterladen</button>
                </div>
            </div>
            <canvas id="bfCanvas" width="800" height="600"></canvas>
        </div>
        <div id="bfInfoPanel">
            <h3>Brute Force Daten</h3>
            <div id="bfDataOutput">Warte auf den ersten Schritt...</div>
            <button onclick="bfToggleFullTable()">Tabelle ein-/ausblenden</button>
            <div id="bfFullTable" style="display: none; margin-top: 20px;"></div>
        </div>
    </div>

    <script>
    // Gemeinsame Konstante für die Sternbildkoordinaten
    const CONSTELLATIONS = {
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
            { x: 15, y: 15 },
            { x: 13, y: 25 },
            { x: 21, y: 29 },
            { x: 25, y: 35 },
            { x: 35, y: 39 },
            { x: 45, y: 45 },
            { x: 39, y: 25 }
        ],
        // Kassiopeia (W-Form)
        cassiopeia: [
            { x: 7, y: 10 },
            { x: 13, y: 25 },
            { x: 21, y: 10 },
            { x: 33, y: 25 },
            { x: 43, y: 10 }
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
        ],
        // Großer Wagen (Ursa Major)
        ursa_major: [
            { x: 5, y: 5 },
            { x: 13, y: 15 },
            { x: 21, y: 20 },
            { x: 30, y: 25 },
            { x: 35, y: 35 },
            { x: 40, y: 45 }
        ],
        // Löwe (Leo)
        leo: [
            { x: 10, y: 10 },
            { x: 15, y: 15 },
            { x: 25, y: 20 },
            { x: 35, y: 25 },
            { x: 45, y: 30 },
            { x: 35, y: 35 },
            { x: 25, y: 30 },
            { x: 15, y: 25 },
            { x: 10, y: 10 }
        ],
        // Drache (Draco)
        draco: [
            { x: 5, y: 45 },
            { x: 10, y: 35 },
            { x: 15, y: 30 },
            { x: 20, y: 25 },
            { x: 25, y: 20 },
            { x: 30, y: 15 },
            { x: 35, y: 10 },
            { x: 30, y: 5 },
            { x: 20, y: 5 },
            { x: 10, y: 10 },
            { x: 5, y: 15 }
        ],
        // Zwillinge (Gemini)
        gemini: [
            { x: 10, y: 10 },
            { x: 15, y: 15 },
            { x: 20, y: 20 },
            { x: 25, y: 25 },
            { x: 30, y: 30 },
            { x: 35, y: 25 },
            { x: 40, y: 20 },
            { x: 35, y: 15 },
            { x: 30, y: 10 }
        ],
        // Kreuz des Südens (Southern Cross)
        southern_cross: [
            { x: 25, y: 5 },
            { x: 25, y: 25 },
            { x: 15, y: 15 },
            { x: 35, y: 15 }
        ],
        // Pegasus (Quadrat)
        pegasus: [
            { x: 10, y: 10 },
            { x: 10, y: 40 },
            { x: 40, y: 40 },
            { x: 40, y: 10 },
            { x: 10, y: 10 }
        ],
        // Andromeda
        andromeda: [
            { x: 5, y: 10 },
            { x: 15, y: 15 },
            { x: 25, y: 17 },
            { x: 35, y: 15 },
            { x: 40, y: 5 },
            { x: 42, y: 12 },
            { x: 45, y: 20 }
        ],
        // Schütze (Sagittarius)
        sagittarius: [
            { x: 10, y: 40 },
            { x: 20, y: 30 },
            { x: 30, y: 25 },
            { x: 40, y: 27 },
            { x: 45, y: 35 },
            { x: 35, y: 20 },
            { x: 25, y: 15 },
            { x: 15, y: 15 }
        ],
        // Skorpion (Scorpius)
        scorpius: [
            { x: 10, y: 35 },
            { x: 15, y: 30 },
            { x: 20, y: 25 },
            { x: 25, y: 20 },
            { x: 30, y: 15 },
            { x: 35, y: 10 },
            { x: 35, y: 15 },
            { x: 40, y: 15 },
            { x: 45, y: 10 },
            { x: 45, y: 5 }
        ],
        // Krebs (Cancer)
            cancer: [
                { x: 25, y: 5 },
                { x: 20, y: 15 },
                { x: 30, y: 15 },
                { x: 15, y: 25 },
                { x: 35, y: 25 },
                { x: 25, y: 35 }
            ],     // Fische (Pisces)
        pisces: [
            { x: 5, y: 15 },
            { x: 10, y: 10 },
            { x: 15, y: 15 },
            { x: 20, y: 20 },
            { x: 25, y: 25 },
            { x: 30, y: 30 },
            { x: 35, y: 35 },
            { x: 40, y: 30 },
            { x: 45, y: 25 },
            { x: 40, y: 20 },
            { x: 35, y: 15 }
        ],
        // Adler (Aquila)
        aquila: [
            { x: 25, y: 5 },
            { x: 20, y: 15 },
            { x: 15, y: 25 },
            { x: 25, y: 20 },
            { x: 35, y: 25 },
            { x: 30, y: 15 },
            { x: 25, y: 5 }
        ],
        // Herkules
        hercules: [
            { x: 10, y: 10 },
            { x: 15, y: 25 },
            { x: 25, y: 30 },
            { x: 35, y: 25 },
            { x: 40, y: 10 },
            { x: 30, y: 15 },
            { x: 20, y: 15 },
            { x: 10, y: 10 }
        ]
    };

    // Funktion zur Erstellung von Sternbild-Knoten für beide Algorithmen
    function createConstellationNodes(selectedType, count) {
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

    // ================ CHRISTOFIDES ALGORITHMUS ================  
    // Christofides Animation Klasse
    class ChristofidesAnimation {
        constructor(canvas, numNodes = 4, startNode = 0) {
            this.canvas = canvas;
            this.ctx = canvas.getContext('2d');
            this.ctx.setTransform(1, 0, 0, 1, 0, 0);
            this.ctx.scale(canvas.width / 50, canvas.height / 50);
            this.numNodes = numNodes;
            this.startNode = startNode;
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
            const inTree = new Set([this.startNode]);
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
            const stack = [this.startNode];
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
    let animation = new ChristofidesAnimation(document.getElementById('canvas'), 4, 0);
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
        const startPoint = parseInt(document.getElementById('startPointChristofides').value);
        animation = new ChristofidesAnimation(document.getElementById('canvas'), numPoints, startPoint);
        animation.ctx.clearRect(0, 0, 100, 50);
        animation.drawNodes(true);
        updateInfoPanel();
    }

    function updateStartPoint() {
        stopAutoAnimation();
        const startPoint = parseInt(document.getElementById('startPointChristofides').value);
        
        // Prüfen ob der Startpunkt gültig ist
        if (isNaN(startPoint) || startPoint < 0 || startPoint >= animation.nodes.length) {
            alert(`Bitte geben Sie einen gültigen Startpunkt zwischen 0 und ${animation.nodes.length - 1} ein.`);
            return;
        }
        
        // Speichern der aktuellen Knoten
        const currentNodes = JSON.parse(JSON.stringify(animation.nodes));
        
        // Erstellen einer neuen Animation mit dem neuen Startpunkt aber den bestehenden Knoten
        animation = new ChristofidesAnimation(document.getElementById('canvas'), animation.numNodes, startPoint);
        animation.nodes = currentNodes; // Bestehende Knoten übernehmen
        
        // Berechnen der neuen Pfade mit dem aktuellen Startpunkt
        animation.mstEdges = [];
        animation.oddNodes = [];
        animation.matchingEdges = [];
        animation.eulerianCircuit = [];
        animation.tspPath = [];
        animation.drawnEdges.clear();
        
        // Neuberechnung basierend auf den vorhandenen Knoten
        animation.computeMST();
        animation.findOddNodes();
        animation.computeMatching();
        animation.computeEulerianCircuit();
        animation.computeTSPPath();
        
        animation.ctx.clearRect(0, 0, 100, 50);
        animation.drawNodes(true);
        updateInfoPanel();
    }

    function toggleConstellation(selectedType) {
        stopAutoAnimation();
        
        if (!selectedType) return; // Wenn keine Auswahl getroffen wurde
        
        animation = new ChristofidesAnimation(document.getElementById('canvas'), 0); // 0, wird überschrieben
        
        // Nutze die gemeinsame Funktion, um die Sternbildknoten zu erstellen
        // Mit 0 als count werden alle Originalpunkte des Sternbildes verwendet
        animation.nodes = createConstellationNodes(selectedType, 0);
        animation.numNodes = animation.nodes.length;
        
        animation.mstEdges = [];
        animation.oddNodes = [];
        animation.matchingEdges = [];
        animation.eulerianCircuit = [];
        animation.tspPath = [];
        animation.drawnEdges.clear();
        
        // Neuberechnung
        animation.computeMST();
        animation.findOddNodes();
        animation.computeMatching();
        animation.computeEulerianCircuit();
        animation.computeTSPPath();
        
        animation.ctx.clearRect(0, 0, 100, 50);
        animation.drawNodes(true);
        updateInfoPanel();
        
        // Aktualisiere das Zahlenfeld mit der tatsächlichen Punktanzahl
        document.getElementById('numPoints').value = animation.nodes.length;
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
            const startPoint = parseInt(document.getElementById('startPointChristofides').value);
            animation = new ChristofidesAnimation(document.getElementById('canvas'), numPoints, startPoint);
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

    function importBFPoints() {
        if (typeof bfAnimation !== 'undefined' && bfAnimation && bfAnimation.nodes) {
            stopAutoAnimation();
            const numPoints = bfAnimation.nodes.length;
            const startPoint = parseInt(document.getElementById('startPointChristofides').value);
            animation = new ChristofidesAnimation(document.getElementById('canvas'), numPoints, startPoint);
            animation.nodes = JSON.parse(JSON.stringify(bfAnimation.nodes));
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
            console.log("BF-Animation nicht gefunden oder keine Punkte verfügbar");
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
        constructor(canvas, numNodes = 4, startNode = 0) {
            this.canvas = canvas;
            this.ctx = canvas.getContext('2d');
            this.ctx.setTransform(1, 0, 0, 1, 0, 0);
            this.ctx.scale(canvas.width / 50, canvas.height / 50);
            this.numNodes = numNodes;
            this.startNode = startNode;
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
            const visited = new Set([this.startNode]);
            this.nnPath = [this.startNode]; 
            this.selectionSteps = [];
            let current = this.startNode;
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
            this.nnPath.push(this.startNode);
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

        importBFPoints() {
            if (typeof bfAnimation !== 'undefined' && bfAnimation && bfAnimation.nodes) {
                this.nodes = JSON.parse(JSON.stringify(bfAnimation.nodes));
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
        
        const startPoint = parseInt(document.getElementById('nnStartPoint').value);
        nnAnimation = new NearestNeighborAnimation(document.getElementById('nnCanvas'), numPoints, startPoint);
        
        nnAnimation.ctx.clearRect(0, 0, 100, 50);
        nnAnimation.drawNodes(true);
        
        nnUpdateInfoPanel();
    }

    function nnUpdateStartPoint() {
        nnStopAutoAnimation();
        const startPoint = parseInt(document.getElementById('nnStartPoint').value);
        
        // Prüfen ob der Startpunkt gültig ist
        if (isNaN(startPoint) || startPoint < 0 || startPoint >= nnAnimation.nodes.length) {
            alert(`Bitte geben Sie einen gültigen Startpunkt zwischen 0 und ${nnAnimation.nodes.length - 1} ein.`);
            return;
        }
        
        // Speichern der aktuellen Knoten
        const currentNodes = JSON.parse(JSON.stringify(nnAnimation.nodes));
        
        // Erstellen einer neuen Animation mit dem neuen Startpunkt aber den bestehenden Knoten
        nnAnimation = new NearestNeighborAnimation(document.getElementById('nnCanvas'), nnAnimation.numNodes, startPoint);
        nnAnimation.nodes = currentNodes; // Bestehende Knoten übernehmen
        
        // Neuberechnung des Nearest-Neighbor-Pfades mit dem neuen Startpunkt
        nnAnimation.computeNearestNeighborPath();
        
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

    function nnImportBFPoints() {
        if (typeof bfAnimation !== 'undefined' && bfAnimation && bfAnimation.nodes) {
            if (nnAnimation) {
                nnAnimation.importBFPoints();
                nnResetAnimation();
                nnUpdateInfoPanel();
            }
        } else {
            console.log("BF-Animation nicht gefunden oder keine Punkte verfügbar");
        }
    }

    function nnToggleConstellation(selectedType) {
        console.log("nnToggleConstellation aufgerufen mit:", selectedType);
        nnStopAutoAnimation();
        
        if (!selectedType) {
            console.log("Kein Sternenbild ausgewählt");
            return;
        }
        
        try {
            const startPoint = parseInt(document.getElementById('nnStartPoint').value);
            nnAnimation = new NearestNeighborAnimation(document.getElementById('nnCanvas'), 0, startPoint);
            console.log("Animation erstellt");
            
            nnAnimation.nodes = createConstellationNodes(selectedType, 0);
            console.log("Knoten erzeugt:", nnAnimation.nodes.length);
            nnAnimation.numNodes = nnAnimation.nodes.length;
            
            nnAnimation.computeNearestNeighborPath();
            console.log("Pfad berechnet");
            
            nnAnimation.currentPathIndex = 0;
            nnAnimation.ctx.clearRect(0, 0, 100, 50);
            nnAnimation.drawNodes(true);
            
            nnUpdateInfoPanel();
            console.log("UI aktualisiert");
            
            document.getElementById('nnNumPoints').value = nnAnimation.nodes.length;
        } catch (error) {
            console.error("Fehler in nnToggleConstellation:", error);
        }
    }

    function nnGenerateRandomPoints() {
        nnStopAutoAnimation();
        
        // Die Anzahl der Punkte aus dem Eingabefeld lesen
        const numPoints = parseInt(document.getElementById('nnNumPoints').value);
        // Startpunkt aus dem Eingabefeld lesen
        const startPoint = parseInt(document.getElementById('nnStartPoint').value);
        
        // Prüfen ob die Anzahl der Punkte gültig ist
        if (isNaN(numPoints) || numPoints < 3 || numPoints > 25) {
            alert("Bitte geben Sie eine gültige Anzahl von Punkten zwischen 3 und 25 ein.");
            return;
        }
        
        // Neue Animation mit den angegebenen Parametern erstellen
        nnAnimation = new NearestNeighborAnimation(document.getElementById('nnCanvas'), numPoints, startPoint);
        
        // Canvas löschen und neu zeichnen
        nnAnimation.ctx.clearRect(0, 0, 100, 50);
        nnAnimation.drawNodes(true);
        
        // Infopanel aktualisieren
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
            nnAnimation = new NearestNeighborAnimation(canvas, 4, 0);
            nnAnimation.drawNodes(true);
            nnUpdateInfoPanel();
        }
    });

    // ================ BRUTE FORCE ALGORITHMUS ================

    // Brute Force Animation Klasse
    class BruteForceAnimation {
        constructor(canvas, numNodes = 4, startNode = 0) {
            this.canvas = canvas;
            this.ctx = canvas.getContext('2d');
            this.ctx.setTransform(1, 0, 0, 1, 0, 0);
            this.ctx.scale(canvas.width / 50, canvas.height / 50);
            this.numNodes = numNodes;
            this.startNode = startNode;
            this.nodes = [];
            this.permutations = [];
            this.currentPermutationIndex = 0;
            this.shortestPath = null;
            this.shortestDistance = Infinity;
            this.init();
            this.drawNodes(true);
        }

        drawCoordinateSystem() {
            this.ctx.strokeStyle = "#ccc";
            this.ctx.lineWidth = 0.1;
            for (let x = 0; x <= 50; x += 5) {
                this.ctx.beginPath();
                this.ctx.moveTo(x, 0);
                this.ctx.lineTo(x, 50);
                this.ctx.stroke();
            }
            for (let y = 0; y <= 50; y += 5) {
                this.ctx.beginPath();
                this.ctx.moveTo(0, y);
                this.ctx.lineTo(50, y);
                this.ctx.stroke();
            }
        }

        init() {
            this.generateNodes();
            this.permutations = this.generatePermutations([...Array(this.numNodes).keys()]);
        }

        generateNodes() {
            for (let i = 0; i < this.numNodes; i++) {
                this.nodes.push({
                    x: Math.floor(Math.random() * 40) + 5,
                    y: Math.floor(Math.random() * 40) + 5,
                    id: i
                });
            }
        }

        generatePermutations(array) {
            // Wenn ein Startknoten festgelegt ist, generieren wir nur Permutationen, die mit dem Startknoten beginnen
            const permutations = [];
            
            // Wir fixieren den Startknoten
            const startNode = this.startNode;
            
            // Entferne den Startknoten aus dem Array
            const remainingNodes = array.filter(node => node !== startNode);
            
            // Generiere alle Permutationen für die verbleibenden Knoten
            if (remainingNodes.length === 0) {
                return [[startNode]];
            } else if (remainingNodes.length === 1) {
                return [[startNode, remainingNodes[0]]];
            }
            
            const restPerms = this.generateAllPermutations(remainingNodes);
            
            // Füge den Startknoten am Anfang jeder Permutation hinzu
            for (const perm of restPerms) {
                permutations.push([startNode, ...perm]);
            }
            
            return permutations;
        }
        
        // Hilfsfunktion zum Generieren aller Permutationen ohne festen Startpunkt
        generateAllPermutations(array) {
            if (array.length === 1) return [array];
            const perms = [];
            for (let i = 0; i < array.length; i++) {
                const rest = [...array.slice(0, i), ...array.slice(i + 1)];
                const restPerms = this.generateAllPermutations(rest);
                for (const perm of restPerms) {
                    perms.push([array[i], ...perm]);
                }
            }
            return perms;
        }

        distance(a, b) {
            return Math.sqrt((a.x - b.x) ** 2 + (a.y - b.y) ** 2);
        }

        calculatePathDistance(path) {
            let distance = 0;
            for (let i = 0; i < path.length - 1; i++) {
                distance += this.distance(this.nodes[path[i]], this.nodes[path[i + 1]]);
            }
            distance += this.distance(this.nodes[path[path.length - 1]], this.nodes[path[0]]);
            return distance;
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

        drawPath(path, color = 'blue') {
            this.ctx.strokeStyle = color;
            this.ctx.lineWidth = 0.3;
            this.ctx.beginPath();
            const startNode = this.nodes[path[0]];
            this.ctx.moveTo(startNode.x, startNode.y);
            for (let i = 1; i < path.length; i++) {
                const node = this.nodes[path[i]];
                this.ctx.lineTo(node.x, node.y);
            }
            this.ctx.lineTo(startNode.x, startNode.y);
            this.ctx.stroke();
        }

        nextStep() {
            if (this.currentPermutationIndex >= this.permutations.length) {
                // Wenn alle Permutationen getestet wurden, lösche alle roten Geraden
                this.ctx.clearRect(0, 0, 50, 50);
                this.drawNodes(true);

                // Zeichne nur den kürzesten Pfad in grün
                if (this.shortestPath) {
                    this.drawPath(this.shortestPath, 'green');
                }
                
                // Die Punkte und Parameter werden durch die updateInfoPanel-Methode angezeigt
                this.updateInfoPanel(true);
                return;
            }

            const currentPath = this.permutations[this.currentPermutationIndex];
            const currentDistance = this.calculatePathDistance(currentPath);

            if (currentDistance < this.shortestDistance) {
                this.shortestDistance = currentDistance;
                this.shortestPath = currentPath;
            }

            this.ctx.clearRect(0, 0, 50, 50);
            this.drawNodes(true);
            this.drawPath(currentPath, 'red');
            if (this.shortestPath) {
                this.drawPath(this.shortestPath, 'green');
            }

            this.currentPermutationIndex++;
            this.updateInfoPanel();
        }

        updateInfoPanel(isFinished = false) {
            const dataOutput = document.getElementById('bfDataOutput');
            let html = `<strong>Punkte:</strong><br>`;
            html += this.nodes.map(node => "P" + node.id + ": (" + node.x + ", " + node.y + ")").join("<br>");
            html += "<hr>";
            
            html += `<strong>Anzahl der Permutationen:</strong> ${this.permutations.length}<br>`;
            
            if (!isFinished) {
                html += `<strong>Aktuelle Permutation:</strong> ${this.currentPermutationIndex} von ${this.permutations.length}<br><hr>`;
                
                if (this.currentPermutationIndex < this.permutations.length) {
                    html += `<strong>Aktueller Pfad:</strong> ${this.permutations[this.currentPermutationIndex].map(p => `P${p}`).join(' → ')}<br>`;
                    html += `<strong>Distanz der aktuellen Permutation:</strong> ${this.calculatePathDistance(this.permutations[this.currentPermutationIndex]).toFixed(2)}<br>`;
                } else {
                    html += "<strong>Alle Permutationen geprüft</strong><br>";
                }
            } else {
                html += `<strong>Alle Permutationen geprüft:</strong> ${this.permutations.length} von ${this.permutations.length}<br><hr>`;
            }
            
            html += `<hr><strong>Kürzeste Distanz:</strong> ${this.shortestDistance !== Infinity ? this.shortestDistance.toFixed(2) : "Noch nicht gefunden"}<br>`;
            
            if (this.shortestPath) {
                html += `<strong>Kürzester Pfad:</strong> ${this.shortestPath.map(p => `P${p}`).join(' → ')}<br>`;
                
                // Zeige detaillierte Ergebnisse an, wenn alle Permutationen geprüft wurden
                if (isFinished || this.currentPermutationIndex >= this.permutations.length) {
                    html += `<hr><h4>Ergebnisanalyse:</h4>`;
                    
                    // Berechne Faktoriell für Vergleich
                    const factorial = n => n <= 1 ? 1 : n * factorial(n - 1);
                    const totalPermsWithoutFix = factorial(this.numNodes);
                    const totalPermsWithFix = factorial(this.numNodes - 1);
                    
                    html += `<strong>Geprüfte Permutationen:</strong> ${this.permutations.length}<br>`;
                    html += `<strong>Gesamtpermutationen ohne festen Startpunkt:</strong> ${totalPermsWithoutFix}<br>`;
                    html += `<strong>Ersparnis durch festen Startpunkt:</strong> ${totalPermsWithoutFix - totalPermsWithFix} Permutationen (${Math.round((1 - totalPermsWithFix/totalPermsWithoutFix) * 100)}%)<br><br>`;
                    
                    html += `<strong style="font-size: 1.2em;">Gefundener optimaler Pfad:</strong><br>`;
                    html += `<span style="font-size: 1.1em;">${this.shortestPath.map(p => `P${p}`).join(' → ')} → P${this.shortestPath[0]}</span><br>`;
                    html += `<strong>Gesamtlänge:</strong> <span style="color: green; font-weight: bold;">${this.shortestDistance.toFixed(2)}</span><br>`;
                    
                    // Einzelne Wegstücke mit Distanzen anzeigen
                    html += `<br><strong>Einzelne Abschnitte:</strong><br>`;
                    html += `<table class="selection-table" style="width: 100%;">`;
                    html += `<tr><th>Von</th><th>Nach</th><th>Distanz</th></tr>`;
                    
                    // Füge alle Segmente des kürzesten Pfades hinzu
                    for (let i = 0; i < this.shortestPath.length - 1; i++) {
                        const from = this.shortestPath[i];
                        const to = this.shortestPath[i + 1];
                        const dist = this.distance(this.nodes[from], this.nodes[to]);
                        html += `<tr>
                            <td style="text-align: center;">P${from}</td>
                            <td style="text-align: center;">P${to}</td>
                            <td style="text-align: center;">${dist.toFixed(2)}</td>
                        </tr>`;
                    }
                    
                    // Füge den Rückweg zum Startpunkt hinzu
                    const from = this.shortestPath[this.shortestPath.length - 1];
                    const to = this.shortestPath[0];
                    const dist = this.distance(this.nodes[from], this.nodes[to]);
                    html += `<tr>
                        <td style="text-align: center;">P${from}</td>
                        <td style="text-align: center;">P${to}</td>
                        <td style="text-align: center;">${dist.toFixed(2)}</td>
                    </tr>`;
                    
                    html += `<tr style="font-weight: bold;">
                        <td colspan="2" style="text-align: right;">Gesamtlänge:</td>
                        <td style="text-align: center;">${this.shortestDistance.toFixed(2)}</td>
                    </tr>`;
                    html += `</table>`;
                }
            } else {
                html += "<strong>Kürzester Pfad:</strong> Noch nicht gefunden";
            }
            
            dataOutput.innerHTML = html;
        }

        reset() {
            this.currentPermutationIndex = 0;
            this.shortestPath = null;
            this.shortestDistance = Infinity;
            this.ctx.clearRect(0, 0, 50, 50);
            this.drawNodes(true);
            this.updateInfoPanel();
        }

        importChristofidesPoints() {
            if (typeof animation !== 'undefined' && animation && animation.nodes) {
                this.nodes = JSON.parse(JSON.stringify(animation.nodes));
                this.numNodes = this.nodes.length;
                this.permutations = this.generatePermutations([...Array(this.numNodes).keys()]);
                this.reset();
            }
        }

        importNNPoints() {
            if (typeof nnAnimation !== 'undefined' && nnAnimation && nnAnimation.nodes) {
                this.nodes = JSON.parse(JSON.stringify(nnAnimation.nodes));
                this.numNodes = this.nodes.length;
                this.permutations = this.generatePermutations([...Array(this.numNodes).keys()]);
                this.reset();
            }
        }
    }

    let bfAnimation = new BruteForceAnimation(document.getElementById('bfCanvas'), 4, 0);
    let bfAutoIntervalId = null;

    function bfNextStep() {
        if (!bfAnimation) return;
        bfAnimation.nextStep();
    }

    function bfStartAutoAnimation() {
        if (bfAutoIntervalId) return;
        const slider = document.getElementById('bfSpeedSlider');
        const percent = parseInt(slider.value);
        const speed = 1000 * (100 / percent);
        bfAutoIntervalId = setInterval(() => {
            bfAnimation.nextStep();
        }, speed);
    }

    function bfToggleAutoAnimation() {
        if (bfAutoIntervalId) {
            bfStopAutoAnimation();
        } else {
            bfStartAutoAnimation();
        }
    }

    function bfStopAutoAnimation() {
        if (bfAutoIntervalId) {
            clearInterval(bfAutoIntervalId);
            bfAutoIntervalId = null;
        }
    }

    function bfResetAnimation() {
        bfStopAutoAnimation();
        if (bfAnimation) {
            bfAnimation.reset();
        }
    }

    function bfUpdateNumPoints() {
        const numPoints = parseInt(document.getElementById('bfNumPoints').value, 10);
        const startPoint = parseInt(document.getElementById('bfStartPoint').value, 10);
        if (isNaN(numPoints) || numPoints < 3 || numPoints > 25) {
            alert("Bitte eine gültige Anzahl zwischen 3 und 25 eingeben");
            return;
        }
        bfAnimation = new BruteForceAnimation(document.getElementById('bfCanvas'), numPoints, startPoint);
        bfAnimation.reset();
    }

    function bfUpdateStartPoint() {
        bfStopAutoAnimation();
        const startPoint = parseInt(document.getElementById('bfStartPoint').value);
        
        // Prüfen ob der Startpunkt gültig ist
        if (isNaN(startPoint) || startPoint < 0 || startPoint >= bfAnimation.nodes.length) {
            alert(`Bitte geben Sie einen gültigen Startpunkt zwischen 0 und ${bfAnimation.nodes.length - 1} ein.`);
            return;
        }
        
        // Speichern der aktuellen Knoten
        const currentNodes = JSON.parse(JSON.stringify(bfAnimation.nodes));
        
        // Neue Animation mit dem neuen Startpunkt erstellen
        bfAnimation = new BruteForceAnimation(document.getElementById('bfCanvas'), bfAnimation.numNodes, startPoint);
        
        // Bestehende Knoten übernehmen
        bfAnimation.nodes = currentNodes;
        
        // Permutationen neu berechnen
        bfAnimation.permutations = bfAnimation.generatePermutations([...Array(bfAnimation.numNodes).keys()]);
        
        // Animation zurücksetzen
        bfAnimation.reset();
    }

    function bfImportChristofidesPoints() {
        if (bfAnimation) {
            bfAnimation.importChristofidesPoints();
        }
    }

    function bfImportNNPoints() {
        if (bfAnimation) {
            bfAnimation.importNNPoints();
        }
    }

    function bfToggleConstellation(selectedType) {
        if (!selectedType) return;

        // Erstelle eine neue BruteForceAnimation-Instanz
        bfAnimation = new BruteForceAnimation(document.getElementById('bfCanvas'), 0);

        // Setze die Knoten basierend auf dem ausgewählten Sternbild
        bfAnimation.nodes = createConstellationNodes(selectedType, 0);
        bfAnimation.numNodes = bfAnimation.nodes.length;

        // Initialisiere die Permutationen und setze die Animation zurück
        bfAnimation.permutations = bfAnimation.generatePermutations([...Array(bfAnimation.numNodes).keys()]);
        bfAnimation.reset();
    }

    function bfDownloadGraph() {
        const canvas = document.getElementById('bfCanvas');
        const tmpCanvas = document.createElement('canvas');
        tmpCanvas.width = canvas.width;
        tmpCanvas.height = canvas.height;
        const tmpCtx = tmpCanvas.getContext('2d');
        tmpCtx.fillStyle = 'white';
        tmpCtx.fillRect(0, 0, tmpCanvas.width, tmpCanvas.height);
        tmpCtx.drawImage(canvas, 0, 0);
        const link = document.createElement('a');
        link.download = 'brute-force-graph.png';
        link.href = tmpCanvas.toDataURL('image/png');
        link.click();
    }

    function bfShowFullTable() {
        const fullTableDiv = document.getElementById('bfFullTable');
        if (!fullTableDiv || !bfAnimation) return;

        let html = "<h4>Alle getesteten Pfade</h4>";
        html += "<table class='selection-table' style='width: 100%; border-collapse: collapse;'>";
        html += "<tr><th>Pfad</th><th>Distanz</th><th>Kürzester Pfad</th></tr>";

        bfAnimation.permutations.forEach((path, index) => {
            const distance = bfAnimation.calculatePathDistance(path).toFixed(2);
            const isShortest = bfAnimation.shortestPath && bfAnimation.shortestPath.join(',') === path.join(',');

            html += isShortest ? "<tr class='selected'>" : "<tr>";
            html += `<td style='border: 1px solid #ddd; padding: 4px; text-align: center;'>${path.map(p => `P${p}`).join(' → ')}</td>`;
            html += `<td style='border: 1px solid #ddd; padding: 4px; text-align: center;'>${distance}</td>`;
            html += `<td style='border: 1px solid #ddd; padding: 4px; text-align: center;'>${isShortest ? "✓" : ""}</td>`;
            html += "</tr>";
        });

        html += "</table>";

        fullTableDiv.innerHTML = html;
        fullTableDiv.style.display = 'block';
    }

    function bfToggleFullTable() {
        const fullTableDiv = document.getElementById('bfFullTable');
        if (!fullTableDiv) return;
        if (fullTableDiv.style.display === 'none' || !fullTableDiv.innerHTML.trim()) {
            bfShowFullTable();
        } else {
            fullTableDiv.style.display = 'none';
        }
    }
    </script>
</body>
