Hier sind die Musterlösungen für die 6 Aufgaben, basierend auf den **geänderten Werten**. Diese dienen als Lösungsblatt für Sie, um die Ergebnisse der Studenten zu überprüfen.

-----

### <span style="color: #6a1b9a;">🟢 Lösung zu Aufgabe 1: Resonanz (Reihe)</span>

* **Neue Werte:** R=500Ω, L=10mH, C=100nF
* **1. Berechnung:**

    $$
    f_0 = \frac{1}{2\pi \sqrt{LC}}
    $$

    $$
    f_0 = \frac{1}{2\pi \sqrt{10 \times 10^{-3} \,\mathrm{H} \cdot 100 \times 10^{-9} \,\mathrm{F}}}
    $$

    $$
    f_0 = \frac{1}{2\pi \sqrt{1 \times 10^{-9}}}
    $$

    $$
    f_0 \approx 5033\,\mathrm{Hz}
    $$

* **2. Messung:** Die Simulation zeigt den maximalen Strom (hellste/schnellste Punkte) bei **ca. 5033 Hz** (oder 5.03 kHz).
* **4. Vergleich:** Der berechnete Wert und der Messwert stimmen überein.

-----

### <span style="color: #2196f3;">🟡 Lösung zu Aufgabe 2: Güte & Dämpfung</span>

* **Neue Werte:** L=20mH, C=10nF, R=10...1000Ω
* **Resonanzfrequenz (Konstant):**

    $$
    f_0 = \frac{1}{2\pi \sqrt{20 \times 10^{-3} \,\mathrm{H} \cdot 10 \times 10^{-9} \,\mathrm{F}}}
    $$

    $$
    f_0 \approx 11254\,\mathrm{Hz}
    $$

    (Der Peak bleibt immer bei ca. 11,25 kHz)

* **4. Erklärung & Beobachtung:**
        * **Höhe:** Wenn R **klein** ist (z.B. 10Ω), ist der Peak im Frequenz-Plot **sehr hoch**. Wenn R **groß** wird (z.B. 1000Ω), wird der Peak **sehr niedrig**.
        * **Breite:** Wenn R **klein** ist, ist der Peak **sehr spitz** (schmale Bandbreite). Wenn R **groß** wird, wird der Peak **sehr flach** (große Bandbreite).
        * **Güte:** Ein kleiner R-Wert (wenig Dämpfung) führt zu einer hohen Güte (Q). Ein hoher R-Wert (starke Dämpfung) führt zu einer niedrigen Güte.

-----

### <span style="color: #ff9800;">🟠 Lösung zu Aufgabe 3: Bandpass vs. Bandsperre</span>

* **Neue Werte:** L=1mH, C=10nF, R=2.2kΩ
* **2. Berechnung:**

    $$
    f_0 = \frac{1}{2\pi \sqrt{LC}}
    $$

    $$
    f_0 = \frac{1}{2\pi \sqrt{1 \times 10^{-3} \,\mathrm{H} \cdot 10 \times 10^{-9} \,\mathrm{F}}}
    $$

    $$
    f_0 \approx 50329\,\mathrm{Hz}
    $$

* **5. Analyse & Erklärung:**
        * Die Messung bestätigt die Resonanzfrequenz bei **ca. 50,3 kHz**.
        * **Gegensätzliches Verhalten:**
                * **Aufbau 1 (Bandpass):** Zeigt ein Spannungs-**MAXIMUM** (einen "Berg") bei 50,3 kHz.
                * **Aufbau 2 (Bandsperre):** Zeigt ein Spannungs-**MINIMUM** (eine "Kerbe") bei 50,3 kHz.
        * **Erklärung:**
                * Beim **Bandpass** ist der Parallelschwingkreis der Ausgang. Bei $f_0$ hat dieser seine **maximale Impedanz** (er "sperrt"). Daher fällt die meiste Spannung über ihm ab.
                * Bei der **Bandsperre** liegt der Reihenschwingkreis parallel zum Ausgang. Bei $f_0$ hat dieser seine **minimale Impedanz** (fast 0Ω, ein Kurzschluss). Er leitet den Strom an $R_2$ vorbei, wodurch die Ausgangsspannung zusammenbricht.

-----

### <span style="color: #4caf50;">🔴 Lösung zu Aufgabe 4: D/A-Wandler</span>

* **Neue Werte:** V=10V, R=1kΩ, 2R=2kΩ
* **Messwerttabelle (Lösung):**

    Die Schrittgröße (LSB) ist

    $$
    \text{LSB} = \frac{V_{ref}}{2^N} = \frac{10\,\mathrm{V}}{2^3} = 1{,}25\,\mathrm{V}
    $$

| Bit 2 (MSB) | Bit 1 | Bit 0 (LSB) | Dezimalwert | Uaus (V) |
| :---: | :---: | :---: | :---: | :---: |
| 0 | 0 | 0 | 0 | **0.0 V** |
| 0 | 0 | 1 | 1 | **1.25 V** |
| 0 | 1 | 0 | 2 | **2.5 V** |
| 0 | 1 | 1 | 3 | **3.75 V** |
| 1 | 0 | 0 | 4 | **5.0 V** |
| 1 | 0 | 1 | 5 | **6.25 V** |
| 1 | 1 | 0 | 6 | **7.5 V** |
| 1 | 1 | 1 | 7 | **8.75 V** |

* **Auswertung:** Die Messwerte steigen linear an. Die Schrittgröße ist konstant **1,25 V**.

-----

### <span style="color: #00bcd4;">🟣 Lösung zu Aufgabe 5: Rechteck-zu-Sinus</span>

* **Neue Werte:** L=1mH, C=10nF, Ri=2.2kΩ
* **1. Berechnung:** $f_0 \approx 50{,}3\,\mathrm{kHz}$ (aus Aufgabe 3).
* **3. Simulation:** Die Grundfrequenz der Rechteckwelle $f_1$ wird auf 50,3 kHz eingestellt.
* **5. Erklärung:**
        * **Unterschied:** Das Eingangssignal ist eine **Rechteckwelle**. Das Ausgangssignal ist eine saubere **Sinuswelle**.
        * **Erklärung:** Die Rechteckwelle (Eingang) besteht aus der Grundfrequenz $f_1$ (50,3 kHz) und Obertönen ($f_3, f_5, \ldots$). Der Bandpassfilter (abgestimmt auf $f_0 = 50{,}3\,\mathrm{kHz}$) lässt die Grundfrequenz $f_1$ fast ungehindert passieren, blockiert aber alle höheren Harmonischen (Obertöne), da sie weit außerhalb seiner Bandbreite liegen. Übrig bleibt nur die reine Grundschwingung, welche eine Sinuswelle ist.

-----

### <span style="color: #e91e63;">👑 Lösung zu Aufgabe 6: Komplexer Filter</span>

* **Neue Werte:** L1=10µH, C1=1nF, R1=25Ω, C2=2nF, L2=20µH, R2=100Ω
* **Schritt 1 (Sinus-Analyse):** Der Frequenz-Plot ("Frequency") zeigt die stärkste Resonanz (höchste Spannungsverstärkung) bei

    $$
    f_0 \approx 3{,}56\,\mathrm{MHz}
    $$

* **Schritt 2 (Rechteck-Analyse):**
        * Die Grundfrequenz $f_1$ der Quelle wird auf $f_0 / 3 \approx 1{,}187\,\mathrm{MHz}$ eingestellt.
* **Auswertung (Zeitbereich):**
        * **Eingang:** Eine Rechteckwelle mit $f_1 = 1{,}187\,\mathrm{MHz}$.
        * **Ausgang:** Eine saubere **Sinuswelle** mit einer Frequenz von **ca. 3,56 MHz** (der 3. Harmonischen). Die Amplitude ist zudem höher als die 5V der Quelle.
* **Auswertung (Frequenzbereich):**
        * **Eingang (FFT):** Zeigt Peaks bei 1,187 MHz ($f_1$), 3,56 MHz ($f_3$), 5,94 MHz ($f_5$), usw.
        * **Ausgang (FFT):** Die Peaks bei $f_1$ und $f_5$ sind fast vollständig **gedämpft** (verschwunden). Der Peak bei $f_3 = 3{,}56\,\mathrm{MHz}$ ist **massiv verstärkt** und dominiert das gesamte Ausgangsspektrum.
* **Erklärung:** Der Filter wurde "getroffen". Die Grundwelle $f_1$ der Rechteckwelle wurde blockiert. Die 3. Harmonische ($f_3$) traf jedoch *exakt* auf die Resonanzfrequenz $f_0$ des Filters. Der Filter hat diese eine Frequenzkomponente aus dem Rechtecksignal "herausgefischt" und verstärkt.