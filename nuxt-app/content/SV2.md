---
title: sv2
cover: https://via.placeholder.com/1200x600/1a1a1a/ffffff?text=SV2
date: 2025-11-11T00:00:00.000Z
description: SV2 - Hidden Article
layout: default
navigation: false
_draft: false
_path: /sv2
---

# SV2 Messparkur simuliert
<div style="height: 50px;"></div>

<!-- Table of Contents -->
<div class="page-wrapper">
  <nav class="toc-sidebar">
    <h3 style="margin-top: 0; margin-bottom: 1rem; color: #00ff41; font-size: 1.2rem; text-shadow: 0 0 10px rgba(0, 255, 65, 0.8);">TOC</h3>
    <ul class="toc-list">
      <li><a href="#pdf-vorlesung" class="toc-link">PDF Vorlesung</a></li>
      <li><a href="#aufgaben" class="toc-link">Laboraufgaben</a></li>
      <li><a href="#falstad-simulator" class="toc-link">Falstad Circuit Simulator</a></li>
      <li><a href="#ai-support" class="toc-link">AI Support</a></li>
      <li><a href="#ilias-portal" class="toc-link">Abgabe</a></li>
    </ul>
  </nav>

  <main class="main-content">

<div id="pdf-vorlesung" style="margin: 1rem 0 2rem 0; border-radius: 8px; overflow: hidden; box-shadow: 0 4px 12px rgba(0,0,0,0.3);">
<iframe src="/assets/pdf/Präsentation2.pdf" width="100%" height="400" frameborder="0" style="border: none;"></iframe>
</div>

<div style="height: 50px;"></div>

<style>
/* Page Layout with Sidebar */
.page-wrapper {
  display: flex;
  gap: 2rem;
  max-width: 100%;
  margin: 0;
  position: relative;
  align-items: flex-start;
}

.toc-sidebar {
  position: sticky;
  top: 2rem;
  width: 200px;
  height: fit-content;
  background: linear-gradient(135deg, #0d0208 0%, #001a0d 100%);
  border-radius: 12px;
  padding: 1.5rem;
  box-shadow: 0 4px 20px rgba(0, 255, 65, 0.3), 0 0 40px rgba(0, 255, 65, 0.1);
  flex-shrink: 0;
  margin-left: -250px;
  border: 1px solid rgba(0, 255, 65, 0.2);
}

.toc-list {
  list-style: none;
  padding: 0;
  margin: 0;
}

.toc-list li {
  margin-bottom: 0.75rem;
}

.toc-link {
  display: block;
  color: #00ff41;
  text-decoration: none;
  padding: 0.5rem 0.75rem;
  border-radius: 6px;
  transition: all 0.3s ease;
  font-size: 0.95rem;
  border-left: 3px solid transparent;
  text-shadow: 0 0 5px rgba(0, 255, 65, 0.5);
}

.toc-link:hover {
  background: rgba(0, 255, 65, 0.15);
  color: #00ff41;
  border-left-color: #00ff41;
  transform: translateX(5px);
  box-shadow: 0 0 15px rgba(0, 255, 65, 0.3);
  text-shadow: 0 0 10px rgba(0, 255, 65, 1);
}

.main-content {
  flex: 1;
  min-width: 0;
  max-width: 1200px;
}

@media (max-width: 1024px) {
  .page-wrapper {
    flex-direction: column;
  }
  
  .toc-sidebar {
    position: relative;
    width: 100%;
    top: 0;
    margin-left: 0;
  }
}

/* Tab System Styles */
.task-tabs-container {
  margin: 2rem 0;
}

.task-tab-radio {
  display: none;
}

.task-tab-navbar {
  display: flex;
  flex-direction: row;
  gap: 10px;
  margin-bottom: 0;
  justify-content: space-between;
  align-items: stretch;
  width: 100%;
}

label.task-tab-btn {
  color: white !important;
  border: none !important;
  border-radius: 8px 8px 0 0 !important;
  padding: 12px 24px !important;
  font-size: 1em !important;
  font-weight: bold !important;
  cursor: pointer !important;
  transition: all 0.3s ease !important;
  outline: none !important;
  white-space: nowrap !important;
  box-shadow: 0 2px 4px rgba(0,0,0,0.2) !important;
  flex: 1;
  text-align: center;
}

/* Individual colors for each tab - MUST come after base styles */
label.task-tab-btn[for="task-tab-0"] {
  background: #6a1b9a !important;
}
label.task-tab-btn[for="task-tab-1"] {
  background: #f093fb !important;
}
label.task-tab-btn[for="task-tab-2"] {
  background: #4facfe !important;
}
label.task-tab-btn[for="task-tab-3"] {
  background: #ff6b6b !important;
}
label.task-tab-btn[for="task-tab-4"] {
  background: #ffd700 !important;
  color: #1a1a2e !important;
}

/* Hover effects */
label.task-tab-btn[for="task-tab-0"]:hover,
#task-tab-0:checked ~ .task-tab-navbar label.task-tab-btn[for="task-tab-0"] {
  background: #4a148c !important;
  color: white !important;
  transform: translateY(-2px);
  box-shadow: 0 4px 8px rgba(106, 27, 154, 0.4) !important;
}
label.task-tab-btn[for="task-tab-1"]:hover,
#task-tab-1:checked ~ .task-tab-navbar label.task-tab-btn[for="task-tab-1"] {
  background: #1976d2 !important;
  color: white !important;
  transform: translateY(-2px);
  box-shadow: 0 4px 8px rgba(33, 150, 243, 0.4) !important;
}
label.task-tab-btn[for="task-tab-2"]:hover,
#task-tab-2:checked ~ .task-tab-navbar label.task-tab-btn[for="task-tab-2"] {
  background: #f57c00 !important;
  color: white !important;
  transform: translateY(-2px);
  box-shadow: 0 4px 8px rgba(255, 152, 0, 0.4) !important;
}
label.task-tab-btn[for="task-tab-3"]:hover,
#task-tab-3:checked ~ .task-tab-navbar label.task-tab-btn[for="task-tab-3"] {
  background: #388e3c !important;
  color: white !important;
  transform: translateY(-2px);
  box-shadow: 0 4px 8px rgba(76, 175, 80, 0.4) !important;
}
label.task-tab-btn[for="task-tab-4"]:hover,
#task-tab-4:checked ~ .task-tab-navbar label.task-tab-btn[for="task-tab-4"] {
  background: #c2185b !important;
  color: white !important;
  transform: translateY(-2px);
  box-shadow: 0 4px 8px rgba(233, 30, 99, 0.5) !important;
}
label.task-tab-btn[for="task-tab-5"]:hover,
#task-tab-5:checked ~ .task-tab-navbar label.task-tab-btn[for="task-tab-5"] {
  background: #0097a7 !important;
  color: white !important;
  transform: translateY(-2px);
  box-shadow: 0 4px 8px rgba(0, 188, 212, 0.4) !important;
}

/* Task content bubbles */
.task-content {
  display: none;
  background: #1a1a2e;
  border-radius: 0 0 20px 20px;
  padding: 2rem;
  color: white;
  margin-top: 0;
  box-shadow: 0 8px 20px rgba(0,0,0,0.3);
}

#task-tab-0:checked ~ .task-content.task-content-0,
#task-tab-1:checked ~ .task-content.task-content-1,
#task-tab-2:checked ~ .task-content.task-content-2,
#task-tab-3:checked ~ .task-content.task-content-3,
#task-tab-4:checked ~ .task-content.task-content-4,
#task-tab-5:checked ~ .task-content.task-content-5 {
  display: block;
}

/* Content with colored borders */
#task-tab-0:checked ~ .task-content.task-content-0 {
  border-top: 4px solid #6a1b9a;
  border-left: 3px solid #6a1b9a;
  border-right: 3px solid #6a1b9a;
  border-bottom: 3px solid #6a1b9a;
}
#task-tab-1:checked ~ .task-content.task-content-1 {
  border-top: 4px solid #2196f3;
  border-left: 3px solid #2196f3;
  border-right: 3px solid #2196f3;
  border-bottom: 3px solid #2196f3;
}
#task-tab-2:checked ~ .task-content.task-content-2 {
  border-top: 4px solid #ff9800;
  border-left: 3px solid #ff9800;
  border-right: 3px solid #ff9800;
  border-bottom: 3px solid #ff9800;
}
#task-tab-3:checked ~ .task-content.task-content-3 {
  border-top: 4px solid #4caf50;
  border-left: 3px solid #4caf50;
  border-right: 3px solid #4caf50;
  border-bottom: 3px solid #4caf50;
}
#task-tab-4:checked ~ .task-content.task-content-4 {
  border-top: 4px solid #e91e63;
  border-left: 3px solid #e91e63;
  border-right: 3px solid #e91e63;
  border-bottom: 3px solid #e91e63;
}
#task-tab-5:checked ~ .task-content.task-content-5 {
  border-top: 4px solid #00bcd4;
  border-left: 3px solid #00bcd4;
  border-right: 3px solid #00bcd4;
  border-bottom: 3px solid #00bcd4;
}

.task-content h3 {
  margin-top: 0;
  font-size: 1.8rem;
  margin-bottom: 1.5rem;
}

.task-content h4 {
  font-size: 1.3rem;
  margin-top: 1.5rem;
  margin-bottom: 0.8rem;
  color: rgba(255, 255, 255, 0.95);
  border-bottom: 1px solid rgba(255, 255, 255, 0.2);
  padding-bottom: 0.5rem;
}

.task-content p {
  line-height: 1.7;
  margin-bottom: 1rem;
}

.task-content ul {
  margin-left: 1.5rem;
  line-height: 1.8;
}

.task-content li {
  margin-bottom: 0.5rem;
}

.task-content code {
  background: rgba(255, 255, 255, 0.1);
  padding: 2px 6px;
  border-radius: 4px;
  font-family: 'Courier New', monospace;
}

.task-content strong {
  color: rgba(255, 255, 255, 1);
  font-weight: 600;
}

.task-content table {
  width: 100%;
  border-collapse: collapse;
  margin: 1rem 0;
}

.task-content table th,
.task-content table td {
  padding: 8px;
  border: 1px solid rgba(255, 255, 255, 0.2);
}

.task-content table th {
  background: rgba(255, 255, 255, 0.1);
  font-weight: bold;
}

.simulator-hint {
  background: rgba(255, 255, 255, 0.1);
  border-left: 4px solid rgba(255, 255, 255, 0.5);
  padding: 1rem;
  margin: 1rem 0;
  border-radius: 8px;
}

.simulator-hint strong {
  display: block;
  margin-bottom: 0.5rem;
  font-size: 1.1rem;
}

@media (max-width: 768px) {
  .task-tab-btn {
    font-size: 0.85em !important;
    padding: 10px 16px !important;
  }
}
</style>

<div id="aufgaben" class="task-tabs-container">
<input type="radio" name="task-tab" id="task-tab-0" class="task-tab-radio" checked>
<input type="radio" name="task-tab" id="task-tab-1" class="task-tab-radio">
<input type="radio" name="task-tab" id="task-tab-2" class="task-tab-radio">
<input type="radio" name="task-tab" id="task-tab-3" class="task-tab-radio">
<input type="radio" name="task-tab" id="task-tab-4" class="task-tab-radio">
<input type="radio" name="task-tab" id="task-tab-5" class="task-tab-radio">

  <nav class="task-tab-navbar">
    <label class="task-tab-btn" for="task-tab-0" style="background: #6a1b9a !important; color: white !important;">📊 Task 1</label>
    <label class="task-tab-btn" for="task-tab-1" style="background: #2196f3 !important; color: white !important;">📐 Task 2</label>
    <label class="task-tab-btn" for="task-tab-2" style="background: #ff9800 !important; color: white !important;">🔄 Task 3</label>
    <label class="task-tab-btn" for="task-tab-3" style="background: #4caf50 !important; color: white !important;">🔢 Task 4</label>
    <label class="task-tab-btn" for="task-tab-4" style="background: #e91e63 !important; color: white !important;">👑 Task 5</label>
    <label class="task-tab-btn" for="task-tab-5" style="background: #00bcd4 !important; color: white !important;">🏆 Task 6</label>
  </nav>

<div id="aufgabe-1" class="task-content task-content-0" data-task="0">

<h3 style="color: #6a1b9a;">Resonanzfrequenz des Reihenschwingkreises</h3>

<h4 style="color: #6a1b9a;">Ziel</h4>

Verifizieren Sie die Berechnungen von <a href="/assets/pdf/Präsentation2.pdf#page=7" target="_blank" style="color: #6a1b9a; font-weight: bold;">Folie 7</a> durch praktische Simulation und ermitteln Sie die Resonanzfrequenz des Reihenschwingkreises.

<h4 style="color: #6a1b9a;">Aufbau im Falstad-Simulator</h4>

Bauen Sie den Reihenschwingkreis mit folgenden Werten nach:

- **AC-Spannungsquelle:** U = 1 V
- **Widerstand:** R = 500 Ω
- **Spule:** L = 10 mH
- **Kondensator:** C = 100 nF

<details style="background: rgba(106, 27, 154, 0.05); border: 2px solid #6a1b9a; border-radius: 8px; padding: 1rem; margin: 1.5rem 0;">
<summary style="cursor: pointer; font-weight: bold; font-size: 1.1rem; color: #6a1b9a; padding: 0.5rem;">
📋 Aufgabe & Auswertung
</summary>

<div style="padding-top: 1rem;">

1. **Berechnung:** Berechnen Sie zuerst die theoretische **Resonanzfrequenz** f₀ mit der Formel von <a href="/assets/pdf/Präsentation2.pdf#page=5" target="_blank" style="color: #6a1b9a; font-weight: bold;">Folie 5</a> und den gegebenen Werten.

2. **Simulation:** Bauen Sie die Schaltung auf. Finden Sie im Simulator die Frequenz, bei der der **Strom I maximal** ist. (Tipp: Verwenden Sie einen "Slider" für die Frequenz und beobachten Sie die Helligkeit/Geschwindigkeit der fließenden Punkte).

3. **Dokumentation:** Notieren Sie die Frequenz, die Sie im Simulator gemessen haben.

4. **Vergleich:** Vergleichen Sie Ihren Rechenwert (aus 1.), Ihren Messwert (aus 3.) und den Wert auf <a href="/assets/pdf/Präsentation2.pdf#page=7" target="_blank" style="color: #6a1b9a; font-weight: bold;">Folie 7</a>. Was stellen Sie fest?

</div>

</details>

</div>

<div id="aufgabe-2" class="task-content task-content-1">

<h3 style="color: #2196f3;">Güte und Dämpfung visualisieren</h3>

<h4 style="color: #2196f3;">Ziel</h4>

Untersuchen Sie den Einfluss des Widerstands R (Dämpfung) auf die Schärfe der Resonanzkurve (Güte Q), wie auf <a href="/assets/pdf/Präsentation2.pdf#page=9" target="_blank" style="color: #2196f3; font-weight: bold;">Folie 9</a> dargestellt.

<h4 style="color: #2196f3;">Aufbau im Falstad-Simulator</h4>

Bauen Sie den Reihenschwingkreis mit folgenden Werten:

- **Spule:** L = 20 mH
- **Kondensator:** C = 10 nF
- **Widerstand:** R (variabel, Bereich: 10 Ω bis 1000 Ω)

<details style="background: rgba(33, 150, 243, 0.05); border: 2px solid #2196f3; border-radius: 8px; padding: 1rem; margin: 1.5rem 0;">
<summary style="cursor: pointer; font-weight: bold; font-size: 1.1rem; color: #2196f3; padding: 0.5rem;">
📋 Aufgabe & Auswertung
</summary>

<div style="padding-top: 1rem;">

1. Finden Sie eine Methode in der Simulationssoftware, um den **Frequenzgang des Stroms** sichtbar zu machen. (Tipp: Die Spannung am Widerstand R ist proportional zum Strom I).

2. Stellen Sie den Widerstand R so ein, dass Sie ihn **interaktiv verändern** können (z.B. mit einem Schieberegler).

3. Dokumentieren Sie durch ein **GIF**, wie sich die Form der Resonanzkurve (die "Peak-Form") ändert, wenn Sie R von einem sehr kleinen Wert (z.B. 5 Ω) zu einem großen Wert (z.B. 300 Ω) ändern.

4. Erklären Sie den Zusammenhang, den Sie beobachten:
   - Was passiert mit der **Höhe** des Peaks?
   - Was passiert mit der **Breite** des Peaks?
   - Was bedeutet das für die **Güte Q** und die **Bandbreite** der Schaltung (vgl. <a href="/assets/pdf/Präsentation2.pdf#page=9" target="_blank" style="color: #2196f3; font-weight: bold;">Folie 9</a>)?

</div>

</details>

</div>

<div id="aufgabe-3" class="task-content task-content-2">

<h3 style="color: #ff9800;">Bandpass vs. Bandsperre</h3>

<h4 style="color: #ff9800;">Ziel</h4>

Verstehen Sie den fundamentalen Unterschied zwischen einem Bandpassfilter und einem Bandsperrfilter (siehe <a href="/assets/pdf/Präsentation2.pdf#page=12" target="_blank" style="color: #ff9800; font-weight: bold;">Folie 12</a>). Beide nutzen dieselben L/C-Werte, haben aber gegensätzliche Funktionen.

<h4 style="color: #ff9800;">Aufbau 1: Bandpass-Filter</h4>

Ein **Parallelschwingkreis** (L/C) bildet den Ausgang, gespeist über einen Vorwiderstand Ri.

<h4 style="color: #ff9800;">Aufbau 2: Bandsperre-Filter</h4>

Ein **Reihenschwingkreis** (L/C) wird parallel zu einem Ausgangswiderstand R2 geschaltet.

<h4 style="color: #ff9800;">Gemeinsame Werte für beide Schaltungen</h4>

- **Spule:** L = 1 mH
- **Kondensator:** C = 10 nF
- **Eingangswiderstand (Bandpass):** Ri = 2,2 kΩ
- **Ausgangswiderstand (Bandsperre):** R2 = 2,2 kΩ

<details style="background: rgba(255, 152, 0, 0.05); border: 2px solid #ff9800; border-radius: 8px; padding: 1rem; margin: 1.5rem 0;">
<summary style="cursor: pointer; font-weight: bold; font-size: 1.1rem; color: #ff9800; padding: 0.5rem;">
📋 Aufgabe & Auswertung 
</summary>

<div style="padding-top: 1rem;">

1. Bauen Sie beide Schaltungen im Simulator auf.

2. Berechnen Sie zuerst die erwartete **Resonanzfrequenz** f₀ (Thomsonsche Formel).

3. Simulieren Sie den **Frequenzgang der Ausgangsspannung** für beide Schaltungen (z.B. in einem Bereich von 15 kHz bis 30 kHz).

4. Dokumentieren Sie Ihre Ergebnisse durch **GIFs**, die den Frequenzgang beider Schaltungen zeigen.

5. Beantworten Sie die folgenden Fragen:
   - Bestätigt Ihre Simulation die berechnete Resonanzfrequenz?
   - Beschreiben Sie präzise das **gegensätzliche Verhalten** der beiden Schaltungen bei dieser Frequenz.
   - **Erklären Sie** Warum führt Aufbau 1 (Parallelschwingkreis als Ausgang) zu einem Spannungsmaximum, während Aufbau 2 (Reihenschwingkreis parallel zum Ausgang) zu einem Spannungsminimum führt?  
     (Tipp: Denken Sie an die **Impedanz**. Wie verhält sich ein Parallelschwingkreis bei f₀? Und wie ein Reihenschwingkreis?)

</div>

</details>

</div>

<div id="aufgabe-4" class="task-content task-content-3">

<h3 style="color: #4caf50;">Der 3-Bit D/A-Wandler (R-2R-Netzwerk)</h3>

<h4 style="color: #4caf50;">Ziel</h4>

Verstehen Sie das Grundprinzip eines Digital-Analog-Wandlers (DAC). Wie auf <a href="/assets/pdf/Präsentation2.pdf#page=30" target="_blank" style="color: #4caf50; font-weight: bold;">Folie 30</a> und <a href="/assets/pdf/Präsentation2.pdf#page=31" target="_blank" style="color: #4caf50; font-weight: bold;">Folie 31</a> konzeptionell gezeigt, ist dies der umgekehrte Prozess zur Abtastung.

<h4 style="color: #4caf50;">Konzept</h4>

Bauen Sie einen passiven **3-Bit D/A-Wandler** mit einem **R-2R-Leiternetzwerk**. Dieser Wandler nutzt ausschließlich Widerstände und Schalter.

Die 3 Schalter repräsentieren ein 3-Bit-Digitalwort (von **000** bis **111**).

<h4 style="color: #4caf50;">Aufbau im Falstad-Simulator</h4>

**Bauteile:**

- **1 DC-Spannungsquelle:** 10 V (für Logik-HIGH)
- **3 Umschalter (SPDT):** Repräsentieren die Bits 0 (LSB), 1 und 2 (MSB)
- **Widerstände:** R = 1 kΩ und 2R = 2 kΩ

<details style="background: rgba(76, 175, 80, 0.05); border: 2px solid #4caf50; border-radius: 8px; padding: 1rem; margin: 1.5rem 0;">
<summary style="cursor: pointer; font-weight: bold; font-size: 1.1rem; color: #4caf50; padding: 0.5rem;">
📋 Durchführung & Auswertung
</summary>

<div style="padding-top: 1rem;">

1. Bauen Sie das R-2R-Netzwerk im Simulator auf.

2. Stellen Sie nacheinander alle **8 Binärkombinationen** (von 000 bis 111) mit den drei Schaltern ein.

3. Messen Sie für jede Kombination die resultierende analoge **Ausgangsspannung** Uaus (Tipp: der "DC Level" im Scope) und füllen Sie die folgende Tabelle aus.

4. Dokumentieren Sie durch ein **GIF**, wie sich die Ausgangsspannung ändert, wenn Sie die Binärkombinationen durchschalten.

**💡 Messwerttabelle:**

<table>
<tr>
<th>Bit 2 (MSB)</th>
<th>Bit 1</th>
<th>Bit 0 (LSB)</th>
<th>Dezimalwert</th>
<th>Uaus (V)</th>
</tr>
<tr><td>0</td><td>0</td><td>0</td><td>0</td><td>_____</td></tr>
<tr><td>0</td><td>0</td><td>1</td><td>1</td><td>_____</td></tr>
<tr><td>0</td><td>1</td><td>0</td><td>2</td><td>_____</td></tr>
<tr><td>0</td><td>1</td><td>1</td><td>3</td><td>_____</td></tr>
<tr><td>1</td><td>0</td><td>0</td><td>4</td><td>_____</td></tr>
<tr><td>1</td><td>0</td><td>1</td><td>5</td><td>_____</td></tr>
<tr><td>1</td><td>1</td><td>0</td><td>6</td><td>_____</td></tr>
<tr><td>1</td><td>1</td><td>1</td><td>7</td><td>_____</td></tr>
</table>

**Auswertung:**

- Analysieren Sie Ihre Messwerte. Was stellen Sie fest?
- Berechnen Sie die **Spannungsdifferenz** (die "Schrittgröße") zwischen den einzelnen Dezimalwerten (z.B. die Differenz zwischen Wert 1 und Wert 2). Ist diese Schrittgröße konstant?
- Erklären Sie, warum die Schaltung das tut, was auf <a href="/assets/pdf/Präsentation2.pdf#page=30" target="_blank" style="color: #4caf50; font-weight: bold;">Folie 30</a> (Quantisierung/Treppenstufen) gezeigt wird.

</div>

</details>

</div>

<!-- ===================== AUFGABE 5 ===================== -->

<div id="aufgabe-5" class="task-content task-content-4">

<h3 style="color: #e91e63;">Filterung von Obertönen (Rechteck-zu-Sinus-Wandler)</h3>

<h4 style="color: #e91e63;">Ziel</h4>

Kombinieren Sie die **Fourier-Analyse** (ab <a href="/assets/pdf/Präsentation2.pdf#page=22" target="_blank" style="color: #e91e63; font-weight: bold;">Folie 22</a>) und die **Filterwirkung von Schwingkreisen** (<a href="/assets/pdf/Präsentation2.pdf#page=12" target="_blank" style="color: #e91e63; font-weight: bold;">Folie 12</a>). Verstehen Sie, wie ein Bandpass-Filter Obertöne einer Rechteckwelle herausfiltert und nur die Grundfrequenz durchlässt.

<h4 style="color: #e91e63;">Konzept</h4>

Aus der Fourier-Analyse (<a href="/assets/pdf/Präsentation2.pdf#page=23" target="_blank" style="color: #e91e63; font-weight: bold;">Folie 23</a> und <a href="/assets/pdf/Präsentation2.pdf#page=25" target="_blank" style="color: #e91e63; font-weight: bold;">Folie 25</a>) wissen wir, dass eine **Rechteckschwingung** aus einer Summe von Sinusschwingungen besteht:

- **Grundschwingung** (f₁)
- **Ungerade Obertöne**: 3. Harmonische (f₃), 5. Harmonische (f₅), usw.

Ein **Schwingkreis als Bandpass** (<a href="/assets/pdf/Präsentation2.pdf#page=12" target="_blank" style="color: #e91e63; font-weight: bold;">Folie 12, oben</a>) ist darauf ausgelegt, nur Frequenzen nahe seiner **Resonanzfrequenz** f₀ durchzulassen und alle anderen zu blockieren.

<details style="background: rgba(233, 30, 99, 0.05); border: 2px solid #e91e63; border-radius: 8px; padding: 1rem; margin: 1.5rem 0;">
<summary style="cursor: pointer; font-weight: bold; font-size: 1.1rem; color: #e91e63; padding: 0.5rem;">
📋 Aufgabe & Auswertung
</summary>

<div style="padding-top: 1rem;">

1. **Berechnung:** Berechnen Sie die theoretische **Resonanzfrequenz** f₀ für den LC-Bandpass (L = 1 mH, C = 10 nF). Notieren Sie Ihren Rechenweg und das Ergebnis.

2. **Aufbau:** Bauen Sie den Bandpass-Filter vom Typ auf <a href="/assets/pdf/Präsentation2.pdf#page=12" target="_blank" style="color: #e91e63; font-weight: bold;">Folie 12 (oberes Bild)</a> im Simulator nach. Verwenden Sie Ri = 2,2 kΩ und die gegebenen L/C-Werte.

3. **Simulation:**
   - Speisen Sie die Schaltung mit einer **Rechteckspannung** (Square Wave).
   - Stellen Sie die **Grundfrequenz** f₁ der Rechteckwelle genau auf die in Schritt 1 berechnete Resonanzfrequenz f₀ ein.

4. **Messung & Dokumentation:**
   - Öffnen Sie das Oszilloskop ("Scope") und zeigen Sie das **Eingangssignal** (an der Quelle) und das **Ausgangssignal** (über dem L/C-Parallelkreis) gleichzeitig an.
   - Dokumentieren Sie durch ein **GIF**, das beide Wellenformen zeigt.

5. **Erklärung:**
   - Beschreiben Sie den **Unterschied** zwischen der Eingangs- und der Ausgangswellenform.
   - Erklären Sie mit Verweis auf die Fourier-Analyse (<a href="/assets/pdf/Präsentation2.pdf#page=25" target="_blank" style="color: #e91e63; font-weight: bold;">Folie 25</a>), warum das Ausgangssignal diese Form hat. Welche Frequenzkomponenten der Rechteckwelle lässt der Filter passieren und welche blockiert er?

</div>

</details>

</div>

<div class="task-content task-content-5" data-task="5">

<h3 style="color: #00bcd4;">Fourier-Analyse eines komplexen Filters</h3>

<h4 style="color: #00bcd4;">Ziel</h4>

Kombinieren Sie die Konzepte aus <a href="/assets/pdf/Präsentation2.pdf#page=15" target="_blank" style="color: #00bcd4; text-decoration: underline;">Folie 15 (Komplexe Filter)</a> und <a href="/assets/pdf/Präsentation2.pdf#page=25" target="_blank" style="color: #00bcd4; text-decoration: underline;">Folie 25 (Fourier-Analyse)</a>. Analysieren Sie das Filterverhalten einer komplexen Schaltung, wenn sie mit einem nicht-sinusförmigen Signal (Rechteckwelle) gespeist wird.

<h4 style="color: #00bcd4;">Konzept</h4>

Wie auf <a href="/assets/pdf/Präsentation2.pdf#page=25" target="_blank" style="color: #00bcd4; text-decoration: underline;">Folie 25</a> gezeigt, besteht eine ideale Rechteckwelle aus einer Grundschwingung (f₁) und unendlich vielen ungeraden Harmonischen (f₃, f₅, f₇, ...). Ein Filter, wie der auf <a href="/assets/pdf/Präsentation2.pdf#page=15" target="_blank" style="color: #00bcd4; text-decoration: underline;">Folie 15</a>, ist darauf ausgelegt, bestimmte Frequenzen zu dämpfen und andere (nahe seiner Resonanzfrequenz) zu verstärken.

**Was passiert, wenn diese beiden Konzepte aufeinandertreffen?**

<h4 style="color: #00bcd4;">Aufbau im Falstad-Simulator</h4>

Bauen Sie die Schaltung aus <a href="/assets/pdf/Präsentation2.pdf#page=15" target="_blank" style="color: #00bcd4; text-decoration: underline;">Folie 15</a> exakt nach (achten Sie auf die T-Struktur!):

| Bauteil | Wert |
|---------|------|
| **Quelle (V)** | AC-Quelle |
| **L1** | 10 µH |
| **C1** | 1 nF |
| **R1** | 25 Ω |
| **C2** | 2 nF |
| **L2** | 20 µH |
| **R2** | 100 Ω |

<details style="background: rgba(0, 188, 212, 0.05); border: 2px solid #00bcd4; border-radius: 8px; padding: 1rem; margin: 1.5rem 0;">
<summary style="cursor: pointer; font-weight: bold; font-size: 1.1rem; color: #00bcd4; padding: 0.5rem;">
📋 Durchführung & Auswertung
</summary>

<div style="padding-top: 1rem;">

**Schritt 1: Resonanz finden (Sinus-Analyse)**

1. Stellen Sie die Quelle auf "Sine" (Sinus), 5V Amplitude.
2. Führen Sie eine AC-Analyse ("Frequency"-Plot) am Ausgang (V) durch.
3. Finden Sie die Frequenz, bei der die Schaltung ihre **stärkste Resonanz** (größte Verstärkung) zeigt.

**Schritt 2: Filter-Analyse (Rechteck-Analyse)**

4. Ändern Sie die Quelle zu einer "Square Wave" (Rechteck), 5V Amplitude.
5. Stellen Sie die **Grundfrequenz** der Rechteckwelle auf **1,18 MHz** ein. (Dies ist 1/3 der Resonanzfrequenz aus Schritt 1).
6. Betrachten Sie den **Eingang und den Ausgang** (V) im **Zeitbereich** (Scope).
7. Betrachten Sie den **Eingang und den Ausgang** (V) im **Frequenzbereich** (FFT / "Frequency").

**Schritt 3: Variation (Optional)**

8. Ändern Sie die Grundfrequenz der Rechteckwelle auf **712 kHz**. (Dies ist 1/5 der Resonanzfrequenz).
9. Beobachten Sie erneut das Spektrum am Ausgang.

**Auswertung:**

Beantworten Sie die folgenden Fragen basierend auf Ihren Beobachtungen aus Schritt 2:

- **Zeitbereich:** Vergleichen Sie das Eingangs- und Ausgangssignal. Welche Form hat das Ausgangssignal? Welche Frequenz hat es (grob gemessen)?
- **Frequenzbereich (Eingang):** Beschreiben Sie das Spektrum der Rechteckwelle, das Sie sehen. Welche Harmonischen sind vorhanden (1., 3., 5. ...)?
- **Frequenzbereich (Ausgang):** Beschreiben Sie das Spektrum am Ausgang. Was ist mit der Grundschwingung (1,18 MHz) passiert? Was ist mit der 3. Harmonischen (3,56 MHz) passiert?
- **Erklärung:** Fassen Sie zusammen, was der Filter mit dem Rechtecksignal gemacht hat und warum das Ausgangssignal so aussieht, wie es aussieht.

</div>

</details>

</div>

</div>

</div>


---


<div id="falstad-simulator" style="display: flex; align-items: center; gap: 1rem; margin-bottom: 1.5rem;">
    <img src="https://www.falstad.com/mathphysics_small.gif" alt="CircuitJS Logo" style="width: 64px; height: 64px; border-radius: 8px;">
    <div>
        <h3 style="margin: 0;">
            <a href="https://www.falstad.com/circuit/index.html" target="_blank" rel="noopener noreferrer" style="color: inherit; text-decoration: none; cursor: pointer;" onclick="event.preventDefault(); window.open('https://www.falstad.com/circuit/index.html', '_blank');">
                Falstad Circuit Simulator
            </a>
        </h3>
        <p style="margin: 0.5rem 0 0 0; color: #666;">Interactive, browser-based circuit design and simulation</p>
        <p style="margin: 0.2rem 0 0 0; color: #888; font-size: 0.95em;">
            Contact: <a href="mailto:java@falstad.com" style="color: #3182ce;">java@falstad.com</a>
        </p>
    </div>
</div>

The Falstad Circuit Simulator (circuitjs) is an interactive, browser-based tool for designing, visualizing, and simulating electrical circuits. With just a few steps, you can place resistors, capacitors, inductors, transistors, and voltage sources, and observe the behavior of currents, voltages, and signals in real time.

<div style="display: flex; flex-wrap: wrap; gap: 1rem; margin-bottom: 1.5rem;">

<div style="flex: 1 1 220px; background: #2d3748; color: #fff; border-radius: 8px; padding: 1.2rem;">
<strong>Live Visualization</strong><br>
Watch currents and voltages in real time.
</div>

<div style="flex: 1 1 220px; background: #3182ce; color: #fff; border-radius: 8px; padding: 1.2rem;">
<strong>Interactive Editing</strong><br>
Drag, connect, and adjust component parameters.
</div>

<div style="flex: 1 1 220px; background: #38a169; color: #fff; border-radius: 8px; padding: 1.2rem;">
<strong>Integrated Oscilloscope</strong><br>
Display and analyze signals directly in the simulator.
</div>

</div>

<div style="height: 40px;"></div>

<iframe src="https://www.falstad.com/circuit/circuitjs.html" width="100%" height="800" frameborder="0"></iframe>

<div style="height: 50px;"></div>

---
<div id="ai-support">

# AI support 

<div style="display: grid; grid-template-columns: 1fr 1fr; gap: 16px; margin: 16px 0;">
    <!-- Hinweis-Text -->
    <div style="display: flex; align-items: center; gap: 1.2rem; padding: 16px; background: linear-gradient(135deg, #e0e7ef 0%, #b2f7ef 100%); border-radius: 12px; border: 1px solid #b2f7ef; box-shadow: 0 2px 8px rgba(0,0,0,0.07); color: #1a202c;">
        <img src="https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExZHVvZDZpeXh0dTZoMWNkaDJzMWpodmk4eGpjbHgzMHc2ZnEwcTJlayZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/5XELueHTZd3XCaMGbw/giphy.gif" alt="Hinweis GIF" style="width: 72px; height: 72px; border-radius: 8px; flex-shrink: 0;">
        <div>
            <strong>Hinweis:</strong><br>
            Da ihr fundamentale Dinge fragen werdet, könnt ihr dazu kleinere Modelle nutzen – Modelle, die euch nichts kosten und die euch keiner wegnehmen kann.
        </div>
    </div>
    <!-- A1-Terminal Repository -->
    <div style="padding: 16px; background: linear-gradient(135deg, #025709ff 0%, #05fa1aff 100%); border-radius: 12px; border: 1px solid #010202ff; box-shadow: 0 2px 8px rgba(0,0,0,0.1);">
        <div style="display: flex; align-items: center; gap: 12px;">
            <div style="background: #ffffff; border-radius: 50%; width: 48px; height: 48px; display: flex; align-items: center; justify-content: center; box-shadow: 0 2px 6px rgba(0,0,0,0.2);">
                <svg height="32" width="32" viewBox="0 0 16 16" style="fill: #24292e;">
                    <path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z"></path>
                </svg>
            </div>
            <div>
                <div style="font-weight: bold; color: #24292e; font-size: 1.1em;">
                    🖥️ A1-Terminal v1.0
                </div>
                <div style="margin-top: 4px;">
                    <a href="https://github.com/Nr44suessauer/A1-Terminal/tree/Release-Version-1.0" target="_blank" style="color: #0366d6; text-decoration: none; font-weight: 500;">Nr44suessauer/A1-Terminal</a>
                </div>
                <div style="margin-top: 8px; color: #000000ff; font-size: 0.9em; line-height: 1.5;">
                    Desktop GUI application for local AI models. Features automatic installation, session management, and complete offline privacy. Perfect for beginners and local development.
                </div>
            </div>
        </div>
    </div>
</div>

<div style="height: 40px;"></div>

<div style="width: 100%; height: 800px; overflow: hidden; border: none; position: relative;">
    <iframe 
        src="https://deadlinedriven.dev/articles/ollama-intruduction" 
        width="100%" 
        height="50%" 
        frameborder="0" 
        style="border: none; transform: scale(0.8); transform-origin: 0 0; width: 125%; height: 125%;">
    </iframe>
</div>

<div style="height: 50px;"></div>

---
<div id="ilias-portal">

## 📤 Abgabe der Dokumentation

<div style="background: linear-gradient(135deg, #0d0208 0%, #001a0d 100%); padding: 2rem; border-radius: 12px; margin: 2rem 0; box-shadow: 0 8px 30px rgba(0, 255, 65, 0.3), 0 0 60px rgba(0, 255, 65, 0.1); border: 1px solid rgba(0, 255, 65, 0.3);">

<div style="background: rgba(255, 200, 0, 0.1); padding: 1rem; border-radius: 8px; margin-bottom: 1.5rem; border: 1px solid rgba(255, 200, 0, 0.3); text-align: center;">
  <strong style="color: #ffc800; font-size: 1.2rem; text-shadow: 0 0 8px rgba(255, 200, 0, 0.6);">⏰ Abgabefrist: 18. Januar 2026 um 23:59 Uhr</strong>
</div>

<div style="background: rgba(0, 255, 65, 0.05); padding: 1.5rem; border-radius: 8px; margin-top: 1rem; border: 1px solid rgba(0, 255, 65, 0.2);">

Laden Sie Ihre vollständige Dokumentation im folgenden ILIAS-Ordner hoch:

<div style="margin: 1.5rem 0; text-align: center;">
  <a href="https://ilias.hs-heilbronn.de/ilias.php?baseClass=ilrepositorygui&cmdNode=105:p7&cmdClass=ilObjFolderGUI&ref_id=988997" target="_blank" rel="noopener noreferrer" 
     style="display: inline-block; padding: 1.2rem 2.5rem; background: rgba(0, 255, 65, 0.15); color: #00ff41; text-decoration: none; border-radius: 8px; font-weight: bold; font-size: 1.1rem; box-shadow: 0 4px 15px rgba(0, 255, 65, 0.3), 0 0 20px rgba(0, 255, 65, 0.2); transition: transform 0.2s, box-shadow 0.2s; border: 2px solid #00ff41; text-shadow: 0 0 8px rgba(0, 255, 65, 0.8);"
     onmouseover="this.style.transform='translateY(-2px)'; this.style.boxShadow='0 6px 25px rgba(0, 255, 65, 0.5), 0 0 35px rgba(0, 255, 65, 0.3)'; this.style.background='rgba(0, 255, 65, 0.25)'; this.style.textShadow='0 0 12px rgba(0, 255, 65, 1)';"
     onmouseout="this.style.transform='translateY(0)'; this.style.boxShadow='0 4px 15px rgba(0, 255, 65, 0.3), 0 0 20px rgba(0, 255, 65, 0.2)'; this.style.background='rgba(0, 255, 65, 0.15)'; this.style.textShadow='0 0 8px rgba(0, 255, 65, 0.8)';">
    📤 Zur ILIAS-Abgabe
  </a>
</div>

</div>

### 📋 Anforderungen an die Dokumentation

Ihre Dokumentation muss folgende Elemente enthalten:

<div style="background: rgba(0, 255, 65, 0.08); padding: 1.5rem; border-radius: 8px; border: 1px solid rgba(0, 255, 65, 0.2); box-shadow: 0 0 10px rgba(0, 255, 65, 0.1); margin-bottom: 1.5rem;">
<strong style="color: #00ff41; text-shadow: 0 0 5px rgba(0, 255, 65, 0.5); font-size: 1.1rem;">📄 Studenteninformationen (nach dem Deckblatt)</strong><br>
<p style="color: #00ff41; margin-top: 0.5rem; margin-bottom: 0.5rem;">Fügen Sie nach Ihrem Deckblatt folgende Markdown-Tabelle ein:</p>

```markdown
# Student Information

|                   |                             |
|-------------------|-----------------------------|
| Name              | Marc Nauendorf              |
| Matrikelnummer    | 200882                      |
| Studiengang       | Software engineering Master |
| Kurs              | SV2                         |
| Betreuer          | Prof. Dr. supervisor        |
| Akademisches Jahr | 2025/2026                   |
```

<p style="color: #00ff41; margin-top: 0.5rem; font-size: 0.9rem;">⚠️ Passen Sie die Werte in der rechten Spalte an Ihre persönlichen Daten an!</p>
</div>

<div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1rem; margin-top: 1rem;">

<div style="background: rgba(0, 255, 65, 0.08); padding: 1rem; border-radius: 8px; border: 1px solid rgba(0, 255, 65, 0.2); box-shadow: 0 0 10px rgba(0, 255, 65, 0.1);">
<strong style="color: #00ff41; text-shadow: 0 0 5px rgba(0, 255, 65, 0.5);">✅ Protokoll aller Aufgaben</strong><br>
<ul style="margin-top: 0.5rem; margin-bottom: 0; color: #00ff41;">
<li>Vollständige Bearbeitung aller Tasks</li>
<li>Messungen und Berechnungen</li>
<li>Ausgefüllte Tabellen</li>
</ul>
</div>

<div style="background: rgba(0, 255, 65, 0.08); padding: 1rem; border-radius: 8px; border: 1px solid rgba(0, 255, 65, 0.2); box-shadow: 0 0 10px rgba(0, 255, 65, 0.1);">
<strong style="color: #00ff41; text-shadow: 0 0 5px rgba(0, 255, 65, 0.5);">🎬 GIF-Dokumentation</strong><br>
<ul style="margin-top: 0.5rem; margin-bottom: 0; color: #00ff41;">
<li>Alle GIFs direkt im Dokument eingebettet</li>
<li>Keine externen Verweise ("siehe GIF 2")</li>
<li>Klare Beschriftung der Simulationen</li>
</ul>
<p style="color: #00ff41; margin-top: 0.8rem; font-size: 0.9rem;">💡 Syntax für GIFs im Repository:</p>
<pre style="background: rgba(0, 0, 0, 0.4); padding: 0.5rem; border-radius: 4px; overflow-x: auto; color: #00ff41; font-family: 'Courier New', monospace; font-size: 0.85rem;">![Beschreibung](pfad/zum/gif.gif)</pre>
</div>

<div style="background: rgba(0, 255, 65, 0.08); padding: 1rem; border-radius: 8px; border: 1px solid rgba(0, 255, 65, 0.2); box-shadow: 0 0 10px rgba(0, 255, 65, 0.1);">
<strong style="color: #00ff41; text-shadow: 0 0 5px rgba(0, 255, 65, 0.5);">🤖 AI-Sessions</strong><br>
<ul style="margin-top: 0.5rem; margin-bottom: 0; color: #00ff41;">
<li>Vollständige Chat-Protokolle mit der AI</li>
</ul>
<p style="color: #00ff41; margin-top: 0.8rem; font-size: 0.9rem;">📤 Upload hier:</p>
<a href="https://ilias.hs-heilbronn.de/ilias.php?baseClass=ilrepositorygui&ref_id=989034" target="_blank" rel="noopener noreferrer" 
   style="display: inline-block; margin-top: 0.3rem; padding: 0.5rem 1rem; background: rgba(0, 255, 65, 0.15); color: #00ff41; text-decoration: none; border-radius: 6px; font-size: 0.9rem; border: 1px solid #00ff41; transition: all 0.2s;"
   onmouseover="this.style.background='rgba(0, 255, 65, 0.25)'"
   onmouseout="this.style.background='rgba(0, 255, 65, 0.15)'">
  ILIAS AI-Sessions Upload
</a>
</div>

<div style="background: rgba(0, 255, 65, 0.08); padding: 1rem; border-radius: 8px; border: 1px solid rgba(0, 255, 65, 0.2); box-shadow: 0 0 10px rgba(0, 255, 65, 0.1);">
<strong style="color: #00ff41; text-shadow: 0 0 5px rgba(0, 255, 65, 0.5);">📊 Auswertungen</strong><br>
<ul style="margin-top: 0.5rem; margin-bottom: 0; color: #00ff41;">
<li>Vergleich Theorie vs. Simulation</li>
<li>Erklärungen der Beobachtungen</li>
<li>Beantwortung aller Fragen</li>
</ul>
</div>

</div>

<div style="background: rgba(0, 255, 65, 0.1); padding: 1rem; border-left: 4px solid #00ff41; margin-top: 1.5rem; border-radius: 4px; box-shadow: 0 0 15px rgba(0, 255, 65, 0.2);">
<strong style="color: #00ff41; text-shadow: 0 0 5px rgba(0, 255, 65, 0.5);">⚠️ Wichtig:</strong> <span style="color: #00ff41;">Alle GIFs müssen direkt im Dokument abrufbar sein (z.B. als eingebettete Bilder mit Markdown-Syntax <code style="background: rgba(0, 255, 65, 0.15); padding: 2px 6px; border-radius: 3px; color: #00ff41;">![Beschreibung](pfad/zum/gif.gif)</code>). Verweise wie "siehe GIF 2" sind nicht ausreichend!</span>
</div>

<div style="background: rgba(255, 0, 0, 0.15); padding: 1rem; border-left: 4px solid #ff4444; margin-top: 1rem; border-radius: 4px; box-shadow: 0 0 15px rgba(255, 0, 0, 0.2);">
<strong style="color: #ff4444; text-shadow: 0 0 5px rgba(255, 68, 68, 0.5);">⚠️ Punktabzug:</strong> <span style="color: #ff9999;">Bei Nicht-Einhaltung der Formatvorgaben (falsch eingebettete GIFs, unvollständige Tabellen etc) erfolgt Punktabzug!</span>
</div>

</div>

<div style="height: 50px;"></div>


