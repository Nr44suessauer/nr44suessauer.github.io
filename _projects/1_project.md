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

| **Bauteil**                | **Beschreibung**                                                           | **Link**                                                                                     |
|----------------------------|----------------------------------------------------------------------------|---------------------------------------------------------------------------------------------|
| LattePanda Mini PC         | Mini-PC mit Windows- oder Linux-Support, ideal für kompakte Projekte.      | [Produktseite](https://www.dfrobot.com/product-2292.html)                                 |
| NVIDIA Quadro 4000         | Hochleistungs-GPU für Grafik- und Rechenintensive Anwendungen.             | [Datenblatt](https://www.nvidia.com/content/dam/en-zz/Solutions/design-visualization/quadro-product-literature/quadro-rtx-4000-data-sheet-us-nvidia-830682-r6-web.pdf) |
| PCIe Adapter für LattePanda | Erweiterung für den LattePanda, um PCIe-Karten wie GPUs zu integrieren.     | [Produktseite](https://www.dfrobot.com/product-1729.html)                                 |
| 400-Watt-Netzteil          | Stromversorgung für den LattePanda und angeschlossene Komponenten.         | -                                                                                           |



<div class="row justify-content-sm-center">
    <div class="col-sm-8 mt-3 mt-md-0">
        {% include figure.liquid path="assets/img/6.jpg" title="example image" class="img-fluid rounded z-depth-1" %}
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
