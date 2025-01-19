---
layout: page
title: I-Scan
description: ResearchProject | Lifesize 3D Scanner based on Mac Mini 2012 with Linux and random Cams | still working at
img: https://github.com/Nr44suessauer/nr44suessauer.github.io/blob/main/assets/img/titelpages/I-Scan_prototyp.jpg?raw=true
importance: 2
category: all
---

[GitHub Repository](https://github.com/Nr44suessauer/I-Scan)

<div style="display: flex; align-items: left; margin-top: 20px;">
    <div style="flex: 1; padding-right: 10px;">
        <img src="https://github.com/Nr44suessauer/nr44suessauer.github.io/blob/main/assets/img/I-Scan/I-Scan_prototyp_seitlich.jpg?raw=true" alt="I-Scan Prototype Side View" style="width: 270px;">
    </div>
    <div style="flex: 1; padding-left: 10px;">
        <img src="https://github.com/Nr44suessauer/nr44suessauer.github.io/blob/main/assets/img/I-Scan/AufbauUndTeile.jpg?raw=true" alt="Setup and Parts" style="width: 300px;">
    </div>
    <div style="flex: 1; padding-left: 10px; padding-right: 20px;">
        <img src="https://github.com/Nr44suessauer/I-Scan/blob/main/docs/pictures/first_TestStation.jpg?raw=true" alt="First Test Station" style="width: 260px;">
    </div>
</div>

<div style="display: flex; align-items: center; margin-top: 20px;">
    <p></p>
</div>

### Objective

The goal of this project is to develop a cost-effective and easy-to-maintain 3D scanner that works independently of the hardware used and is suitable for various applications. Different methods will be supported, including:

- **Stereo Vision**: Using two cameras to calculate depth information.
- **Structured Light Scanning**: Projecting patterns onto the object to capture its geometry.
- **Photogrammetry**: Creating 3D models from 2D images. [Blogpost](https://deadlinedriven.dev/blog/2025/Photogrammetrie-I-SCAN/)
- **Triangulation**: Determining point positions by measuring angles and distances.
- **Spectral Analysis**: Using spectral analysis techniques to capture and analyze light wavelengths to obtain detailed material information and precise surface structures of the object.

A key focus is on replicability with common, readily available components. Additionally, a flexible and modular software architecture is being developed that not only allows the integration of various cameras and sensors but also ensures easy maintenance and expandability of the system.

### Documentation Structure

The project is presented in individual units. The entry point after the [Concept](https://deadlinedriven.dev/blog/2025/Concept_of_a_Movable_Camera_Setup_in_the_Z-Axis/) is the [API Documentation](https://deadlinedriven.dev/blog/2025/SystemArchitecture/), which shows various interaction possibilities. Through the use of this API documentation, technical processes are explained and clearly presented, including the interaction and setup of external modules. The idea is that once the structure is understood and how its modular setup can be used, you can jump to the things that are relevant for the respective use case.



```plaintext

Concept of a Movable Camera Setup in the Z-Axis
    └── Api Documentation & SystemArchitecture
        └── FlowDiagrams of Webserver Functions
        └── Api Documentation PositionUnit + Hardware
        └── Api Documentation LightingUnit + Hardware
        └── Picture_name/Data_name as graph
```

### Bonus Content

During the research and development of this project, additional bonus content has been made available. This includes a quickstart guide on setting up and using [Proxmox](https://deadlinedriven.dev/blog/2025/ProXmoX-Quickstart/) as an environment, which can help manage the software components and services required for the I-Scan project. These resources provide a comprehensive understanding of leveraging Proxmox for a robust and scalable development environment.

A guide on how to test the I-Scan API using [Postman](https://www.postman.com/) will be available soon. This guide will cover the basics of setting up Postman, creating requests, and interpreting responses to ensure the API functions as expected.

### Not included in the documentation version

Detailed workflows of the evaluation system are being developed and possible approaches are shown. The focus is initially on the setup and interaction with the system as the first part of the project.

The structure overview is regularly updated to refer to all project parts.

<div style="display: flex; align-items: center; margin-top: 100px;">
    <p></p>
</div>

<div style="display: flex; justify-content: center; margin-top: 20px;">
    <img src="https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExMDBnMGxjZjBxbTRzamd0Z2hyeDZmZm9zOXFwcm43d2J3eXBvb2tyNiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/NHUONhmbo448/giphy.webp" alt="I-Scan Gif" style="width: 400px;">
</div>
