---
layout: page
title: I-Scan
description: ResearchProject | Lifesize 3D Scanner based on Mac Mini 2012 with Linux and random Cams | still working at
img: https://github.com/Nr44suessauer/nr44suessauer.github.io/blob/main/assets/img/titelpages/I-Scan_prototyp.jpg?raw=true
importance: 2
category: all
---

[GitHub Repository](https://github.com/Nr44suessauer/I-Scan)


<div style="display: flex; align-items: left; margin-top: 20px;">
    <div style="flex: 1; padding-right: 10px;">
        <img src="https://github.com/Nr44suessauer/nr44suessauer.github.io/blob/main/assets/img/I-Scan/I-Scan_prototyp_seitlich.jpg?raw=true" alt="I-Scan Prototype Side View" style="width: 270px;">
    </div>
    <div style="flex: 1; padding-left: 10px;">
        <img src="https://github.com/Nr44suessauer/nr44suessauer.github.io/blob/main/assets/img/I-Scan/AufbauUndTeile.jpg?raw=true" alt="Aufbau und Teile" style="width: 300px;">
    </div>
    <div style="flex: 1; padding-left: 10px; padding-right: 20px;">
        <img src="https://github.com/Nr44suessauer/I-Scan/blob/main/docs/pictures/first_TestStation.jpg?raw=true" alt="First Test Station" style="width: 260px;">
    </div>
</div>

<div style="display: flex; align-items: center; margin-top: 20px;">
    <p></p>
</div>

### Zielsetzung

Das Ziel dieser Arbeit ist die Entwicklung eines kostengünstigen und wartungsfreundlichen 3D-Scanners, der unabhängig von der verwendeten Hardware funktioniert und für verschiedene Anwendungsfälle geeignet ist. Dabei sollen verschiedene Verfahren unterstützt werden, darunter:

- **Stereo Vision**: Nutzung von zwei Kameras zur Berechnung von Tiefeninformationen.
- **Structured Light Scanning**: Projektion von Mustern auf das Objekt zur Erfassung der Geometrie.
- **Photogrammetrie**: Erstellung von 3D-Modellen aus 2D-Bildern. [Mehr dazu im Blogpost](https://deadlinedriven.dev/blog/2025/Photogrammetrie-I-SCAN/)
- **Triangulation**: Bestimmung von Punktpositionen durch Messung von Winkeln und Entfernungen.
- **Spektralanalyse**: Verwendung von spektralanalytischen Techniken zur Erfassung und Analyse von Lichtwellenlängen, um detaillierte Materialinformationen und präzise Oberflächenstrukturen des Objekts zu bestimmen. 

Ein Schwerpunkt ist die Replizierbarkeit mit gängigen, leicht verfügbaren Komponenten. Zudem wird eine flexible und modulare Softwarearchitektur entwickelt, die nicht nur die Integration verschiedener Kameras und Sensoren ermöglicht, sondern auch eine einfache Wartung und Erweiterbarkeit des Systems sicherstellt.

### Struktur
Die Arbeit ist in sieben Hauptkapitel unterteilt, die systematisch die Entwicklung des I_Scan Projekts darstellen. Nach der **Einführung** werden im **State of the Art** bestehende 3D-Scanner und relevante Konzepte analysiert. Das Kapitel **Konzept & Planung** beschreibt die System- und Softwarearchitektur sowie die Hardwarewahl. In der **Implementierung** werden der Hardwareaufbau und die Softwareentwicklung detailliert erläutert. Anschließend behandelt die **Benutzerfreundlichkeit** die Interaktion über die REST API und die Nutzung des Scanners. Abschließend fasst die **Zusammenfassung** die Ergebnisse zusammen und gibt einen Ausblick auf zukünftige Entwicklungen. Das **Quellenverzeichnis** rundet die Arbeit ab.



<div style="display: flex; align-items: center; margin-top: 100px;">
    <p></p>
</div>


<div style="display: flex; justify-content: center; margin-top: 20px;">
    <img src="https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExMDBnMGxjZjBxbTRzamd0Z2hyeDZmZm9zOXFwcm43d2J3eXBvb2tyNiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/NHUONhmbo448/giphy.webp" alt="I-Scan Gif" style="width: 400px;">
</div>