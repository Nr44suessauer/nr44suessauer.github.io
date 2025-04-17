---
cover: https://github.com/Nr44suessauer/nr44suessauer.github.io/blob/main/nuxt-app/assets/pictures/schaltungen/oszi.jpg?raw=true
author:
  name: Marc Nauendorf
  avatarUrl: https://pbs.twimg.com/profile_images/1042510623962275840/1Iw_Mvud_400x400.jpg
date: 2022-08-23T00:00:00.000Z
layout: page
---

# Messparkour SV2

**Verantwortlicher: Marc Nauendorf** | **Bewertung: 50 Punkte (Praxisteil) + 50 Punkte (Theorie) bei Herr Klemm**  

> **Beide Teile müssen bestanden** werden um SV2 zu bestehen.

### **Vorwort**

<div style="display: flex; align-items: center; gap: 20px;">
<div>

In diesem **Praxisteil von Signalverarbeitung 2** erwartet euch ein spannender Messparkour, der in **drei primären Präsenzterminen** organisiert ist.

In diesen Terminen könnt ihr eigenständig eure Arbeiten durchführen, wie in den **nachfolgenden Abschnitten beschrieben.**

Die Labortermine sind in **erster Linie** dazu gedacht, offene Fragen zu klären, euch während des praktischen Vorgehens zu **unterstützen** und den Übergang von der theoretischen Vorbereitung zur praktischen Anwendung zu erleichtern.

Ich freue mich auf eure engagierte Mitarbeit und wünsche euch viel Erfolg bei der Durchführung des Messparkours.

</div>
<div>

![Oszi GIF](https://github.com/Nr44suessauer/nr44suessauer.github.io/blob/main/nuxt-app/assets/pictures/gif/oszi.gif?raw=true)

</div>
</div>


> Bemerkung: Die jenigen die mit ihrem Microcontroller schon anfangen möchte, kann das gerne tun. Man kann die Arbeiten auch mit AtmelChips o.ä. bearbeiten. Wichtig: **Das Arduino Framework ist das einzige was ihr nicht nutzen dürft, sonst ist alles erlaubt.**

**PS:** Zugang für Labor bei [Herr Ballein](https://www.hs-heilbronn.de/de/martin.ballein)

---

**Termine:** \
[Splan](https://splan.hs-heilbronn.de/) | Die Tage die angegeben sind, sind bei euch (SEB3) ohne Kurse.

| Datum               | Uhrzeit           | Thema                                                                     |
|---------------------|-------------------|---------------------------------------------------------------------------|
| 16.04.25            | 09:45 - 13:00 Uhr | Spannungsteiler & Low/High pass filter                                    |
| 30.04.25            | 09:45 - 13:00 Uhr | I²C                                                                       |
| 21.05.25            | 09:45 - 13:00 Uhr | PWM & Servo                                                               |
| **Abgabezeitpunkt** | bis 01.07.2025 | [Hochzuladen im Ilias Kurs](https://ilias.hs-heilbronn.de/ilias.php?baseClass=ilrepositorygui&cmdNode=yc:ni&cmdClass=ilObjFolderGUI&ref_id=918744) |

---

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

> Am Ende die Ausgabe eines [Pi Pico´s](https://www.raspberrypi.com/documentation/microcontrollers/pico-series.html#pico-1-technical-specification) mit einem I²C Bauteil

#### **Nachbereitung**  
- **Dokumentation**  
   - Vergleiche gemessene Spannungswerte mit den Berechnungen.  
   - Analysiere, wie sich Widerstandsänderungen auf die Kondensator-Entladekurve auswirken.  
   - PDF o.ä. mit Berechnungen, Messdaten & Fehleranalyse.  

---

## 📅 **Termin 2: I²C Protokoll & DatenPakete**

**Themen:**
1. **I²C Protocoll**
  -  Adressierung, Clock Speed sowie Read and Write Funktionalitäten.
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

>  Am Ende die Ausgabe von einem Servo-Motor für Termin 3

#### **Nachbereitung**
- **Dokumentation**
  - Festhalten der Oszilloskop- und Multimetermessungen in einem Messprotokoll.
  - Analyse von Oszilloskop-Screenshots der SCL- und SDA-Signale.
  - Zeigen und Bewerten von **Good & Bad Cases**

---

## 📅 **Termin 3: Servomotorsteuerung mit PWM (Abschluss)**

<div style="display: flex; align-items: center; gap: 20px;">
<div>

1. **Schaltungsdesign und Steuerung**
  - Ansteuerung eines **Servomotors** mithilfe von **PWM** auf dem Raspberry Pi Pico.
  - Steuerung **mit Potentiometer**, um ein einstellbares Eingangssignal zu erzeugen.
  - **Zusammenhang** zwischen der Potentiometerstellung (Input) und der resultierenden Servomotorausrichtung (Output) herstellen.

</div>
<div>

![Servo GIF](https://github.com/Nr44suessauer/nr44suessauer.github.io/blob/main/nuxt-app/assets/pictures/gif/servo.gif?raw=true)

</div>
</div>

### **Praktische Umsetzung**
- Implementiere den PWM-Ausgang, um das Steuersignal für den Servomotor zu erzeugen.
- Setze den Steueralgorithmus in Verbindung mit dem Eingangssignal um, sodass der Servomotor entsprechend ausgerichtet wird.

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

## **Dokumentation**
Die Dokumentation soll in **maximal 10 DIN A4 Seiten** gehalten werden und umfasst insbesondere folgende Elemente:

• **Messprotokolle**, in denen alle relevanten Messdaten, Beobachtungen und Praxisergebnisse festgehalten werden.  
• **Detaillierte Beschreibungen** der Versuchsaufbauten, einschließlich der verwendeten Materialien, Schaltungen und angewandten Methoden.  
• **Erkenntnisse und Analysen**, welche die Zusammenhänge zwischen den theoretischen Grundlagen und den praktischen Ergebnissen verdeutlichen.

**Der Abgabezeitpunkt** | bis 01.07.2025 | [Hochzuladen hier im Ilias Kurs](https://ilias.hs-heilbronn.de/ilias.php?baseClass=ilrepositorygui&cmdNode=yc:ni&cmdClass=ilObjFolderGUI&ref_id=918744)