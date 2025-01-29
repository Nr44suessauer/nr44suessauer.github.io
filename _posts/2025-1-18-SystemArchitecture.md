---
layout: post
title: Systemarchitechture of I-Scan
date: 2025-1-18 16:40:00
description: Moveable Camera Setup , ctrl via Webserver
tags: I-Scan Research_Project Architechture Rest-API   
categories: Research_Project
disqus_comments: true
featured: false
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

| Command  | Description            | Variables Sent                                                                 | Return                                      | Example Call                                                                 |
|----------|------------------------|-------------------------------------------------------------------------------|---------------------------------------------|------------------------------------------------------------------------------|
| `DELETE` | Delete general config  | -                                                                             | Status                                      | `curl -X DELETE http://<I-Scan Ip adress>/api/config/general`                          |
| `DELETE` | Delete scan config     | -                                                                             | Status                                      | `curl -X DELETE http://<I-Scan Ip adress>/api/config/scan`                             |
| `GET`    | Get general config     | -                                                                             | Configuration (IP addresses of units, etc.) | `curl -X GET http://<I-Scan Ip adress>/api/config/general`                             |
| `GET`    | Get single picture     | `Cam X`, `Height of pic (Z-Axis)`, `Angle of pic (Y-Axis)`                     | Single Picture                              | `curl -X GET "http://<I-Scan Ip adress>/api/picture?cam=X&height=Z&angle=Y"`           |
| `GET`    | Get scan status        | -                                                                             | Status of progress/operation status         | `curl -X GET http://<I-Scan Ip adress>/api/scan/status`                                |
| `PUT` `POST`    | Update general config  | `General settings: PositionUnit IP addresses`, `Lighting Unit IP addresses`   | Status                                      | `curl -X PUT -d '{"positionUnitIPs": [...], "lightingUnitIPs": [...]}' http://<I-Scan Ip adress>/api/config/general` |
| `PUT` `POST` | Update lighting config | `Lighting Unit`, `Color HEX code (RGB + intensity = 4 Byte)`                  | Status                                      | `curl -X PUT -d '{"lightingUnit": ..., "colorHex": ...}' http://<I-Scan Ip adress>/api/config/lighting` |
| `PUT` `POST`| Update scan config     | `Measurement units in use`, `Sizes`, `Module head offsets`, `Number of pictures`, `Max distance for Z movement`, `Distance to object`, `Height of object` | Status | `curl -X PUT -d '{"MeasurementUnitInUse": ["Top", "Mid", "Bot"], "MeasurementUnitSize": ["15","15","15"], "ModuleHeadOffsets": ["5cm", "7.5cm", "5cm", "7.5cm", "5cm", "7.5cm", "5cm", "7.5cm"], "NumberOfPictures": "30", "MaxDistanceZmove": "150cm", "DistanceToObject": "100cm", "HeightOfObject": "50cm"}' http://<I-Scan Ip adress>/api/config/scan` |
| `POST`   | Start scan             | -                                                                             | Status                                      | `curl -X POST http://<I-Scan Ip adress>/api/scan/start`                                |

## Explanation of Commands

<div style="display: flex; align-items: center; margin-top: 20px;">
    <p></p>
</div>

#### DELETE

- **Delete general config**: This command deletes the general configuration of the system. No variables are sent, and the return value is the status of the operation. Example call: `curl -X DELETE http://<I-Scan Ip adress>/api/config/general`
- **Delete scan config**: This command deletes the configuration for the scanning process. No variables are sent, and the return value is the status of the operation. Example call: `curl -X DELETE http://<I-Scan Ip adress>/api/config/scan`

#### GET

- **Get general config**: This command retrieves the general configuration of the system, such as the IP addresses of the units. No variables are sent, and the return value is the configuration. Example call: `curl -X GET http://<I-Scan Ip adress>/api/config/general`
- **Get single picture**: This command retrieves a single picture from the camera. The variables sent are the camera (Cam X), the height of the picture (Z-Axis), and the angle of the picture (Y-Axis). The return value is the single picture. Example call: `curl -X GET "http://<I-Scan Ip adress>/api/picture?cam=X&height=Z&angle=Y"`
- **Get scan status**: This command retrieves the status of the scanning process. No variables are sent, and the return value is the progress or operation status. Example call: `curl -X GET http://<I-Scan Ip adress>/api/scan/status`

#### POST/PUT

- **Update general config**: This command updates the general configuration of the system. The variables sent are the IP addresses of the position units and lighting units, as well as the COM ports for the measurement units. The return value is the status of the operation. Example call: `curl -X PUT -d '{"IpPositionUnitTop": "192.168.1.10", "IpPositionUnitMid": "192.168.1.11", "IpPositionUnitBot": "192.168.1.12", "IpLightingUnitA": "192.168.1.20", "IpLightingUnitB": "192.168.1.21", "ComPortMeasurementUnitTop": "/dev/ttyUSB0", "ComPortMeasurementUnitMid": "/dev/ttyUSB1", "ComPortMeasurementUnitBot": "/dev/ttyUSB2"}' http://<I-Scan Ip adress>/api/config/general`

- **Update lighting config**: This command updates the configuration of the lighting unit. The variables sent are the lighting unit and the color HEX code (RGB + intensity = 4 bytes). The return value is the status of the operation. Example call: `curl -X PUT -d '{"lightingUnit": ..., "colorHex": ...}' http://<I-Scan Ip adress>/api/config/lighting`
- **Update scan config**: This command updates the configuration for the scanning process. The variables sent are the measurement units in use, their sizes, module head offsets, the number of pictures, the maximum distance for Z movement, the distance to the object, and the height of the object. The return value is the status of the operation. Example call: `curl -X PUT -d '{"MeasurementUnitInUse": ["Top", "Mid", "Bot"], "MeasurementUnitSize": ["15","15","15"], "ModuleHeadOffsets": ["5cm", "7.5cm", "5cm", "7.5cm", "5cm", "7.5cm", "5cm", "7.5cm"], "NumberOfPictures": "30", "MaxDistanceZmove": "150cm", "DistanceToObject": "100cm", "HeightOfObject": "50cm"}' http://<I-Scan Ip adress>/api/config/scan`
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
> **Note**: can combined with the "single picture" process.

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
    "MeasurementUnitSize" : ["15","15","15"],
    "ModuleHeadOffsets": ["5cm", "7.5cm", "5cm", "7.5cm", "5cm", "7.5cm", "5cm", "7.5cm"],

    "NumberOfPictures": "30",
    "MaxDistanceZmove": "150cm",

    "DistanceToObject": "100cm",
    "HeightOfObject": "50cm"
}
```

### <a id="maximum-delta-z"></a>Maximum Delta Z

If the endstop Z is at 0 cm and the maximum height of the device is 210 cm, the maximum Delta Z can be calculated.

To calculate the maximum height, we need to know the size of each unit. In our example, these are standardized to 15 cm.

The unit´s are labeld (Bot = 0, Mid = 1, Top = 2) and is the variable Z Endstop Unit.

Substituting the values:

<html lang="de">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title></title>
    <script src="https://polyfill.io/v3/polyfill.min.js?features=es6"></script>
    <script id="MathJax-script" async src="https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js"></script>
</head>
<body>
    <p>
        \[\Delta Z_{\text{max Unit}} = (\text{Z}_{\text{Endstop Unit}} \times \text{Unit Height} + \text{Maximum Height I-Scan}) - (\text{Z}_{\text{Endstop Mid}} \times \text{Unit Height} + \text{Z}_{\text{Endstop Top}} \times \text{Unit Height})\]
    </p>
</body>
</html>

So the ΔZmax for Unit bot is 165 cm.
>note: This formula is only for three same size units.
---

### <a id="integral-representation"></a>**Integral Representation and Height Calculation**

<div style="display: flex; align-items: center; margin-top: 20px;">
    <p></p>
</div>

#### 1. **Discrete vs. Continuous Representation**
The discrete representation is based on fixed unit sizes (e.g., 15 cm per unit), while the continuous representation uses integrals to model units of varying sizes.



#### 2. **Integral Representation**
The heights of the units are represented using continuous functions:

<html lang="de">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title></title>
    <script src="https://polyfill.io/v3/polyfill.min.js?features=es6"></script>
    <script id="MathJax-script" async src="https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js"></script>
</head>
<body>
    <ol>
        <li><strong>Definition of Continuous Functions:</strong>
            <ul>
                <li>\( f_{\text{bot}}(z) \): Height contribution of the bottom unit.</li>
                <li>\( f_{\text{mid}}(z) \): Height contribution of the middle unit.</li>
                <li>\( f_{\text{top}}(z) \): Height contribution of the top unit.</li>
            </ul>     
        </li>
        <div style="display: flex; align-items: center; margin-top: 50px;">
        <p></p>
        </div>
        <li><strong>Integrate Over the Range:</strong>
            <ul>
                <li>\(\int_{a}^{b} f_{\text{bot}}(z) \, dz\): This integral represents the height contribution of the bottom unit over the range from \(a\) to \(b\).</li>
                <li>\(\int_{a}^{b} f_{\text{mid}}(z) \, dz\): This integral represents the height contribution of the middle unit over the range from \(a\) to \(b\).</li>
                <li>\(\int_{a}^{b} f_{\text{top}}(z) \, dz\): This integral represents the height contribution of the top unit over the range from \(a\) to \(b\).</li>
            </ul>
        </li>
        <div style="display: flex; align-items: center; margin-top: 20px;">
    <p></p>
    </div>
        <li><strong>Calculate the Difference:</strong>
            <p>
                \[
                \Delta Z_{\text{max}} = \left( \text{Maximum Height I-Scan} \right) - \left( \int_{a}^{b} f_{\text{bot}}(z) \, dz + \int_{a}^{b} f_{\text{mid}}(z) \, dz + \int_{a}^{b} f_{\text{top}}(z) \, dz \right)
                \]
            </p>
        </li>
    </ol>
</body>
</html>

This approach provides a continuous representation of the height changes of each unit.

---

### <a id="upper-max-lower-max"></a>**Upper Max / Lower Max Table**
The table below shows the dependency of the maximum and minimum heights of each unit based on the positions of the other units. The reference is taken from the bottom of the unit.

<table border="1">
    <thead>
        <tr>
            <th>Unit</th>
            <th>Upper Border (Maximum)</th>
            <th>Lower Border (Initial Position)</th>
            <th>Condition Upper Border</th>
            <th>Condition Lower Border</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td><strong>Bot</strong></td>
            <td>\( \text{Max } Z_{\text{bot}} = \text{Maximum Height I-Scan} - \left( \int_{a}^{b} f_{\text{bot}}(z) \, dz + \int_{a}^{b} f_{\text{mid}}(z) \, dz + \int_{a}^{b} f_{\text{top}}(z) \, dz \right) \)</td>
            <td>\( \text{Min } Z_{\text{bot}} = \text{Initial Height I-Scan} \)</td>
            <td>mid & top = max</td>
            <td>-</td>
        </tr>
        <tr>
            <td><strong>Mid</strong></td>
            <td>\( \text{Max } Z_{\text{mid}} = \text{Maximum Height I-Scan} - \left( \int_{a}^{b} f_{\text{mid}}(z) \, dz + \int_{a}^{b} f_{\text{top}}(z) \, dz \right) \)</td>
            <td>\( \text{Min } Z_{\text{mid}} = \text{Initial Height I-Scan} + \int_{a}^{b} f_{\text{bot}}(z) \, dz \)</td>
            <td>top = max</td>
            <td>bot = min</td>
        </tr>
        <tr>
            <td><strong>Top</strong></td>
            <td>\( \text{Max } Z_{\text{top}} = \text{Maximum Height I-Scan} - \int_{a}^{b} f_{\text{top}}(z) \, dz \)</td>
            <td>\( \text{Min } Z_{\text{top}} = \text{Initial Height I-Scan} + \left( \int_{a}^{b} f_{\text{bot}}(z) \, dz + \int_{a}^{b} f_{\text{mid}}(z) \, dz \right) \)</td>
            <td>-</td>
            <td>mid & bot = min</td>
        </tr>
    </tbody>
</table>

<div style="display: flex; align-items: center; margin-top: 20px;">
    <p></p>
</div>

### **Table Description:**
- **Upper Border (Maximum):**  
  The maximum height of each unit is calculated by subtracting the heights of the units above it from the maximum height of the I-Scan device.

- **Lower Border (Initial Position):**  
  The minimum height of each unit is calculated by adding the heights of the units below it to the initial height of the I-Scan device.

- **Conditions:**  
  - **"mid & top = max":** The middle and top units are at their maximum heights.
  - **"bot = min":** The bottom unit is at its minimum height.
  - **"top = max":** The top unit is at its maximum height.
  - **"mid & bot = min":** The middle and bottom units are at their minimum heights.

---

### <a id="resolution-calculation"></a>**Resolution Calculation**

For 30 pictures taken over a distance of 150 cm, the distance between measurement points is calculated as follows:

Here, &Delta; Z<sub>scan</sub> is the value `MaxDistanceZmove` from the JSON configuration provided earlier.

<div style="display: flex; align-items: center; margin-top: 20px;">
    <p></p>
</div>

<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Resolution Calculation</title>
    <script src="https://polyfill.io/v3/polyfill.min.js?features=es6"></script>
    <script id="MathJax-script" async src="https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js"></script>
</head>
<body>
    <p>
        \[
        \text{Distance Between Measurement Points} = \frac{\Delta Z_{\text{scan}}}{\text{Number of Pictures}} = \frac{150 \text{ cm}}{30} = 5 \text{ cm}
        \]
    </p>
</body>
</html>

The distance between each picture is approximately **5 cm**.


<div style="display: flex; align-items: center; margin-top: 20px;">
    <p></p>
</div>

#### **Condition for &Delta; Z<sub>scan</sub>**

It is important to ensure that the value of &Delta; Z<sub>scan</sub> (the maximum distance the Z-axis can move during a scan) is less than or equal to &Delta; Z<sub>max</sub> (the maximum allowable height difference).

<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Condition for Delta Z</title>
    <script src="https://polyfill.io/v3/polyfill.min.js?features=es6"></script>
    <script id="MathJax-script" async src="https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js"></script>
</head>
<body>
    <p>
        \[ 
        \Delta Z_{\text{scan}} \leq \Delta Z_{\text{max}} 
        \]
    </p>
</body>
</html>

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

