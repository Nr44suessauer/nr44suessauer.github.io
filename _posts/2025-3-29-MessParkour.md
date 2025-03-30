---
layout: post
title: Messparkour SV2
date: 2025-03-29 16:40:00
description: Ablaufplan des Praxisteils in Signalverarbeitung 2 | 3 Termine 
tags: SV2 Parkour Filter VoltageDivider PWM I²C
disqus_comments: true
featured: false
---


**Verantwortlicher: Marc Nauendorf** | **Bewertung: 50 Punkte (Praxisteil) + 50 Punkte (Theorie) bei Herr Klemm**  
> Beide Teile müssen bestanden werden um SV2 im gesamten zu bestehen.


<div style="display: flex; align-items: center; margin-top: 30px;">
    <p></p>
</div>

<h3><strong>Vorwort</strong></h3>


<div style="display: flex; align-items: center; margin-top: 10px;">
    <p></p>
</div>

<div style="display: flex; align-items: flex-start;">
    <div style="flex: 1;">
        <p>
            im diesem <strong>Praxisteil von Signalverarbeitung 2</strong> erwartet euch ein spannender Messparkour, der in <strong>drei primären Präsenzterminen</strong> organisiert ist.
        </p>
        <p>
            In diesen Terminen könnt ihr eigenständig eure Arbeiten durchführen, wie in den <strong>nachfolgenden Abschnitten beschrieben.</strong>
        </p>
        <p>
            Die Labortermine sind in <strong>erster Linie</strong> dazu gedacht, offene Fragen zu klären, euch während des praktischen Vorgehens zu <strong>unterstützen</strong> und den Übergang von der theoretischen Vorbereitung zur realen Anwendung zu erleichtern.
        </p>
        <p>
            Ich freue mich auf eure engagierte Mitarbeit und wünsche euch viel Erfolg bei der Durchführung des Messparkours.
        </p>
    </div>
    <div style="margin-left: 20px;">
        <img src="https://github.com/Nr44suessauer/nr44suessauer.github.io/blob/main/assets/img/gif/oszi.gif?raw=true" alt="Oszi GIF" style="max-width:300px; height:auto;">
    </div>
</div>

> Note: Derjenige der mit seinem Microcontroller schon anfangen möchte, kann das gerne tun. Man kann die Arbeiten auch mit AtmelChips o.ä. bearbeiten. Wichtig: **Das Arduino Framework ist das einzige was ihr nicht nutzen dürft, sonst ist alles erlaubt.**

**PS:** Zugang für Labor bei [Herr Ballein](https://www.hs-heilbronn.de/de/martin.ballein)

---

**Termine:**
[Splan](https://splan.hs-heilbronn.de/) | Die Tage die angegeben sind, sind bei euch (SEB3) ohne Kurse.

| Datum               | Uhrzeit           | Thema                                                                     |
|---------------------|-------------------|---------------------------------------------------------------------------|
| 16.04.25            | 10:00 - 11:30 Uhr | Spannungsteiler & Low/High pass filter                                    |
| 30.04.25            | 10:00 - 11:30 Uhr | I²C                                                                       |
| 21.05.25            | 10:00 - 11:30 Uhr | PWM & Servo                                                               |
| **Abgabezeitpunkt** | bis 01.07.2025 | [Hochzuladen im Ilias Kurs](https://ilias.hs-heilbronn.de/ilias.php?baseClass=ilrepositorygui&cmdNode=yc:ni&cmdClass=ilObjFolderGUI&ref_id=918744) |

---

<div style="display: flex; align-items: center; margin-top: 30px;">
    <p></p>
</div>


## 📅 **Termin 1: Spannungsteiler & High&LowPass Filter** 

**Themen:**
1. **Spannungsteiler**
    - Berechne verschiedene Spannungsteiler-Konfigurationen unter Verwendung von Widerständen.
    - Vergleiche die theoretisch berechneten Werte mit praktischen Messungen.

2. **Hoch- und Tiefpassfilter**
    - Untersuche den Aufbau und die Funktionsweise von passiven Hoch- und Tiefpassfiltern.
    - Berechne die Grenzfrequenz und vergleiche die Ergebnisse.
    - *Material & Referenz:* [Passiver Hochpassfilter](https://www.electronics-tutorials.ws/de/filtern/passiver-hochpassfilter.html), [Video Tutorial](https://www.youtube.com/watch?v=lagfhNjMuQM)
 
#### **Vorbereitung**
- **Selbstständiges aneignen der Themen** High&Low Pass Filter + Spannungsteiler

#### **LaborTermin**
- Aufbauen eurer errechneten Schaltungen mit Freqenzgenerator & Netzteil
- Bearbeiten der Themenfelder mit Osziloskop & Multimeter

> Am Ende die Ausgabe von einem [Pi Pico](https://www.raspberrypi.com/documentation/microcontrollers/pico-series.html#pico-1-technical-specification) mit einem I²C Bauteil

#### **Nachbereitung**  
- **Dokumentation**  
   - Vergleiche gemessene Spannungswerte mit den Berechnungen.  
   - Analysiere, wie sich Widerstandsänderungen auf die Kondensator-Entladekurve auswirken.  
   - PDF o.ä. mit Berechnungen, Messdaten & Fehleranalyse.  


---
<div style="display: flex; align-items: center; margin-top: 30px;">
    <p></p>
</div>


## 📅 **Termin 2: I²C Protokoll & DatenPakete**

**Themen:**
1. **I²C Protocoll**
    - Studiere Adressierung, Clock Speed sowie Reed and Right Zyklen.
    - *Material & Referenz:* [I²C-Wikibooks](https://de.wikibooks.org/wiki/C-Programmierung_mit_AVR-GCC/_I2C), [Elektronik-Kompendium](https://www.elektronik-kompendium.de/sites/raspberry-pi/2612271.htm)

2. **Programmieren des Mikrocontrollers**
    - Das Programmieren des Mikrocontrollers : Raspberry Pi Pico zur Handhabung des I²C Protokolls.
    - *Material & Referenz:* [MicroPython-PWM-Tutorials](https://docs.micropython.org/en/latest/rp2/quickref.html#pwm), [I²C Micropython](https://www.elektronik-kompendium.de/sites/raspberry-pi/2612271.htm), [code_tutorial](https://www.youtube.com/watch?v=092xFEmAS98)

#### **Vorbereitung**
- Selbstständiges Aneignen der theoretischen Grundlagen zu MicroPython 
- I²C funktionalität herstellen **bis zum 2.ten Termin**

#### **LaborTermin**
- Messtechnische Darstellung, Auslesung und Analyse der I²C Pakete **über das Oszilloskop**.
- Identifiziere mögliche Fehlerquellen und erstelle Messbilder, die von positiven bis negativen Werten reichen.

>  Am Ende die Ausgabe von einem Servo für Termin 3

#### **Nachbereitung**
- **Dokumentation**
  - Festhalten der Oszilloskop- und Multimetermessungen in einem Messprotokoll.
  - Analyse von Oszilloskop-Screenshots der SCL- und SDA-Signale.
  - Zeigen und Bewerten von **Good & Bad Cases**


---
<div style="display: flex; align-items: center; margin-top: 30px;">
    <p></p>
</div>


## 📅 **Termin 3: Servomotorsteuerung mit PWM (Abschluss)**
<div style="display: flex; align-items: center; margin-top: 20px;">
    <p></p>
</div>
<div style="display: flex; align-items: flex-start;">
    <div style="flex: 1;">
        <ol>
            <li><strong>Schaltungsdesign und Steuerung</strong>
                <ul>
                    <li>Ansteuerung eines <strong>Servomotors</strong> mithilfe von <strong>PWM</strong> auf dem Raspberry Pi Pico.</li>
                    <li>Steuerung<strong>mit Potentiometer</strong>, um ein einstellbares Eingangssignal zu erzeugen.</li>
                    <li><strong>Zusammenhang</strong> zwischen der Potentiometerstellung (Input) und der resultierenden Servomotorausrichtung (Output) herstellen.</li>
                </ul>
            </li>
        </ol>
        <h3><strong>Praktische Umsetzung</strong></h3>
        <ul>
            <li>Implementiere den PWM-Ausgang, um das Steuersignal für den Servomotor zu erzeugen.</li>
            <li>Setze den Steueralgorithmus in Verbindung mit dem Eingangssignal um, sodass der Servomotor entsprechend ausgerichtet wird.</li>
        </ul>
    </div>
    <div style="margin-left: 10px;">
        <img src="https://github.com/Nr44suessauer/nr44suessauer.github.io/blob/main/assets/img/gif/servo.gif?raw=true" alt="Servo GIF" style="max-width:350px; height:auto;">
    </div>
</div>

#### **Vorbereitung**
- Eigenständiges Erarbeiten des Schaltungsdesigns.
- Aneignung der Funktionen und Steuerungslogik eines [Servomotors](https://www.upesy.com/blogs/tutorials/esp32-servo-motor-sg90-on-micropython) (z. B. Winkelbereich, PWM-Spezifikationen).


#### **LaborTermin**
- Aufbau der geplanten Schaltung und Integration des Spannungsteilers zur Signalerzeugung. (mit Potentiometer)
- Erfassung der PWM-Signale und Überprüfung des Versuchsaufbaus.
- Mapping von Potentiometer auf Grad (Servo)

#### **Nachbereitung**
- **Dokumentation**
    - Detaillierte Darstellung des Schaltplans, eingesetzten Codes und gesammelten Messdaten.
    - Mathematische Analyse des Zusammenhangs zwischen Eingangssignal und Servomotorposition.

---

<div style="display: flex; align-items: center; margin-top: 30px;">
    <p></p>
</div>


## **Dokumentation**
Die Dokumentation soll in **maximal 10 DIN A4 Seiten** gehalten werden und umfasst insbesondere folgende Elemente:

• **Messprotokolle**, in denen alle relevanten Messdaten, Beobachtungen und Praxisergebnisse festgehalten werden.  
• **Detaillierte Beschreibungen** der Versuchsaufbauten, einschließlich der verwendeten Materialien, Schaltungen und angewandten Methoden.  
• **Erkenntnisse und Analysen**, welche die Zusammenhänge zwischen den theoretischen Grundlagen und den praktischen Ergebnissen verdeutlichen.

**Der Abgabezeitpunkt** | bis 01.07.2025 | [Hochzuladen hier im Ilias Kurs](https://ilias.hs-heilbronn.de/ilias.php?baseClass=ilrepositorygui&cmdNode=yc:ni&cmdClass=ilObjFolderGUI&ref_id=918744)
