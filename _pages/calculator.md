---
layout: page
title: Calculator
permalink: /calculator/
nav: true
nav_order: 5
---

<h2 style="margin-bottom: 20px;">Benanntes Koordinatensystem</h2>

<div class="calculator-container" style="margin-top: 20px;">
    <!-- SVG Anzeige: Das benannte Koordinatensystem bleibt während der Animation sichtbar -->
    <svg id="coordinateSystem" width="600" height="600" viewBox="0 0 200 200" preserveAspectRatio="xMidYMid meet" style="margin-bottom:30px;">
        <!-- Statisches Koordinatensystem: Rahmen und Hilfslinien -->
        <rect x="0" y="0" width="200" height="200" fill="none" stroke="#ccc" stroke-width="0.5" />
        <!-- Hilfslinien -->
        <line x1="0" y1="100" x2="200" y2="100" stroke="#eee" stroke-dasharray="2" />
        <line x1="100" y1="0" x2="100" y2="200" stroke="#eee" stroke-dasharray="2" />
        <!-- Neue Achsen (X-Achse: von (0,0) bis (200,0); Y-Achse: von (0,0) bis (0,200)) -->
        <line x1="0" y1="0" x2="200" y2="0" stroke="black" stroke-width="1" />
        <line x1="0" y1="0" x2="0" y2="200" stroke="black" stroke-width="1" />
        
        <!-- Transformierte Zeichengruppe -->
        <g id="canvas" transform="scale(1,-1) translate(0,-200)">
            <text x="10" y="-10" font-size="12" fill="#333">X-Achse</text>
            <text x="-30" y="10" font-size="12" fill="#333">Y-Achse</text>
            
            <!-- Dynamisch berechnete Linien -->
            <!-- Grüne gestrichelte Linie: newCenter -> Baseline -> M -> newCenter -->
            <polyline id="greenPolyline" points="150,75 0,75 0,150 150,75" stroke="green" stroke-dasharray="4" fill="none" />
            <!-- Rote dash-dot Linie: P -> newCenter -> Baseline -> P -->
            <polyline id="redPolyline" points="0,0 150,75 0,75 0,0" stroke="red" stroke-dasharray="5,3,1,3" fill="none" />
            
            <!-- Blaue gestrichelte Linie zwischen newCenter und oldCenter -->
            <line id="blueLine" x1="150" y1="75" x2="150" y2="0" stroke="blue" stroke-dasharray="4" />
            
            <!-- Punkte und Beschriftungen -->
            <!-- Punkt P -->
            <circle id="pointP" cx="0" cy="0" r="4" fill="black" />
            <text id="textP" x="-25" y="-5" font-size="12" transform="scale(1,-1)">Initial Position (0,0)</text>
            
            <!-- Punkt M -->
            <circle id="pointM" cx="0" cy="150" r="4" fill="green" />
            <text id="textM" x="-35" y="155" font-size="12" transform="scale(1,-1)">Max Z Wert (0,150)</text>
            
            <!-- newCenter -->
            <circle id="newCenter" cx="150" cy="75" r="4" fill="green" />
            <text id="textNewCenter" x="155" y="80" font-size="12" transform="scale(1,-1)">New Center (150,75)</text>
            
            <!-- oldCenter -->
            <circle id="oldCenter" cx="150" cy="0" r="4" fill="blue" />
            <text id="textOldCenter" x="155" y="5" font-size="12" transform="scale(1,-1)">Old Center (150,0)</text>
            
            <!-- Dynamische Elemente -->
            <!-- Z-Modul -->
            <circle id="zModule" cx="0" cy="0" r="7" fill="purple" />
            <!-- Verbindungslinie vom Z-Modul zu newCenter -->
            <line id="zModuleLine" x1="0" y1="0" x2="150" y2="75" stroke="black" stroke-dasharray="4" />
            <!-- Winkelbogen -->
            <path id="angleArc" d="" fill="none" stroke="purple" stroke-width="2" />
            <!-- Winkeltext -->
            <text id="angleText" x="10" y="0" font-size="14" fill="purple" transform="scale(1,-1)"></text>
        </g>
    </svg>

    <!-- Eingabefelder für die einzelnen Punkte -->
    <div class="controls">
        <fieldset>
            <legend>Punkt P (Initial Position)</legend>
            <label for="pX">X:</label>
            <input type="number" id="pX" value="0" step="1">
            <label for="pY">Y:</label>
            <input type="number" id="pY" value="0" step="1">
        </fieldset>
        
        <fieldset>
            <legend>Punkt M (Max Z Wert)</legend>
            <label for="mX">X:</label>
            <input type="number" id="mX" value="0" step="1">
            <label for="mY">Y:</label>
            <input type="number" id="mY" value="150" step="1">
        </fieldset>
        
        <fieldset>
            <legend>New Center</legend>
            <label for="nX">X:</label>
            <input type="number" id="nX" value="150" step="1">
            <label for="nY">Y:</label>
            <input type="number" id="nY" value="75" step="1">
        </fieldset>
        
        <fieldset>
            <legend>Old Center</legend>
            <label for="oX">X:</label>
            <input type="number" id="oX" value="150" step="1">
            <label for="oY">Y:</label>
            <input type="number" id="oY" value="0" step="1">
        </fieldset>
        
        <fieldset>
            <legend>Z-Modul (Bewegt sich zwischen Punkt P und Punkt M)</legend>
            <label for="zX">X:</label>
            <input type="number" id="zX" value="0" step="1">
            <label for="zY">Y:</label>
            <input type="number" id="zY" value="0" min="0" max="150" step="1">
        </fieldset>

        <button onclick="updatePositions()">Update</button>
        <button id="animateBtn" onclick="toggleAnimation()">Start Animation</button>
        <label for="speed">Speed:</label>
        <input type="range" id="speed" min="1" max="10" value="5">
    </div>
</div>

<style>
.calculator-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
    padding: 2rem;
}

#coordinateSystem {
    background: #f8f9fa;
    border: 1px solid #ddd;
    border-radius: 8px;
    margin: 20px auto;
}

.controls {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    align-items: center;
    justify-content: center;
}

fieldset {
    border: 1px solid #ccc;
    padding: 10px;
    border-radius: 4px;
}

label {
    font-size: 14px;
    margin-right: 5px;
}

input[type="number"],
input[type="range"] {
    padding: 4px;
    width: 60px;
    margin-right: 10px;
}

button {
    padding: 8px 16px;
    background: #007bff;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
}

button:hover {
    background: #0056b3;
}
</style>

<script>
let isAnimating = false;
let animationId = null;

function updatePositions() {
    // Werten der Punkte abrufen
    const pX = parseFloat(document.getElementById('pX').value);
    const pY = parseFloat(document.getElementById('pY').value);
    const mX = parseFloat(document.getElementById('mX').value);
    const mY = parseFloat(document.getElementById('mY').value);
    const nX = parseFloat(document.getElementById('nX').value);
    const nY = parseFloat(document.getElementById('nY').value);
    const oX = parseFloat(document.getElementById('oX').value);
    const oY = parseFloat(document.getElementById('oY').value);
    const zX = parseFloat(document.getElementById('zX').value);
    const zY = parseFloat(document.getElementById('zY').value);

    // SVG Elemente aktualisieren
    document.getElementById('pointP').setAttribute('cx', pX);
    document.getElementById('pointP').setAttribute('cy', pY);

    document.getElementById('pointM').setAttribute('cx', mX);
    document.getElementById('pointM').setAttribute('cy', mY);

    document.getElementById('newCenter').setAttribute('cx', nX);
    document.getElementById('newCenter').setAttribute('cy', nY);

    document.getElementById('oldCenter').setAttribute('cx', oX);
    document.getElementById('oldCenter').setAttribute('cy', oY);

    document.getElementById('zModule').setAttribute('cx', zX);
    document.getElementById('zModule').setAttribute('cy', zY);

    // Verbindungslinie vom Z-Modul zu newCenter aktualisieren
    const zLine = document.getElementById('zModuleLine');
    zLine.setAttribute('x1', zX);
    zLine.setAttribute('y1', zY);
    zLine.setAttribute('x2', nX);
    zLine.setAttribute('y2', nY);

    // Aktualisierung der dynamischen Polyline-Pfade
    const baselineY = nY;
    const greenPoints = `${nX},${nY} 0,${baselineY} ${mX},${mY} ${nX},${nY}`;
    document.getElementById('greenPolyline').setAttribute('points', greenPoints);

    const redPoints = `${pX},${pY} ${nX},${nY} 0,${baselineY} ${pX},${pY}`;
    document.getElementById('redPolyline').setAttribute('points', redPoints);

    // Aktualisiere die blaue Linie zwischen newCenter und oldCenter
    const blueLine = document.getElementById('blueLine');
    blueLine.setAttribute('x1', nX);
    blueLine.setAttribute('y1', nY);
    blueLine.setAttribute('x2', oX);
    blueLine.setAttribute('y2', oY);

    // Winkelberechnung zwischen Z-Modul und newCenter
    const dx = nX - zX;
    const dy = nY - zY;
    let alpha = Math.atan2(dy, dx) * 180 / Math.PI;
    const angle_v = Math.abs(90 - alpha);

    // Winkeltext positionieren und aktualisieren
    const angleText = document.getElementById('angleText');
    angleText.setAttribute('x', zX + 10);
    angleText.setAttribute('y', zY + 10);
    angleText.textContent = `Angle: ${angle_v.toFixed(1)}°`;

    // Update des Winkelbogens um das Z-Modul (Radius 20)
    const radius = 20;
    const startAngle = 90;
    const radStart = startAngle * Math.PI / 180;
    const radEnd = alpha * Math.PI / 180;
    const startX = zX + radius * Math.cos(radStart);
    const startY = zY + radius * Math.sin(radStart);
    const endX = zX + radius * Math.cos(radEnd);
    const endY = zY + radius * Math.sin(radEnd);
    const largeArcFlag = 0;
    const sweepFlag = (alpha >= 90) ? 1 : 0;
    const d = `M ${startX},${startY} A ${radius} ${radius} 0 ${largeArcFlag} ${sweepFlag} ${endX},${endY}`;
    document.getElementById('angleArc').setAttribute('d', d);
}

// Animationsfunktion: Das Z-Modul bewegt sich vertikal, wobei als untere Grenze Punkt P
// und als obere Grenze Punkt M festgelegt sind.
function toggleAnimation() {
    const btn = document.getElementById('animateBtn');
    const speed = document.getElementById('speed').value;
    
    // Grenzen: untere Grenze von Punkt P und obere Grenze von Punkt M aus den Input-Feldern
    const zMin = parseFloat(document.getElementById('pY').value);
    const zMax = parseFloat(document.getElementById('mY').value);

    // Starte die Animation am unteren Ende (P)
    let zYVal = zMin;
    let step = (zMax - zMin) / (60 * (10 - speed + 1));
    let direction = 1;
    
    function animate() {
        zYVal += direction * step;
        if (zYVal >= zMax) {
            zYVal = zMax;
            direction = -1;
        } else if (zYVal <= zMin) {
            zYVal = zMin;
            direction = 1;
        }
        document.getElementById('zY').value = zYVal.toFixed(0);
        updatePositions();
        animationId = requestAnimationFrame(animate);
    }
    if (!isAnimating) {
        animationId = requestAnimationFrame(animate);
        btn.textContent = 'Stop Animation';
    } else {
        cancelAnimationFrame(animationId);
        btn.textContent = 'Start Animation';
    }
    isAnimating = !isAnimating;
}

updatePositions();

document.querySelectorAll('input[type="number"]').forEach(input => {
    input.addEventListener('change', updatePositions);
});
</script>
