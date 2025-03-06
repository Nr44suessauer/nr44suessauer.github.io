---
layout: post
title: Spannungsparcours
date: 2025-03-06 16:40:00
description: SV2 Praxis-Teil – Spannungsteiler im Detail
tags: basics engineering_tool measurement Voltage OHM Ampere Hz 
categories: tutorial
disqus_comments: true
featured: false
---

## **Spannungsteiler – Der unsichtbare Dirigent**

Ein Spannungsteiler ist eine einfache, aber äußerst nützliche Schaltung in der Elektronik, die aus zwei in Reihe geschalteten Widerständen besteht. Diese Schaltung teilt die Eingangsspannung \( V_{in} \) in eine kleinere Ausgangsspannung \( V_{out} \) auf. Die Ausgangsspannung hängt von den Werten der beiden Widerstände ab und kann durch die folgende Formel berechnet werden:

\[ V_{out} = V_{in} \cdot \frac{R_2}{R_1 + R_2} \]

### **Funktionsweise**

Der Spannungsteiler funktioniert nach dem Prinzip des Ohmschen Gesetzes, das besagt, dass die Spannung über einem Widerstand proportional zum Strom durch den Widerstand ist. In einem Spannungsteiler fließt derselbe Strom durch beide Widerstände, da sie in Reihe geschaltet sind. Die Spannungen über den einzelnen Widerständen addieren sich zur Eingangsspannung \( V_{in} \).

### **Anwendungen**

Spannungsteiler werden häufig verwendet, um eine gewünschte Spannung zu erzeugen, die kleiner als die Eingangsspannung ist. Sie finden Anwendung in:

- **Sensoren**: Viele Sensoren, wie z.B. LDRs, benötigen eine bestimmte Referenzspannung, die durch einen Spannungsteiler bereitgestellt werden kann.
- **Spannungsmessung**: Spannungsteiler können verwendet werden, um hohe Spannungen zu messen, indem sie die Spannung auf einen niedrigeren, messbaren Bereich reduzieren.
- **Eingangsstufen von Verstärkern**: Hier dienen sie zur Anpassung der Eingangsspannung an den gewünschten Pegel.

### **Beispiel**

Betrachten wir ein praktisches Beispiel, um die Funktionsweise eines Spannungsteilers zu verdeutlichen. Angenommen, wir haben eine Eingangsspannung \( V_{in} \) von 5V und einen festen Widerstand \( R_1 = 10kΩ \) sowie einen lichtabhängigen Widerstand (LDR) \( R_2 \), dessen Wert sich je nach Lichtintensität ändert.

Die Ausgangsspannung \( V_{out} \) kann wie folgt berechnet werden:

\[ V_{out} = 5V \cdot \frac{R_{LDR}}{10kΩ + R_{LDR}} \]

### **LDR (Light Dependent Resistor)**

<div style="display: flex; align-items: center;">
    <div style="flex: 1;">
        Ein LDR ist ein spezieller Widerstand, dessen Widerstandswert sich mit der Lichtintensität ändert. Bei hoher Lichtintensität sinkt der Widerstandswert des LDR, während er bei geringer Lichtintensität steigt. Dies macht den LDR ideal für Anwendungen, bei denen die Lichtintensität gemessen oder gesteuert werden muss.
    </div>
    <div style="flex: 1; text-align: center;">
        <img src="https://upload.wikimedia.org/wikipedia/commons/1/1a/LDR.png" alt="LDR" style="max-width: 100%; height: auto;">
    </div>
</div>


[extra knowlege](https://www.technologystudent.com/elec1/ldr1.htm) 


### **Wichtige Überlegungen**

- **Lastwirkung**: Jede angeschlossene Last (z.B. ein Messgerät oder eine LED) beeinflusst den Spannungsteiler, da sie parallel zu einem der Widerstände geschaltet wird. Dies muss bei der Berechnung der Ausgangsspannung berücksichtigt werden.
- **Widerstandswerte**: Die Summe der Widerstandswerte \( R_1 \) und \( R_2 \) sollte nicht zu klein sein, um übermäßige Stromflüsse und damit verbundene Wärmeentwicklung zu vermeiden. Typische Werte liegen im Bereich von 1kΩ bis 100kΩ.
- **Potentiometer**: Ein Potentiometer kann als verstellbarer Spannungsteiler verwendet werden, um eine variable Ausgangsspannung zu erzeugen.

Der Spannungsteiler ist somit ein grundlegendes Werkzeug in der Elektronik, das durch seine Einfachheit und Vielseitigkeit besticht.

---
