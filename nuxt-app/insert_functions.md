# Anleitung: Interaktive Funktionen in Markdown-Dateien mit Nuxt Content

Diese Anleitung erklärt, wie du interaktive Komponenten wie den Zähler in deinen Markdown-Dateien integrieren kannst.

## 1. Erstellen einer Vue-Komponente

Erstelle eine Vue-Komponente im Verzeichnis `components/content`. Die Komponenten in diesem Verzeichnis werden automatisch in Markdown-Dateien verfügbar.

**Beispiel für eine Zähler-Komponente (`components/content/Counter.vue`):**

```vue
<script setup>
import { ref } from 'vue'

// Reaktiver State mit ref - funktioniert zuverlässig auf Client-Seite
const count = ref(0)

// Methoden für die Interaktivität
const increment = () => count.value++
const decrement = () => count.value--
const reset = () => count.value = 0
</script>

<template>
  <ClientOnly>
    <div class="counter-container">
      <p class="counter-display">Aktuelle Zahl: <span class="counter-value">{{ count }}</span></p>
      <div class="button-container">
        <button class="counter-button" @click="increment">Erhöhen</button>
        <button class="counter-button" @click="decrement">Verringern</button>
        <button class="counter-button reset" @click="reset">Zurücksetzen</button>
      </div>
    </div>
  </ClientOnly>
</template>

<style>
/* Dein CSS hier */
</style>
```

**Wichtige Hinweise:**
- Verwende immer `<ClientOnly>` um die interaktiven Teile zu umschließen
- Nutze die Composition API (`script setup`) für bessere Reaktivität
- Definiere die reaktiven Variablen mit `ref()`

## 2. Verwendung in Markdown-Dateien

Um die Komponente in einer Markdown-Datei zu verwenden, nutze die spezielle MDC-Syntax von Nuxt Content:

```md
---
title: Mein Projekt
---

# Mein Projekt

## Interaktive Demo

Hier ist ein interaktiver Zähler:

::Counter
::

```

## 3. Typen von interaktiven Komponenten

Du kannst verschiedene Arten von interaktiven Elementen erstellen:

### A. Eingabefelder mit Reaktionen
```vue
<script setup>
import { ref } from 'vue'

const name = ref('')
const greeting = ref('')

const generateGreeting = () => {
  greeting.value = `Hallo ${name.value}!`
}
</script>

<template>
  <ClientOnly>
    <div class="greeting-container">
      <input v-model="name" placeholder="Dein Name">
      <button @click="generateGreeting">Begrüßen</button>
      <p v-if="greeting">{{ greeting }}</p>
    </div>
  </ClientOnly>
</template>
```

### B. Toggles/Schalter
```vue
<script setup>
import { ref } from 'vue'

const isActive = ref(false)
</script>

<template>
  <ClientOnly>
    <div class="toggle-container">
      <button @click="isActive = !isActive">
        {{ isActive ? 'Ausschalten' : 'Einschalten' }}
      </button>
      <div :class="['indicator', isActive ? 'active' : '']"></div>
    </div>
  </ClientOnly>
</template>
```

### C. Visualisierungen von Daten
```vue
<script setup>
import { ref, onMounted } from 'vue'

const chartData = ref([25, 50, 75, 100])
const addDataPoint = () => {
  chartData.value.push(Math.floor(Math.random() * 100))
}
</script>

<template>
  <ClientOnly>
    <div class="chart-container">
      <div class="chart">
        <div v-for="(point, index) in chartData" 
             :key="index" 
             class="bar" 
             :style="{height: point + 'px'}"></div>
      </div>
      <button @click="addDataPoint">Datenpunkt hinzufügen</button>
    </div>
  </ClientOnly>
</template>
```

## 4. Fehlerbehebung

Falls deine interaktive Komponente nicht funktioniert:

1. **Überprüfe die Browser-Konsole** auf JavaScript-Fehler
2. **Stelle sicher, dass `<ClientOnly>` verwendet wird** - sonst funktioniert die Interaktivität nicht
3. **Prüfe, ob die Komponente richtig benannt ist** - der Name in der Markdown-Datei muss genau mit dem Komponentennamen übereinstimmen
4. **Cache leeren** - manchmal muss der Dev-Server neu gestartet werden

## 5. Erweiterte Funktionen

Für komplexere interaktive Elemente:

1. **Globaler Zustand** mit `useState()` von Nuxt, wenn mehrere Komponenten Daten teilen müssen
2. **API-Anfragen** mit `useFetch()` für externe Daten
3. **Komplexe UI-Komponenten** aus UI-Bibliotheken wie Vuetify einbinden

## 6. Best Practices

- Halte interaktive Komponenten einfach und fokussiert
- Nutze `props` für konfigurierbare Komponenten
- Setze bei komplexen Komponenten Fallbacks für nicht-JavaScript-Umgebungen
- Teste deine Komponenten in verschiedenen Browsern

---

Mit dieser Anleitung kannst du beliebige interaktive Funktionen in deine Markdown-Dateien einbinden. Experimentiere mit unterschiedlichen Komponenten, um deine Inhalte interaktiver und ansprechender zu gestalten.