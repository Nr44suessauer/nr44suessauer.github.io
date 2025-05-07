---
marp: true
theme: gaia
paginate: true
backgroundColor: #fff
size: 16:9
---

<!-- _class: lead -->
<style scoped>
section {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding-left: 5%;
}
h1 {
  font-size: 2.5em;
}
</style>

<style scoped>
section {
  display: flex;
  flex-direction: column;
  padding: 0;
  margin: 0;
}
.top-section {
  height: 80vh;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
}
.top-section img {
  width: 60%;
  object-fit: cover;
}
.bottom-section {
  height: 60vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  width: 100%;
}
h1 {
  font-size: 2em;
}
</style>

<div class="top-section">
  <img src="https://camo.githubusercontent.com/8e70a12ef0978d307695a803f0492fb08c6b3ff4fd4ab350e5bb0976982e493e/68747470733a2f2f666f726d6c6162732e636f6d2f5f6e6578742f696d6167652f3f75726c3d6874747073253341253246253246666f726d6c6162732d6d656469612e666f726d6c6162732e636f6d25324666696c65725f7075626c69635f7468756d626e61696c7325324666696c65725f7075626c69632532463664253246343325324636643433306139332d333061342d343039312d626232302d61323461303965303739353425324670686f746f6772616d6d657472792e6a70675f5f3133353478305f7138355f73756273616d706c696e672d322e6a706726773d3139323026713d3735">
</div>

<div class="bottom-section">
  <h1>Photogrammetry for Unity</h1>
</div>

---

## Goals

<style scoped>
.vertical-split {
  display: flex;
  flex-direction: row;
  height: 60vh;
  gap: 2em;
}
.vertical-split .split-left {
  width: 50%;
  padding: 1em;
  display: flex;
  flex-direction: column;
  justify-content: center;
  font-size: 0.8em;
}

.vertical-split .split-right {
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
}
.vertical-split .split-right img {
  max-width: 100%;
  max-height: 50vh;
  object-fit: contain;
  border-radius: 8px;
  box-shadow: 0 2px 12px rgba(0,0,0,0.08);
}

</style>
<div class="vertical-split">
  <div class="split-left">
    <ul>
      <li>Develop process to automate photogrammetry (concepts available)</li>
      <li>Create a 3D model of a person using photogrammetry</li>
      <li>Import the model into Unity in the highest possible quality (with textures)</li>
    </ul>
  </div>
  <div class="split-right">
    <img src="https://mymodernmet.com/wp/wp-content/uploads/2021/04/rodin-3d-printed-statue-1.jpeg" alt="3D-printed statue">
  </div>
</div>


competitor: [Shapify.me](https://www.shapify.me/partner/booth)

---

# Roadmap
1. Automate photoshoot process (external project)
2. Preprocess images (lighting, cropping, etc.) + mashine settings
3. Process images in Meshroom (photogrammetry software)
4. Post-process 3D model (Blender, retopology, texturing)
5. Export model for Unity (FBX, glTF, etc.)
6. Integrate into Unity 


---

<style scoped>
.vertical-split {
  display: flex;
  flex-direction: row;
  height: 70vh;
  gap: 2em;
}
.vertical-split .split-left {
  width: 50%;
  padding: 1em;
  display: flex;
  flex-direction: column;
  justify-content: center;
  font-size: 0.8em;
}
.vertical-split .split-right {
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
}
.vertical-split .split-right img {
  width: 100%;
  max-height: 80vh;
  object-fit: contain;
  align-self: flex-start;
  margin-top: 0;
  border-radius: 0px;
  box-shadow: 0 2px 12px rgba(0,0,0,0.08);
}
</style>
<div class="vertical-split">
  <div class="split-left">
    <!-- Hier eigenen Inhalt einfügen -->
    <ul>
    <h1>Scanner concept</h1>
    <br>
      <li>Moveable Camera setup vertical</li>
      <li>Diverse Hardware should be useable</li>
      <li>Moldular system | scalable/changeable </li>
    </ul>
  </div>
  <div class="split-right">
    <img src="https://github.com/Nr44suessauer/nr44suessauer.github.io/blob/main/nuxt-app/assets/pictures/I-Scan/AufbauUndTeile.jpg?raw=true" alt="Aufbau und Teile des I-Scan-Systems">
  </div>
</div>



---

<style scoped>
.flex-row-section {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  height: 70vh;
  width: 100%;
  gap: 2em;
}
.flex-row-section .left-text {
  width: 40%;
  font-size: 0.8em;
  color: #333;
  text-align: left;
  display: flex;
  align-items: center;
  justify-content: flex-end;
}
.flex-row-section .right-gif {
  width: 60%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.flex-row-section .right-gif img {
  width: auto;
  max-width: 90vw;
  max-height: 90vh;
  object-fit: contain;
  border-radius: 8px;
  box-shadow: 0 2px 12px rgba(0,0,0,0.08);
  margin-bottom: 0.5em;
}
.flex-row-section .caption {
  font-size: 1em;
  color: #444;
  text-align: center;
}
</style>
<h1>Z Module</h1>
<div class="flex-row-section">
  <div class="left-text">
    <!-- Hier deinen Text einfügen -->
    <ul>
      <li>The Z module aligns itself to the new center (previous center = center of the scanner on the ground)</li>
      <li>Targeted focusing on specific areas enables more precise detail measurement</li>
    </ul>
  </div>
  <div class="right-gif">
    <img src="https://github.com/Nr44suessauer/I-Scan/raw/main/docs/diagram/mathAnimations/Triangle_newCenter.gif?raw=true" alt="Triangle Animation" />
    <div class="caption"></div>
  </div>
</div>


---



<style scoped>
.section-flex {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 2em;
}
.section-flex .left {
  width: 45%;
  min-height: 300px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #f8f8f8;
  border-radius: 8px;
  color: #888;
  font-size: 1.2em;
  text-align: center;
}
.section-flex .right {
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
}
.section-flex .right img {
  max-width: 100%;
  max-height: 600px;
  border-radius: 8px;
  box-shadow: 0 2px 12px rgba(0,0,0,0.08);
}
.section-flex .left h1 {
  font-size: 1.2em;
}
</style>

<div class="section-flex">
  <div class="left">
    <h1>System Architecture</h1>
  </div>
  <div class="right">
    <img src="https://github.com/Nr44suessauer/I-Scan/raw/main/docs/diagram/Architecture_Diagram/SystemArchitecture%20V3.0%20%20Http_server%20+%20Lightmodule.png?raw=true">
  </div>
</div>



---

<style scoped>
.centered-image-section {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 70vh;
  width: 100%;
}
.centered-image-section img {
  max-width: 100vw;
  max-height: 80vh;
  border-radius: 8px;
  box-shadow: 0 2px 12px rgba(0,0,0,0.08);
  margin-bottom: 1em;
}
.centered-image-section .caption {
  font-size: 1.1em;
  color: #444;
  text-align: center;
}
</style>
## [AliceVision Meshroom](https://github.com/alicevision/Meshroom)
<p>
</p>
<div class="centered-image-section">
  <img src="https://alicevision.org/img/meshroom/buddha_dataset.png" alt="Meshroom Buddha Dataset Example" />
  <div class="caption"></div>
</div>


---
# Base tasks
- import images automatically into Meshroom
- create a point cloud from images & camera positions
- export the model in a format that Unity can use (FBX, glTF, etc.)
- import the model into Unity
- create a simple Unity scene to display the model
- add textures to the model in Unity

---

# Advanced tasks
- lighting conditions combined with the camera settings/processing
- multiple scans overlapp (for better results)
- selective focus (special parts for better details)
- transparent or reflective surfaces. (lightcolor change has impact?)

---

# Output:  

A **cost-effective 3D scanner** for large objects (e.g., people). The base can be equipped with any cameras, allowing for flexible hardware testing.  
The system is not limited to traditional cameras, other sensors such as **LiDAR can also be used**.

**Future:** Combining data from multiple sensors for better [results.](https://www.notaboutmy.life/posts/run-kinect-2-on-ubuntu-20-lts/)


---

<style scoped>
.center-text-slide {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 70vh;
  width: 100%;
}
.center-text-slide h1 {
  font-size: 2.5em;
  text-align: center;
  width: 100%;
}
</style>
<div class="center-text-slide">
  <h1>Livedemo Prototyp I</h1>
</div>

--- 

# Possible following projects

<style scoped>
.smaller-text {
  font-size: 0.8em;
}
.smaller-text {
  margin-top: 30px;
}
</style>
<div class="smaller-text">
<strong>Movable Scanner</strong>: Scanner Module can rotate around the object to capture all angles (bottom marks).  <br>
<strong>Multi-sensor integration</strong>: Data from multiple sensors (e.g., cameras, LiDAR, spectral) improved results & usecases <br> 
<strong>User-friendly interface</strong>: "Casual" friendly interface for controlling the scanning process and visualizing results. <br>
<strong>Cloud-based processing</strong>: solution for processing and storing 3D models.  <br>
<strong>Machine learning for model improvement</strong>: Machine learning techniques to improve the quality in preprocessing.<br>  
</div>


---

<style scoped>
.center-questions-slide {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 70vh;
  width: 100%;
  text-align: center;
}
.center-questions-slide h1 {
  font-size: 2.5em;
  margin-bottom: 1em;
}
.center-questions-slide a {
  font-size: 1.2em;
}
</style>
<div class="center-questions-slide">
  <h1>Questions?</h1>
  <a href="https://github.com/Nr44suessauer/I-Scan/tree/main/implementation">GitHub</a>
</div>




