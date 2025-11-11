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

# SV2 - Schwingkreis Labor

<div style="margin: 1rem 0 2rem 0; border-radius: 8px; overflow: hidden; box-shadow: 0 4px 12px rgba(0,0,0,0.3);">
<iframe src="/assets/pdf/Präsentation2.pdf" width="100%" height="400" frameborder="0" style="border: none;"></iframe>
</div>

<style>
/* Tab System Styles */
.task-tabs-container {
  margin: 2rem 0;
}

.task-tab-radio {
  display: none;
}

.task-tab-navbar {
  display: flex;
  gap: 1px;
  margin-bottom: 0;
  justify-content: center;
  flex-wrap: wrap;
  overflow-x: visible;
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
  box-shadow: 0 4px 8px rgba(0,0,0,0.2) !important;
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
  box-shadow: 0 6px 12px rgba(106, 27, 154, 0.4) !important;
}
label.task-tab-btn[for="task-tab-1"]:hover,
#task-tab-1:checked ~ .task-tab-navbar label.task-tab-btn[for="task-tab-1"] {
  background: #1976d2 !important;
  color: white !important;
  transform: translateY(-2px);
  box-shadow: 0 6px 12px rgba(33, 150, 243, 0.4) !important;
}
label.task-tab-btn[for="task-tab-2"]:hover,
#task-tab-2:checked ~ .task-tab-navbar label.task-tab-btn[for="task-tab-2"] {
  background: #f57c00 !important;
  color: white !important;
  transform: translateY(-2px);
  box-shadow: 0 6px 12px rgba(255, 152, 0, 0.4) !important;
}
label.task-tab-btn[for="task-tab-3"]:hover,
#task-tab-3:checked ~ .task-tab-navbar label.task-tab-btn[for="task-tab-3"] {
  background: #388e3c !important;
  color: white !important;
  transform: translateY(-2px);
  box-shadow: 0 6px 12px rgba(76, 175, 80, 0.4) !important;
}
label.task-tab-btn[for="task-tab-4"]:hover,
#task-tab-4:checked ~ .task-tab-navbar label.task-tab-btn[for="task-tab-4"] {
  background: #c2185b !important;
  color: white !important;
  transform: translateY(-2px);
  box-shadow: 0 6px 12px rgba(233, 30, 99, 0.5) !important;
}

/* Task content bubbles */
.task-content {
  display: none;
  background: #1a1a2e;
  border-radius: 0 0 20px 20px;
  padding: 2rem;
  color: white;
  margin-top: -2px;
  box-shadow: 0 8px 20px rgba(0,0,0,0.3);
}

#task-tab-0:checked ~ .task-content.task-content-0,
#task-tab-1:checked ~ .task-content.task-content-1,
#task-tab-2:checked ~ .task-content.task-content-2,
#task-tab-3:checked ~ .task-content.task-content-3,
#task-tab-4:checked ~ .task-content.task-content-4 {
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

<div class="task-tabs-container">
<input type="radio" name="task-tab" id="task-tab-0" class="task-tab-radio" checked>
<input type="radio" name="task-tab" id="task-tab-1" class="task-tab-radio">
<input type="radio" name="task-tab" id="task-tab-2" class="task-tab-radio">
<input type="radio" name="task-tab" id="task-tab-3" class="task-tab-radio">
<input type="radio" name="task-tab" id="task-tab-4" class="task-tab-radio">

  <nav class="task-tab-navbar">
    <label class="task-tab-btn" for="task-tab-0" style="background: #6a1b9a !important; color: white !important;">📊 Aufgabe 1</label>
    <label class="task-tab-btn" for="task-tab-1" style="background: #2196f3 !important; color: white !important;">📐 Aufgabe 2</label>
    <label class="task-tab-btn" for="task-tab-2" style="background: #ff9800 !important; color: white !important;">🔄 Aufgabe 3</label>
    <label class="task-tab-btn" for="task-tab-3" style="background: #4caf50 !important; color: white !important;">🔢 Aufgabe 4</label>
    <label class="task-tab-btn" for="task-tab-4" style="background: #e91e63 !important; color: white !important;">👑 Aufgabe 5</label>
  </nav>

<div class="task-content task-content-0" data-task="0">

<h3 style="color: #6a1b9a;">Resonanzfrequenz des Reihenschwingkreises</h3>

<h4 style="color: #6a1b9a;">Ziel</h4>

Verifizieren Sie die Berechnungen von <a href="/assets/pdf/Präsentation2.pdf#page=7" target="_blank" style="color: #6a1b9a; font-weight: bold;">Folie 7</a> durch praktische Simulation und ermitteln Sie die Resonanzfrequenz des Reihenschwingkreises.

<h4 style="color: #6a1b9a;">Aufbau im Falstad-Simulator</h4>

Bauen Sie den Reihenschwingkreis mit folgenden Werten nach:

- **AC-Spannungsquelle:** U = 1 V
- **Widerstand:** R = 1000 Ω
- **Spule:** L = 100 mH
- **Kondensator:** C = 0,15 μF (bzw. 150 nF)

<details style="background: rgba(106, 27, 154, 0.05); border: 2px solid #6a1b9a; border-radius: 8px; padding: 1rem; margin: 1.5rem 0;">
<summary style="cursor: pointer; font-weight: bold; font-size: 1.1rem; color: #6a1b9a; padding: 0.5rem;">
📋 Durchführung & Auswertung (aufklappen)
</summary>

<div style="padding-top: 1rem;">

<h4 style="color: #6a1b9a;">Durchführung</h4>

1. Verändern Sie die Quellenfrequenz schrittweise
2. Beobachten Sie den Strom I im Kreis
3. Finden Sie den Punkt, an dem der Strom sein **Maximum** erreicht
4. Dies ist der Resonanzpunkt, da die Impedanz Z hier minimal ist

<div class="simulator-hint">
<strong>💡 Tipp:</strong>
<br>
Verwenden Sie die "Sliders/Choices" Funktion, um die Frequenz dynamisch zu verändern und den Stromverlauf zu beobachten.
</div>

<h4 style="color: #6a1b9a;">Auswertung</h4>

Vergleichen Sie Ihre gemessene Resonanzfrequenz mit dem theoretischen Wert von **1300 Hz** aus <a href="/assets/pdf/Präsentation2.pdf#page=7" target="_blank" style="color: #6a1b9a; font-weight: bold;">Folie 7</a>.

<div style="background: linear-gradient(135deg, rgba(106, 27, 154, 0.15), rgba(74, 20, 140, 0.1)); border-left: 4px solid #6a1b9a; padding: 1rem; margin: 1rem 0; border-radius: 0 8px 8px 0; box-shadow: 0 2px 8px rgba(106, 27, 154, 0.2);">
<strong style="color: #6a1b9a;">✨ Erwartung:</strong> Die gemessene Resonanzfrequenz sollte nahe bei <strong>1300 Hz</strong> liegen. An diesem Punkt erreicht der Strom sein Maximum, da die Impedanz minimal ist.
</div>

</div>

</details>

</div>

<div class="task-content task-content-1">

<h3 style="color: #2196f3;">Güte und Dämpfung visualisieren</h3>

<h4 style="color: #2196f3;">Ziel</h4>

Untersuchen Sie den Einfluss des Widerstands R (Dämpfung) auf die Schärfe der Resonanzkurve (Güte Q), wie auf <a href="/assets/pdf/Präsentation2.pdf#page=9" target="_blank" style="color: #2196f3; font-weight: bold;">Folie 9</a> dargestellt.

<h4 style="color: #2196f3;">Aufbau im Falstad-Simulator</h4>

Bauen Sie den Reihenschwingkreis mit folgenden Werten:

- **Spule:** L = 100 mH
- **Kondensator:** C = 100 nF
- **Widerstand:** R variabel (Bereich: 5 Ω bis 300 Ω)

<details style="background: rgba(33, 150, 243, 0.05); border: 2px solid #2196f3; border-radius: 8px; padding: 1rem; margin: 1.5rem 0;">
<summary style="cursor: pointer; font-weight: bold; font-size: 1.1rem; color: #2196f3; padding: 0.5rem;">
📋 Durchführung & Auswertung (aufklappen)
</summary>

<div style="padding-top: 1rem;">

<h4 style="color: #2196f3;">Durchführung</h4>

1. Fügen Sie einen **Schieberegler** für den Widerstand R hinzu
2. Aktivieren Sie die **Oszilloskop-Funktion** ("Scope")
3. Messen Sie den Strom als Spannung am Widerstand
4. Variieren Sie R und beobachten Sie die Veränderung der Peak-Form

<div class="simulator-hint">
<strong>💡 Beobachtungen:</strong>
<br>
- Kleiner Widerstand → Schmaler, hoher Peak (hohe Güte Q)
<br>
- Großer Widerstand → Breiter, flacher Peak (niedrige Güte Q)
</div>

<h4 style="color: #2196f3;">Auswertung</h4>

Dokumentieren Sie, wie sich die Resonanzkurve bei verschiedenen Widerstandswerten verändert.

<div style="background: linear-gradient(135deg, rgba(33, 150, 243, 0.15), rgba(25, 118, 210, 0.1)); border-left: 4px solid #2196f3; padding: 1rem; margin: 1rem 0; border-radius: 0 8px 8px 0; box-shadow: 0 2px 8px rgba(33, 150, 243, 0.2);">
<strong style="color: #2196f3;">✨ Erwartung:</strong> Bei <strong>kleinem Widerstand</strong> (hohe Güte Q) sollten Sie einen schmalen, hohen Peak sehen. Bei <strong>großem Widerstand</strong> (niedrige Güte Q) wird der Peak breiter und flacher.
</div>

</div>

</details>

</div>

<div class="task-content task-content-2">

<h3 style="color: #ff9800;">Bandpass vs. Bandsperre</h3>

<h4 style="color: #ff9800;">Ziel</h4>

Verstehen Sie den fundamentalen Unterschied zwischen Bandpassfilter und Bandsperrfilter (siehe <a href="/assets/pdf/Präsentation2.pdf#page=12" target="_blank" style="color: #ff9800; font-weight: bold;">Folie 12</a>). Beide nutzen dieselben L/C-Werte, haben aber gegensätzliche Funktionen.

<h4 style="color: #ff9800;">Aufbau 1: Bandpass-Filter</h4>

Ein **Parallelschwingkreis** (L/C) bildet den Ausgang, gespeist über einen Vorwiderstand Ri.

<h4 style="color: #ff9800;">Aufbau 2: Bandsperre-Filter</h4>

Ein **Reihenschwingkreis** (L/C) wird parallel zu einem Ausgangswiderstand R2 geschaltet.

<h4 style="color: #ff9800;">Gemeinsame Werte für beide Schaltungen</h4>

- **Spule:** L = 500 μH
- **Kondensator:** C = 100 nF
- **Eingangswiderstand (Bandpass):** Ri = 1 kΩ
- **Ausgangswiderstand (Bandsperre):** R2 = 1 kΩ

<details style="background: rgba(255, 152, 0, 0.05); border: 2px solid #ff9800; border-radius: 8px; padding: 1rem; margin: 1.5rem 0;">
<summary style="cursor: pointer; font-weight: bold; font-size: 1.1rem; color: #ff9800; padding: 0.5rem;">
📋 Durchführung & Auswertung (aufklappen)
</summary>

<div style="padding-top: 1rem;">

<h4 style="color: #ff9800;">Durchführung</h4>

1. Bauen Sie beide Schaltungen parallel auf
2. Messen Sie bei beiden den Frequenzgang der Ausgangsspannung
3. Verwenden Sie den "Frequency Analysis" Modus
4. Vergleichen Sie das Verhalten bei der Resonanzfrequenz

<div class="simulator-hint">
<strong>💡 Erwartetes Verhalten:</strong>
<br>
<strong>Bandpass:</strong>Maximum bei Resonanzfrequenz (Signal wird durchgelassen)
<br>
<strong>Bandsperre:</strong>Minimum bei Resonanzfrequenz (Signal wird blockiert)
</div>

<h4 style="color: #ff9800;">Auswertung</h4>

Erklären Sie anhand Ihrer Messungen, warum die beiden Schaltungen trotz gleicher Bauteile ein gegensätzliches Verhalten zeigen.

<div style="background: linear-gradient(135deg, rgba(255, 152, 0, 0.15), rgba(245, 124, 0, 0.1)); border-left: 4px solid #ff9800; padding: 1rem; margin: 1rem 0; border-radius: 0 8px 8px 0; box-shadow: 0 2px 8px rgba(255, 152, 0, 0.2);">
<strong style="color: #ff9800;">✨ Erwartung:</strong> Der <strong>Bandpass</strong> zeigt ein Maximum bei der Resonanzfrequenz (Signal wird durchgelassen), während die <strong>Bandsperre</strong> ein Minimum zeigt (Signal wird blockiert) - trotz identischer Bauteile.
</div>

</div>

</details>

</div>

<div class="task-content task-content-3">

<h3 style="color: #4caf50;">Der 3-Bit D/A-Wandler (R-2R-Netzwerk)</h3>

<h4 style="color: #4caf50;">Ziel</h4>

Verstehen Sie das Grundprinzip eines Digital-Analog-Wandlers (DAC). Wie auf <a href="/assets/pdf/Präsentation2.pdf#page=30" target="_blank" style="color: #4caf50; font-weight: bold;">Folie 30</a> und <a href="/assets/pdf/Präsentation2.pdf#page=31" target="_blank" style="color: #4caf50; font-weight: bold;">Folie 31</a> konzeptionell gezeigt, ist dies der umgekehrte Prozess zur Abtastung.

<h4 style="color: #4caf50;">Konzept</h4>

Bauen Sie einen passiven **3-Bit D/A-Wandler** mit einem **R-2R-Leiternetzwerk**. Dieser Wandler nutzt ausschließlich Widerstände und Schalter.

Die 3 Schalter repräsentieren ein 3-Bit-Digitalwort (von **000** bis **111**).

<h4 style="color: #4caf50;">Aufbau im Falstad-Simulator</h4>

**Bauteile:**

- **1 DC-Spannungsquelle:** 5 V (für Logik-HIGH)
- **3 Umschalter (SPDT):** Repräsentieren die Bits 0 (LSB), 1 und 2 (MSB)
- **Widerstände:** R = 1 kΩ und 2R = 2 kΩ

**Hinweis zur Logikspannung:**

Die "Logikspannung" (der "Ein"-Zustand) soll **5 V** betragen.

<details style="background: rgba(76, 175, 80, 0.05); border: 2px solid #4caf50; border-radius: 8px; padding: 1rem; margin: 1.5rem 0;">
<summary style="cursor: pointer; font-weight: bold; font-size: 1.1rem; color: #4caf50; padding: 0.5rem;">
📋 Durchführung & Auswertung (aufklappen)
</summary>

<div style="padding-top: 1rem;">

<h4 style="color: #4caf50;">Durchführung</h4>

<div class="simulator-hint">
<strong>💡 Messwerttabelle:</strong>
<br><br>
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
</div>

<h4 style="color: #4caf50;">Auswertung</h4>

Dokumentieren Sie, wie die Ausgangsspannung **proportional zum eingegebenen Digitalwert** ansteigt. 

<div style="background: linear-gradient(135deg, rgba(76, 175, 80, 0.15), rgba(56, 142, 60, 0.1)); border-left: 4px solid #4caf50; padding: 1rem; margin: 1rem 0; border-radius: 0 8px 8px 0; box-shadow: 0 2px 8px rgba(76, 175, 80, 0.2);">
<strong style="color: #4caf50;">✨ Erwartung:</strong> Die Ausgangsspannung sollte in <strong>gleichmäßigen Schritten</strong> zunehmen und linear proportional zum Binärwert sein (z.B. bei 5V Logikspannung: 0V, 0.625V, 1.25V, ... bis 4.375V).
</div>

</div>

</details>

</div>

<!-- ===================== AUFGABE 5 ===================== -->

<div class="task-content task-content-4">

<h3 style="color: #e91e63;">👑 Fourier-Analyse eines komplexen Filters</h3>

<h4 style="color: #e91e63;">Ziel</h4>

Kombinieren Sie die Konzepte aus <a href="/assets/pdf/Präsentation2.pdf#page=15" target="_blank" style="color: #e91e63; text-decoration: underline;">Folie 15 (Komplexe Filter)</a> und <a href="/assets/pdf/Präsentation2.pdf#page=25" target="_blank" style="color: #e91e63; text-decoration: underline;">Folie 25 (Fourier-Analyse)</a>. Bauen Sie einen komplexen RLC-Filter und analysieren Sie sein Verhalten mit einer **Rechteckwelle** im Frequenzbereich.

<h4 style="color: #e91e63;">Konzept</h4>

**Komplexe Filter** bestehen aus mehreren Schwingkreisen und zeigen mehrere Resonanzfrequenzen. Wenn man eine **Rechteckwelle** als Eingangssignal verwendet, kann man die **Fourier-Komponenten** (Grundschwingung + ungerade Harmonische) sehen und beobachten, wie der Filter nur bestimmte Frequenzen durchlässt.

**Fourier-Zerlegung einer Rechteckwelle:**
- **Grundfrequenz (f₀):** Die niedrigste Frequenzkomponente
- **Harmonische:** 3·f₀, 5·f₀, 7·f₀, 9·f₀, ... (nur ungerade Vielfache)
- **Amplitude:** Nimmt mit steigender Ordnung ab (1/n für n-te Harmonische)

**Strategie:** Wählen Sie die Frequenz der Rechteckwelle so, dass eine ihrer **Harmonischen auf die Resonanzfrequenz** des Filters trifft. Dann wird diese Harmonische verstärkt, während andere gedämpft werden.

<h4 style="color: #e91e63;">Aufbau</h4>

Bauen Sie folgenden komplexen Filter mit **zwei Schwingkreisen**:

**Komponenten:** (siehe <a href="/assets/pdf/Präsentation2.pdf#page=15" target="_blank" style="color: #e91e63; text-decoration: underline;">Folie 15</a>)

| Bauteil | Wert |
|---------|------|
| **L1** | 5 µH |
| **C1** | 2 nF |
| **R1** | 25 Ω |
| **C2** | 5 nF |
| **L2** | 10 µH |
| **R2** | 100 Ω |

**Signalquelle:**
- **Rechteckwelle** mit **566,7 kHz** (damit die 3. Harmonische bei ca. 1,7 MHz liegt)
- **Amplitude:** 10 V

**Schaltungsaufbau:**
1. Spannungsquelle (Rechteckwelle)
2. Erster Schwingkreis: L1 (5 µH) – C1 (2 nF) – R1 (25 Ω) in Serie
3. Zweiter Schwingkreis: C2 (5 nF) – L2 (10 µH) – R2 (100 Ω) in Serie
4. Ausgang nach dem zweiten Schwingkreis

<div style="background: rgba(233, 30, 99, 0.1); border-left: 4px solid #e91e63; padding: 1rem; margin: 1.5rem 0; border-radius: 0 8px 8px 0;">
<strong>💡 Simulator-Hinweis:</strong><br>
Nutzen Sie die <strong>FFT-Funktion</strong> (Fast Fourier Transform) im Simulator, um das Frequenzspektrum anzuzeigen. Sie sollten die Rechteckwelle als Summe von Harmonischen sehen: f₀ = 566,7 kHz, 3·f₀ = 1,7 MHz, 5·f₀ = 2,83 MHz, etc.
<br><br>
Beobachten Sie, wie der Filter die <strong>3. Harmonische (1,7 MHz)</strong> verstärkt, da sie nahe der Resonanzfrequenz eines Schwingkreises liegt.
</div>

<details style="background: rgba(233, 30, 99, 0.05); border: 2px solid #e91e63; border-radius: 8px; padding: 1rem; margin: 1.5rem 0;">
<summary style="cursor: pointer; font-weight: bold; font-size: 1.1rem; color: #e91e63; padding: 0.5rem;">
📋 Durchführung & Auswertung (aufklappen)
</summary>

<div style="padding-top: 1rem;">

<h4 style="color: #e91e63;">Durchführung</h4>

1. **Schaltung aufbauen** mit den oben genannten Komponenten
2. **Rechteckwelle einstellen:** 566,7 kHz, 10 V Amplitude
3. **Oszilloskop an Eingang und Ausgang** anschließen
4. **Beobachtung im Zeitbereich:** Wie sieht die Ausgangsspannung aus? Ist sie noch rechteckig?
5. **FFT aktivieren:** Zeigen Sie das Frequenzspektrum von Eingang und Ausgang
6. **Frequenzen vergleichen:** Welche Harmonischen sind am Ausgang stärker/schwächer?

**Variation:**
- Ändern Sie die Rechteckfrequenz auf **850 kHz** → Die 2. Harmonische (1,7 MHz) trifft die Resonanz
- Ändern Sie die Rechteckfrequenz auf **340 kHz** → Die 5. Harmonische (1,7 MHz) trifft die Resonanz

<h4 style="color: #e91e63;">Auswertung</h4>

1. **Zeitbereich-Analyse:**
   - Ist die Ausgangsspannung noch rechteckig oder sinusförmig?
   - Welche Frequenzkomponente dominiert am Ausgang?

2. **Frequenzbereich-Analyse (FFT):**
   - Welche Harmonischen werden verstärkt?
   - Welche werden gedämpft?
   - Wo liegt die Resonanzfrequenz des Filters?

3. **Fourier-Verständnis:**
   - Erklären Sie, warum eine Rechteckwelle **nur ungerade Harmonische** enthält
   - Warum nimmt die Amplitude der Harmonischen mit steigender Ordnung ab?

<div style="background: linear-gradient(135deg, rgba(255, 215, 0, 0.15), rgba(255, 193, 7, 0.1)); border-left: 4px solid #ffd700; padding: 1rem; margin: 1rem 0; border-radius: 0 8px 8px 0; box-shadow: 0 2px 8px rgba(255, 215, 0, 0.2);">
<strong style="color: #ffd700;">✨ Erwartung:</strong> Am Ausgang sollten Sie eine <strong>nahezu sinusförmige Schwingung</strong> bei ca. 1,7 MHz sehen, da der Filter diese Frequenz herausfiltert und verstärkt, während alle anderen Harmonischen gedämpft werden.
</div>

</div>

</details>

</div>

</div>


---


<div style="display: flex; align-items: center; gap: 1rem; margin-bottom: 1.5rem;">
    <img src="https://www.falstad.com/mathphysics_small.gif" alt="CircuitJS Logo" style="width: 64px; height: 64px; border-radius: 8px;">
    <div>
        <h3 style="margin: 0;">
            <a href="https://www.falstad.com/circuit/index.html" style="color: inherit; text-decoration: none;">
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



</div>
