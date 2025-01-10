---
layout: post
title: Photogrammetrie
date: 2030-01-09 10:00:00
description: exercise structure | Example Project Java
tags: tutorial artemis java
categories: instruction
disqus_comments: true
featured: false
---

# Photogrammetrie: Technische Grundlagen, Softwarelösungen und Anwendungsbereiche

Photogrammetrie stellt eine fortschrittliche Methode dar, mit der aus zweidimensionalen Fotografien präzise dreidimensionale Modelle generiert werden können. In diesem Beitrag werden die Funktionsweise der Photogrammetrie, die erforderlichen Schritte sowie die geeignete Software detailliert erläutert.

## Definition und Anwendungsgebiete der Photogrammetrie

Die Photogrammetrie ist ein Verfahren zur Erfassung räumlicher Daten eines Objekts oder einer Szene mittels fotografischer Aufnahmen. Diese Methode findet breite Anwendung in verschiedenen Fachbereichen, darunter:

- Architektur
- Archäologie
- Gamedesign
- Qualitätskontrolle
- Medizin
- Forensik
- Kartografie

Dank ihrer Flexibilität ermöglicht die Photogrammetrie die Digitalisierung von Objekten und Umgebungen unabhängig von Größe oder Zugänglichkeit.

---

## Technische Grundlagen der Photogrammetrie
### 1. Bildaufnahme

Es werden Serien überlappender Bilder erstellt, die das Zielobjekt oder die Szene aus verschiedenen Perspektiven erfassen. Für optimale Ergebnisse sind hochauflösende Kameras mit präziser Positionsbestimmung unerlässlich.

![Beispiel für die Bildaufnahme](https://formlabs.com/_next/image/?url=https%3A%2F%2Fformlabs-media.formlabs.com%2Ffiler_public_thumbnails%2Ffiler_public%2F6d%2F43%2F6d430a93-30a4-4091-bb20-a24a09e07954%2Fphotogrammetry.jpg__1354x0_q85_subsampling-2.jpg&w=3840&q=75)

Die Bilder werden anhand ihrer räumlichen Position und übereinstimmender Merkmale identifiziert und verknüpft. Mit Softwaretools wie Unity lassen sich aus diesen Daten präzise 3D-Modelle erstellen, die sich nahtlos in verschiedene Anwendungen integrieren lassen.

[Unity Photogrammetry Workflow PDF](https://github.com/Nr44suessauer/I-Scan/blob/main/docs/datasheet/Unity-Photogrammetry-Workflow_2017-07_v2.pdf)

### 2. Merkmalsextraktion und Positionsdaten

Die Merkmalsextraktion identifiziert charakteristische Elemente in den Bildern, die für die Rekonstruktion der 3D-Struktur essenziell sind. Die präzise Kamerapositionierung ergänzt diesen Prozess, indem sie zusätzliche räumliche Informationen liefert, die die Genauigkeit der Punktwolken verbessern.

### 3. Grundlagen |  Generierung von Punktwolken aus Bildern

Die Erstellung von Punktwolken der zentraler Schritt in der Photogrammetrie, um dreidimensionale Strukturen präzise zu rekonstruieren. 
Dieser Prozess beinhaltet die Analyse und Verarbeitung mehrerer überlappender Fotografien desselben Objekts oder derselben Szene und nutzt die bekannten Kamerapositionen zur Verbesserung der Rekonstruktionsgenauigkeit.

#### 3.1 Bildvorbereitung und -auswahl

Eine sorgfältige Auswahl und Vorbereitung der Bilddaten ist Voraussetzung für eine präzise Punktwolkenextraktion:

- **Bildqualität:** Hochauflösende, gut beleuchtete Bilder mit minimalem Rauschen.
- **Kamerakalibrierung:** Sicherstellung der genauen Orientierung der Kameras.
- **Überlappung sicherstellen:** Mindestens 60-80% Überlappung zwischen den Bildern.
    Das stellt sicher, dass genügend gemeinsame Merkmale zwischen den Bildern vorhanden sind. Dies senkt das Risiko von Lücken und Unstimmigkeiten im finalen Punktwolkenmodell.

#### 3.2 Merkmalserkennung und -abgleich

Kennzeichnung und Abgleich von Merkmalen in überlappenden Bildern mittels Algorithmen wie [SIFT](https://www.geeksforgeeks.org/what-is-the-difference-between-sift-and-surf/) oder [SURF](https://www.geeksforgeeks.org/what-is-the-difference-between-sift-and-surf/), um korrespondierende Punkte zu identifizieren.

#### 3.3 Triangulation und Bundle Adjustment zur 3D-Punktberechnung

Berechnung der räumlichen Position jedes Punkts durch Triangulation unter Verwendung der Kamerapositionen und korrespondierenden Bildpunkte, gefolgt von einer Optimierung mittels Bundle Adjustment. 

Das Ziel ist, die Übereinstimmung zwischen den Bildpunkten und den projizierten 3D-Punkten zu erhöhen. Dadurch wird die Genauigkeit der Rekonstruktion verbessert, indem Fehler in den Kamerapositionen und den 3D-Punkten verringert werden.

#### 3.5 Integration und Weiterverarbeitung

Integration der Punktwolke in Softwarelösungen zur Erstellung von Meshes, Texturierung und weiterführender Analyse.

#### [3.6 Tools und Software](https://all3dp.com/de/1/photogrammetrie-programm-3d-scan/)

Verfügbare Softwarelösungen zur Punktwolkenextraktion und 3D-Modellierung umfassen:

- **Agisoft Metashape**
- **RealityCapture**
- **Meshroom**
- **Pix4D**
- **Autodesk ReCap**

### 5. Texturierung

Anwendung von Texturen auf das Mesh zur Erzeugung eines realitätsnahen Erscheinungsbildes umfasst mehrere präzise Schritte. 

Zunächst werden Bilder ausgewählt, die die gewünschten Oberflächenmerkmale realistisch darstellen. Diese Texturbilder werden anschließend mithilfe von UV-Mapping-Techniken den entsprechenden Mesh-Flächen zugeordnet. 
Dabei werden UV-Koordinaten erstellt, die definieren, wie die zweidimensionalen Bilder auf die dreidimensionalen Strukturen projiziert werden. 
Nach der Zuordnung erfolgt die Anpassung der Texturen, um nahtlose Übergänge und eine konsistente Darstellung von Farben, Materialien und Lichtreflexionen zu erreichen. Abschließend werden die Texturen durch Filter und Nachbearbeitungen optimiert.

<details>
<summary>UV-Mapping-Techniken</summary>

<div style="display: flex; align-items: center; margin-top: 5px;">
    <p></p>
</div>

sind Methoden, mit denen 2D-Texturen auf die Oberfläche von 3D-Modellen projiziert werden. Sie ermöglichen es, detaillierte und realistische Oberflächenstrukturen auf 3D-Objekte anzuwenden. Hier sind einige **gängige UV-Mapping-Techniken:**

**Planares Mapping**
Die Textur wird entlang einer Ebene projiziert. Geeignet für flache oder quaderförmige Objekte.

**Zylindrisches Mapping**
Die Textur wird um ein zylindrisches Objekt gewickelt. Ideal für röhrenförmige Modelle wie Rohre oder Säulen.

**Sphärisches Mapping**
Die Textur wird auf eine kugelförmige Oberfläche projiziert. Perfekt für kugelförmige Objekte wie Planeten oder Bälle.

**Unfolding (UV-Entfaltung)**
Das 3D-Modell wird in eine 2D-Fläche "ausgewickelt", um eine präzise Platzierung der Textur zu ermöglichen. Dies bietet maximale Kontrolle und reduziert Verzerrungen.

**Triplanar Mapping**
Die Textur wird aus drei verschiedenen Ebenen (X, Y, Z) gleichzeitig projiziert und kombiniert. Dies eignet sich gut für komplexe oder unregelmäßige Formen.

</details>

---

## Fazit



Photogrammetrie ist ein leistungsfähiges Werkzeug zur Erstellung von 3D-Modellen, das in zahlreichen technischen und wissenschaftlichen Bereichen Anwendung findet. 
Die Vielseitigkeit der Photogrammetrie erlaubt es, komplexe Strukturen und Umgebungen detailgenau abzubilden, was sie insbesondere in Bereichen wie Architektur, Forensik und Medizin unverzichtbar macht. Darüber hinaus bieten moderne Softwarelösungen erweiterte Funktionalitäten wie automatisierte Merkmalsextraktion und Optimierungstechniken, die den gesamten Workflow effizienter gestalten. 
Die kontinuierliche Weiterentwicklung von Kameratechnologien und Algorithmen trägt zudem dazu bei, die Genauigkeit und Benutzerfreundlichkeit der Photogrammetrie stetig zu verbessern. 

Insgesamt ist Photogrammetrie eine vielseitige Methode, die durch präzise Daten, leistungsstarke Software und spezialisierte Hardware neue Möglichkeiten für Forschung, Industrie und kreative Anwendungen bietet.



---

## Weiterführende Links

- [Wikipedia: Photogrammetrie](https://de.wikipedia.org/wiki/Photogrammetrie)
- [Meshroom GitHub](https://github.com/alicevision/meshroom)
- [Uni Freiburg | Vorlesung 2008](https://lmb.informatik.uni-freiburg.de/people/haasdonk/DBV_FHO/DBV_FHO_SS08_E10.pdf)
- [Formlabs Blog](https://formlabs.com/de/blog/photogrammetrie-leitfaden-und-software-vergleich/)
- [pix4d Blog](https://www.pix4d.com/de/blog/zehn-grundbegriffe-der-photogrammetrie/)

