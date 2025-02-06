---
layout: post
title: Atemis | import exercise
date: 2030-01-01 10:00:00
description: for creating exercises | this instructions are for Tutors etc.
tags: tutorial artemis
categories: instruction
disqus_comments: true
featured: false
---

Für weitere Informationen lesen Sie die [Artemis-Dokumentation](https://docs.artemis.cit.tum.de/index.html).

## Importieren einer Aufgabe in Artemis

**Bedingung/Format der Upload Datei:**
[X] Adminrechte

**Schritt 1:** Json&md Dateien aus bestehender Übung entnehmen.

- Dafür über die **Kursverwaltung** auf auf einen Kurs zugreifen.
  Darin eine generierte Aufgabe auswählen.

<img src="https://github.com/Nr44suessauer/nr44suessauer.github.io/blob/main/assets/img/Artemis_pics/generierteAufgabe.png?raw=true" width="70%"/>
    
- Dann diese mit Adminrechten herunterladen.

<img src="https://github.com/Nr44suessauer/nr44suessauer.github.io/blob/main/assets/img/Artemis_pics/aufgabedownload.png?raw=true" width="70%"/>
    
**Schritt 2 :** kopieren der Ordner/Dateienstruktur
- Diese Dateien werden zum erstellen/importieren einer Aufgabe in Artemis gebraucht.
-> DateTimeApi.Json beinhaltet Parameter über die Aufgabe:
  
<img src="https://github.com/Nr44suessauer/nr44suessauer.github.io/blob/main/assets/img/Artemis_pics/packetstruktur.png?raw=true" width="70%"/>
    
    
- In der Markdownfile sind die zu testenden Aufgaben aufgelistet.

<img src="https://github.com/Nr44suessauer/nr44suessauer.github.io/blob/main/assets/img/Artemis_pics/%C3%BCbersichtaufgabenbeschreibung.png?raw=true" width="70%"/>
    
**Schritt 3:** .Jsonfile &.md in zu importierendes Projekt kopieren

<img src="https://github.com/Nr44suessauer/nr44suessauer.github.io/blob/main/assets/img/Artemis_pics/DatenstrukturT1.png?raw=true" width="70%"/>
    
- Projekt sollte nach dem Vorbild der 3 Repositories aufgebaut sein. & **.zip!**

<img src="https://github.com/Nr44suessauer/nr44suessauer.github.io/blob/main/assets/img/Artemis_pics/DatenstrukturT2.png?raw=true" width="70%"/>
    
    
**Schritt 4:** Import
- über Kursverwaltung auf "Aufgaben" zugreifen.

<img src="https://github.com/Nr44suessauer/nr44suessauer.github.io/blob/main/assets/img/Artemis_pics/Kursverwaltung.png?raw=true" width="70%"/>
    
- Importieren über "Programmierufgabe importieren".

<img src="https://github.com/Nr44suessauer/nr44suessauer.github.io/blob/main/assets/img/Artemis_pics/%C3%9CbersichtAufgaben.png?raw=true" width="70%"/>
    
- hochladen vom Computer

<img src="https://github.com/Nr44suessauer/nr44suessauer.github.io/blob/main/assets/img/Artemis_pics/UploadAufgabe.png?raw=true" width="70%"/>
    
**Schritt 5:** Überprüfen/test.Json
- generieren der test.Json damit die Aufgaben getestet werden können.
  
<img src="https://github.com/Nr44suessauer/nr44suessauer.github.io/blob/main/assets/img/Artemis_pics/jasongenerieren.png?raw=true" width="70%"/>
