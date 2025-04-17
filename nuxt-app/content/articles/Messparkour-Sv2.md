---
cover: https://github.com/Nr44suessauer/nr44suessauer.github.io/blob/main/nuxt-app/assets/pictures/schaltungen/oszi.jpg?raw=true
author:
  name: Marc Nauendorf
  avatarUrl: https://pbs.twimg.com/profile_images/1042510623962275840/1Iw_Mvud_400x400.jpg
date: 2022-08-23T00:00:00.000Z
layout: page
description: "Praxisaufgabe SS2025"
---

<h1>Messparkour SV2</h1>

<p><strong>Verantwortlicher: Marc Nauendorf</strong> | <strong>Bewertung: 50 Punkte (Praxisteil) + 50 Punkte (Theorie) bei Herr Klemm</strong></p>

<blockquote>
  <p><strong>Beide Teile müssen bestanden</strong> werden um SV2 zu bestehen.</p>
</blockquote>

<h2><strong>Vorwort</strong></h2>

<div style="display: flex; align-items: center; gap: 20px;">
<div>

<p>In diesem <strong>Praxisteil von Signalverarbeitung 2</strong> erwartet euch ein spannender Messparkour, der in <strong>drei primären Präsenzterminen</strong> organisiert ist.</p>

<p>In diesen Terminen könnt ihr eigenständig eure Arbeiten durchführen, wie in den <strong>nachfolgenden Abschnitten beschrieben.</strong></p>

<p>Die Labortermine sind in <strong>erster Linie</strong> dazu gedacht, offene Fragen zu klären, euch während des praktischen Vorgehens zu <strong>unterstützen</strong> und den Übergang von der theoretischen Vorbereitung zur praktischen Anwendung zu erleichtern.</p>

<p>Ich freue mich auf eure engagierte Mitarbeit und wünsche euch viel Erfolg bei der Durchführung des Messparkours.</p>

</div>
<div>

<img src="https://github.com/Nr44suessauer/nr44suessauer.github.io/blob/main/nuxt-app/assets/pictures/gif/oszi.gif?raw=true" alt="Oszi GIF" />

</div>
</div>

<blockquote>
  <p>Bemerkung: Die jenigen die mit ihrem Microcontroller schon anfangen möchte, kann das gerne tun. Man kann die Arbeiten auch mit AtmelChips o.ä. bearbeiten. Wichtig: <strong>Das Arduino Framework ist das einzige was ihr nicht nutzen dürft, sonst ist alles erlaubt.</strong></p>
</blockquote>

<p><strong>PS:</strong> Zugang für Labor bei <strong><a href="https://www.hs-heilbronn.de/de/martin.ballein">Herr Ballein</a></strong></p>

<hr>

<p><strong>Termine:</strong> <br>
<strong><a href="https://splan.hs-heilbronn.de/">Splan</a></strong> | Die Tage die angegeben sind, sind bei euch (SEB3) ohne Kurse.</p>

| Datum               | Uhrzeit           | Thema                                                                     |
|---------------------|-------------------|---------------------------------------------------------------------------|
| 16.04.25            | 09:45 - 13:00 Uhr | Spannungsteiler & Low/High pass filter                                    |
| 30.04.25            | 09:45 - 13:00 Uhr | I²C                                                                       |
| 21.05.25            | 09:45 - 13:00 Uhr | PWM & Servo                                                               |
| <strong>Abgabezeitpunkt</strong> | bis 01.07.2025 | <strong><a href="https://ilias.hs-heilbronn.de/ilias.php?baseClass=ilrepositorygui&cmdNode=yc:ni&cmdClass=ilObjFolderGUI&ref_id=918744">Hochzuladen im Ilias Kurs</a></strong> |

<hr>

<h2>📅 <strong>Termin 1: Spannungsteiler & High&LowPass Filter</strong></h2>

<p><strong>Themen:</strong></p>
<ol>
  <li>
    <strong>Spannungsteiler</strong>
    <ul>
      <li>Berechne verschiedene Spannungsteiler-Konfigurationen unter Verwendung von Widerständen.</li>
      <li>Vergleiche die theoretisch berechneten Werte mit praktischen Messungen.</li>
    </ul>
  </li>
  <li>
    <strong>Hoch- und Tiefpassfilter</strong>
    <ul>
      <li>Untersuche den Aufbau und die Funktionsweise von passiven Hoch- und Tiefpassfiltern.</li>
      <li>Berechne die Grenzfrequenz und vergleiche die Ergebnisse.</li>
      <li><em>Material & Referenz:</em> <strong><a href="https://www.electronics-tutorials.ws/de/filtern/passiver-hochpassfilter.html">Passiver Hochpassfilter</a></strong>, <strong><a href="https://www.youtube.com/watch?v=lagfhNjMuQM">Video Tutorial</a></strong></li>
    </ul>
  </li>
</ol>

<h4><strong>Vorbereitung</strong></h4>
<ul>
  <li><strong>Selbstständiges aneignen der Themen</strong> High&Low Pass Filter + Spannungsteiler</li>
</ul>

<h4><strong>LaborTermin</strong></h4>
<ul>
  <li>Aufbauen eurer errechneten Schaltungen mit Freqenzgenerator & Netzteil</li>
  <li>Bearbeiten der Themenfelder mit Osziloskop & Multimeter</li>
</ul>

<blockquote>
  <p>Am Ende die Ausgabe eines <a href="https://www.raspberrypi.com/documentation/microcontrollers/pico-series.html#pico-1-technical-specification"><strong>Pi Pico´s</strong></a> mit einem I²C Bauteil</p>
</blockquote>

<h4><strong>Nachbereitung</strong></h4>
<ul>
  <li>
    <strong>Dokumentation</strong>
    <ul>
      <li>Vergleiche gemessene Spannungswerte mit den Berechnungen.</li>
      <li>Analysiere, wie sich Widerstandsänderungen auf die Kondensator-Entladekurve auswirken.</li>
      <li>PDF o.ä. mit Berechnungen, Messdaten & Fehleranalyse.</li>
    </ul>
  </li>
</ul>

<hr>

<h2>📅 <strong>Termin 2: I²C Protokoll & DatenPakete</strong></h2>

<p><strong>Themen:</strong></p>
<ol>
  <li>
    <strong>I²C Protocoll</strong>
    <ul>
      <li>Adressierung, Clock Speed sowie Read and Write Funktionalitäten.</li>
      <li><em>Material & Referenz:</em> <strong><a href="https://de.wikibooks.org/wiki/C-Programmierung_mit_AVR-GCC/_I2C">I²C-Wikibooks</a></strong>, <strong><a href="https://www.elektronik-kompendium.de/sites/raspberry-pi/2612271.htm">Elektronik-Kompendium</a></strong></li>
    </ul>
  </li>
  <li>
    <strong>Programmieren des Mikrocontrollers</strong>
    <ul>
      <li>Das Programmieren des Mikrocontrollers : Raspberry Pi Pico zur Handhabung des I²C Protokolls.</li>
      <li><em>Material & Referenz:</em> <strong><a href="https://docs.micropython.org/en/latest/rp2/quickref.html#pwm">MicroPython-PWM-Tutorials</a></strong>, <strong><a href="https://www.elektronik-kompendium.de/sites/raspberry-pi/2612271.htm">I²C Micropython</a></strong>, <strong><a href="https://www.youtube.com/watch?v=092xFEmAS98">code_tutorial</a></strong></li>
    </ul>
  </li>
</ol>

<h4><strong>Vorbereitung</strong></h4>
<ul>
  <li>Selbstständiges Aneignen der theoretischen Grundlagen zu MicroPython</li> 
  <li>I²C funktionalität herstellen <strong>bis zum 2.ten Termin</strong></li>
</ul>

<h4><strong>LaborTermin</strong></h4>
<ul>
  <li>Messtechnische Darstellung, Auslesung und Analyse der I²C Pakete <strong>über das Oszilloskop</strong>.</li>
  <li>Identifiziere mögliche Fehlerquellen und erstelle Messbilder, die von positiven bis negativen Werten reichen.</li>
</ul>

<blockquote>
  <p>Am Ende die Ausgabe von einem Servo-Motor für Termin 3</p>
</blockquote>

<h4><strong>Nachbereitung</strong></h4>
<ul>
  <li>
    <strong>Dokumentation</strong>
    <ul>
      <li>Festhalten der Oszilloskop- und Multimetermessungen in einem Messprotokoll.</li>
      <li>Analyse von Oszilloskop-Screenshots der SCL- und SDA-Signale.</li>
      <li>Zeigen und Bewerten von <strong>Good & Bad Cases</strong></li>
    </ul>
  </li>
</ul>

<hr>

<h2>📅 <strong>Termin 3: Servomotorsteuerung mit PWM (Abschluss)</strong></h2>

<div style="display: flex; align-items: center; gap: 20px;">
<div>

<ol>
  <li>
    <strong>Schaltungsdesign und Steuerung</strong>
    <ul>
      <li>Ansteuerung eines <strong>Servomotors</strong> mithilfe von <strong>PWM</strong> auf dem Raspberry Pi Pico.</li>
      <li>Steuerung <strong>mit Potentiometer</strong>, um ein einstellbares Eingangssignal zu erzeugen.</li>
      <li><strong>Zusammenhang</strong> zwischen der Potentiometerstellung (Input) und der resultierenden Servomotorausrichtung (Output) herstellen.</li>
    </ul>
  </li>
</ol>

</div>
<div>

<img src="https://github.com/Nr44suessauer/nr44suessauer.github.io/blob/main/nuxt-app/assets/pictures/gif/servo.gif?raw=true" alt="Servo GIF" />

</div>
</div>

<h3><strong>Praktische Umsetzung</strong></h3>
<ul>
  <li>Implementiere den PWM-Ausgang, um das Steuersignal für den Servomotor zu erzeugen.</li>
  <li>Setze den Steueralgorithmus in Verbindung mit dem Eingangssignal um, sodass der Servomotor entsprechend ausgerichtet wird.</li>
</ul>

<h4><strong>Vorbereitung</strong></h4>
<ul>
  <li>Eigenständiges Erarbeiten des Schaltungsdesigns.</li>
  <li>Aneignung der Funktionen und Steuerungslogik eines <strong><a href="https://www.upesy.com/blogs/tutorials/esp32-servo-motor-sg90-on-micropython">Servomotors</a></strong> (z. B. Winkelbereich, PWM-Spezifikationen).</li>
</ul>

<h4><strong>LaborTermin</strong></h4>
<ul>
  <li>Aufbau der geplanten Schaltung und Integration des Spannungsteilers zur Signalerzeugung. (mit Potentiometer)</li>
  <li>Erfassung der PWM-Signale und Überprüfung des Versuchsaufbaus.</li>
  <li>Mapping von Potentiometer auf Grad (Servo)</li>
</ul>

<h4><strong>Nachbereitung</strong></h4>
<ul>
  <li>
    <strong>Dokumentation</strong>
    <ul>
      <li>Detaillierte Darstellung des Schaltplans, eingesetzten Codes und gesammelten Messdaten.</li>
      <li>Mathematische Analyse des Zusammenhangs zwischen Eingangssignal und Servomotorposition.</li>
    </ul>
  </li>
</ul>

<hr>

<h2><strong>Dokumentation</strong></h2>
<p>Die Dokumentation soll in <strong>maximal 10 DIN A4 Seiten</strong> gehalten werden und umfasst insbesondere folgende Elemente:</p>

<p>• <strong>Messprotokolle</strong>, in denen alle relevanten Messdaten, Beobachtungen und Praxisergebnisse festgehalten werden.<br>
• <strong>Detaillierte Beschreibungen</strong> der Versuchsaufbauten, einschließlich der verwendeten Materialien, Schaltungen und angewandten Methoden.<br>
• <strong>Erkenntnisse und Analysen</strong>, welche die Zusammenhänge zwischen den theoretischen Grundlagen und den praktischen Ergebnissen verdeutlichen.</p>

<p><strong>Der Abgabezeitpunkt</strong> | bis 01.07.2025 | <strong><a href="https://ilias.hs-heilbronn.de/ilias.php?baseClass=ilrepositorygui&cmdNode=yc:ni&cmdClass=ilObjFolderGUI&ref_id=918744">Hochzuladen hier im Ilias Kurs</a></strong></p>