---
layout: post
title: Systemarchitechture of I-Scan
date: 2025-1-18 16:40:00
description: Moveable Camera Setup , ctrl via Webserver
tags: I-Scan Research_Project Architechture Rest-API
categories: Research_Project
disqus_comments: true
featured: false
hidden: true
---

This document explains the architecture of the project [I-Scan](https://deadlinedriven.dev/projects/I-Scan/). Based on the available API with which the user can interact, the underlying processes and structures are explained. This includes the various HTTP methods used to communicate with the server, as well as the specific commands and their functionality within the system.

---

## Table of Contents

1. [System Architecture](#system-architecture)
2. [Introduction to REST APIs](#introduction-to-rest-apis)
   - [HTTP Methods](#http-methods)
3. [System Architecture Overview](#system-architecture-overview)
4. [API-DC Web Server](#api-dc-web-server)
5. [Explanation of Commands](#explanation-of-commands)
   - [DELETE](#delete)
   - [GET](#get)
   - [POST/PUT](#postput)
6. [Activity Diagrams](#activity-diagrams)
   - [Device Config](#device-config)
   - [Scan Config](#scan-config)

---

## Introduction to REST APIs

REST APIs (Representational State Transfer Application Programming Interfaces) are a set of rules and conventions for building and interacting with web services. They allow different systems to communicate over HTTP by using standard HTTP methods such as `GET`, `POST`, `PUT`, and `DELETE`. These methods enable clients to perform various operations on the server, such as retrieving configurations, updating settings, and managing scan processes.

### HTTP Methods

- **GET**: This method is used to retrieve data from the server. It is commonly used to read resources such as files, database entries, or other information. An example would be fetching a list of users.

- **POST**: This method is used to send new data to the server and create a new resource. An example would be creating a new user in a database.

- **PUT**: This method is used to update or replace an existing resource on the server. An example would be updating the information of an existing user.

- **DELETE**: This method is used to delete a resource from the server. An example would be removing a user from a database.

REST APIs are widely used due to their simplicity, scalability, and stateless nature, making them ideal for modern web applications. They provide a flexible and efficient way to exchange data between client and server, enabling the integration of different systems and services.

---

## System Architecture Overview

<div style="display: flex; align-items: center; margin-top: 20px;">
    <p></p>
</div>

<div style="display: flex; align-items: center;">
    <div style="flex: 1;">
        <img src="https://github.com/Nr44suessauer/I-Scan/blob/main/docs/diagram/Architecture_Diagram/SystemArchitecture%20V3.0%20%20Http_server%20+%20Lightmodule.png?raw=true" alt="System Architecture" width="90%">
    </div>
    <div style="flex: 1; padding-left: 20px;">
        The architecture of the <strong>I-Scan</strong> is shown. Through a <strong>REST API</strong>, the user/developer has the opportunity to interact with the various components in this diagram. A <strong>REST API</strong> and a web server are provided for this purpose. Now, the accessible commands are explained, and the processes behind them are discussed.
        The <strong> main system represents the user and has an evaluative function </strong>. Photogrammetry or similar processes will take place on this system. The I-Scan runs autonomously after it has been configured and started. Upon completion of the scan, the main system should retrieve the raw scan data via the REST API.
    </div>
</div>

---

## API-DC Web Server

| Command      | Description            | Variables Sent                                                                                                                                                | Return                                      | Example Call                                                                                                                                                                                                                                                                                                                                                   |
| ------------ | ---------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `DELETE`     | Delete general config  | -                                                                                                                                                             | Status                                      | `curl -X DELETE http://<I-Scan Ip adress>/api/config/general`                                                                                                                                                                                                                                                                                                  |
| `DELETE`     | Delete scan config     | -                                                                                                                                                             | Status                                      | `curl -X DELETE http://<I-Scan Ip adress>/api/config/scan`                                                                                                                                                                                                                                                                                                     |
| `GET`        | Get general config     | -                                                                                                                                                             | Configuration (IP addresses of units, etc.) | `curl -X GET http://<I-Scan Ip adress>/api/config/general`                                                                                                                                                                                                                                                                                                     |
| `GET`        | Get single measurement | `Cam X`, `Height of pic (Z-Axis)`, `Angle of pic (Y-Axis)`                                                                                                    | Single Measurement                          | `curl -X GET "http://<I-Scan Ip adress>/api/measurement?cam=X&height=Z&angle=Y"`                                                                                                                                                                                                                                                                               |
| `GET`        | Get scan status        | -                                                                                                                                                             | Status of progress/operation status         | `curl -X GET http://<I-Scan Ip adress>/api/scan/status`                                                                                                                                                                                                                                                                                                        |
| `PUT` `POST` | Update general config  | `General settings: PositionUnit IP addresses`, `Lighting Unit IP addresses`                                                                                   | Status                                      | `curl -X PUT -d '{"positionUnitIPs": [...], "lightingUnitIPs": [...]}' http://<I-Scan Ip adress>/api/config/general`                                                                                                                                                                                                                                           |
| `PUT` `POST` | Update lighting config | `Lighting Unit`, `Color HEX code (RGB + intensity = 4 Byte)`                                                                                                  | Status                                      | `curl -X PUT -d '{"lightingUnit": ..., "colorHex": ...}' http://<I-Scan Ip adress>/api/config/lighting`                                                                                                                                                                                                                                                        |
| `PUT` `POST` | Update scan config     | `Measurement units in use`, `Sizes`, `Module head offsets`, `Number of measurements`, `Max distance for Z movement`, `Distance to object`, `Height of object` | Status                                      | `curl -X PUT -d '{"MeasurementUnitInUse": ["Top", "Mid", "Bot"], "MeasurementUnitSize": ["15","15","15"], "ModuleHeadOffsets": ["5cm", "7.5cm", "5cm", "7.5cm", "5cm", "7.5cm", "5cm", "7.5cm"], "NumberOfMeasurements": "30", "MaxDistanceZmove": "150cm", "DistanceToCenter": "100cm", "HeightOfCenter": "50cm"}' http://<I-Scan Ip adress>/api/config/scan` |
| `POST`       | Start scan             | -                                                                                                                                                             | Status                                      | `curl -X POST http://<I-Scan Ip adress>/api/scan/start`                                                                                                                                                                                                                                                                                                        |

## Explanation of Commands

<div style="display: flex; align-items: center; margin-top: 20px;">
    <p></p>
</div>

#### DELETE

- **Delete general config**: This command deletes the general configuration of the system. No variables are sent, and the return value is the status of the operation. Example call: `curl -X DELETE http://<I-Scan Ip adress>/api/config/general`
- **Delete scan config**: This command deletes the configuration for the scanning process. No variables are sent, and the return value is the status of the operation. Example call: `curl -X DELETE http://<I-Scan Ip adress>/api/config/scan`

#### GET

- **Get general config**: This command retrieves the general configuration of the system, such as the IP addresses of the units. No variables are sent, and the return value is the configuration. Example call: `curl -X GET http://<I-Scan Ip adress>/api/config/general`
- **Get single measurement**: This command retrieves a single measurement from the camera. The variables sent are the camera (Cam X), the height of the measurement (Z-Axis), and the angle of the measurement (Y-Axis). The return value is the single measurement. Example call: `curl -X GET "http://<I-Scan Ip adress>/api/measurement?cam=X&height=Z&angle=Y"`
- **Get scan status**: This command retrieves the status of the scanning process. No variables are sent, and the return value is the progress or operation status. Example call: `curl -X GET http://<I-Scan Ip adress>/api/scan/status`

#### POST/PUT

- **Update general config**: This command updates the general configuration of the system. The variables sent are the IP addresses of the position units and lighting units, as well as the COM ports for the measurement units. The return value is the status of the operation. Example call: `curl -X PUT -d '{"IpPositionUnitTop": "192.168.1.10", "IpPositionUnitMid": "192.168.1.11", "IpPositionUnitBot": "192.168.1.12", "IpLightingUnitA": "192.168.1.20", "IpLightingUnitB": "192.168.1.21", "ComPortMeasurementUnitTop": "/dev/ttyUSB0", "ComPortMeasurementUnitMid": "/dev/ttyUSB1", "ComPortMeasurementUnitBot": "/dev/ttyUSB2"}' http://<I-Scan Ip adress>/api/config/general`

- **Update lighting config**: This command updates the configuration of the lighting unit. The variables sent are the lighting unit and the color HEX code (RGB + intensity = 4 bytes). The return value is the status of the operation. Example call: `curl -X PUT -d '{"lightingUnit": ..., "colorHex": ...}' http://<I-Scan Ip adress>/api/config/lighting`
- **Update scan config**: This command updates the configuration for the scanning process. The variables sent are the measurement units in use, their sizes, module head offsets, the number of measurements, the maximum distance for Z movement, the distance to the object, and the height of the object. The return value is the status of the operation. Example call: `curl -X PUT -d '{"MeasurementUnitInUse": ["Top", "Mid", "Bot"], "MeasurementUnitSize": ["15","15","15"], "ModuleHeadOffsets": ["5cm", "7.5cm", "5cm", "7.5cm", "5cm", "7.5cm", "5cm", "7.5cm"], "NumberOfMeasurements": "30", "MaxDistanceZmove": "150cm", "DistanceToCenter": "100cm", "HeightOfCenter": "50cm"}' http://<I-Scan Ip adress>/api/config/scan`
- **Start scan**: This command starts the scanning process. No variables are sent, and the return value is the status of the operation. Example call: `curl -X POST http://<I-Scan Ip adress>/api/scan/start`

---

## Activity Diagrams

<div style="display: flex; align-items: center; margin-top: 20px;">
    <p></p>
</div>

**Table of diagrams**

1. [device config](#device-config)
2. [scan config](#scan-config)

#### **Device Config**

This is the initial process to connect and verify all subsystems. It is the first step to use the scanner. The mapping of PositionUnit and MeasurementUnit (camera) is crucial, as the main system coordinates the process.

<div style="display: flex; align-items: center; margin-top: 20px;">
    <div style="flex: 1; text-align: center;">
        <img src="https://raw.githubusercontent.com/Nr44suessauer/I-Scan/eac7a51ff977a7fc9e4928790c771728cb8c71d2/docs/diagram/FlowDiagrams_API_Webserver/device%20Config.svg" alt="Device Configuration Flow Diagram" style="width: 90%; height: 120%;">
    </div>
    <div style="flex: 1; padding-left: 20px;">
    <h2>Steps in the Diagram</h2>
    <ol>
        <li><strong>Send JSON (Post/Put command)</strong>
            <ul>
                <li>Configuration for device connection</li>
            </ul>
            <pre><code class="language-json">
    {
        "IpPositionUnitTop": "192.168.1.10",
        "IpPositionUnitMid": "192.168.1.11",
        "IpPositionUnitBot": "192.168.1.12",
        "IpLightingUnitA": "192.168.1.20",
        "IpLightingUnitB": "192.168.1.21",
        "ComPortMeasurementUnitTop": "/dev/ttyUSB0",
        "ComPortMeasurementUnitMid": "/dev/ttyUSB1",
        "ComPortMeasurementUnitBot": "/dev/ttyUSB2"
    }
            </code></pre>
        </li>
        <li><strong>Save input data</strong>
            <ul>
                <li>The web server receives the JSON and triggers further actions</li>
            </ul>
        </li>
        <li><strong>Check IP address of Position Units</strong>
            <ul>
                <li>Establish connection via IP address with Position Unit X</li>
            </ul>
        </li>
        <li><strong>Check IP address of Lighting Units</strong>
            <ul>
                <li>Establish connection via IP address with Lighting Unit X</li>
            </ul>
        </li>
        <li><strong>Check COM ports</strong>
            <ul>
                <li>The camera stream is checked, in future versions, this may not necessarily be a camera.</li>
            </ul>
        </li>
    </ol>
    </div>
</div>
<div style="display: flex; align-items: center; margin-top: 20px;">
    <p></p>
</div>

**Results**

- The results of the configuration will be available at /config/status after the routine is completed.
  > **Note**: can combined with the "single measurement" process.

<div style="display: flex; align-items: center; margin-top: 10px;">
    <p></p>
</div>

```json
{
  "IpPositionUnitTop": "192.168.1.10",
  "IpPositionUnitMid": "192.168.1.11",
  "IpPositionUnitBot": "192.168.1.12",
  "IpLightingUnitA": "192.168.1.20",
  "IpLightingUnitB": "192.168.1.21",
  "ComPortMeasurementUnitTop": "/dev/ttyUSB0",
  "ComPortMeasurementUnitMid": "/dev/ttyUSB1",
  "ComPortMeasurementUnitBot": "/dev/ttyUSB2",

  "IpPositionUnitTopStatus": "connected",
  "IpPositionUnitMidStatus": "connected",
  "IpPositionUnitBotStatus": "connected",
  "IpLightingUnitAStatus": "connected",
  "IpLightingUnitBStatus": "connected",
  "ComPortMeasurementUnitTopStatus": "active",
  "ComPortMeasurementUnitMidStatus": "active",
  "ComPortMeasurementUnitBotStatus": "active",

  "IpPositionUnitTopMapping": "ComPortMeasurementUnitTop",
  "IpPositionUnitMidMapping": "ComPortMeasurementUnitMid",
  "IpPositionUnitBotMapping": "ComPortMeasurementUnitBot"
}
```

<div style="display: flex; align-items: center; margin-top: 50px;">
    <p></p>
</div>

---

## Scan config

<div style="display: flex; align-items: center; margin-top: 50px;">
<p></p>
</div>

<div style="display: flex; align-items: center;">
   <div style="flex: 1;">
      <img src="https://raw.githubusercontent.com/Nr44suessauer/I-Scan/e3244204858e6e4e7f5cfc8a78d4bcee4665ab8d/docs/diagram/FlowDiagrams_API_Webserver/Scan%20config.svg" alt="Scan Config Diagramm" width="70%">
   </div>
   <div style="flex: 1; padding-left: 0px;">
   In this configuration step, parameters required for aligning the machine are processed. This assumes that <strong>all devices being used are also configured</strong>. Currently, both configuration processes (device config & scan config) are not dependent on each other.
   <div style="display: flex; align-items: center; margin-top: 50px;">
   <p></p>
   </div>
   <h3>Scan Configuration</h3>
   <p>The parameters for configuring the scan are defined, explained, and put into context here:</p>
   <ol>
      <li><a href="#send-json-postput-command">Send JSON (Post/Put command)</a></li>
      <li><a href="#maximum-delta-z">Maximum Delta Z</a>
         <ul>
            <li><a href="#integral-representation">Integral Representation and Height Calculation</a></li>
            <li><a href="#upper-max-lower-max">Upper Max / Lower Max Table</a></li>
         </ul>
      </li>
      <li><a href="#module-offset">Module Offset</a></li>
      <li><a href="#calculation-of-measurement-angle">Calculation of Measurement Angle</a></li>
      <li><a href="#resolution-calculation">Resolution Calculation</a></li>
   </ol>
   </div> 
</div>

<div style="display: flex; align-items: center; margin-top: 50px;">
   <p></p>
</div>
---

### <a id="send-json-postput-command"></a>Send JSON (Post/Put command)

- Configuration of the "next" scan

```json
{
  "MeasurementUnitInUse": ["Top", "Mid", "Bot"],
  "MeasurementUnitSize": ["15", "15", "15"],
  "ModuleHeadOffsets": ["5cm", "7.5cm", "5cm", "7.5cm", "5cm", "7.5cm", "5cm", "7.5cm"],

  "NumberOfMeasurements": "30",
  "MaxDistanceZmove": "150cm",

  "DistanceToCenter": "100cm",
  "HeightOfCenter": "50cm"
}
```

### <a id="maximum-delta-z"></a>Maximum Delta Z

If the endstop Z is at 0 cm and the maximum height of the device is 210 cm, the maximum Delta Z can be calculated.

To calculate the maximum height, we need to know the size of each unit. In our example, these are standardized to 15 cm.

The unit´s are labeld (Bot = 0, Mid = 1, Top = 2) and is the variable Z Endstop Unit.

Substituting the values:

$$\Delta Z_{\text{max Unit}} = (\text{Z}_{\text{Endstop Unit}} \times \text{Unit Height} + \text{Maximum Height I-Scan}) - (\text{Z}_{\text{Endstop Mid}} \times \text{Unit Height} + \text{Z}_{\text{Endstop Top}} \times \text{Unit Height})$$

So the ΔZmax for Unit bot is 165 cm.

> note: This formula is only for three same size units.

---

### <a id="integral-representation"></a>**Integral Representation and Height Calculation**

<div style="display: flex; align-items: center; margin-top: 20px;">
    <p></p>
</div>

#### 1. **Discrete vs. Continuous Representation**

The discrete representation is based on fixed unit sizes (e.g., 15 cm per unit), while the continuous representation uses integrals to model units of varying sizes.

#### 2. **Integral Representation**

The heights of the units are represented using continuous functions:

**Definition of Continuous Functions:**
- $f_{\text{bot}}(z)$: Height contribution of the bottom unit.
- $f_{\text{mid}}(z)$: Height contribution of the middle unit.
- $f_{\text{top}}(z)$: Height contribution of the top unit.

**Integrate Over the Range:**
- $\int_{a}^{b} f_{\text{bot}}(z) \, dz$: This integral represents the height contribution of the bottom unit over the range from $a$ to $b$.
- $\int_{a}^{b} f_{\text{mid}}(z) \, dz$: This integral represents the height contribution of the middle unit over the range from $a$ to $b$.
- $\int_{a}^{b} f_{\text{top}}(z) \, dz$: This integral represents the height contribution of the top unit over the range from $a$ to $b$.

**Calculate the Difference:**

$$\Delta Z_{\text{max}} = \left( \text{Maximum Height I-Scan} \right) - \left( \int_{a}^{b} f_{\text{bot}}(z) \, dz + \int_{a}^{b} f_{\text{mid}}(z) \, dz + \int_{a}^{b} f_{\text{top}}(z) \, dz \right)$$

This approach provides a continuous representation of the height changes of each unit.

---

### <a id="upper-max-lower-max"></a>**Upper Max / Lower Max Table**

The table below shows the dependency of the maximum and minimum heights of each unit based on the positions of the other units. The reference is taken from the bottom of the unit.

| Unit | Upper Border (Maximum) | Lower Border (Initial Position) | Condition Upper Border | Condition Lower Border |
| ---- | ---------------------- | ------------------------------- | ---------------------- | ---------------------- |
| **Bot** | $\text{Max } Z_{\text{bot}} = \text{Maximum Height I-Scan} - \left( \int_{a}^{b} f_{\text{bot}}(z) \, dz + \int_{a}^{b} f_{\text{mid}}(z) \, dz + \int_{a}^{b} f_{\text{top}}(z) \, dz \right)$ | $\text{Min } Z_{\text{bot}} = \text{Initial Height I-Scan}$ | $Z_{\text{mid}}$ & $Z_{\text{top}}$ = $Z_{\text{max}}$ | - |
| **Mid** | $\text{Max } Z_{\text{mid}} = \text{Maximum Height I-Scan} - \left( \int_{a}^{b} f_{\text{mid}}(z) \, dz + \int_{a}^{b} f_{\text{top}}(z) \, dz \right)$ | $\text{Min } Z_{\text{mid}} = \text{Initial Height I-Scan} + \int_{a}^{b} f_{\text{bot}}(z) \, dz$ | $Z_{\text{top}}$ = $Z_{\text{max}}$ | $Z_{\text{bot}}$ = $Z_{\text{min}}$ |
| **Top** | $\text{Max } Z_{\text{top}} = \text{Maximum Height I-Scan} - \int_{a}^{b} f_{\text{top}}(z) \, dz$ | $\text{Min } Z_{\text{top}} = \text{Initial Height I-Scan} + \left( \int_{a}^{b} f_{\text{bot}}(z) \, dz + \int_{a}^{b} f_{\text{mid}}(z) \, dz \right)$ | - | $Z_{\text{mid}}$ & $Z_{\text{bot}}$ = $Z_{\text{min}}$ |

<div style="display: flex; align-items: center; margin-top: 20px;">
    <p></p>
</div>

### Table Description:

- **Upper Border (Maximum):** Calculated by subtracting the heights of the units above from the maximum height of the I-Scan device.
- **Lower Border (Initial Position):** Calculated by adding the heights of the units below to the initial height of the I-Scan device.

**Conditions:**

- **Z<sub>mid</sub> & Z<sub>top</sub> = Z<sub>max</sub>** : Middle and top units at maximum heights.
- **Z<sub>bot</sub> = Z<sub>min</sub>** : Bottom unit at minimum height.
- **Z<sub>top</sub> = Z<sub>max</sub>** : Top unit at maximum height.
- **Z<sub>mid</sub> & Z<sub>bot</sub> = Z<sub>min</sub>** : Middle and bottom units at minimum heights.

### General Movement condition

- **Z<sub>bot</sub> < Z<sub>mid</sub> < Z<sub>top</sub>**

---

### Module Offset

The module offset indicates the 2-dimensional offset from the reference point $(X_{\text{unit}}, Y_{\text{unit}})$. This value, along with the unit position, is required to determine the exact position of the modul. The offset can vary from module to module. It is assumed that measuring tools are mounted centrally on the units. If this is not the case, an additional offset vector must be considered.

To determine the exact position $P_{\text{unit}}$ of the measurement unit, the following formulas can be used:

#### For the 2D Case (X, Y Plane):

$$P_{\text{unit}} = \left( X_{\text{unit}} + \text{Offset}_{X}, Y_{\text{unit}} + \text{Offset}_{Y} \right)$$

#### For the 3D Case (X, Y, Z Space):

$$P_{\text{unit}} = \left( X_{\text{unit}} + \text{Offset}_{X}, Y_{\text{unit}} + \text{Offset}_{Y}, Z_{\text{unit}} + \text{Offset}_{Z} \right)$$

### Definitions:

- $X_{\text{unit}}, Y_{\text{unit}}, Z_{\text{unit}}$ represent the original position of the measurement unit in 3D space.
- $\text{Offset}_{X}$ is the offset along the X-axis.
- $\text{Offset}_{Y}$ is the offset along the Y-axis.
- $\text{Offset}_{Z}$ is the offset along the Z-axis (if needed).

**Note:** The $\text{Offset}_{Z}$ is not required for the scanning process but is used later during the processing of measurements on the external system.

By applying these formulas, the module's position can be precisely calculated and adjusted for varying mounting configurations.

---

### <a id="calculation-of-measurement-angle"></a>Calculation of Measurement Angle

<div style="display: flex; align-items: flex-start;">
   <div style="flex: 1; padding-right: 20px;">
      <h3>Right-Angled Triangles</h3>
      <p>In this chapter, we will show how to calculate the angle $\alpha$ in a right-angled triangle when one side is variable. For our example:</p>
      <ul>
         <li><strong>Side A:</strong> $Z_{\text{dist}}$</li>
         <li><strong>Side B:</strong> <code>DistanceToCenter</code> (150 cm as defined in the JSON configuration)</li>
      </ul>
      <h4>Mathematical Derivation</h4>
      <p>In a right-angled triangle, the tangent of an angle is defined. Since $\alpha$ is the angle opposite Side A and Side B is the adjacent side, it follows:</p>
      <p>$\tan(\alpha) = \frac{Z_{\text{dist}}}{\text{DistanceToCenter}}$</p>
      <p>To calculate $\alpha$, the arctangent is used:</p>
      <p>$\alpha = \arctan\left(\frac{Z_{\text{dist}}}{\text{DistanceToCenter}}\right)$</p>
      <p><strong>Example:</strong> With $Z_{\text{dist}} = 150$ cm and $\text{DistanceToCenter} = 150$ cm:</p>
      <p>$\alpha = \arctan\left(\frac{150}{150}\right) = 45°$</p>
      <p>This method allows substituting any value for $Z_{\text{dist}}$ to calculate the corresponding angle $\alpha$ in a right-angled triangle.</p>
   </div>
   <div style="flex: 1; display: flex; justify-content: center; align-items: center;">
      <img src="https://github.com/Nr44suessauer/I-Scan/blob/main/docs/diagram/mathAnimations/Triangle_center.png?raw=true" alt="Angle Calculation Diagram" style="max-width: 100%;">
   </div>
</div>

---

<div style="display: flex; align-items: center;">
    <div style="flex: 1;">
        <h4>Define Measurement Center</h4>
        <p>The variable $Z_{\text{dist}}$ can also be used to determine the measurement center. This ensures that larger objects remain centered during measurements. The calculation is as follows:</p>
        <p>
            $Z_{\text{dist}} = Z_{\text{center}} - Z_{\text{module}}$
        </p>
        <p>Here, $Z_{\text{module}}$ represents the height of the respective unit, $Z_{\text{center}}$ is our defined center point.</p>
        <p>This formula helps in maintaining the central alignment of the modules during the scanning process.</p>
        <h4>Z<sub>module</sub> Calculation</h4>
        <p>The height $Z_{\text{module}}$ is calculated by adding the height of the unit $Z_{\text{unit}}$ and its offset $\text{Offset}_{Y}$:</p>
        <p>
            $Z_{\text{module}} = Z_{\text{unit}} + \text{Offset}_{Y}$
        </p>
        <p>This ensures that the module's height is accurately determined by considering both the unit's height and its offset.</p>
    </div>
    <div style="flex: 1; text-align: center;">
        <img src="https://github.com/Nr44suessauer/I-Scan/blob/main/docs/diagram/mathAnimations/Triangle_newCenter.gif?raw=true" alt="Measurement Center Diagram" style="max-width: 100%;">
    </div>
</div>

<h4>Summary</h4>
<p>In summary, $Z_{\text{dist}}$ is our relative distance to the center, and the angle $\alpha$ is calculated based on this distance. This ensures accurate and centered measurements during the scanning process.</p>

<div style="display: flex; align-items: center; margin-top: 20px;">
    <p></p>
</div>

---

### <a id="resolution-calculation"></a>**Resolution Calculation**

For 30 measurements taken over a distance of 150 cm, the distance between measurement points is calculated as follows:

Here, &Delta; Z<sub>scan</sub> is the value `MaxDistanceZmove` from the JSON configuration provided earlier.

<div style="display: flex; align-items: center; margin-top: 20px;">
    <p></p>
</div>

$$\text{Distance Between Measurement Points} = \frac{\Delta Z_{\text{scan}}}{\text{Number of Measurements}} = \frac{150 \text{ cm}}{30} = 5 \text{ cm}$$

The distance between each measurement is approximately **5 cm**.

$$\text{Resolution} = \text{Distance Between Measurement Points} \times \text{Number of Measurements}$$

<div style="display: flex; align-items: center; margin-top: 20px;">
    <p></p>
</div>

#### **Condition for &Delta; Z<sub>scan</sub>**

It is important to ensure that the value of &Delta; Z<sub>scan</sub> (the maximum distance the Z-axis can move during a scan) is less than or equal to &Delta; Z<sub>max</sub> (the maximum allowable height difference).

$$\Delta Z_{\text{scan}} \leq \Delta Z_{\text{max}}$$

---

<div style="display: flex; align-items: center; margin-top: 100px;">
    <p></p>
</div>
<div style="display: flex; align-items: center; margin-top: 50px;">
    <p></p>
</div>

<div style="text-align: center;">
    <img src="https://media1.tenor.com/m/GBr8-ytUtA0AAAAd/power-button-press-any-button.gif" alt="Flow Diagram" style="width: 50%;">
</div>
