---
layout: post
title: Konzept Messparkour
date: 2025-03-05 16:40:00
description: Possible measurement scenarios for students
tags: basics engineering_tool measurement Voltage OHM Ampere Hz
categories: Measurement_Parkour concept
disqus_comments: true
featured: false
hidden: true
---

Der Student sollte in der Lage sein, Schaltungen aus diesen **drei Kategorien** zu verstehen, zu **analysieren** und auf **Fehler** zu **prüfen**. Mit Messwerkzeugen wie **Oszilloskop und Multimeter** sollen Fehler messtechnisch bewiesen werden.

Es wäre möglich, den Studenten einen Teil der Schaltung selbst aufbauen zu lassen (z. B. einen Spannungsteiler) und diesen dann zu nutzen, um ein analoges Signal zu messen/interpretieren.

<h3><strong>1. Spannungsteiler</strong></h3>
<p><strong>Schaltung</strong>: Zwei Widerstände \( R_1 \) und \( R_2 \) in Reihe an einer Versorgungsspannung \( V_{CC} \).</p>
<p><strong>Ausgangsspannung</strong>:</p>
<p>\[ V_{out} = V_{CC} \cdot \frac{R_2}{R_1 + R_2} \]</p>

<div style="display: flex; justify-content: space-between;">
    <div>
        <p><strong>Messszenarien</strong>:</p>
        <ul>
            <li><strong>Ohne Last</strong>:
                <ul>
                    <li><strong>Messung</strong>: Spannung zwischen \( R_1 \) und \( R_2 \) mit Multimeter.</li>
                    <li><strong>Erwartung</strong>: Berechnete \( V_{out} \).</li>
                    <li><strong>Fehlerfall</strong>: Abweichung → Falsche Widerstände oder defekte Bauteile.</li>
                </ul>
            </li>
            <li><strong>Unter Last</strong> (z. B. Verbraucher \( R_L \)):
                <ul>
                    <li><strong>Messung</strong>: \( V_{out} \) sinkt durch Parallelschaltung \( R_2 \parallel R_L \).</li>
                    <li><strong>Bonus</strong>: \( R_1 \), \( R_2 \) so wählen, dass \( R_2 \ll R_L \).</li>
                </ul>
            </li>
        </ul>
    </div>
    <div>
        <p><img src="https://www.elektronik-kompendium.de/sites/slt/schalt/02011111.gif" alt="Spannungsteiler Schaltung"></p>
    </div>
</div>

<hr>

<h3><strong>2. DataLine | I²C-Bus (SDA und SCL)</strong></h3>
<p><strong>Schaltung</strong>: Open-Drain-Leitungen mit Pull-Up-Widerständen (\( R_{PU} \)) an \( V_{CC} \).</p>

<div style="display: flex; justify-content: space-between;">
    <div>
        <p><strong>Messszenarien</strong>:</p>
        <ul>
            <li><strong>Signalintegrität (Oszilloskop)</strong>:
            <ul>
                <li><strong>Pegel</strong>: High ≈ \( V_{CC} \), Low ≈ 0 V.</li>
                <li><strong>Flanken</strong>: Steilheit prüfen (zu langsam → \( R_{PU} \) verkleinern).</li>
                <li><strong>Störungen</strong>: Rauschen/Übersprechen erkennen.</li>
            </ul>
            </li>
            <li><strong>SDA (Datenleitung)</strong>:
            <ul>
                <li><strong>Messung</strong>: Adressbytes, Datenbits, ACK/NACK.</li>
                <li><strong>Beispiel</strong>: Startbedingung (High→Low bei SCL=High) + 7-Bit-Adresse.</li>
            </ul>
            </li>
            <li><strong>SCL (Clock)</strong>:
            <ul>
                <li><strong>Frequenz</strong>: Prüfen (z. B. 100 kHz im Standard-Mode).</li>
                <li><strong>Duty Cycle</strong>: High/Low-Phasen-Verhältnis.</li>
            </ul>
            </li>
        </ul>
        </div>
        <div style="text-align: center;">
        <img src="https://www.mikrocontroller.net/attachment/41866/sinewave.jpg" alt="Signalintegrität Oszilloskop" width="500px">
        </div>
</div>

<hr>

<h3><strong>3. Aktor-Schaltungen (z. B. Motor, LED, Relais)</strong></h3>
<p><strong>Einfache Schaltung</strong>:</p>
<ul>
    <li>Aktor (z. B. Motor) wird über einen Transistor/MOSFET angesteuert.</li>
    <li><strong>Freilaufdiode</strong> parallel zum Aktor, um Spannungsspitzen zu begrenzen (bei Motoren/Relais).</li>
</ul>

<div style="display: flex; justify-content: space-between;">
    <div>
        <p><strong>Szenarien</strong>:</p>
        <ol>
            <li><strong>Funktioniert der Aktor?</strong>
            <ul>
                <li><strong>Messung</strong>: Spannung direkt am Aktor mit dem Multimeter.</li>
                <li><strong>Erwartung</strong>: Volle Versorgungsspannung (z. B. 5 V oder 12 V), wenn der Transistor aktiviert ist.</li>
                <li><strong>Problem</strong>: Keine Spannung → Transistor defekt oder Ansteuerung fehlerhaft.</li>
            </ul>
            </li>
            <li><strong>Stromaufnahme prüfen</strong>:
            <ul>
                <li><strong>Messung</strong>: Multimeter im Strommessmodus <strong>in Reihe</strong> zum Aktor schalten.</li>
                <li><strong>Erwartung</strong>: Stromwert sollte im Datenblatt des Aktors liegen (z. B. 100 mA für eine LED).</li>
            </ul>
            </li>
            <li><strong>PWM-Steuerung (z. B. für Helligkeit/Geschwindigkeit)</strong>:
            <ul>
                <li><strong>Messung</strong>: Oszilloskop am Steueranschluss (Basis/Gate des Transistors).</li>
                <li><strong>Erwartung</strong>: Rechteckignal mit einstellbarem <strong>Tastverhältnis</strong> (Duty Cycle).</li>
                <li><strong>Beispiel</strong>: 50 % Duty Cycle → Motor dreht halbe Geschwindigkeit.</li>
            </ul>
            </li>
        </ol>
        </div>
        <div style="text-align: center;">
        <img src="https://github.com/Nr44suessauer/nr44suessauer.github.io/blob/main/assets/img/schaltungen/20250306_145122.jpg?raw=true" alt="Schaltung Bild" width="500px">
        <p><em>Bild zeigt PWM Signal für eine Pumpe und das Ansteuern eines LED Streifens</em></p>
        </div>
</div>

<hr>

<h3><strong>Typische Fehler und Lösungen</strong></h3>
<table border="1" style="width:100%; border-collapse: collapse;">
    <thead>
        <tr>
            <th><strong>Problem</strong></th>
            <th><strong>Ursache</strong></th>
            <th><strong>Lösung</strong></th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>Spannungsteiler zu schwach unter Last</td>
            <td>\( R_L \) zu klein</td>
            <td>\( R_1 \), \( R_2 \) verkleinern oder "Puffer" verwenden</td>
        </tr>
        <tr>
            <td>I²C-Signale zu langsam</td>
            <td>Pull-Up-Widerstände zu groß oder keine vorhanden</td>
            <td>\( R_{PU} \) reduzieren (4,7 kΩ bei 5 V)</td>
        </tr>
        <tr>
            <td>Aktuator/Motor reagiert nicht</td>
            <td>Defekter Transistor/Diode, Widerstände in Leitungen, "falsches" Verhalten (Taktsignal)</td>
            <td>Diode/Transistor prüfen, Widerstände überprüfen, Taktsignal kontrollieren, Ersatz testen</td>
        </tr>
    </tbody>
</table>
