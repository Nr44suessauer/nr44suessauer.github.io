---
layout: page
title: Develop Pc
description: LattePanda combined wtih nearly unlimited Power from a Nvidia Quaddro 4000
img: https://raw.githubusercontent.com/Nr44suessauer/nr44suessauer.github.io/main/assets/img/pc_project.gif
importance: 1
category: work
related_publications: true
---
A personal project aimed at building a LAN party PC with low power consumption and a stylish design. Compatible with a self-made screen and a 12V fridge. 

Complete setup is powered by a 400W power supply, providing 3.3V, 5V, and 12V.

---

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/minipc/LattePanda.jpg" class="img-fluid rounded z-depth-1" %}
    </div>
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="https://raw.githubusercontent.com/Nr44suessauer/nr44suessauer.github.io/main/assets/img/minipc/1st_try_mit_wasser.gif" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/minipc/in_process.jpg"  class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    Only Pc without power supply & screen
</div>

The following sections focus entirely on the PC. An **NVIDIA** graphics card is **not recommended** due to issues with Linux drivers. 
It was used simply because it was available, and to replicate the dimensions of the Quadro graphics card and adjust the mounting holes. 

<div style="height: 20px;"></div>


# **Parts** 

| **Group**                 | **Component**              | **Description**                                                            | **Link**                                                                                    |
|---------------------------|----------------------------|----------------------------------------------------------------------------|---------------------------------------------------------------------------------------------|
| **Computing Hardware**    | LattePanda Mini PC         | Mini PC with Windows or Linux support.                                     | [Product Page](https://www.dfrobot.com/product-1729.html)                                   |
|                           | NVIDIA Quadro 4000         | High-performance GPU for graphics and compute-intensive applications.      | [Datasheet](https://www.nvidia.com/content/dam/en-zz/Solutions/design-visualization/quadro-product-literature/quadro-rtx-4000-data-sheet-us-nvidia-830682-r6-web.pdf) |
|                           | PCIe Adapter for LattePanda | Expansion for the LattePanda to integrate PCIe cards like GPUs.           | [Product Page](https://www.dfrobot.com/product-2292.html)                                   |
|                           | 400-Watt Power Supply      | Power supply for the LattePanda and connected components.                  | -                                                                                           |
|                           | SSD Case RGB               | 20Gbps SSD Connection for storage                                          | [Product Page](https://www.amazon.de/dp/B0CVNPRW1Y/ref=twister_B0D8R7BJNZ?_encoding=UTF8)   |
|                           | SSD NVMe 500gb             | a compatible SSD for the high performance cases                            | [Product Page](https://www.amazon.de/SanDisk-einfache-Installation-Dashboard-Garantie/dp/B0CN3PBS2Z/ref=sr_1_11?__mk_de_DE=%C3%85M%C3%85%C5%BD%C3%95%C3%91&s=computers&sr=1-11)|
| **Fluid System Components** | Plastic Tube 66mm        | Plastic tube with a 66 mm diameter.                                        | [Product Page](https://de.aliexpress.com/item/1005007636427535.html?spm=a2g0o.order_list.order_list_main.225.65b85c5fuGsIUM&gatewayAdapt=glo2deu) |
|                           | 1m Hose                    | Flexible hose for connecting components in fluid systems.                  | [Product Page](https://de.aliexpress.com/item/1005003242691209.html?spm=a2g0o.order_list.order_list_main.220.65b85c5fuGsIUM&gatewayAdapt=glo2deu) |
|                           | Check Valve                | Prevents backflow in fluid systems.                                        | [Product Page](https://de.aliexpress.com/item/1005001411693525.html?spm=a2g0o.order_list.order_list_main.215.65b85c5fuGsIUM&gatewayAdapt=glo2deu) |
|                           | Electric Valve             | Electrically operated valve for controlling fluid flow.                    | [Product Page](https://de.aliexpress.com/item/1005005779605656.html?spm=a2g0o.productlist.main.35.48192c1cKK2OaR&algo_pvid=9a96b436-c528-4c42-b58c-643d7bead010&utparam-url=scene%3Asearch%7Cquery_from%3A) |
|                           | Membrane Air Pump          | Pump for generating air bubbles inside the plastic tube.                   | [Product Page](https://de.aliexpress.com/item/1005007636427535.html?spm=a2g0o.order_list.order_list_main.225.65b85c5fuGsIUM&gatewayAdapt=glo2deu) |
|                           | Bubble Stone               | Creates fine air bubbles in fluid or water systems.                        | [Product Page](https://de.aliexpress.com/item/1005006467081651.html?spm=a2g0o.order_list.order_list_main.230.65b85c5fuGsIUM&gatewayAdapt=glo2deu) |
| **Electronics**           | Reed Relay                 | Electrical relay for controlling the membrane air pump.                    | -                                                                                           |
|                           | WS28 LED Ring (12 LEDs)    | RGB LED ring with 12 individually addressable LEDs for lighting effects.   | [Product Page](https://de.aliexpress.com/item/4001061749100.html?spm=a2g0o.productlist.main.1.2a6c38abwWlxTH&algo_pvid=ef3cb399-c448-4661-aaae-1a78028cdfe7&utparam-url=scene%3Asearch%7Cquery_from%3A) |
|                           | Antennas                   | Components for improving wireless signal reception.                        | [Product Page](https://de.aliexpress.com/item/1005006108506933.html?spm=a2g0o.order_list.order_list_main.260.65b85c5fuGsIUM&gatewayAdapt=glo2deu) |
|                           | 12V AMD Fan RGB            | RGB cooling fan for efficient & stylish heat dissipation.                  | [Product Page](https://geizhals.de/amd-wraith-prism-712-000075-a1980869.html)               |
| **3D Printing Materials** | 2kg Filament HIPS          | Filament for 3D printing, designed for electric case.                        | -                                                                                           |

---
<div style="height: 20px;"></div>

<div class="row">
    <div class="col-md-6">
        <p>
            Fundation
            <p></p>

            Used software to configure and program the LattePanda. The computer is capable of running as Windows, Linux, Android, or Hackintosh (Apple). 
            You can find the documentation <a href="https://docs.lattepanda.com/content/alpha_edition/os/">here</a>.
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
            <td>For booting WIN10 from a USB stick</td>
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
# Same Project other Parts

<div class="row">
    <div class="col-md-6">
        <p>
        This is the same project, just without the case and with a different graphics card. For the best possible performance, you can watch this video.
        </p>
    </div>
    <div class="col-md-6">
        <div class="video-preview">
            <iframe width="560" height="315" src="https://www.youtube.com/embed/PCd3HtRfQ8k" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
    </div>
</div>
---

<div class="row justify-content-sm-center">
    <div class="col-sm-8 mt-3 mt-md-0">
    <img src="https://image.dfrobot.com/image/data/DFR0543/20201123%20Update/LP%20delta%203.jpg" alt="Image" style="width:50%;">
    </div>
    <div class="col-sm-4 mt-3 mt-md-0">
        {% include figure.liquid path="assets/img/11.jpg" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    You can also have artistically styled 2/3 + 1/3 images, like these.
</div>

The code is simple.
Just wrap your images with `<div class="col-sm">` and place them inside `<div class="row">` (read more about the <a href="https://getbootstrap.com/docs/4.4/layout/grid/">Bootstrap Grid</a> system).
To make images responsive, add `img-fluid` class to each; for rounded corners and shadows use `rounded` and `z-depth-1` classes.
Here's the code for the last row of images above:

{% raw %}

```html
<div class="row justify-content-sm-center">
  <div class="col-sm-8 mt-3 mt-md-0">
    {% include figure.liquid path="assets/img/6.jpg" title="example image" class="img-fluid rounded z-depth-1" %}
  </div>
  <div class="col-sm-4 mt-3 mt-md-0">
    {% include figure.liquid path="assets/img/11.jpg" title="example image" class="img-fluid rounded z-depth-1" %}
  </div>
</div>
```

{% endraw %}
