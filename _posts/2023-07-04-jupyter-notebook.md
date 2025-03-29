---
layout: post
title: Neural Style Transfer with TensorFlow
date: 2027-03-28 08:57:00-0400
description: jupyter notebook HomeWork for Deep Learning 
tags: jupyter_notebook
categories: Fun
related_posts: false
disqus_comments: true
featured: true
---


This is my homework assignment for Deep Learning. In this project, we are tasked with implementing our own version based on the Neural Style Transfer tutorial from TensorFlow. [Neural Style Transfer tutorial](https://www.tensorflow.org/tutorials/generative/style_transfer)

My primary objective is to generate mosaic windows featuring unique motifs that differ from conventional designs—such as traditional church elements. 
The plan is to then convert these generated images into SVG files. 
These SVGs can later be used in applications like Fusion 360 (or similar software) to extrude the designs, thereby creating files that can be 3D printed, laser cut, or manufactured by other means.

Note: This upcoming version is still a work in progress and currently meets the basic requirement of the assignment by focusing on the implementation aspect.

{::nomarkdown}
{% assign jupyter_path = "assets/jupyter/Assignment_3_mnauendo.ipynb" | relative_url %}
{% capture notebook_exists %}{% file_exists assets/jupyter/blog.ipynb %}{% endcapture %}
{% if notebook_exists == "true" %}
{% jupyter_notebook jupyter_path %}
{% else %}

<p>Sorry, the notebook you are looking for does not exist.</p>
{% endif %}
{:/nomarkdown}

Note that the jupyter notebook supports both light and dark themes.
