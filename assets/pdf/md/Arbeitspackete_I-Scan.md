# Arbeitspaketbeschreibung


#### Aktuelle Dokumentation & Stand:
https://deadlinedriven.dev/projects/I-Scan/


## Arbeitspaket 1: Django Server
**Zielsetzung:**  
Entwicklung einer stabilen Serverlösung zur Bereitstellung einer REST API und einer benutzerfreundlichen Single-Page Application.

**Aufwand:**  
40 Stunden (entspricht ca. 1,33 ECTS)

**Inhalte und Maßnahmen:**  
- Implementierung einer REST API basierend auf Erweiterungen aus dem Django-Tutorial  
    (Detail zur Systemarchitektur: [System Architecture](https://deadlinedriven.dev/blog/2025/SystemArchitecture/))
- Testen der API mit Postman; Erfolgsnachweis über Lognachrichten
- Bereitstellung einer einfachen SPA (SinglePageApplication) für weniger erfahrene Nutzer

**Erwartetes Ergebnis:**  
Ein funktionsfähiger Server mit API und SPA, die die Systemanforderungen erfüllt.

---

## Arbeitspaket 2: Design
**Zielsetzung:**  
Erarbeitung eines funktionalen Designs für "PositionUnit 2.0".

**Aufwand:**  
30 Stunden (entspricht 1 ECTS)

**Inhalte und Maßnahmen:** 
- Entwurf und Herstellung folgender Komponenten:
  - Hold Plate
  - Zahnräder für den Motor
  - Reversepart Gear (Zahnstange an einem Aluminiumprofil)
  - Kamera-Basis montiert auf dem Hold Plate
- Zusammenstellung der einzelnen Profile zu einem strukturellen Gesamtkonzept

**Erwartetes Ergebnis:**  
Ein klares, visuell ansprechendes und technisch durchdachtes Designkonzept + Herstellung.

>note: Das ist ein Iterativer Prozess
---

## Arbeitspaket 3: Codebase der Module
**Zielsetzung:**  
Aufbau einer modularen und erweiterbaren Codebasis für spezifische Systemkomponenten.

**Aufwand:**  
40 Stunden (entspricht ca. 1,33 ECTS)

**Inhalte und Maßnahmen:**  
- Strukturierung der Codebasis für Module wie I²C, MotorControl und Serial
- (TODO) Einrichtung eines statischen HTML-Servers auf einem ESP32 inklusive Anbindung in das Maschinen Wlan (im Labor)

**Erwartetes Ergebnis:**  
Ein sauber strukturierter Code, der eine einfache Erweiterung und Wartung ermöglicht.  
> note: Codebase kann in SV2, RTS & diversen hardwarenahen Kursen eingesetzt werden. [Git Repo](https://github.com/Nr44suessauer/I-Scan/tree/main/implementation/PositionUnit/main)

---

## Arbeitspaket 4: Dokumentation
**Zielsetzung:**  
Erstellung einer übersichtlichen Dokumentation, die die Ergebnisse der Arbeitspakete kommuniziert.

**Aufwand:**  
40 Stunden (entspricht ca. 1,33 ECTS)

**Inhalte und Maßnahmen:**  
- Überarbeitung vorhandener Dokumentationsteile (siehe: [Dokumentation I-Scan](https://deadlinedriven.dev/projects/I-Scan/)) im gewünschten Stil : [Develop_Pc](https://deadlinedriven.dev/projects/Develop_Pc/)
- Detaillierte Dokumentation der Arbeitspakete 1 bis 3 inklusive weiterer Ergänzungen
- "Benutzerhanduch" erstellen (Step-by-Step Guide)

**Erwartetes Ergebnis:**  
Eine vollständige und verständliche Dokumentation, die alle relevanten Systemaspekte adressiert.
