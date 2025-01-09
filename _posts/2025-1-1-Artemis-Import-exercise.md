---
layout: post
title: Atemis | import exercise 
date: 2025-01-09 10:00:00
description: exercise structure | Example Project with instruction 
tags: tutorial artemis 
categories: instruction
disqus_comments: true
featured: true
---

## Inhaltsverzeichnis
1. [Projekt herunterladen](#projekt-herunterladen)
2. [Architektur](#architektur)
3. [Config by File](#config-by-file)
4. [Hier eine vollständige configfile](#hier-eine-vollständige-configfile)
5. [Import in Artemis](#import-in-artemis)

Für weitere Informationen lesen Sie die [Artemis-Dokumentation](https://docs.artemis.cit.tum.de/index.html).

## Projekt herunterladen

Ein Example Projekt (Hello World Java) können Sie [hier](https://drive.google.com/drive/folders/1Hj0aG_3q_sFK32tAP1A9gVNzhCcBAZbD?usp=sharing) herunterladen. Dieses Projekt dient als Muster.

**Architektur:**
```markdown
Project_zip.zip
├── exercise-details-project_name.json  | Config-Datei 
├── problem-statement-project_name.md   | Aufgabenstellung für Studierende
└── Project_name.zip                
    ├── project_name-exercise.zip       | Projekt zu Händen Studierende
    ├── project_name-solution.zip       | Gesamtes Projekt 
    └── project_name-test.zip           | Nur Tests
```

**Tipp:** Solution Repository kopieren und Dateien, die nicht nötig sind, entfernen.

Projekte müssen den Aufbau dieser 3 Repos aufweisen, zudem muss die Config-Datei in folgendem Umfang angepasst werden:

#### Config by File

Es geht um folgende Datei: **Exercise-Details-<EXERCISE-NAME>.json**

##### Folgende Felder sollten unbedingt geändert werden:
```yml
"id": 25,
"title": "HelloWorld",
"shortName": "helloworld",
"problemStatement": "# Example Hello World",
"packageName": "prog.example",
"projectKey": "KPROGEXAMPLE"
```

##### Diese Felder müssen nur verändert werden, wenn der Kurs (id, title, etc.) nicht stimmt:
### Code anzeigen
```yml
"course": {
    "id": 8,
    "title": "Komplexe Programme 262004",
    "shortName": "KPROG",
    "studentGroupName": "artemis-KPROG-students",
    "teachingAssistantGroupName": "artemis-KPROG-tutors",
    "editorGroupName": "artemis-KPROG-editors",
    "instructorGroupName": "artemis-KPROG-instructors",
    ...
}
```

##### Wenn eine andere Build config z.B. für eine andere Sprache benötigt wird, müssen folgende Felder zusätzlich angepasst werden:
### Build config anzeigen
```yml
"buildConfig": {
    "id": 22,
    "sequentialTestRuns": true,
    "branch": "main",
    ...
}
```

##### Hier eine vollständige gültige Datei
### Vollständige Datei anzeigen
```json
{
  "type": "programming",
  "id": 25,
  "title": "HelloWorld",
  ...
}
```

# Import in Artemis
**Bedingung/Format der Upload Datei:**
 [X] Adminrechte
- über Kursverwaltung auf "Aufgaben" zugreifen.

<img src="https://github.com/Nr44suessauer/nr44suessauer.github.io/blob/main/assets/img/Artemis_pics/Kursverwaltung.png?raw=true" width="70%"/>
    
- Importieren über "Programmieraufgabe importieren".

<img src="https://github.com/Nr44suessauer/nr44suessauer.github.io/blob/main/assets/img/Artemis_pics/%C3%9CbersichtAufgaben.png?raw=true" width="70%"/>
    
- hochladen vom Computer

<img src="https://github.com/Nr44suessauer/nr44suessauer.github.io/blob/main/assets/img/Artemis_pics/UploadAufgabe.png?raw=true" width="70%"/>
    
- Überprüfen/test.Json
- generieren der test.Json, damit die Aufgaben getestet werden können. 
  
<img src="https://github.com/Nr44suessauer/nr44suessauer.github.io/blob/main/assets/img/Artemis_pics/jasongenerieren.png?raw=true" width="70%"/>

---

## Test

![testpic1](assets/img/Artemis_pics/testpic1.png)
![testpic2](assets/img/Artemis_pics/testpic2.png)
![testpic3](assets/img/Artemis_pics/testpic3.png)