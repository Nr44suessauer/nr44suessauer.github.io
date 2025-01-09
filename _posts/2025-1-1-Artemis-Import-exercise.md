---
layout: post
title: Atemis | import exercise 
date: 2025-01-09 10:00:00
description: exercise structure | Example Project Java
tags: tutorial artemis java
categories: instruction
disqus_comments: true
featured: false
---

## Inhaltsverzeichnis
1. [Projekt herunterladen](#projekt-herunterladen)
2. [Architechture](#architechture)
3. [Config by File](#config-by-file)
4. [Hier eine vollständige gültige Exercise-Details-HelloWorld.json](#hier-eine-vollständige-gültige-exercise-details-helloworldjson)
5. [Import in Artemis](#import-in-artemis)
6. [Test der Aufgabe](#test-der-aufgabe)

Für weitere Informationen lesen Sie die [Artemis-Dokumentation](https://docs.artemis.cit.tum.de/index.html).

## Projekt herunterladen

Ein Example Projekt (Hello World Java) können Sie [hier](https://github.com/Nr44suessauer/Artemis_Example/tree/zipped) herunterladen. Dieses Projekt dient als Muster.

**Architechture:**
```markdown
Project_zip.zip
├── exercise-details-project_name.json  | Config-Datei 
├── problem-statement-project_name.md   | Aufgabenstellung für Studierende
└── Project_name.zip                
    ├── project_name-exercise.zip       | Projekt für Studierende
    ├── project_name-solution.zip       | Gesamtes Projekt 
    └── project_name-test.zip           | Tests
```

**Tipp:** Solution Reposetorie kopieren und Dateien die nicht nötig sind entfernen.

Projekte müssen den Aufbau dieser 3 Repos aufweisen, zudem muss die configdatei in folgendem umfang angepasst werden:

#### Config by File

Es geht um folgende Datei: Exercise-Details-<EXERCISE-NAME>.json

<div style="display: flex; align-items: center; margin-top: 20px;">
    <p></p>
</div>

##### Folgende Felder sollten unbedingt geändert werden:
```yml
"id": 25,
"title": "HelloWorld",
"shortName": "helloworld",
"problemStatement": "# Example Hello World",
"packageName": "prog.example",
"projectKey": "KPROGEXAMPLE"
```

<div style="display: flex; align-items: center; margin-top: 20px;">
    <p></p>
</div>

##### Diese Felder müssen nur verändert werden, wenn der Kurs (id, title, etc.) nicht stimmt:

```yml
"course": {
    "id": 8,
    "title": "Komplexe Programme 262004",
    "shortName": "KPROG",
    "studentGroupName": "artemis-KPROG-students",
    "teachingAssistantGroupName": "artemis-KPROG-tutors",
    "editorGroupName": "artemis-KPROG-editors",
    "instructorGroupName": "artemis-KPROG-instructors",
    "startDate": "",
    "endDate": "",
    "enrollmentStartDate": "",
    "enrollmentEndDate": "",
    "testCourse": false,
    "defaultProgrammingLanguage": "JAVA",
    "onlineCourse": false,
    "courseInformationSharingConfiguration": "COMMUNICATION_AND_MESSAGING",
    "courseInformationSharingMessagingCodeOfConduct": "<!-- Code of Conduct Template: Adapt to your demands -->\n<!-- Important: This template will directly be shown on the iOS and Android client if a course has no explicit code of conduct set. -->\n\nWe as students, tutors, and instructors pledge to make participation in our course a harassment-free experience for everyone, regardless of age, body size, visible or invisible disability, ethnicity, sex characteristics, gender identity and expression, level of experience, education, socio-economic status, nationality, personal appearance, race, religion, or sexual identity and orientation.\n\nWe pledge to act and interact in ways that contribute to an open, welcoming, diverse, inclusive, and healthy community.\n\n## Our Standards\n\n### Examples of behavior that contributes to a positive environment for our community include:\n\n- Demonstrating empathy and kindness toward other people\n- Being respectful of differing opinions, viewpoints, and experiences\n- Giving and gracefully accepting constructive feedback\n- Accepting responsibility and apologizing to those affected by our mistakes, and learning from the experience\n- Focusing on what is best not just for us as individuals, but for the overall community\n\n### Examples of unacceptable behavior include:\n\n- The use of sexualized language or imagery, and sexual attention or advances of any kind\n- Trolling, insulting or derogatory comments, and personal or political attacks\n- Public or private harassment\n- Publishing others' private information, such as a physical or email address, without their explicit permission\n- Other conduct which could reasonably be considered inappropriate in a professional setting\n\n## Scope\n\nThis Code of Conduct applies within all messages channels.\n\n## Reporting\n\nEach course is represented by instructors. If you see inappropriate behavior or content, please report it.\nYou may find a list of contacts responsible for this course below.\n\n<!-- The responsible users are automatically compiled from the course's instructors -->\n",
    "maxComplaints": 3,
    "maxTeamComplaints": 3,
    "maxComplaintTimeDays": 7,
    "maxRequestMoreFeedbackTimeDays": 7,
    "maxComplaintTextLimit": 2000,
    "maxComplaintResponseTextLimit": 2000,
    "enrollmentEnabled": true,
    "unenrollmentEnabled": false,
    "maxPoints": 236,
    "accuracyOfScores": 1,
    "restrictedAthenaModulesAccess": false,
    "learningPathsEnabled": false,
    "studentCourseAnalyticsDashboardEnabled": false,
    "complaintsEnabled": true,
    "requestMoreFeedbackEnabled": true
  }
```

<div style="display: flex; align-items: center; margin-top: 20px;">
    <p></p>
</div>

Wenn eine andere Build config z.B. für eine andere Sprache benötigt wird, müssen folgende Felder zusätzlich angepasst werden:

### Build config :
```yml
  "buildConfig": {
    "id": 22,
    "sequentialTestRuns": true,
    "branch": "main",
    "buildPlanConfiguration": "{\"api\":\"v0.0.1\",\"metadata\":{\"docker\":{\"image\":\"ls1tum/artemis-maven-template:java17-21\",\"parameters\":[\"--cpus\",\"\\\"2\\\"\",\"--memory\",\"\\\"2g\\\"\",\"--memory-swap\",\"\\\"2g\\\"\",\"--pids-limit\",\"\\\"1000\\\"\"]}},\"actions\":[{\"name\":\"structural_tests\",\"results\":[{\"name\":\"junit_**/test-results/structuralTests/*.xml\",\"path\":\"**/test-results/structuralTests/*.xml\",\"type\":\"junit\",\"before\":false}],\"runAlways\":false,\"script\":\"chmod +x ./gradlew\\n./gradlew clean structuralTests\"},{\"name\":\"behavior_tests\",\"results\":[{\"name\":\"junit_**/test-results/behaviorTests/*.xml\",\"path\":\"**/test-results/behaviorTests/*.xml\",\"type\":\"junit\",\"before\":false}],\"runAlways\":false,\"script\":\"./gradlew behaviorTests\"}],\"results\":[{\"name\":\"junit_**/test-results/structuralTests/*.xml\",\"path\":\"**/test-results/structuralTests/*.xml\",\"type\":\"junit\",\"before\":false},{\"name\":\"junit_**/test-results/behaviorTests/*.xml\",\"path\":\"**/test-results/behaviorTests/*.xml\",\"type\":\"junit\",\"before\":false}],\"scriptActions\":[{\"name\":\"structural_tests\",\"results\":[{\"name\":\"junit_**/test-results/structuralTests/*.xml\",\"path\":\"**/test-results/structuralTests/*.xml\",\"type\":\"junit\",\"before\":false}],\"runAlways\":false,\"script\":\"chmod +x ./gradlew\\n./gradlew clean structuralTests\"},{\"name\":\"behavior_tests\",\"results\":[{\"name\":\"junit_**/test-results/behaviorTests/*.xml\",\"path\":\"**/test-results/behaviorTests/*.xml\",\"type\":\"junit\",\"before\":false}],\"runAlways\":false,\"script\":\"./gradlew behaviorTests\"}]}",
    "buildScript": "#!/usr/bin/env bash\nset -e\nexport AEOLUS_INITIAL_DIRECTORY=${PWD}\nstructural_tests () {\n  echo '⚙️ executing structural_tests'\n  chmod +x ./gradlew\n  ./gradlew clean structuralTests\n}\n\nbehavior_tests () {\n  echo '⚙️ executing behavior_tests'\n  ./gradlew behaviorTests\n}\n\nmain () {\n  if [[ \"${1}\" == \"aeolus_sourcing\" ]]; then\n    return 0 # just source to use the methods in the subshell, no execution\n  fi\n  local _script_name\n  _script_name=${BASH_SOURCE[0]:-$0}\n  cd \"${AEOLUS_INITIAL_DIRECTORY}\"\n  bash -c \"source ${_script_name} aeolus_sourcing; structural_tests\"\n  cd \"${AEOLUS_INITIAL_DIRECTORY}\"\n  bash -c \"source ${_script_name} aeolus_sourcing; behavior_tests\"\n}\n\nmain \"${@}\"\n",
    "checkoutSolutionRepository": false,
    "timeoutSeconds": 0,
    "testwiseCoverageEnabled": false,
    "allowBranching": false,
    "windfile": {
      "api": "v0.0.1",
      "metadata": {
        "docker": {
          "image": "ls1tum/artemis-maven-template:java17-21",
          "parameters": [
            "--cpus",
            "\"2\"",
            "--memory",
            "\"2g\"",
            "--memory-swap",
            "\"2g\"",
            "--pids-limit",
            "\"1000\""
          ]
        }
      },
      "actions": [
        {
          "name": "structural_tests",
          "results": [
            {
              "name": "junit_**/test-results/structuralTests/*.xml",
              "path": "**/test-results/structuralTests/*.xml",
              "type": "junit",
              "before": false
            }
          ],
          "runAlways": false,
          "script": "chmod +x ./gradlew\n./gradlew clean structuralTests"
        },
        {
          "name": "behavior_tests",
          "results": [
            {
              "name": "junit_**/test-results/behaviorTests/*.xml",
              "path": "**/test-results/behaviorTests/*.xml",
              "type": "junit",
              "before": false
            }
          ],
          "runAlways": false,
          "script": "./gradlew behaviorTests"
        }
      ],
      "results": [
        {
          "name": "junit_**/test-results/structuralTests/*.xml",
          "path": "**/test-results/structuralTests/*.xml",
          "type": "junit",
          "before": false
        },
        {
          "name": "junit_**/test-results/behaviorTests/*.xml",
          "path": "**/test-results/behaviorTests/*.xml",
          "type": "junit",
          "before": false
        }
      ],
      "scriptActions": [
        {
          "name": "structural_tests",
          "results": [
            {
              "name": "junit_**/test-results/structuralTests/*.xml",
              "path": "**/test-results/structuralTests/*.xml",
              "type": "junit",
              "before": false
            }
          ],
          "runAlways": false,
          "script": "chmod +x ./gradlew\n./gradlew clean structuralTests"
        },
        {
          "name": "behavior_tests",
          "results": [
            {
              "name": "junit_**/test-results/behaviorTests/*.xml",
              "path": "**/test-results/behaviorTests/*.xml",
              "type": "junit",
              "before": false
            }
          ],
          "runAlways": false,
          "script": "./gradlew behaviorTests"
        }
      ]
    }
  }
```

<div style="display: flex; align-items: center; margin-top: 20px;">
    <p></p>
</div>


Vollständige Exercise-Details-HelloWorld.json  [herunterladen](https://github.com/Nr44suessauer/Artemis_Example/blob/main/Material-KPROG-HelloWorld-32-20250109-16557/Exercise-Details-HelloWorld.json).

    
<div style="display: flex; align-items: center; margin-top: 20px;">
    <p></p>
</div>


---

# Import in Artemis

<div style="display: flex; align-items: center; margin-top: 20px;">
    <p></p>
</div>

**Bedingung/Format der Upload-Datei:**
 [X] Adminrechte

<div style="display: flex; align-items: center; margin-top: 20px;">
    <p></p>
</div>

<div style="display: flex; align-items: center; margin-top: 20px;">
    <img src="https://github.com/Nr44suessauer/nr44suessauer.github.io/blob/main/assets/img/Artemis_pics/Kursverwaltung.png?raw=true" width="50%" style="margin-right: 20px;"/>
    <p>Zugriff über Kursverwaltung auf "Aufgaben".</p>
</div>

<div style="display: flex; align-items: center; margin-top: 20px;">
    <p></p>
</div>

<div style="display: flex; align-items: center; margin-top: 20px;">
    <img src="https://github.com/Nr44suessauer/nr44suessauer.github.io/blob/main/assets/img/Artemis_pics/%C3%9CbersichtAufgaben.png?raw=true" width="50%" style="margin-right: 20px;"/>
    <p>Importieren über "Programmieraufgabe importieren".</p>
</div>

<div style="display: flex; align-items: center; margin-top: 20px;">
    <p></p>
</div>

<div style="display: flex; align-items: center; margin-top: 20px;">
    <img src="https://github.com/Nr44suessauer/nr44suessauer.github.io/blob/main/assets/img/Artemis_pics/UploadAufgabe.png?raw=true" width="50%" style="margin-right: 20px;"/>
    <p>Vom Computer hochladen</p>
</div>

<div style="display: flex; align-items: center; margin-top: 20px;">
    <p></p>
</div>

<div style="display: flex; align-items: center; margin-top: 20px;">
    <img src="https://github.com/Nr44suessauer/nr44suessauer.github.io/blob/main/assets/img/Artemis_pics/jasongenerieren.png?raw=true" width="50%" style="margin-right: 20px;"/>
    <p>Überprüfen/test.Json<br>Generieren der test.Json, damit die Aufgaben getestet werden können.</p>
</div>

<div style="display: flex; align-items: center; margin-top: 20px;">
    <p></p>
</div>

---
# Test der Aufgabe

<div style="display: flex; align-items: center; margin-top: 20px;">
    <p></p>
</div>


<div style="display: flex; align-items: center;">
    <img src="https://github.com/Nr44suessauer/nr44suessauer.github.io/blob/main/assets/img/Artemis_pics/testpic1.png?raw=true" width="50%" style="margin-right: 20px;"/>
    <p>Zum Testen wird selbst eine Lösung eingereicht. Dafür bearbeiten wir die hochgeladene Aufgabe im Online-Editor.</p>
</div>

<div style="display: flex; align-items: center; margin-top: 20px;">
    <p></p>
</div>

<div style="display: flex; align-items: center;">
    <img src="https://github.com/Nr44suessauer/nr44suessauer.github.io/blob/main/assets/img/Artemis_pics/testpic2.png?raw=true" width="50%" style="margin-right: 20px;"/>
    <p>Jetzt muss ein Assignment-Repository erstellt werden (die Einreichung). Das geschieht durch einen Klick auf das Feld.</p>
</div>


<div style="display: flex; align-items: center; margin-top: 20px;">
    <p></p>
</div>

<div style="display: flex; align-items: center;">
    <img src="https://github.com/Nr44suessauer/nr44suessauer.github.io/blob/main/assets/img/Artemis_pics/testpic3.png?raw=true" width="50%" style="margin-right: 20px;"/>
    <p>Nun kopieren wir die Musterlösung (SimpleHelloWorld) in das Assignment-Repository. Um die Lösung einzureichen, klicken Sie oben rechts auf "Absenden". Wenn "100% Graded" angezeigt wird, funktioniert der Prozess.</p>
</div>
