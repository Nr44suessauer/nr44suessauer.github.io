


<figure>
    <img src="https://github.com/Nr44suessauer/nr44suessauer.github.io/blob/main/assets/img/schaltungen/SymbolBild.jpg?raw=true" alt="symbolbild">
    <figcaption>Symbolbild</figcaption>
</figure>

## Arbeitsanweisung für die Gruppe (1-2 Studenten)


Die Aufgabe besteht darin, ein System zu bauen, das aus Integration von Sensorik, Aktorik entsteht. Dazu soll die eigene Gruppe in Zusammenarbeit mit einer anderen Gruppe ein funktionierendes System aufbauen, das Daten von Sensoren erfasst, entsprechende Aktionen durch Aktoren ausführt.

Der Prozess ist mit Messprotokollen zu dokomentieren (z. B. mit Oszilloskop oder Vergleichsgerät).

##### Schritte:
1. **PWM-Signal erzeugen und verarbeiten | Prolog**
    - Mikrocontroller Init PWM-Ausgabe.
    - High-Pass- oder Low-Pass-Filter , um das PWM-Signal zu glätten.
    - Überprüfen des PWM-Signals messtechnisch mit einem Oszilloskop.

2. **Sensorik oder Aktorik auswählen**
    - Entscheidung für einen spezifischen Sensor oder Aktor, der in das Gesamtsystem integriert werden soll.

3. **Sensoren initialisieren und auslesen**
    - Initialisieren der Sensoren und programmieren des Mikrocontrollers, um die Sensordaten zu erhalten.
    - Testen der Sensoren, um sicherzustellen, dass diese korrekte Daten liefern.

4. **Aktoren ansteuern**
    - Ansteuerroutine programieren (4 Fasiger Motor | Steps) und auf Serielle/Input Daten reagieren.  

5. **Integration der Sensor-, Aktor- und PWM-Daten in ein Gesamtsystem**
    - Kollaboration mit anderen Gruppe, um die Sensordaten, Aktorsteuerungen und PWM-Signale in ein gemeinsames System zu integrieren. (Kommunikation zwischen Microcontroller)

6. **Messtechnische Überprüfung der Sensor-, Aktor- und PWM-Funktionalität**
    - Überprüfen der Funktionalität der Sensoren, Aktoren und PWM-Signale messtechnisch, um die Genauigkeit und Zuverlässigkeit des Gesamtsystems zu gewährleisten.
    - Dokumentieren der Ergebnisse, der Überprüfung.

7. **Analyse und Dokumentation der Ergebnisse**
    - Analysieren Sie die gesammelten Daten und die Leistung des Gesamtsystems.
    - Dokumentieren Sie die Ergebnisse.


        ## Verfügbare Hardware, Sensorik und Aktorik & Beinhaltende Aufgabe
        >note : Hardware entweder auslebar oder steuerbar über UART (COM X, 9600baud) | Initial Seassion | Microcontroller ist der Atmega328P | Arduino Uno, Romeo v1.0

        - **Servomotoren**:präzise Ansteuerung von Winkelpositionen. | Mapping von PWM Periode auf Grad mit Oszi
        - **Mehrphasige Motoren**: Motoren mit mehreren Phasen (4) | Zeigen des Schrittmusters (4Kanal Oszi)
        - **Displays**: Bildschirme zur Anzeige von Informationen und Daten. | Datensignal von I²C oder Spi
        - **Digitale/Analoge Eingänge, Taster, Poti o.ä.**: Eingänge zur Erfassung von Inputs und Verwertung dieser.
        - **Ultraschallsensor**: Sensor zur Abstandsmessung mittels Ultraschallwellen | TOF Trigger & Inputsignal Oszi.
        - **Feuchtigkeitssensor**: Sensor zur Messung der Feuchtigkeit auf einer Ebene. | Spannungsteiler Messung im Verhältnis zur Feuchtigkeit 
        - **LDR Sensor**: Spannungsteiler Messung im Verhältnis zur Lichtintensität. | Blinkinterface messtechnisch verifizieren. -> Erstellen einer eigenen Tabelle, welche Blinkperiode welches Monitoring darstellt. ( Kaffee Maschine)


# Ablauf wird vorgegeben

Durch die Anwendung einer zeitgesteuerten Steuerung mittels Switch-Case-Struktur können die einzelnen Programmroutinen – etwa für Sensorik, Aktorik oder die Kommunikation – separat angesteuert und getestet werden.

```arduino
// Arduino implementation using millis() 

const unsigned long STATE0_DURATION = 3000UL;  // 3 seconds
const unsigned long STATE1_DURATION = 2000UL;  // 2 seconds
const unsigned long STATE2_DURATION = 4000UL;  // 4 seconds

int state = 0;
unsigned long previousMillis = 0;

void checkTimer(unsigned long currentMillis) {
    unsigned long elapsed = currentMillis - previousMillis;
    
    if (state == 0 && elapsed >= STATE0_DURATION) {
        state = 1;
        Serial.print("Transition to state 1 at ");
        Serial.print(elapsed);
        Serial.println(" ms");
        previousMillis = currentMillis;
    } else if (state == 1 && elapsed >= STATE1_DURATION) {
        state = 2;
        Serial.print("Transition to state 2 at ");
        Serial.print(elapsed);
        Serial.println(" ms");
        previousMillis = currentMillis;
    } else if (state == 2 && elapsed >= STATE2_DURATION) {
        state = 0;
        Serial.print("Transition to state 0 at ");
        Serial.print(elapsed);
        Serial.println(" ms");
        previousMillis = currentMillis;
    }
}
void setup() {
    Serial.begin(9600);
    previousMillis = millis();
}

void loop() {
    unsigned long currentMillis = millis();
    
    switch (state) {
        case 0:
            // Aktionen für state 0
            break;
        case 1:
            // Aktionen für state 1
            break;
        case 2:
            // Aktionen für state 2
            break;
        default:
            state = 0;
            previousMillis = currentMillis;
            break;
    }
    
    // Timerabfrage in separater Methode am Ende des Switch-Cases
    checkTimer(currentMillis);
}

```



## Programmieraufgabe: Timer, PWM, Sensor- oder Aktorsteuerung und Kommunikation

Die Aufgabe umfasst folgende Schritte:

1. **Timer/PWM | Prolog:**  
    - Erstelle einen Timer, der als Grundlage zur Ausgabe eines PWM-Signals auf einem Pin dient.  
    - Implementiere das eigentliche PWM.

2. **Sensorik:**  
    - Implementiere die entsprechende Logik, um zuverlässige Sensorwerte zu erhalten.

3. **Aktorsteuerung:**  
    - Entwickle die Ansteuerungslogik für den Aktor.

4. **Schnittstellenkommunikation:**  
    - Ergänze die Implementierung einer Kommunikationsschnittstelle, z. B. I²C, SPI, etc., um Daten zwischen den Komponenten auszutauschen.

---

## Messaufgabe 1: PWM-Messung und Filterkonstruktion

1. **Schaltung aufbauen und Verkabelung prüfen:**  
    - Verbinde alle relevanten Komponenten vollständig.  
    - Integriere an strategischen Punkten Messpunkte, um das Signal verlustfrei abzugreifen.

2. **PWM-Signal messtechnisch überprüfen:**  
    - Messe das in der Programmieraufgabe erzeugte PWM-Signal mit einem Oszilloskop.  
    - Dokumentiere Frequenz, Pulsbreite und eventuelle Abweichungen, um die Funktionalität nachzuweisen.

3. **Filterkonstruktion: Auswahl und Berechnung:**  
    - Entscheide, ob ein High-Pass- oder Low-Passfilter für die Signalglättung benötigt wird.  
    - Berechne die optimalen Werte für Widerstand und Kondensator.  
    - Wähle die Bauteilwerte entsprechend der gewünschten Parameter aus.

4. **Filter bau und messtechnisch validieren:**  
    - Baue den ausgewählten Filter gemäß den berechneten Werten auf.  
    - Überprüfe mit dem Oszilloskop, ob das gefilterte Signal den theoretischen Erwartungen entspricht.  
    - Notiere eventuelle Abweichungen und diskutiere mögliche Ursachen.

---

## Messaufgabe 2: Sensor oder Aktuator
1. Bauteilauswahl: Wähle das zu messende Bauteil (Sensor oder Aktuator) aus.
2. Messaufgabe festlegen: Bestimme die passende Messaufgabe, abhängig vom ausgewählten Bauteil.
3. Messvorgehen dokumentieren: inklusive Aufbau, Durchführung und Analyse.
4. Ergebnisvisualisierung: Visualisiere das Messbild (z. B. mittels Diagrammen oder Oszilloskop-Screenshots), um die Ergebnisse anschaulich darzustellen.
5. Analyse möglicher Bad Cases: Identifiziere und beschreibe potenzielle Fehlerfälle oder Störungen, die als Bad Cases auftreten können.

---

## Messaufgabe 3: Kommunikationsschnittstelle

1. Entwickelt eine Kommunikationslogik für den Austausch zu einem Sensor, Mikrocontroller oder Display (z. B. über I²C oder SPI).  
2. Visualisiert die übertragenen Datenpakete mittels Oszilloskop, um typische Signalformen zu zeigen.  
3. Erstellt zwei Szenarien:
    - **Good Case:** Störungsfreie Kommunikation mit klaren, konsistenten Signalen.
    - **Bad Case:** Störungen, die zu inkonsistenten Signalen führen.
4. Dokumentiert beide Fälle anhand von Messprotokollen, Oszilloskop-Screenshots und analysiert die Ursachen bei Fehlern.


---

