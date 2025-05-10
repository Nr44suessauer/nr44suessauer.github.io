---
layout: post
title: Photogrammetry
date: 2025-01-09 10:00:00
description: Research for a project called I-Scan, which will be a 3D scanner
tags: Photogrammetry I-Scan Research_Project
categories: Research_Project
disqus_comments: true
featured: false
---

### Photogrammetry: Technical Basics, Software Solutions, and Application Areas

Photogrammetry represents an advanced method for generating precise **three-dimensional models** from **two-dimensional photographs**. This post explains the functionality of photogrammetry, the necessary steps, and the appropriate software.

### Definition and Application Areas of Photogrammetry

Photogrammetry is a process for **capturing spatial data** of an object or scene **using photographic images**. This method is widely used in various fields, including:

<div style="display: flex; align-items: flex-start; margin-top: 20px;">
  <ul style="margin-right: 20px;">
    <li>Game Design</li>
    <li>Quality Control</li>
    <li>Medicine</li>
    <li>Forensics</li>
    <li>Cartography</li>
  </ul>
  <div>
  <div style="display: flex; align-items: center; margin-top: 5px;">
    <p></p>
  </div>
    <p>Thanks to its flexibility, photogrammetry enables the digitization of objects and environments regardless of size or accessibility.</p>
  </div>
</div>

---

### Technical Basics of Photogrammetry

#### Image Capture

<div style="display: flex; align-items: center; margin-top: 20px;">
  <img src="https://formlabs.com/_next/image/?url=https%3A%2F%2Fformlabs-media.formlabs.com%2Ffiler_public_thumbnails%2Ffiler_public%2F6d%2F43%2F6d430a93-30a4-4091-bb20-a24a09e07954%2Fphotogrammetry.jpg__1354x0_q85_subsampling-2.jpg&w=1920&q=75" width="50%" style="margin-right: 20px;"/>
  <div>
    <p>Series of overlapping images are taken to capture the target object or scene from different perspectives. For optimal results, high-resolution cameras with precise positioning are essential.</p>
    <p>The images are identified and linked based on their spatial position and matching features. Software tools like Unity can be used to create precise 3D models from this data, which can be seamlessly integrated into various applications.</p>
  </div>
</div>

<div style="display: flex; align-items: center; margin-top: 0px;">
    <p></p>
</div>

[Unity Photogrammetry Workflow PDF](https://github.com/Nr44suessauer/I-Scan/blob/main/docs/datasheet/Unity-Photogrammetry-Workflow_2017-07_v2.pdf)

#### Feature Extraction and Position Data

Feature extraction identifies characteristic elements in the images that are important for reconstructing the 3D structure. **Camera positioning complements this process**, providing additional spatial information that improves the accuracy of the point clouds.

#### Basics | Generating Point Clouds from Images

Creating point clouds is a central step in photogrammetry to accurately reconstruct three-dimensional structures.
This process involves analyzing and processing multiple **overlapping photographs** of the same object or scene and using the **known camera positions** to improve reconstruction accuracy.

##### Image Preparation and Selection

Careful selection and preparation of image data are prerequisites for precise point cloud extraction:

- **Image Quality:** High-resolution, well-lit images with minimal noise.
- **Camera Calibration:** Ensuring accurate camera orientation.
- **Ensuring Overlap:** At least 60-80% overlap between images.
  This ensures that there are enough common features between the images. This **reduces the risk of gaps** and inconsistencies in the final point cloud model.

#### Feature Detection and Matching

Marking and matching features in overlapping images using **algorithms** like [SIFT](https://www.geeksforgeeks.org/what-is-the-difference-between-sift-and-surf/) or [SURF](https://www.geeksforgeeks.org/what-is-the-difference-between-sift-and-surf/) to identify corresponding points.

#### Triangulation and Bundle Adjustment for 3D Point Calculation

Calculating the spatial position of each point through triangulation using the camera positions and corresponding image points, followed by **optimization using [Bundle Adjustment](https://en.wikipedia.org/wiki/Bundle_adjustment).**

The goal is to increase the match between the image points and the projected 3D points. This improves the accuracy of the reconstruction by reducing errors in the camera positions and the 3D points.

#### Integration and Further Processing

Integrating the point cloud into software solutions for creating meshes, texturing, and further analysis.

[Available Software Solutions](https://all3dp.com/de/1/photogrammetrie-programm-3d-scan/) for point cloud extraction and 3D modeling include:

- [**Agisoft Metashape**](https://www.agisoft.com/)
- [**RealityCapture**](https://www.capturingreality.com/)
- [**Meshroom**](https://alicevision.org/#meshroom)
- [**Pix4D**](https://www.pix4d.com/)
- [**Autodesk ReCap**](https://www.autodesk.com/products/recap/overview)

#### Texturing

Applying textures to the mesh to create a realistic appearance involves several steps.

First, **images** are selected that **realistically represent the desired surface features**. These texture images are then assigned to the corresponding mesh surfaces using UV mapping techniques.
UV coordinates are created to define how the two-dimensional images are projected onto the three-dimensional structures.
After the assignment, the **textures are adjusted** to achieve seamless transitions and a consistent representation of colors, materials, and light reflections. **Finally**, the textures are **optimized through filters and post-processing**.

---

## Conclusion

Photogrammetry is a powerful tool for **creating 3D models**, used in numerous technical and scientific fields.
The versatility of photogrammetry allows for the detailed representation of complex **structures and environments**, making it indispensable in areas such as architecture, forensics, and medicine. Additionally, modern software solutions offer advanced functionalities like automated feature extraction and optimization techniques, making the entire workflow more efficient.
The **continuous development** of camera technologies and algorithms **contributes to** improving the accuracy and **user-friendliness** of photogrammetry.

---

## Interesting Links

- [Wikipedia: Photogrammetry](https://de.wikipedia.org/wiki/Photogrammetrie)
- [Meshroom GitHub](https://github.com/alicevision/meshroom)
- [University of Freiburg Lecture 2008](https://lmb.informatik.uni-freiburg.de/people/haasdonk/DBV_FHO/DBV_FHO_SS08_E10.pdf)
- [Formlabs Blog](https://formlabs.com/de/blog/photogrammetrie-leitfaden-und-software-vergleich/)
- [pix4d Blog](https://www.pix4d.com/de/blog/zehn-grundbegriffe-der-photogrammetrie/)
