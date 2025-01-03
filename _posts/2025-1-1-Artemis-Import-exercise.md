---
layout: post
title: Atemis | import exercise
date: 2025-01-01 10:00:00
description: for creating exercises | this instructions are for Tutors etc.
tags: tutorial artemis 
categories: instruction
featured: false
---

## Anleitung zum Importieren einer Aufgabe in Artemis
  
**Bedingung/Format der Upload Datei:**
 [X] Adminrechte

**Schritt 1:** Json&md Dateien aus bestehender Übung entnehmen.
- Dafür über die **Kursverwaltung** auf auf einen Kurs zugreifen.
Darin eine generierte Aufgabe auswählen.
![Generierte Aufgabe](https://github.com/Nr44suessauer/nr44suessauer.github.io/blob/main/assets/img/Artemis_pics/generierteAufgabe.png?raw=true)
  
- Dann diese mit Adminrechten herunterladen.
![Aufgabedownload](https://github.com/Nr44suessauer/nr44suessauer.github.io/blob/main/assets/img/Artemis_pics/aufgabedownload.png?raw=true)
  
**Schritt 2 :** kopieren der Ordner/Dateienstruktur
- Diese Dateien werden zum erstellen/importieren einer Aufgabe in Artemis gebraucht.
-> DateTimeApi.Json beinhaltet Parameter über die Aufgabe:
  
![Inhalt](https://github.com/Nr44suessauer/nr44suessauer.github.io/blob/main/assets/img/Artemis_pics/packetstruktur.png?raw=true)
  
  
- In der Markdownfile sind die zu testenden Aufgaben aufgelistet.
![Markdown](https://github.com/Nr44suessauer/nr44suessauer.github.io/blob/main/assets/img/Artemis_pics/%C3%BCbersichtaufgabenbeschreibung.png?raw=true)
  
**Schritt 3:** .Jsonfile &.md in zu importierendes Projekt kopieren
![ProjektstructurT1](https://github.com/Nr44suessauer/nr44suessauer.github.io/blob/main/assets/img/Artemis_pics/DatenstrukturT1.png?raw=true)
  
- Projekt sollte nach dem Vorbild der 3 Repositories aufgebaut sein. & **.zip!**
![ProjektstructurT2](https://github.com/Nr44suessauer/nr44suessauer.github.io/blob/main/assets/img/Artemis_pics/DatenstrukturT2.png?raw=true)
  
  
**Schritt 4:** Import
- über Kursverwaltung auf "Aufgaben" zugreifen.
![Kursverwaltung](https://github.com/Nr44suessauer/nr44suessauer.github.io/blob/main/assets/img/Artemis_pics/Kursverwaltung.png?raw=true)
  
- Importieren über "Programmierufgabe importieren".
![Aufgabenübersicht](https://github.com/Nr44suessauer/nr44suessauer.github.io/blob/main/assets/img/Artemis_pics/%C3%9CbersichtAufgaben.png?raw=true)
  
- hochladen vom Computer
![Aufgabenimport](https://github.com/Nr44suessauer/nr44suessauer.github.io/blob/main/assets/img/Artemis_pics/UploadAufgabe.png?raw=true)
  
**Schritt 5:** Überprüfen/test.Json
- generieren der test.Json damit die Aufgaben getestet werden können.
  
![Aufgabenimport](https://github.com/Nr44suessauer/nr44suessauer.github.io/blob/main/assets/img/Artemis_pics/jasongenerieren.png?raw=true)
  