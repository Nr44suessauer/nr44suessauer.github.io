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