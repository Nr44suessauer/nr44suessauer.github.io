---
layout: post
title: Neural Style Transfer with TensorFlow
date: 2025-03-28 08:57:00
description: jupyter notebook for Deep Learning 
tags: jupyter_notebook TensorFlow DeepLearning SEM
categories: Fun
related_posts: false
disqus_comments: true
featured: true
hidden: true
---


<div style="display: flex; align-items: center;">
  <div style="flex: 1; padding-right: 20px;">
    <p>This one of my assignments for Deep Learning. In this project, we are tasked with implementing our <strong>own version based on the Neural Style Transfer tutorial from TensorFlow</strong>. <a href="https://www.tensorflow.org/tutorials/generative/style_transfer">tutorial</a></p>
    <p>My <strong>primary objective is to generate mosaic windows</strong> featuring unique motifs that <strong>influenced by modern elements</strong>, </p>
  </div>
  <div style="flex: 0 0 auto; margin-left: 20px; width: 25%;">
    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Kirchenfenster_Wasser.JPG/960px-Kirchenfenster_Wasser.JPG" alt="Kirchenfenster" style="width: 100%; height: auto;">
    <p style="font-size: 0.8em; text-align: center;"></p>
  </div>
</div>

<div style="display: flex; align-items: center; margin-top: 30px;">
    <p></p>
</div>

<div style="display: flex; align-items: flex-start;">
  <div style="flex: 0 0 auto; margin-right: 20px; width: 20%;">
    <img src="https://raw.githubusercontent.com/Nr44suessauer/nr44suessauer.github.io/8bdf51586f4925e8333b7b5a28cb378135039e9f/assets/img/svg/1717856636_BraveHearth.jpg.svg" alt="Brave Hearth" style="width: 100%; height: auto;">
  </div>
  <div style="flex: 1;">
    <p>The Future is then to <strong>convert these generated images into SVG files</strong>. These <a href="https://en.wikipedia.org/wiki/SVG">SVGs</a> can later be used in applications like <a href="https://www.autodesk.com/de/products/fusion-360/overview?term=1-YEAR&tab=subscription#top">Fusion 360</a> <a href="https://de.wikipedia.org/wiki/Liste_von_CAD-Programmen">(or similar software)</a> to extrude the designs, thereby creating files that <strong>can be 3D printed, laser cut, or manufactured by other means</strong>.</p>
    <p><a href="https://convertio.co/de/jpg-svg/">Online Converter</a></p>
    <blockquote>
      <p>Note: A Fusion 360 student account is provided free of charge.</p>
    </blockquote>
  </div>
</div>

<div style="display: flex; align-items: center; margin-top: 30px;">
    <p></p>
</div>

#### **Neural Style Transfer**
<div style="display: flex; align-items: flex-start;">
  <div style="flex: 1; padding-right: 20px;">
    <p>This upcoming version is still a <strong>work in progress</strong> and currently meets the basic requirement of the assignment by focusing on the implementation aspect. <a href="https://github.com/Nr44suessauer/DeepLearning_assignment2/tree/main/DeepLearning_assignment3">git project</a>.</p>
    <p>Colors are not really necessary for my model. However, if you aim to create this mosaic window, a colorful vision might be appreciated. The <strong>next step</strong> will involve combining black-and-white mosaic images with colored content images to focus on the essentials. For later, with 1(B&W) instead of 3 dimensions(RGB)</p>
  </div>
  <div style="flex: 0 0 auto; margin-left: 20px; width: 35%;">
    <img src="https://github.com/Nr44suessauer/DeepLearning_assignment2/blob/main/DeepLearning_assignment3/generated_creation%20of%20adam_with_mosaik.jpg?raw=true" alt="Neural Style Mosaic" style="width: 100%; height: auto;">
  </div>
</div>

<div style="display: flex; align-items: center; margin-top: 10px;">
    <p></p>
</div>

#### **How to Use**
The Jupyter Notebook can be downloaded and, once all required libraries are installed, executed without issues. 

**To update the images, simply specify a different path in the configuration.** The comments serve as both documentation and explanation of the code. You can also modify other configuration settings as needed. 

Please note that if you plan to push this further, it is recommended to use a GPU. If you're using Nvidia hardware, refer to this link for more details: <a href="https://developer.nvidia.com/cuda-toolkit">Nvidia CUDA Toolkit</a>.

<div style="display: flex; align-items: center; margin-top: 30px;">
    <p></p>
</div>

#### **Examples**

<div class="row mt-3">
  {% assign count = 0 %}
  {% for file in site.static_files %}
    {% if file.path contains "assets/img/jupyter/generated/" %}
      {% assign count = count | plus: 1 %}
      {% if count <= 4 %}
      <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path=file.path class="img-fluid rounded z-depth-1" zoomable=true %}
      </div>
      {% endif %}
    {% endif %}
  {% endfor %}
</div>
<div class="row mt-3">
  {% assign count = 0 %}
  {% for file in site.static_files %}
    {% if file.path contains "assets/img/jupyter/generated/" %}
      {% assign count = count | plus: 1 %}
      {% if count > 4 %}
      <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path=file.path class="img-fluid rounded z-depth-1" zoomable=true %}
      </div>
      {% endif %}
    {% endif %}
  {% endfor %}
</div>
<div class="caption"></div>

<div style="display: flex; align-items: center; margin-top: 30px;">
    <p></p>
</div>

**Conclusion for my Goal** \
To create mosaic windows, I first tried a direct approach with my Configurator. However, I believe it would be **more effective to apply filters or algorithms that adjust the edges to form intuitive shapes.** This method will **separately detect outlines** and use them as a grid to build the mosaic.

<div style="display: flex; align-items: center; margin-top: 30px;">
    <p></p>
</div>

[Code](https://github.com/Nr44suessauer/DeepLearning_assignment2/tree/main/DeepLearning_assignment3)
```python
# Install all necessary libraries for the notebook  |  https://jupyter.org/
%pip install tensorflow ipython matplotlib numpy pillow
```

{::nomarkdown}
{% assign jupyter_path = "assets/jupyter/Assignment_3_mnauendo.ipynb" | relative_url %}
{% capture notebook_exists %}{% file_exists assets/jupyter/blog.ipynb %}{% endcapture %}
{% if notebook_exists == "true" %}
{% jupyter_notebook jupyter_path %}
{% else %}
<p>Sorry, the notebook you are looking for does not exist.</p>
{% endif %}
{:/nomarkdown}

<div style="display: flex; align-items: center; margin-top: 30px;">
    <p></p>
</div>