---
title: i_Scan
description: custom open source 3D scanner - Meshroom Guide
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
    <!-- Tabellen und Funktionsgruppen werden unter das Diagramm verschoben -->
  </div>
</details>


<!-- Tabellen und Funktionsgruppen ohne umschließendes <div> für Markdown-Tabellen-Rendering -->
<!-- ...existing code for other function groups and example usage... -->



---

<!-- Activity Diagram und Execution Servo als eigenständige Reiter unterhalb -->

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
    </div>
  </div>
</details>

---

</details>

---