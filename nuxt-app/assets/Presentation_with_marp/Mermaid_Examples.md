---
marp: true
theme: default
paginate: true
backgroundColor: #fff
size: 16:9
---

<!-- Mermaid-Unterstützung aktivieren -->
<script type="module">
  import mermaid from 'https://cdn.jsdelivr.net/npm/mermaid@10/dist/mermaid.esm.min.mjs';
  mermaid.initialize({ 
    startOnLoad: true,
    theme: 'default',
    themeVariables: {
      primaryColor: '#4CAF50'
    }
  });
</script>

# Mermaid-Diagramme in Marp
### Verschiedene Diagrammtypen und Anwendungen

---

## Flussdiagramm (Flowchart)

```mermaid
flowchart TD
    A[Start] --> B{Ist es ein Problem?}
    B -->|Ja| C[Löse es]
    B -->|Nein| D[Sei glücklich]
    C --> E[Ende]
    D --> E
```

---

## Sequenzdiagramm

```mermaid
sequenceDiagram
    participant Browser
    participant Server
    participant Datenbank
    
    Browser->>Server: GET /api/daten
    activate Server
    Server->>Datenbank: SELECT * FROM daten
    activate Datenbank
    Datenbank-->>Server: Ergebnisse
    deactivate Datenbank
    Server-->>Browser: JSON-Antwort
    deactivate Server
```

---

## Klassendiagramm

```mermaid
classDiagram
    class Animal {
        +name: string
        +age: int
        +makeSound(): void
    }
    class Dog {
        +breed: string
        +bark(): void
    }
    class Cat {
        +color: string
        +meow(): void
    }
    Animal <|-- Dog
    Animal <|-- Cat
```

---

## Gantt-Diagramm

```mermaid
gantt
    title Projektplan
    dateFormat  YYYY-MM-DD
    section Planung
    Anforderungsanalyse    :a1, 2025-04-01, 7d
    Design                 :a2, after a1, 10d
    section Entwicklung
    Frontend               :a3, after a2, 14d
    Backend                :a4, after a2, 14d
    section Tests
    Integration            :a5, after a3 a4, 7d
    Benutzertests          :a6, after a5, 5d
```

---

## Kreisdiagramm (Pie Chart)

```mermaid
pie title Projektzeitverteilung
    "Planung" : 20
    "Entwicklung" : 50
    "Tests" : 20
    "Dokumentation" : 10
```

---

## Entity-Relationship-Diagramm

```mermaid
erDiagram
    KUNDE ||--o{ BESTELLUNG : "tätigt"
    BESTELLUNG ||--|{ POSITION : "enthält"
    POSITION }|--|| PRODUKT : "ist von"
    KUNDE {
        int id
        string name
        string email
    }
    BESTELLUNG {
        int id
        date datum
        float gesamtpreis
    }
    POSITION {
        int id
        int menge
        float preis
    }
    PRODUKT {
        int id
        string name
        float preis
    }
```

---

## Journey-Diagramm

```mermaid
journey
    title Benutzerreise: Online-Shopping
    section Suche
      Startseite besuchen: 5: Benutzer
      Produkt suchen: 4: Benutzer
      Suchergebnisse anzeigen: 3: System
    section Auswahl
      Produkt anschauen: 5: Benutzer  
      In den Warenkorb legen: 4: Benutzer
    section Bezahlung
      Zur Kasse gehen: 3: Benutzer
      Bezahlen: 2: Benutzer, System
      Bestellbestätigung: 5: System
```

---

## Gitgraph-Diagramm

```mermaid
gitGraph
    commit
    branch develop
    checkout develop
    commit
    commit
    checkout main
    merge develop
    commit
    branch feature
    checkout feature
    commit
    commit
    checkout develop
    merge feature
    checkout main
    merge develop
    commit
```

---

## State-Diagramm

```mermaid
stateDiagram-v2
    [*] --> Warten
    Warten --> Verarbeitung: Anfrage erhalten
    Verarbeitung --> Erfolgreich: Daten gültig
    Verarbeitung --> Fehler: Daten ungültig
    Erfolgreich --> Warten: Bestätigung gesendet
    Fehler --> Warten: Fehler gemeldet
    Warten --> [*]: System beenden
```

---

# Vielen Dank!

### Zusammenfassung
- Mermaid bietet verschiedene Diagrammtypen für unterschiedliche Anwendungsfälle
- Einfache Integration in Marp-Präsentationen
- Anpassbare Themes und Designs