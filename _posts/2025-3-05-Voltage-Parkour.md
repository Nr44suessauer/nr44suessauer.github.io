---
layout: post
title: Voltage Divider
date: 2025-03-05 16:40:00
description: SV2 Practical Part – Voltage Divider in Detail
tags: basics engineering_tool measurement Voltage OHM Ampere  
categories: tutorial Measurement_Parkour 
disqus_comments: true
featured: false
---

<p>A voltage divider is a simple yet extremely useful circuit in electronics, consisting of two resistors connected in series. This circuit divides the input voltage \( V_{in} \) into a smaller output voltage \( V_{out} \). The output voltage depends on the values of the two resistors and can be calculated using the following formula:</p>
<p>\[ V_{out} = V_{in} \cdot \frac{R_2}{R_1 + R_2} \]</p>
<p>The measurement point for \( V_{out} \) is located between the resistors \( R_1 \) and \( R_2 \) and must be measured against GND.</p>

<div style="display: flex; align-items: center;">
    <div style="flex: 1;">
        <h3><strong>Functionality</strong></h3>
        The voltage divider works on the principle of Ohm's Law, which states that the voltage across a resistor is proportional to the current through the resistor. In a voltage divider, the same current flows through both resistors since they are connected in series. The voltages across the individual resistors add up to the input voltage \( V_{in} \).
    </div>
    <div style="flex: 1; text-align: center;">
        <img src="https://github.com/Nr44suessauer/nr44suessauer.github.io/blob/main/assets/img/schaltungen/Einfacher-unbelasteter-Spannungsteiler.svg.png?raw=true" alt="Simple Unloaded Voltage Divider" style="max-width: 100%; height: auto;">
    </div>
</div>

### **Applications**

Voltage dividers are often used to generate a desired voltage that is lower than the input voltage. They are used in:

- **Sensors**: Many sensors, such as LDRs, require a specific reference voltage that can be provided by a voltage divider.
- **Voltage Measurement**: Voltage dividers can be used to measure high voltages by reducing the voltage to a lower, measurable range.
- **Input Stages of Amplifiers**: Here, they serve to adjust the input voltage to the desired level.

### **Example**

<p>Let's consider a practical example to illustrate the functionality of a voltage divider. Suppose we have an input voltage \( V_{in} \) of 5V and a fixed resistor \( R_1 = 10kΩ \) as well as a light-dependent resistor (LDR) \( R_2 \), whose value changes depending on the light intensity.</p>

<p>The output voltage \( V_{out} \) can be calculated as follows:</p>

<p>\[ V_{out} = 5V \cdot \frac{R_{LDR}}{10kΩ + R_{LDR}} \]</p>

### **LDR (Light Dependent Resistor)**

<div style="display: flex; align-items: center;">
    <div style="flex: 1;">
        An LDR is a special resistor whose resistance value changes with light intensity. At high light intensity, the resistance value of the LDR decreases, while it increases at low light intensity. This makes the LDR ideal for applications where light intensity needs to be measured or controlled.
    </div>
    <div style="flex: 1; text-align: center;">
        <img src="https://upload.wikimedia.org/wikipedia/commons/1/1a/LDR.png" alt="LDR" style="max-width: 100%; height: auto;">
    </div>
</div>

### **Moving Solar Panel**

This is a project where this measurement was used in a practical project. The documentation and other related materials are available in German.

<div style="text-align: center; margin-top: 20px;">
    <iframe width="560" height="315" src="https://www.youtube.com/embed/AsCWFgdaryg" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>

<div style="display: flex; align-items: center; margin-top: 20px;">
    <p></p>
</div>

For more detailed information, you can refer to the project documentation [here](https://github.com/Nr44suessauer/nr44suessauer.github.io/blob/main/assets/pdf/docs/Dokumentation_smartes_solar_panel.pdf).

<div style="display: flex; align-items: center; margin-top: 20px;">
    <p></p>
</div>

<h3>Important Considerations</h3>
<div style="display: flex; align-items: center; margin-top: 20px;">
    <ul>
        <li><strong>Load Effect</strong>: Any connected load (e.g., a measuring device or an LED) affects the voltage divider, as it is connected in parallel with one of the resistors. This must be considered when calculating the output voltage.</li>
        <li><strong>Resistance Values</strong>: The sum of the resistance values \( R_1 \) and \( R_2 \) should not be too small to avoid excessive current flows and associated heat generation. Typical values range from 1kΩ to 100kΩ.</li>
        <li><strong>Potentiometer</strong>: A potentiometer can be used as an adjustable voltage divider to generate a variable output voltage.</li>
    </ul>
</div>

The voltage divider is thus a fundamental tool in electronics, distinguished by its simplicity and versatility.

---

[extra knowledge](https://www.technologystudent.com/elec1/ldr1.htm)
