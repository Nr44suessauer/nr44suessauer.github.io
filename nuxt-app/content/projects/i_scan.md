---
title: i_Scan
description: custom open source 3D scanner - Meshroom Guide
---

-> noch fehlende Bilder \
---> Bild ToolChain MeshRoom bearbeitet \


<div style="display: flex; align-items: center; gap: 10px; margin-bottom: 10px;">
  <img src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png" alt="GitHub Logo" style="width:32px; height:32px;">
  <strong>GitHub Repository Software Version 1.0:</strong>
  <a href="https://github.com/Nr44suessauer/I-Scan/tree/ReleaseVersion1.0" target="_blank" style="font-weight: bold; color: #24292f;">Release V1.0 I-Scan</a>
</div>

---

# Introduction

<div style="display: flex; align-items: flex-start; gap: 32px;">
  <div style="flex: 2; display: flex; flex-direction: column; justify-content: flex-start;">
    <span style="line-height: 1.7; display: block;">
      In the evolving landscape of 3D digitization,  
      the widespread adoption of advanced scanning technologies is frequently impeded by two primary factors:  
      the prohibitive cost associated with the integration of an excessive 
      number of components in commercial systems, and a pervasive lack of transparency regarding their control mechanisms.  
      While open-source initiatives, such as the <a href="https://github.com/PIX3LFLUX/HSKAnner?tab=readme-ov-file" target="_blank">HSKAnner from Karlsruhe</a>,  
      demonstrate the potential for community-driven development,  
      they often rely on fixed multi-camera arrays, which, despite their open nature, can still contribute to elevated costs and architectural rigidity.  
    </span>
  </div>
  <div style="flex: 0 0 auto; align-self: flex-start; display: flex; flex-direction: column; align-items: center;">
    <img 
      src="https://github.com/uncle-ben-devel/hskanner3d/raw/master/README_resources/scanner-slightblur.jpg?raw=true" 
      alt="HSKAnner 3D Scanner" 
      style="max-width: 275px; width: 100%; border: 1px solid #ddd; border-radius: 6px; box-shadow: 0 2px 4px rgba(0,0,0,0.1); margin-top: -10px;"
    />
    <div style="text-align: center; font-size: 11px; margin-top: 4px; color: #555;">
      HSKAnner 3D Scanner from Karlsruhe
    </div>
  </div>
</div>
<br>
<div style="display: flex; align-items: flex-start; gap: 32px;">
  <div style="flex: 2; display: flex; flex-direction: column; justify-content: flex-start;">
    <span style="line-height: 1.7; display: block;">
      This project introduces I-Scan, a novel 3D scanner designed to address these limitations  
      by prioritizing universality, cost-efficiency, and unparalleled modularity.  
      I-Scan is engineered for broad sensor compatibility,  
      supporting a diverse range of imaging devices, including legacy USB and web cameras (which are currently implemented),  
      and is extensible to integrate various other measurement units such as Lidar or general Time-of-Flight (ToF) sensors,  
      or indeed any sensor where precise spatial positioning is advantageous. 
      <br>
      <br>
      A core design principle is its adaptable architecture,  
      where modules possess spatial awareness and are reconfigurable to suit specific use-case requirements,  
      thereby obviating the need for a singular, fixed setup.  
      The integration of movable modules along the Z-axis,  
      coupled with servo-controlled adjustable camera angles,  
      facilitates comprehensive image acquisition across varying object heights and perspectives,  
      enhancing data capture flexibility.
    </span>
  </div>
  <div style="flex: 0 0 auto; align-self: flex-start; display: flex; flex-direction: column; align-items: center;">
    <img 
      src="https://github.com/Nr44suessauer/nr44suessauer.github.io/blob/main/nuxt-app/assets/pictures/I-Scan/AufbauUndTeile.jpg?raw=true" 
      alt="First sketch of movable modules" 
      style="max-width: 275px; width: 100%; border: 1px solid #ddd; border-radius: 6px; box-shadow: 0 2px 4px rgba(0,0,0,0.1); margin-top: -10px;"
    />
    <div style="text-align: center; font-size: 11px; margin-top: 4px; color: #555;">
      First sketch of movable modules
    </div>
  </div>
</div>
<br>
<div style="display: flex; align-items: flex-start; gap: 32px;">
  <div style="flex: 0 0 auto; align-self: flex-start; display: flex; flex-direction: column; align-items: center;">
    <img 
      src="https://github.com/Nr44suessauer/I-Scan/blob/main/docs/pictures/Software_Full_July25.PNG?raw=true" 
      alt="Software Full Overview July 25" 
      style="max-width: 350px; width: 100%; border: 1px solid #ddd; border-radius: 6px; box-shadow: 0 2px 4px rgba(0,0,0,0.1);"
    />
    <a href="https://github.com/Nr44suessauer/I-Scan/blob/main/docs/pictures/Software_Full_July25.PNG?raw=true" target="_blank" style="margin-top: 5px; padding: 2px 6px; background: #007bff; color: white; text-decoration: none; border-radius: 4px; font-size: 9px; display: inline-block;">
      Fullscreen View
    </a>
  </div>
  <div style="flex: 2; display: flex; flex-direction: column; justify-content: flex-start;">
    <span style="line-height: 1.7; display: block;">
      The operational backbone of I-Scan is a robust Python based application.  
      This software orchestrates critical functions, including the import and configuration of cameras via JSON files (supporting COM and HTTP interfaces),  
      precise calculations for Z-axis module movement,  
      and servo alignment for camera orientation, all managed through REST APIs.  
      Furthermore, the application provides capabilities for defining complex scan workflows,  
      visualization of scanner settings, rigorous input validation (mathematical and JSON syntax),  
      automated dependency management, and comprehensive debug output.  
      This holistic approach positions I-Scan as a highly adaptable, cost-effective, and transparent solution,  
      poised to democratize access to advanced 3D digitization capabilities.
    </span>
  </div>
</div>
<!--  end introduction    -->

---

<!--  start 3D Scanner derivative    -->

<style>
.image-row-i-scan {
  display: flex;
  gap: 24px;
  flex-wrap: nowrap; /* verhindert Umbruch */
  justify-content: flex-start;
  margin-bottom: 32px;
  overflow-x: auto; /* ermöglicht horizontales Scrollen */
}
.image-row-i-scan .image-container {
  position: relative;
  overflow: hidden;
  border-radius: 10px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.10);
  transition: box-shadow 0.2s;
  width: 320px;
  max-width: 100%;
  background: #fafbfc;
}
.image-row-i-scan .image-container:hover {
  box-shadow: 0 6px 24px rgba(0,0,0,0.18);
}
.image-row-i-scan img {
  display: block;
  width: 100%;
  height: auto;
  transition: transform 0.25s cubic-bezier(.4,2,.6,1);
}
.image-row-i-scan .image-container:hover img {
  transform: scale(1.07) rotate(-1deg);
  filter: brightness(1.08) contrast(1.08);
}
.image-row-i-scan .caption {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  background: rgba(30,34,40,0.82);
  color: #fff;
  font-size: 15px;
  padding: 10px 14px 8px 14px;
  opacity: 0.92;
  transition: background 0.2s;
  pointer-events: none;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  box-sizing: border-box;
}
</style>

### 3D Scanner derivative
<div class="image-row-i-scan">
  <div class="image-container">
    <a href="https://kaptura.de/de/3d-laserscanner-stammdatenerfassung-logistik/#next" target="_blank" rel="noopener">
      <img src="https://kaptura.de/wp-content/uploads/2021/07/150_970x670-800x553.jpg" alt="Kaptura 3D Scanner" />
      <div class="caption">Kaptura 3D Scanner: Professional photogrammetry system with multiple cameras</div>
    </a>
  </div>
  <div class="image-container">
    <a href="https://www.artec3d.com/portable-3d-scanners/shapifybooth" target="_blank" rel="noopener">
      <img src="https://github.com/Nr44suessauer/I-Scan/blob/main/docs/pictures/Example3D%20scanner.PNG?raw=true" alt="Artec Shapify Booth" />
      <div class="caption">Artec Shapify Booth: Commercial 3D scanner for full-body scans </div>
    </a>
  </div>
  <div class="image-container">
    <a href="https://botspot.de/products/botscan-neo" target="_blank" rel="noopener">
      <img src="https://botspot.live-website.com/wp-content/uploads/2024/11/Botspot_NEO_Image_03-scaled.jpg" alt="Botspot NEO" />
      <div class="caption">Botspot NEO: High-precision 3D scanner with LED dome and multi-camera setup</div>
    </a>
  </div>
  <div class="image-container">
    <a href="https://botspot.de/products/full-body-scanner-flex" target="_blank" rel="noopener">
      <img src="https://botspot.live-website.com/wp-content/uploads/2025/04/ISO.png" alt="Botspot ISO" />
      <div class="caption">Botspot ISO: Compact 3D scanner for industrial applications</div>
    </a>
  </div>
</div>
<!--  end 3D Scanner derivative    -->

---

### The Concept

The conceptual foundation of this 3D scanner is a modular, highly adaptable structure  
that integrates movable and stationary modules for precise, customizable, and efficient object digitization.  
Central is the dynamic interaction between modules, each with spatial awareness and distinct degrees of freedom,  
enabling the system to overcome the limitations of conventional fixed array scanners.

Movable modules traverse the Z-axis with high positional accuracy,  
guided by user defined or algorithmically determined center points in 3D space.  
At each increment, these modules reorient their sensors (e.g., cameras)  
so their optical axes converge on the current target center.  
This is achieved through coordinated actuation of stepper motors (linear displacement)  
and servo motors (angular adjustment), all managed via a REST API.  
The mathematical logic ensures that, regardless of Z-axis position,  
the sensor maintains optimal focus and perspective.

Fixed modules are strategically positioned and, while stationary,  
can dynamically target new center points, mirroring the adaptive behavior of movable modules.  
This combination enables flexible and efficient scan paths,  
accommodating a wide variety of object geometries and sizes.
This modularity enhances coverage and resolution  
and allows individualized scan trajectories tailored to the object's morphology.

All control operations from positioning to sensor orientation are abstracted through a unified REST API,  
ensuring integration, extensibility, and remote operability.
  
The mathematical framework enables each module to compute the necessary transformations  
for precise alignment with dynamically assigned center points.  
This approach makes the scanner a versatile platform for advanced 3D digitization  
in research and industrial applications.

#### Primary Goal of the Concept
By vertically displacing along the Z-axis
and dynamically adjusting sensor angles,
the movable modules generate significantly more perspectives
than rigid fixed array setups (where all sensors are locked in pre-defined positions and orientations, offering no adaptability during operation).
This eliminates "blind spots" and enables gapless digitization of complex geometries
overcoming the physical constraints of static camera positions.

> Such systems fundamentally limit perspective coverage to their initial hardware configuration, 
causing unavoidable blind spots on non convex surfaces. 
(Non-convex surfaces exhibit cavities, undercuts, or reentrant angles where direct "line of sight" is obstructed  
e.g., gear teeth, hollow sculptures, or organic structures like tree roots).


#### Secondary Goal of the Concept
Through its modular architecture, the system achieves exceptional flexibility,  
enabling seamless integration and adaptation of diverse sensors without requiring full hardware reconfiguration.
Future implementations will leverage sensor fusion pipelines to optimize 3D data acquisition and processing  
for instance, by combining cameras with LiDAR or ToF sensors. This extensibility inherently supports advanced techniques like <a href="https://www.rtbasics.com/Downloads/IEEE_structured_light.pdf" target="_blank" rel="noopener">structured light scanning</a>, where projected patterns and multi angle triangulation reconstruct complex surface geometries with sub millimeter accuracy.




<!--- Triangle end -->
<div style="margin: 20px 0; border: 1px solid #ddd; border-radius: 6px; overflow: hidden; width: fit-content; padding: 20px; width: 100vw; max-width: 1000px;">
  <div style="display: flex; align-items: center; justify-content: center;">
    <img 
      src="https://github.com/Nr44suessauer/I-Scan/blob/main/docs/diagram/mathAnimations/Triangle_newCenter.gif?raw=true" 
      alt="Triangle New Center Animation" 
      style="max-width: 600px; width: 100%; border: 1px solid #ddd; border-radius: 6px; box-shadow: 0 2px 4px rgba(0,0,0,0.1);" 
    />
  </div>
  <p style="text-align: center; margin-top: 5px;">
    <a href="https://github.com/Nr44suessauer/I-Scan/blob/main/docs/diagram/mathAnimations/Triangle_newCenter.gif?raw=true" target="_blank" style="padding: 2px 6px; background: #007bff; color: white; text-decoration: none; border-radius: 4px; font-size: 9px;">
      Fullscreen View
    </a>
  </p>
</div>

<!--- Triangle end -->

---


<details style="margin: 20px 0; border: 1px solid #ddd; border-radius: 6px; overflow: hidden; width: fit-content;">
  <summary style="background:hsl(0, 0.00%, 0.00%); padding: 15px; cursor: pointer; font-weight: bold; border-bottom: 1px solid #ddd; color: var(--color-primary); width: fit-content;">
    📋 Class Diagram anzeigen
  </summary>
  <div style="padding: 20px; width: 100vw; max-width: 1000px;">
    <div style="display: flex; flex-direction: row; align-items: flex-start; gap: 32px;">
      <div style="flex: 0 0 400px; min-width: 400px;">
        <h4 style="text-align: center; margin-bottom: 5px; font-size: 12px;">Class Diagram</h4>
        <iframe 
          src="https://docs.google.com/viewer?url=https://github.com/Nr44suessauer/nr44suessauer.github.io/raw/main/nuxt-app/assets/pictures/I-Scan/ClassDiagram_overview.pdf&embedded=true" 
          width="900px" 
          height="500px" 
          style="border: 1px solid #ddd; border-radius: 6px; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
        </iframe>
        <p style="text-align: center; margin-top: 5px;">
          <a href="https://github.com/Nr44suessauer/nr44suessauer.github.io/raw/main/nuxt-app/assets/pictures/I-Scan/ClassDiagram_overview.pdf" target="_blank" style="padding: 2px 6px; background: #007bff; color: white; text-decoration: none; border-radius: 4px; font-size: 9px;">
          Fullscreen View
          </a>
        </p>
      </div>
    </div>
    <details>
      <summary><strong>API Client Functions</strong></summary>
      <div style="overflow-x:auto;">
        <table>
          <thead>
            <tr>
              <th>Function</th>
              <th>Description</th>
              <th>Parameters</th>
              <th>Return Values</th>
              <th>Endpoint</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><code>make_request</code></td>
              <td>Sends an HTTP request to the specified API endpoint</td>
              <td><code>endpoint</code> (str): API endpoint<br><code>params</code> (dict, optional): Parameters<br><code>base_url</code> (str): Base URL<br><code>timeout</code> (int): Timeout in seconds</td>
              <td>str: API response or error message</td>
              <td>Variable</td>
            </tr>
            <tr>
              <td><code>set_servo_angle</code></td>
              <td>Sets the servo angle via the API</td>
              <td><code>angle</code> (int): Angle 0-90 degrees<br><code>base_url</code> (str): Base URL</td>
              <td>str: Confirmation message with result</td>
              <td>/setServo</td>
            </tr>
            <tr>
              <td><code>move_stepper</code></td>
              <td>Controls the stepper motor via the API</td>
              <td><code>steps</code> (int): Number of steps<br><code>direction</code> (int): Direction (1=up, -1=down)<br><code>speed</code> (int, optional): Speed<br><code>base_url</code> (str): Base URL</td>
              <td>str: Confirmation message with result</td>
              <td>/setMotor</td>
            </tr>
            <tr>
              <td><code>set_led_color</code></td>
              <td>Sets the LED color via the API</td>
              <td><code>color_hex</code> (str): Hex color code (e.g. &quot;#FF0000&quot;)<br><code>base_url</code> (str): Base URL</td>
              <td>str: Confirmation message with result</td>
              <td>/hexcolor</td>
            </tr>
            <tr>
              <td><code>set_led_brightness</code></td>
              <td>Sets the LED brightness via the API</td>
              <td><code>brightness</code> (int): Brightness 0-100%<br><code>base_url</code> (str): Base URL</td>
              <td>str: Confirmation message with result</td>
              <td>/setBrightness</td>
            </tr>
            <tr>
              <td><code>get_button_state</code></td>
              <td>Queries the button status via the API</td>
              <td><code>base_url</code> (str): Base URL<br><code>nocache</code> (bool): Prevent caching</td>
              <td>str: Button status response</td>
              <td>/getButtonState</td>
            </tr>
            <tr>
              <td><code>is_button_pressed</code></td>
              <td>Checks if button is pressed based on API response</td>
              <td><code>response</code>: API response to check</td>
              <td>bool: True if pressed, False otherwise</td>
              <td>-</td>
            </tr>
          </tbody>
        </table>
      </div>
    </details>
    <details>
      <summary><strong>Device Control Functions</strong></summary>
      <div style="overflow-x:auto;">
        <table>
          <thead>
            <tr>
              <th>Function</th>
              <th>Description</th>
              <th>Parameters</th>
              <th>Return Values</th>
              <th>Usage</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><code>servo_cmd</code></td>
              <td>Executes servo command directly</td>
              <td>None (uses GUI values)</td>
              <td>None (logs result)</td>
              <td>Direct servo control</td>
            </tr>
            <tr>
              <td><code>servo_auto_position_cmd</code></td>
              <td>Automatic servo positioning based on Y-position</td>
              <td>None (uses current position)</td>
              <td>None (logs result)</td>
              <td>Automatic alignment</td>
            </tr>
            <tr>
              <td><code>update_servo_target_center</code></td>
              <td>Updates target center for servo calculations</td>
              <td><code>center_x</code> (float): X coordinate<br><code>center_y</code> (float): Y coordinate</td>
              <td>None</td>
              <td>Configuration</td>
            </tr>
            <tr>
              <td><code>stepper_cmd</code></td>
              <td>Executes stepper motor command directly</td>
              <td>None (uses GUI values)</td>
              <td>None (logs result)</td>
              <td>Direct motor control</td>
            </tr>
            <tr>
              <td><code>led_cmd</code></td>
              <td>Sets LED color directly</td>
              <td>None (uses GUI values)</td>
              <td>None (logs result)</td>
              <td>LED color control</td>
            </tr>
            <tr>
              <td><code>bright_cmd</code></td>
              <td>Sets LED brightness directly</td>
              <td>None (uses GUI values)</td>
              <td>None (logs result)</td>
              <td>LED brightness control</td>
            </tr>
            <tr>
              <td><code>button_cmd</code></td>
              <td>Queries button status directly</td>
              <td>None</td>
              <td>None (logs status)</td>
              <td>Button status query</td>
            </tr>
            <tr>
              <td><code>home_func</code></td>
              <td>Executes home function (reference movement)</td>
              <td>None</td>
              <td>None (logs result)</td>
              <td>Initialization</td>
            </tr>
          </tbody>
        </table>
      </div>
    </details>
    <details>
      <summary><strong>Servo Angle Calculator Functions</strong></summary>
      <div style="overflow-x:auto;">
        <table>
          <thead>
            <tr>
              <th>Function</th>
              <th>Description</th>
              <th>Parameters</th>
              <th>Return Values</th>
              <th>Purpose</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><code>calculate_servo_angle_from_position</code></td>
              <td>Calculates servo angle based on Y-position</td>
              <td><code>current_y_position</code> (float): Current Y position</td>
              <td>int: Servo angle 0-90°</td>
              <td>Position calculation</td>
            </tr>
            <tr>
              <td><code>calculate_targeting_angle</code></td>
              <td>Calculates direct targeting angle to target center</td>
              <td><code>current_y_position</code> (float): Current Y position</td>
              <td>tuple: (angle_in_degrees, servo_angle)</td>
              <td>Target acquisition</td>
            </tr>
            <tr>
              <td><code>get_angle_info</code></td>
              <td>Returns detailed information about angle calculation</td>
              <td><code>current_y_position</code> (float): Current Y position</td>
              <td>dict: Detailed angle information</td>
              <td>Debug/Analysis</td>
            </tr>
            <tr>
              <td><code>update_target_center</code></td>
              <td>Updates target center coordinates</td>
              <td><code>new_x</code> (float): New X coordinate<br><code>new_y</code> (float): New Y coordinate</td>
              <td>None</td>
              <td>Configuration</td>
            </tr>
            <tr>
              <td><code>validate_servo_angle</code></td>
              <td>Checks if servo angle is valid</td>
              <td><code>angle</code> (int): Angle to check</td>
              <td>bool: True if valid (0-90°)</td>
              <td>Validation</td>
            </tr>
          </tbody>
        </table>
      </div>
    </details>
    <details>
      <summary><strong>Camera Configuration Functions</strong></summary>
      <div style="overflow-x:auto;">
        <table>
          <thead>
            <tr>
              <th>Function</th>
              <th>Description</th>
              <th>Parameters</th>
              <th>Return Values</th>
              <th>Purpose</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><code>load_config</code></td>
              <td>Loads configuration from JSON file</td>
              <td>None</td>
              <td>bool: True on success</td>
              <td>Initialization</td>
            </tr>
            <tr>
              <td><code>save_config</code></td>
              <td>Saves configuration to JSON file</td>
              <td>None</td>
              <td>bool: True on success</td>
              <td>Persistence</td>
            </tr>
            <tr>
              <td><code>create_default_config</code></td>
              <td>Creates default configuration</td>
              <td>None</td>
              <td>None</td>
              <td>Fallback</td>
            </tr>
            <tr>
              <td><code>get_cameras</code></td>
              <td>Gets all camera configurations</td>
              <td>None</td>
              <td>List[Dict]: Camera list</td>
              <td>Query</td>
            </tr>
            <tr>
              <td><code>get_enabled_cameras</code></td>
              <td>Gets only enabled cameras</td>
              <td>None</td>
              <td>List[Dict]: Enabled cameras</td>
              <td>Filtering</td>
            </tr>
            <tr>
              <td><code>get_camera_by_index</code></td>
              <td>Gets camera by index</td>
              <td><code>index</code> (int): Camera index</td>
              <td>Optional[Dict]: Camera or None</td>
              <td>Single query</td>
            </tr>
            <tr>
              <td><code>add_camera</code></td>
              <td>Adds new camera</td>
              <td><code>index</code> (int): Index<br><code>verbindung</code> (str): Connection<br><code>beschreibung</code> (str): Description<br><code>name</code> (str, optional): Name</td>
              <td>bool: True on success</td>
              <td>Configuration</td>
            </tr>
            <tr>
              <td><code>update_camera</code></td>
              <td>Updates camera configuration</td>
              <td><code>index</code> (int): Index<br><code>**kwargs</code>: Properties</td>
              <td>bool: True on success</td>
              <td>Modification</td>
            </tr>
            <tr>
              <td><code>remove_camera</code></td>
              <td>Removes camera from configuration</td>
              <td><code>index</code> (int): Index to remove</td>
              <td>bool: True on success</td>
              <td>Management</td>
            </tr>
            <tr>
              <td><code>parse_verbindung</code></td>
              <td>Parses connection string</td>
              <td><code>verbindung</code> (str): Connection string</td>
              <td>Dict: Parsed connection data</td>
              <td>Processing</td>
            </tr>
          </tbody>
        </table>
      </div>
    </details>   
    <details>
      <summary><strong>Queue Operations Functions</strong></summary>
      <div style="overflow-x:auto;">
        <table>
          <thead>
            <tr>
              <th>Function</th>
              <th>Description</th>
              <th>Parameters</th>
              <th>Return Values</th>
              <th>Purpose</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><code>add</code></td>
              <td>Adds operation to queue</td>
              <td><code>operation_type</code> (str): Operation type<br><code>params</code> (dict): Parameters<br><code>description</code> (str): Description</td>
              <td>None</td>
              <td>Queue management</td>
            </tr>
            <tr>
              <td><code>clear</code></td>
              <td>Empties the queue</td>
              <td>None</td>
              <td>None</td>
              <td>Reset</td>
            </tr>
            <tr>
              <td><code>import_from_csv</code></td>
              <td>Imports operations from CSV file</td>
              <td><code>file_path</code> (str): Path to CSV file</td>
              <td>bool: True on success</td>
              <td>Import</td>
            </tr>
            <tr>
              <td><code>export_to_csv</code></td>
              <td>Exports operations to CSV file</td>
              <td><code>file_path</code> (str): Target path</td>
              <td>bool: True on success</td>
              <td>Export</td>
            </tr>
            <tr>
              <td><code>remove</code></td>
              <td>Removes operation by index</td>
              <td><code>index</code> (int): Index to remove</td>
              <td>None</td>
              <td>Single removal</td>
            </tr>
            <tr>
              <td><code>execute_all</code></td>
              <td>Executes all operations in queue</td>
              <td><code>base_url</code> (str): API URL<br><code>widgets</code> (dict): GUI widgets<br><code>position_var</code>: Position<br><code>servo_angle_var</code>: Servo angle<br><code>last_distance_value</code>: Last distance<br><code>run_in_thread</code> (bool): Threading</td>
              <td>None</td>
              <td>Batch execution</td>
            </tr>
            <tr>
              <td><code>execute_single_operation</code></td>
              <td>Executes single operation</td>
              <td><code>operation</code>: Operation<br><code>base_url</code> (str): API URL<br>Additional parameters like <code>execute_all</code></td>
              <td>None</td>
              <td>Single execution</td>
            </tr>
            <tr>
              <td><code>pause_queue</code></td>
              <td>Pauses queue execution</td>
              <td>None</td>
              <td>None</td>
              <td>Control</td>
            </tr>
            <tr>
              <td><code>resume_queue</code></td>
              <td>Resumes queue execution</td>
              <td>None</td>
              <td>None</td>
              <td>Control</td>
            </tr>
            <tr>
              <td><code>stop_queue</code></td>
              <td>Stops queue execution</td>
              <td>None</td>
              <td>None</td>
              <td>Control</td>
            </tr>
          </tbody>
        </table>
      </div>
    </details>   
  </div>
</details>


---

<details style="margin: 20px 0; border: 1px solid #ddd; border-radius: 6px; overflow: hidden; width: fit-content;">
  <summary style="background:hsl(0, 0.00%, 0.00%); padding: 15px; cursor: pointer; font-weight: bold; border-bottom: 1px solid #ddd; color: var(--color-primary); width: fit-content;">
    📊 Activity Diagram anzeigen
  </summary>
  <div style="padding: 20px; width: 100vw; max-width: 1000px;">
    <div style="display: flex; align-items: flex-start; gap: 20px;">
      <div style="flex: 0 0 400px;">
        <h4 style="text-align: center; margin-bottom: 5px; font-size: 12px;">Activity Diagram</h4>
        <iframe 
          src="https://docs.google.com/viewer?url=https://github.com/Nr44suessauer/nr44suessauer.github.io/raw/main/nuxt-app/assets/pictures/I-Scan/full_activity_diagram_modular_version.pdf&embedded=true" 
          width="900px" 
          height="500px" 
          style="border: 1px solid #ddd; border-radius: 6px; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
        </iframe>
        <p style="text-align: center; margin-top: 5px;">
          <a href="https://github.com/Nr44suessauer/nr44suessauer.github.io/raw/main/nuxt-app/assets/pictures/I-Scan/full_activity_diagram_modular_version.pdf" target="_blank" style="padding: 2px 6px; background: #007bff; color: white; text-decoration: none; border-radius: 4px; font-size: 9px;">
            Fullscreen View
          </a>
        </p>
      </div>
    </div>
  </div>
</details>

---

<details style="margin: 20px 0; border: 1px solid #ddd; border-radius: 6px; overflow: hidden; width: fit-content;">
  <summary style="background:hsl(0, 0.00%, 0.00%); padding: 15px; cursor: pointer; font-weight: bold; border-bottom: 1px solid #ddd; color: var(--color-primary); width: fit-content;">
    ⚙️ Execution Servo anzeigen
  </summary>
  <div style="padding: 20px; width: 100vw; max-width: 1000px;">
    <div style="display: flex; align-items: flex-start; gap: 20px;">
      <div style="flex: 0 0 400px;">
        <h4 style="text-align: center; margin-bottom: 5px; font-size: 12px;">Execution Servo</h4>
        <iframe 
          src="https://docs.google.com/viewer?url=https://github.com/Nr44suessauer/nr44suessauer.github.io/raw/main/nuxt-app/assets/pictures/I-Scan/execution_servo.pdf&embedded=true" 
          width="900px" 
          height="350px" 
          style="border: 1px solid #ddd; border-radius: 6px; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
        </iframe>
        <p style="text-align: center; margin-top: 5px;">
          <a href="https://github.com/Nr44suessauer/nr44suessauer.github.io/raw/main/nuxt-app/assets/pictures/I-Scan/execution_servo.pdf" target="_blank" style="padding: 2px 6px; background: #007bff; color: white; text-decoration: none; border-radius: 4px; font-size: 9px;">
            Fullscreen View
          </a>
        </p>
      </div>
    </div>
  </div>
</details>




## Example Usage

```python
# Using the API Client
from api_client import ApiClient
# Set servo to 45°
result = ApiClient.set_servo_angle(45, "http://192.168.137.7")
# Move motor 100 steps upward
result = ApiClient.move_stepper(100, 1, 50, "http://192.168.137.7")
# Set LED to red
result = ApiClient.set_led_color("#FF0000", "http://192.168.137.7")
```
</details>

---

</details>

<div style="margin: 20px 0; border: 1px solid #ddd; border-radius: 6px; overflow: hidden; width: fit-content; padding: 20px; width: 100vw; max-width: 1000px;">
  <div style="display: flex; align-items: center; justify-content: center;">
    <img 
      src="https://github.com/Nr44suessauer/I-Scan/blob/main/docs/pictures/Software_Full_July25.PNG?raw=true" 
      alt="Software Full Overview July 25" 
      style="max-width: 900px; width: 100%; border: 1px solid #ddd; border-radius: 6px; box-shadow: 0 2px 4px rgba(0,0,0,0.1);" 
    />
  </div>
  <p style="text-align: center; margin-top: 5px;">
    <a href="https://github.com/Nr44suessauer/I-Scan/blob/main/docs/pictures/Software_Full_July25.PNG?raw=true" target="_blank" style="padding: 2px 6px; background: #007bff; color: white; text-decoration: none; border-radius: 4px; font-size: 9px;">
      Fullscreen View
    </a>
  </p>
</div>

---

<div style="margin: 20px 0; border: 1px solid #ddd; border-radius: 6px; overflow: hidden; width: fit-content; padding: 20px; width: 100vw; max-width: 1000px;">
  <div style="display: flex; align-items: center; justify-content: center;">
    <img 
      src="https://github.com/Nr44suessauer/I-Scan/blob/main/docs/pictures/Software_JSON_Configurator.PNG?raw=true" 
      alt="Software JSON Configurator" 
      style="max-width: 900px; width: 100%; border: 1px solid #ddd; border-radius: 6px; box-shadow: 0 2px 4px rgba(0,0,0,0.1);" 
    />
  </div>
  <p style="text-align: center; margin-top: 5px;">
    <a href="https://github.com/Nr44suessauer/I-Scan/blob/main/docs/pictures/Software_JSON_Configurator.PNG?raw=true" target="_blank" style="padding: 2px 6px; background: #007bff; color: white; text-decoration: none; border-radius: 4px; font-size: 9px;">
      Fullscreen View
    </a>
  </p>
</div>


---

<div style="margin: 20px 0; border: 1px solid #ddd; border-radius: 6px; overflow: hidden; width: fit-content; padding: 20px; width: 100vw; max-width: 1000px;">
  <div style="display: flex; align-items: center; justify-content: center;">
    <img 
      src="https://github.com/Nr44suessauer/I-Scan/blob/main/docs/pictures/Software_Cam_Stream.PNG?raw=true" 
      alt="Software Cam Stream" 
      style="max-width: 900px; width: 100%; border: 1px solid #ddd; border-radius: 6px; box-shadow: 0 2px 4px rgba(0,0,0,0.1);" 
    />
  </div>
  <p style="text-align: center; margin-top: 5px;">
    <a href="https://github.com/Nr44suessauer/I-Scan/blob/main/docs/pictures/Software_Cam_Stream.PNG?raw=true" target="_blank" style="padding: 2px 6px; background: #007bff; color: white; text-decoration: none; border-radius: 4px; font-size: 9px;">
      Fullscreen View
    </a>
  </p>
</div>


---

<div style="margin: 20px 0; border: 1px solid #ddd; border-radius: 6px; overflow: hidden; width: fit-content; padding: 20px; width: 100vw; max-width: 1000px;">
  <div style="display: flex; align-items: center; justify-content: center;">
    <img 
      src="https://github.com/Nr44suessauer/I-Scan/blob/main/docs/pictures/Console_failure_connection_camera.PNG?raw=true" 
      alt="Console Failure Connection Camera" 
      style="max-width: 900px; width: 100%; border: 1px solid #ddd; border-radius: 6px; box-shadow: 0 2px 4px rgba(0,0,0,0.1);" 
    />
  </div>
  <p style="text-align: center; margin-top: 5px;">
    <a href="https://github.com/Nr44suessauer/I-Scan/blob/main/docs/pictures/Console_failure_connection_camera.PNG?raw=true" target="_blank" style="padding: 2px 6px; background: #007bff; color: white; text-decoration: none; border-radius: 4px; font-size: 9px;">
      Fullscreen View
    </a>
  </p>
</div>

---


<div style="margin: 20px 0; border: 1px solid #ddd; border-radius: 6px; overflow: hidden; width: fit-content; padding: 20px; width: 100vw; max-width: 1000px;">
  <div style="display: flex; flex-direction: row; align-items: flex-end; justify-content: center; gap: 20px;">
    <div style="display: flex; flex-direction: column; align-items: center;">
      <img 
        src="https://github.com/Nr44suessauer/I-Scan/blob/main/docs/pictures/06_servo_geometry_graph_only.png?raw=true" 
        alt="Servo Geometry Graph Only" 
        style="max-width: 400px; width: 100%; border: 1px solid #ddd; border-radius: 6px; box-shadow: 0 2px 4px rgba(0,0,0,0.1);" 
      />
      <a href="https://github.com/Nr44suessauer/I-Scan/blob/main/docs/pictures/06_servo_geometry_graph_only.png?raw=true" target="_blank" style="margin-top: 5px; padding: 2px 6px; background: #007bff; color: white; text-decoration: none; border-radius: 4px; font-size: 9px; display: inline-block;">
        Fullscreen View
      </a>
    </div>
    <div style="display: flex; flex-direction: column; align-items: center;">
      <img 
        src="https://github.com/Nr44suessauer/I-Scan/blob/main/docs/pictures/07_servo_cone_detail.png?raw=true" 
        alt="Servo Cone Detail" 
        style="max-width: 300px; width: 100%; border: 1px solid #ddd; border-radius: 6px; box-shadow: 0 2px 4px rgba(0,0,0,0.1);" 
      />
      <a href="https://github.com/Nr44suessauer/I-Scan/blob/main/docs/pictures/07_servo_cone_detail.png?raw=true" target="_blank" style="margin-top: 5px; padding: 2px 6px; background: #007bff; color: white; text-decoration: none; border-radius: 4px; font-size: 9px; display: inline-block;">
        Fullscreen View
      </a>
    </div>
  </div>
</div>


---


<div style="margin: 20px 0; border: 1px solid #ddd; border-radius: 6px; overflow: hidden; width: fit-content; padding: 20px; width: 100vw; max-width: 1000px;">
  <div style="display: flex; flex-direction: row; align-items: flex-end; justify-content: center; gap: 20px;">
    <div style="display: flex; flex-direction: column; align-items: center;">
      <img 
        src="https://github.com/Nr44suessauer/I-Scan/blob/main/docs/pictures/07_servo_cone_detail_small.png?raw=true" 
        alt="Servo Cone Detail Small" 
        style="max-width: 300px; width: 100%; border: 1px solid #ddd; border-radius: 6px; box-shadow: 0 2px 4px rgba(0,0,0,0.1);" 
      />
      <a href="https://github.com/Nr44suessauer/I-Scan/blob/main/docs/pictures/07_servo_cone_detail_small.png?raw=true" target="_blank" style="margin-top: 5px; padding: 2px 6px; background: #007bff; color: white; text-decoration: none; border-radius: 4px; font-size: 9px; display: inline-block;">
        Fullscreen View
      </a>
    </div>
    <div style="display: flex; flex-direction: column; align-items: center;">
      <img 
        src="https://github.com/Nr44suessauer/I-Scan/blob/main/docs/pictures/06_servo_geometry_graph_only_smaler_cone.png?raw=true" 
        alt="Servo Geometry Graph Only Smaller Cone" 
        style="max-width: 300px; width: 100%; border: 1px solid #ddd; border-radius: 6px; box-shadow: 0 2px 4px rgba(0,0,0,0.1);" 
      />
      <a href="https://github.com/Nr44suessauer/I-Scan/blob/main/docs/pictures/06_servo_geometry_graph_only_smaler_cone.png?raw=true" target="_blank" style="margin-top: 5px; padding: 2px 6px; background: #007bff; color: white; text-decoration: none; border-radius: 4px; font-size: 9px; display: inline-block;">
        Fullscreen View
      </a>
    </div>
  </div>
</div>


<div style="margin: 20px 0; border: 1px solid #ddd; border-radius: 6px; overflow: hidden; width: fit-content; padding: 20px; width: 100vw; max-width: 1000px;">
  <div style="display: flex; flex-direction: row; align-items: flex-end; justify-content: center; gap: 20px;">
    <div style="display: flex; flex-direction: column; align-items: center;">
      <img 
        src="https://github.com/Nr44suessauer/I-Scan/blob/main/docs/pictures/06_servo_geometry_graph_only_bad.png?raw=true" 
        alt="Servo Geometry Graph Only Bad" 
        style="max-width: 300px; width: 100%; border: 1px solid #ddd; border-radius: 6px; box-shadow: 0 2px 4px rgba(0,0,0,0.1);" 
      />
      <a href="https://github.com/Nr44suessauer/I-Scan/blob/main/docs/pictures/06_servo_geometry_graph_only_bad.png?raw=true" target="_blank" style="margin-top: 5px; padding: 2px 6px; background: #007bff; color: white; text-decoration: none; border-radius: 4px; font-size: 9px; display: inline-block;">
        Fullscreen View
      </a>
    </div>
    <div style="display: flex; flex-direction: column; align-items: center;">
      <img 
        src="https://github.com/Nr44suessauer/I-Scan/blob/main/docs/pictures/07_servo_cone_detail_20.png?raw=true" 
        alt="Servo Cone Detail 20" 
        style="max-width: 300px; width: 100%; border: 1px solid #ddd; border-radius: 6px; box-shadow: 0 2px 4px rgba(0,0,0,0.1);" 
      />
      <a href="https://github.com/Nr44suessauer/I-Scan/blob/main/docs/pictures/07_servo_cone_detail_20.png?raw=true" target="_blank" style="margin-top: 5px; padding: 2px 6px; background: #007bff; color: white; text-decoration: none; border-radius: 4px; font-size: 9px; display: inline-block;">
        Fullscreen View
      </a>
    </div>
    <div style="display: flex; flex-direction: column; align-items: center;">
      <img 
        src="https://github.com/Nr44suessauer/I-Scan/blob/main/docs/pictures/06_servo_interpolation.png?raw=true" 
        alt="Servo Interpolation" 
        style="max-width: 300px; width: 100%; border: 1px solid #ddd; border-radius: 6px; box-shadow: 0 2px 4px rgba(0,0,0,0.1);" 
      />
      <a href="https://github.com/Nr44suessauer/I-Scan/blob/main/docs/pictures/06_servo_interpolation.png?raw=true" target="_blank" style="margin-top: 5px; padding: 2px 6px; background: #007bff; color: white; text-decoration: none; border-radius: 4px; font-size: 9px; display: inline-block;">
        Fullscreen View
      </a>
    </div>
  </div>
</div>

---


<div style="margin: 20px 0; border: 1px solid #ddd; border-radius: 6px; overflow: hidden; width: fit-content; padding: 20px; width: 100vw; max-width: 1000px;">
  <div style="display: flex; align-items: center; justify-content: center;">
    <img 
      src="https://github.com/Nr44suessauer/I-Scan/blob/main/docs/pictures/ScreenRecVapePoleWhite.gif?raw=true" 
      alt="Screen Recording Vape Pole White" 
      style="max-width: 900px; width: 100%; border: 1px solid #ddd; border-radius: 6px; box-shadow: 0 2px 4px rgba(0,0,0,0.1);" 
    />
  </div>
  <p style="text-align: center; margin-top: 5px;">
    <a href="https://github.com/Nr44suessauer/I-Scan/blob/main/docs/pictures/ScreenRecVapePoleWhite.gif?raw=true" target="_blank" style="padding: 2px 6px; background: #007bff; color: white; text-decoration: none; border-radius: 4px; font-size: 9px;">
      Fullscreen View
    </a>
  </p>
</div>


---


<div style="margin: 20px 0; border: 1px solid #ddd; border-radius: 6px; overflow: hidden; width: fit-content; padding: 20px; width: 100vw; max-width: 1000px;">
  <div style="display: flex; align-items: center; justify-content: center;">
    <img 
      src="https://github.com/Nr44suessauer/I-Scan/blob/main/docs/pictures/ScreenRecVapeWhere.gif?raw=true" 
      alt="Screen Recording Vape Where" 
      style="max-width: 900px; width: 100%; border: 1px solid #ddd; border-radius: 6px; box-shadow: 0 2px 4px rgba(0,0,0,0.1);" 
    />
  </div>
  <p style="text-align: center; margin-top: 5px;">
    <a href="https://github.com/Nr44suessauer/I-Scan/blob/main/docs/pictures/ScreenRecVapeWhere.gif?raw=true" target="_blank" style="padding: 2px 6px; background: #007bff; color: white; text-decoration: none; border-radius: 4px; font-size: 9px;">
      Fullscreen View
    </a>
  </p>
</div>



---


<div style="margin: 20px 0; border: 1px solid #ddd; border-radius: 6px; overflow: hidden; width: fit-content; padding: 20px; width: 100vw; max-width: 1000px;">
  <div style="display: flex; align-items: center; justify-content: center;">
    <img 
      src="https://github.com/Nr44suessauer/I-Scan/blob/main/docs/pictures/MeshRoom_basic_pipeline.PNG?raw=true" 
      alt="MeshRoom Basic Pipeline" 
      style="max-width: 900px; width: 100%; border: 1px solid #ddd; border-radius: 6px; box-shadow: 0 2px 4px rgba(0,0,0,0.1);" 
    />
  </div>
  <p style="text-align: center; margin-top: 5px;">
    <a href="https://github.com/Nr44suessauer/I-Scan/blob/main/docs/pictures/MeshRoom_basic_pipeline.PNG?raw=true" target="_blank" style="padding: 2px 6px; background: #007bff; color: white; text-decoration: none; border-radius: 4px; font-size: 9px;">
      Fullscreen View
    </a>
  </p>
</div>



---



<div style="margin: 20px 0; border: 1px solid #ddd; border-radius: 6px; overflow: hidden; width: fit-content; padding: 20px; width: 100vw; max-width: 1000px;">
  <div style="display: flex; align-items: center; justify-content: center;">
    <img 
      src="https://github.com/Nr44suessauer/I-Scan/blob/main/docs/pictures/Yoshi_stl_file.gif?raw=true" 
      alt="Yoshi STL File Animation" 
      style="max-width: 900px; width: 100%; border: 1px solid #ddd; border-radius: 6px; box-shadow: 0 2px 4px rgba(0,0,0,0.1);" 
    />
  </div>
  <p style="text-align: center; margin-top: 5px;">
    <a href="https://github.com/Nr44suessauer/I-Scan/blob/main/docs/pictures/Yoshi_stl_file.gif?raw=true" target="_blank" style="padding: 2px 6px; background: #007bff; color: white; text-decoration: none; border-radius: 4px; font-size: 9px;">
      Fullscreen View
    </a>
  </p>
</div>



---



<div style="margin: 20px 0; border: 1px solid #ddd; border-radius: 6px; overflow: hidden; width: fit-content; padding: 20px; width: 100vw; max-width: 1000px;">
  <div style="display: flex; align-items: center; justify-content: center;">
    <img 
      src="https://github.com/Nr44suessauer/I-Scan/blob/main/docs/pictures/Yoshi_stl_file_printview.gif?raw=true" 
      alt="Yoshi STL File Printview Animation" 
      style="max-width: 900px; width: 100%; border: 1px solid #ddd; border-radius: 6px; box-shadow: 0 2px 4px rgba(0,0,0,0.1);" 
    />
  </div>
  <p style="text-align: center; margin-top: 5px;">
    <a href="https://github.com/Nr44suessauer/I-Scan/blob/main/docs/pictures/Yoshi_stl_file_printview.gif?raw=true" target="_blank" style="padding: 2px 6px; background: #007bff; color: white; text-decoration: none; border-radius: 4px; font-size: 9px;">
      Fullscreen View
    </a>
  </p>
</div>





---


<div style="margin: 20px 0; border: 1px solid #ddd; border-radius: 6px; overflow: hidden; width: fit-content; padding: 20px; width: 100vw; max-width: 1000px;">
  <div style="display: flex; align-items: center; justify-content: center;">
    <img 
      src="https://github.com/Nr44suessauer/I-Scan/blob/main/docs/pictures/MovableCameraModule.gif?raw=true" 
      alt="Movable Camera Module Animation" 
      style="max-width: 900px; width: 100%; border: 1px solid #ddd; border-radius: 6px; box-shadow: 0 2px 4px rgba(0,0,0,0.1);" 
    />
  </div>
  <p style="text-align: center; margin-top: 5px;">
    <a href="https://github.com/Nr44suessauer/I-Scan/blob/main/docs/pictures/MovableCameraModule.gif?raw=true" target="_blank" style="padding: 2px 6px; background: #007bff; color: white; text-decoration: none; border-radius: 4px; font-size: 9px;">
      Fullscreen View
    </a>
  </p>
  <h4 style="text-align: center; margin-bottom: 10px;">Download 3D Model Files</h4>
  <ul style="list-style: none; padding: 0; text-align: center;">
    <li style="margin-bottom: 8px;">
      <a href="https://github.com/Nr44suessauer/nr44suessauer.github.io/blob/main/nuxt-app/assets/3Dprojects/PosUnit.step?raw=true" target="_blank" style="padding: 6px 12px; background: #007bff; color: white; text-decoration: none; border-radius: 4px; font-size: 14px;">
        Download STEP File 
      </a>
    </li>
  </ul>
</div>



---


<div style="margin: 20px 0; border: 1px solid #ddd; border-radius: 6px; overflow: hidden; width: fit-content; padding: 20px; width: 100vw; max-width: 1000px;">
  <div style="display: flex; flex-direction: row; align-items: center; justify-content: center; gap: 20px;">
    <div style="display: flex; flex-direction: column; align-items: center;">
      <img 
        src="https://github.com/Nr44suessauer/I-Scan/blob/main/docs/pictures/theDomeLamp.gif?raw=true" 
        alt="The Dome Lamp Animation" 
        style="max-width: 400px; width: 100%; border: 1px solid #ddd; border-radius: 6px; box-shadow: 0 2px 4px rgba(0,0,0,0.1);" 
      />
      <a href="https://github.com/Nr44suessauer/I-Scan/blob/main/docs/pictures/theDomeLamp.gif?raw=true" target="_blank" style="margin-top: 5px; padding: 2px 6px; background: #007bff; color: white; text-decoration: none; border-radius: 4px; font-size: 9px; display: inline-block;">
        Fullscreen View
      </a>
    </div>
    <div style="display: flex; flex-direction: column; align-items: center;">
      <img 
        src="https://github.com/Nr44suessauer/I-Scan/blob/main/docs/pictures/TheDomeInReflector.jpg?raw=true" 
        alt="The Dome In Reflector" 
        style="max-width: 400px; width: 100%; border: 1px solid #ddd; border-radius: 6px; box-shadow: 0 2px 4px rgba(0,0,0,0.1);" 
      />
      <a href="https://github.com/Nr44suessauer/I-Scan/blob/main/docs/pictures/TheDomeInReflector.jpg?raw=true" target="_blank" style="margin-top: 5px; padding: 2px 6px; background: #007bff; color: white; text-decoration: none; border-radius: 4px; font-size: 9px; display: inline-block;">
        Fullscreen View
      </a>
    </div>
  </div>
</div>


----

