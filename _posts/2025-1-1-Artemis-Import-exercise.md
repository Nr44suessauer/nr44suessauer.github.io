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
![Generierte Aufgabe](assets\img\Artemis_pics\generierteAufgabe.png)
  
- Dann diese mit Adminrechten herunterladen.
![Aufgabedownload](aufgabedownload.png )
  
**Schritt 2 :** kopieren der Ordner/Dateienstruktur
- Diese Dateien werden zum erstellen/importieren einer Aufgabe in Artemis gebraucht.
-> DateTimeApi.Json beinhaltet Parameter über die Aufgabe:
  
![Inhalt](packetstruktur.png )
  
  
- In der Markdownfile sind die zu testenden Aufgaben aufgelistet.
![Markdown](übersichtaufgabenbeschreibung.png )
  
**Schritt 3:** .Jsonfile &.md in zu importierendes Projekt kopieren
![ProjektstructurT1](DatenstrukturT1.png )
  
- Projekt sollte nach dem Vorbild der 3 Repositories aufgebaut sein. & **.zip!**
![ProjektstructurT2](DatenstrukturT2.png )
  
  
**Schritt 4:** Import
- über Kursverwaltung auf "Aufgaben" zugreifen.
![Kursverwaltung](Kursverwaltung.png )
  
- Importieren über "Programmierufgabe importieren".
![Aufgabenübersicht](ÜbersichtAufgaben.png )
  
- hochladen vom Computer
![Aufgabenimport](UploadAufgabe.png )
  
**Schritt 5:** Überprüfen/test.Json
- generieren der test.Json damit die Aufgaben getestet werden können.
  
![Aufgabenimport](jasongenerieren.png )
  