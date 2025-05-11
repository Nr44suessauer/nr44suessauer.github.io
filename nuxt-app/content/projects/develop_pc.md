---
title: Developing a Mini PC
description: Custom-built mini PC with water features
---

<div style="display: flex; flex-direction: row; gap: 15px; margin: 20px 0;">
    <div style="flex: 1; min-width: 0;">
        <img src="https://raw.githubusercontent.com/Nr44suessauer/nr44suessauer.github.io/main/nuxt-app/assets/pictures/minipc/LattePanda.jpg" 
             alt="LattePanda" 
             style="width: 100%; height: auto; border-radius: 8px; box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);" />
    </div>
    <div style="flex: 1; min-width: 0;">
        <img src="https://raw.githubusercontent.com/Nr44suessauer/nr44suessauer.github.io/main/nuxt-app/assets/pictures/minipc/1st_try_mit_wasser.gif" 
             alt="First try with water" 
             style="width: 100%; height: auto; border-radius: 8px; box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);" />
    </div>
    <div style="flex: 1; min-width: 0;">
        <img src="https://raw.githubusercontent.com/Nr44suessauer/nr44suessauer.github.io/main/nuxt-app/assets/pictures/minipc/in_process.jpg" 
             alt="In process" 
             style="width: 100%; height: auto; border-radius: 8px; box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);" />
    </div>
</div>
<div style="text-align: center; margin-bottom: 20px; font-style: italic;">
    Only PC without power supply & screen
</div>

The following sections focus entirely on the PC. An **NVIDIA** graphics card is **not recommended** due to issues with Linux drivers.
It was used simply because it was available, and to replicate the dimensions of the Quadro graphics card and adjust the mounting holes.

<div style="height: 20px;"></div>

# **Parts**

<div style="height: 20px;"></div>

| **Group**                   | **Component**               | **Description**                                                          | **Link**                                                                                                                                                                                                    |
| --------------------------- | --------------------------- | ------------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Computing Hardware**      | LattePanda Mini PC          | Mini PC with Windows or Linux support.                                   | [Product Page](https://www.dfrobot.com/product-1729.html)                                                                                                                                                   |
|                             | NVIDIA Quadro 4000          | High-performance GPU for graphics and compute-intensive applications.    | [Datasheet](https://www.nvidia.com/content/dam/en-zz/Solutions/design-visualization/quadro-product-literature/quadro-rtx-4000-data-sheet-us-nvidia-830682-r6-web.pdf)                                       |
|                             | PCIe Adapter for LattePanda | Expansion for the LattePanda to integrate PCIe cards like GPUs.          | [Product Page](https://www.dfrobot.com/product-2292.html)                                                                                                                                                   |
|                             | 400-Watt Power Supply       | Power supply for the LattePanda and connected components.                | -                                                                                                                                                                                                           |
|                             | SSD Case RGB                | 20Gbps SSD Connection for storage                                        | [Product Page](https://www.amazon.de/dp/B0CVNPRW1Y/ref=twister_B0D8R7BJNZ?_encoding=UTF8)                                                                                                                   |
|                             | SSD NVMe 500gb              | a compatible SSD for the high performance cases                          | [Product Page](https://www.amazon.de/SanDisk-einfache-Installation-Dashboard-Garantie/dp/B0CN3PBS2Z/ref=sr_1_11?__mk_de_DE=%C3%85M%C3%85%C5%BD%C3%95%C3%91&s=computers&sr=1-11)                             |
| **Fluid System Components** | Plastic Tube 66mm           | Plastic tube with a 66 mm diameter.                                      | [Product Page](https://de.aliexpress.com/item/1005007636427535.html?spm=a2g0o.order_list.order_list_main.225.65b85c5fuGsIUM&gatewayAdapt=glo2deu)                                                           |
|                             | 1m Hose                     | Flexible hose for connecting components in fluid systems.                | [Product Page](https://de.aliexpress.com/item/1005003242691209.html?spm=a2g0o.order_list.order_list_main.220.65b85c5fuGsIUM&gatewayAdapt=glo2deu)                                                           |
|                             | Check Valve                 | Prevents backflow in fluid systems.                                      | [Product Page](https://de.aliexpress.com/item/1005001411693525.html?spm=a2g0o.order_list.order_list_main.215.65b85c5fuGsIUM&gatewayAdapt=glo2deu)                                                           |
|                             | Electric Valve              | Electrically operated valve for controlling fluid flow.                  | [Product Page](https://de.aliexpress.com/item/1005005779605656.html?spm=a2g0o.productlist.main.35.48192c1cKK2OaR&algo_pvid=9a96b436-c528-4c42-b58c-643d7bead010&utparam-url=scene%3Asearch%7Cquery_from%3A) |
|                             | Membrane Air Pump           | Pump for generating air bubbles inside the plastic tube.                 | [Product Page](https://de.aliexpress.com/item/1005007636427535.html?spm=a2g0o.order_list.order_list_main.225.65b85c5fuGsIUM&gatewayAdapt=glo2deu)                                                           |
|                             | Bubble Stone                | Creates fine air bubbles in fluid or water systems.                      | [Product Page](https://de.aliexpress.com/item/1005006467081651.html?spm=a2g0o.order_list.order_list_main.230.65b85c5fuGsIUM&gatewayAdapt=glo2deu)                                                           |
| **Electronics**             | Reed Relay                  | Electrical relay for controlling the membrane air pump.                  | -                                                                                                                                                                                                           |
|                             | WS28 LED Ring (12 LEDs)     | RGB LED ring with 12 individually addressable LEDs for lighting effects. | [Product Page](https://de.aliexpress.com/item/4001061749100.html?spm=a2g0o.productlist.main.1.2a6c38abwWlxTH&algo_pvid=ef3cb399-c448-4661-aaae-1a78028cdfe7&utparam-url=scene%3Asearch%7Cquery_from%3A)     |
|                             | Antennas                    | Components for improving wireless signal reception.                      | [Product Page](https://de.aliexpress.com/item/1005006108506933.html?spm=a2g0o.order_list.order_list_main.260.65b85c5fuGsIUM&gatewayAdapt=glo2deu)                                                           |
|                             | 12V AMD Fan RGB             | RGB cooling fan for efficient & stylish heat dissipation.                | [Product Page](https://geizhals.de/amd-wraith-prism-712-000075-a1980869.html)                                                                                                                               |
| **3D Printing Materials**   | 2kg Filament HIPS           | Filament for 3D printing, designed for electric case.                    | -                                                                                                                                                                                                           |

---

<div style="height: 20px;"></div>

## **Fundation**

<div style="height: 10px;"></div>
<!-- Table Software -->
<div class="row">
    <div class="col-md-6">
        <p>
        Used software to configure and program the LattePanda. The computer is capable of running as Windows, Linux, Android, or Hackintosh (Apple). 
        <p></p>
        You can find the OS documentation <a href="https://docs.lattepanda.com/content/alpha_edition/os/">here</a>.
        <p></p>
        Hardware interface dokumentation <a href="https://docs.lattepanda.com/content/delta_edition/io_playability/">here</a>
        </p>
    </div>
    <div class="col-md-6">

<div class="table-responsive">
<table class="table">
    <thead>
        <tr>
            <th><strong>Software</strong></th>
            <th><strong>Description</strong></th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td><a href="https://code.visualstudio.com/">VS Code</a> & <a href="https://platformio.org/">PlatformIO</a></td>
            <td>Programming the onboard Leonardo µC (for pump & LEDs)</td>
        </tr>
        <tr>
            <td><a href="https://www.raspberrypi.com/software/">Pi Manager</a></td>
            <td>For generate bootstick</td>
        </tr>
        <tr>
            <td><a href="https://ultimaker.com/software/ultimaker-cura">Cura</a></td>
            <td>3D Printing slicing and preparation</td>
        </tr>
        <tr>
            <td><a href="https://www.autodesk.com/products/fusion-360/overview">Fusion 360</a></td>
            <td>CAD design and 3D modeling</td>
        </tr>
    </tbody>
</table>
</div>     
    </div>
</div>

---

## **Benchmarks**

<div class="row">
    <div class="col-md-6">
        <p>
        For interest in "best possible performance", you can watch this video.
        </p>
        <p>
        The limitation of my system is definitely the graphics card. Warcraft 3 is playable at 20FPS (Max Settings) & League of Legends at 40FPS (Max Settings).
        </p>
        <p>
        I myself prefer using emulators like <a href="https://xemu.app/">Xemu</a> or <a href="https://pcsx2.net/">PCSX2</a>.
        </p>
        <p>
        The <strong>performance is flawless</strong> there, but it's more about nostalgia than performance.   
        </p>
    </div>
    <div class="col-md-6">
        <div class="video-preview">
            <iframe width="100%" height="315" src="https://www.youtube.com/embed/PCd3HtRfQ8k" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
    </div>
</div>

--- 

# **Electical System**

<img src="https://github.com/Nr44suessauer/nr44suessauer.github.io/blob/main/nuxt-app/assets/pictures/minipc/Schaltplan.JPG?raw=true" 
    alt="Electrical System Schematic" 
    style="width: 100%; max-width: 800px; display: block; margin: 0 auto;">

<div style="height: 20px;"></div>

---


<h2><strong>Component Table</strong></h2>
<table border="1" style="border-collapse: collapse; width: 100%;">
    <thead>
        <tr>
            <th style="font-weight: normal; padding: 8px;">Component</th>
            <th style="font-weight: normal; padding: 8px;">Pin Setup</th>
            <th style="font-weight: normal; padding: 8px;">Info</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td style="padding: 8px;">Latte Panda</td>
            <td style="padding: 8px;">+12V, GND, Relay, LED Strip, Knob 5V &amp; Data</td>
            <td style="padding: 8px;">Built-in Leonardo for pump &amp; LED control</td>
        </tr>
        <tr>
            <td style="padding: 8px;">GPU Adapter</td>
            <td style="padding: 8px;">+12V, +5V, GND, Panda</td>
            <td style="padding: 8px;">Direct connection to Latte Panda</td>
        </tr>
        <tr>
            <td style="padding: 8px;">Relay</td>
            <td style="padding: 8px;">+5V, GND, +5V, Leonardo</td>
            <td style="padding: 8px;">Reed Relay – consider a transistor alternative</td>
        </tr>
        <tr>
            <td style="padding: 8px;">Fan</td>
            <td style="padding: 8px;">+12V, GND, PWM, (RGB Data)</td>
            <td style="padding: 8px;">RGB self-control mode</td>
        </tr>
        <tr>
            <td style="padding: 8px;">LED Strip</td>
            <td style="padding: 8px;">+5V, Leonardo, GND</td>
            <td style="padding: 8px;"> ws28 3pin</td>
        </tr>
    </tbody>
</table>



<div style="height: 20px;"></div>
---
<div style="height: 20px;"></div>


# **Power Supply Configuration**

<div class="textbox textbox-green" style="display: flex; flex-wrap: wrap; gap: 20px; align-items: center; margin: 20px 0;">
    <div style="flex: 1; min-width: 300px;">
        <p><strong>Note:</strong> The 400W power supply must be bridged so that both the 12V and 5V outputs are available when connected and activated. This crucial step ensures that all connected components receive the proper voltage reliably.</p>
        <p>At the main connector of the power supply, wires 14 and 16 are shorted, with wire 16 serving as ground.</p>
    </div>
    <div style="flex: 1; min-width: 300px; text-align: center;">
        <img src="https://raw.githubusercontent.com/Nr44suessauer/nr44suessauer.github.io/main/nuxt-app/assets/pictures/minipc/stecker.png" 
             alt="ATX Connector Setup Diagram" 
             style="width: 30%; max-width: 300px; margin: 0 auto;" />
        <div style="margin-top: 10px; font-style: italic; text-align: center;">ATX Connector Setup Diagram</div>
    </div>
</div>


<div style="height: 20px;"></div>
---
<div style="height: 20px;"></div>


# **Fluid System**
<div style="height: 20px;"></div>
<div class="textbox textbox-yellow" style="margin: 20px 0;">
    <div style="margin-bottom: 20px;">
        <p>
            The Stop Valve functions as a check valve and forms the <strong>theoretical boundary between air and water</strong>. It prevents water from flowing back and separates the zones.
        </p>
        <p>
            The Magnetic Valve is open when no voltage is applied (i.e., without power). Once the PC or system is supplied with power, it closes. This mechanism enables targeted venting of the pipeline behind the check valve. The pump, <strong>when idle, slowly allows air to escape</strong>, which can lead to <strong>unpredictable pressure conditions</strong>. Without venting, the pressure behind the check valve might build up and trigger it uncontrollably. By opening the Magnetic Valve during a power loss, air is <strong>actively vented</strong> so that the pressure remains stable and the check valve opens only when required—such as during pump operation.
        </p>
    </div>
    <div style="text-align: center;">
        <img src="https://github.com/Nr44suessauer/nr44suessauer.github.io/blob/main/nuxt-app/assets/pictures/minipc/fluidsystems.JPG?raw=true" 
             alt="Fluid System Diagram" 
             style="width: 80%; max-width: 600px; margin: 0 auto;" />
        <div style="margin-top: 10px; font-style: italic; text-align: center;"></div>
    </div>
</div>


<div style="height: 20px;"></div>
---
<div style="height: 20px;"></div>


# **Pump Control System**

<div class="textbox textbox-violet" style="display: flex; flex-wrap: wrap; gap: 20px; align-items: center; margin: 20px 0;">
    <div style="flex: 1; min-width: 300px;">
        <p>The pump is operated by a relay driven by a <strong>PWM signal from the onboard Leonardo chip</strong>. A random value between 0 and 255 is selected, and the corresponding signal is applied to the relay's control pin, allowing for precise control of the pump's strength. A reed relay, known for its <strong>silent magnetic switching</strong>, is used instead of traditional noisier relays. It is also worth noting that a <strong>classic transistor would be the best choice</strong> for improved efficiency and reliability.</p>
    </div>
    <div style="flex: 1; min-width: 300px; text-align: center;">
        <img src="https://github.com/Nr44suessauer/nr44suessauer.github.io/blob/main/nuxt-app/assets/pictures/minipc/oszi.gif?raw=true" 
             alt="Oscilloscope Gif" 
             style="width: 70%; max-width: 300px; margin: 0 auto;" />
        <div style="margin-top: 10px; font-style: italic; text-align: center;">PWM Signal Visualization</div>
    </div>
</div>

<div style="height: 20px;"></div>
---
<div style="height: 20px;"></div>

# **3D Design**
<div style="height: 20px;"></div>

<p><a href="https://github.com/Nr44suessauer/nr44suessauer.github.io/tree/main/assets/3Dprojects">Full file available for download [here]</a>.</p>


<div style="display: flex; flex-direction: row; gap: 15px; margin: 20px 0;">
    <div style="flex: 1.5; min-width: 0;">
        <img src="https://github.com/Nr44suessauer/nr44suessauer.github.io/blob/main/nuxt-app/assets/pictures/minipc/AnimationDevelopPc.gif?raw=true" 
             alt="Animation Develop PC" 
             style="width: 150%; height: auto; border-radius: 8px; box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);" />
    </div>
    <div style="flex: 1.5; min-width: 0; display: flex; flex-direction: column; justify-content: center;">
        <p>The power connections are Tx60 Female, and the HDMI output comes with an adapter (DPort -> HDMI).</p>
        <p>The flaps can be modified or fitted with additional USB ports. The bottom is designed with a <strong>grid structure</strong> to ensure that any water leakage does not accumulate inside the case.</p>
        <p>The RGB fan can be inserted into the duct, effectively <strong>cooling</strong> the <strong>backside</strong> of both the graphics card and the Latte Panda. Additionally, the grid structure at the bottom functions as an air outlet.</p>
        <p>An <strong>LED ring</strong> is attached within the tube, and the cables run through the case to the Latte Panda.</p>
        <p>Please note that press-fit sleeves and screws are required.</p>
    </div>
</div>

<div class="textbox textbox-yellow" style="margin: 20px 0;">
    <div style="margin-bottom: 20px;">
        <p>
            <strong>Note:</strong> The tube was originally a paintbrush packaging. It is therefore advisable to adjust the placeholder to match the size of the material actually available.
        </p>
    </div>
</div>


<div style="height: 50px;"></div>

<div class="row mt-3">
    <div class="col-sm mt-3 mt-md-0">
        <img src="https://raw.githubusercontent.com/Nr44suessauer/nr44suessauer.github.io/main/assets/img/minipc/skellet.PNG" 
             loading="eager" 
             class="img-fluid rounded z-depth-1" 
             style="max-width:80%;" />
    </div>
    <div class="col-sm mt-3 mt-md-0">
        <img src="https://raw.githubusercontent.com/Nr44suessauer/nr44suessauer.github.io/main/assets/img/minipc/baseplate.PNG" 
             loading="eager" 
             class="img-fluid rounded z-depth-1" 
             style="max-width:80%;" />
    </div>
    <div class="col-sm mt-3 mt-md-0">
        <img src="https://raw.githubusercontent.com/Nr44suessauer/nr44suessauer.github.io/main/assets/img/minipc/back.PNG" 
             loading="eager" 
             class="img-fluid rounded z-depth-1" 
             style="max-width:80%;" />
    </div>
</div>



<div style="height: 20px;"></div>
---
<div style="height: 20px;"></div>

# **"Future Design additions"**

<div style="height: 20px;"></div>
<div class="row align-items-center">
    <div class="col-md-6 text-center">
        <img src="https://raw.githubusercontent.com/Nr44suessauer/nr44suessauer.github.io/main/assets/img/minipc/mewtwo.gif" 
             alt="Mewtwo Gif" 
             class="img-fluid" 
             style="width:70%;" />
    </div>
    <div class="col-md-6">
        <h4><strong>Mewtwo in the Tank</strong></h4>
        <p>
            Mewtwo will be housed in this lab tank. This eye-catching centerpiece reinforces the experimental spirit of the project but also <strong>symbolizes a harmonious blend of art.</strong> Additionally, this file has significantly influenced the design from the very beginning.
        </p>
        <div class="row">
        <div class="col-12 text-center">
        <img src="https://imgflip.com/s/meme/Laughing-Leo.png" 
             alt="Calvincandy Django Gif" 
             class="img-fluid" 
             style="width:30%; margin-top:15px;" />
    </div>
    </div>
</div>
</div>


<div style="height: 20px;"></div>
---
<div style="height: 20px;"></div>

# **Gallery**
<div style="height: 20px;"></div>

<div class="gallery">
    <div class="row">
        <div class="row">
        <div class="col-sm mt-3 mt-md-0">
            <img src="https://raw.githubusercontent.com/Nr44suessauer/nr44suessauer.github.io/main/assets/img/minipc/1st_try_mit_wasser.gif" 
                 loading="lazy" 
                 class="img-fluid rounded z-depth-1" />
        </div>
        <div class="col-sm mt-3 mt-md-0">
            <img src="https://raw.githubusercontent.com/Nr44suessauer/nr44suessauer.github.io/main/assets/img/minipc/in_process.jpg" 
                 loading="lazy" 
                 class="img-fluid rounded z-depth-1" />
        </div>
        <div class="col-sm mt-3 mt-md-0">
            <img src="https://raw.githubusercontent.com/Nr44suessauer/nr44suessauer.github.io/main/assets/img/minipc/LattePanda.jpg" 
                 loading="lazy" 
                 class="img-fluid rounded z-depth-1" />
        </div>
        <div class="col-sm mt-3 mt-md-0">
            <img src="https://raw.githubusercontent.com/Nr44suessauer/nr44suessauer.github.io/main/assets/img/minipc/im_office.jpg" 
                 loading="lazy" 
                 class="img-fluid rounded z-depth-1" />
        </div>
    </div>
        <div class="col-sm mt-3 mt-md-0">
            <img src="https://raw.githubusercontent.com/Nr44suessauer/nr44suessauer.github.io/main/assets/img/minipc/waterservice.jpg" 
                 loading="lazy" 
                 class="img-fluid rounded z-depth-1" />
        </div>
        <div class="col-sm mt-3 mt-md-0">
            <img src="https://raw.githubusercontent.com/Nr44suessauer/nr44suessauer.github.io/main/assets/img/minipc/setupA.jpg" 
                 loading="lazy" 
                 class="img-fluid rounded z-depth-1" />
        </div>
        <div class="col-sm mt-3 mt-md-0">
            <img src="https://raw.githubusercontent.com/Nr44suessauer/nr44suessauer.github.io/main/assets/img/minipc/SetupB.jpg" 
                 loading="lazy" 
                 class="img-fluid rounded z-depth-1" />
        </div>
    </div>
</div>

