---
layout: post
title: CNN | Digit Recognition with Mnist 
date: 2025-03-26 08:57:00
description: jupyter notebook for Deep Learning 
tags: jupyter_notebook TensorFlow DeepLearning SEM Keras
categories: Fun
related_posts: false
disqus_comments: true
featured: false
---

<div style="display: flex; align-items: flex-start;">
    <div style="flex: 1; padding-right: 10px;">
        <h3><strong>About the MNIST Dataset</strong></h3>
        <p>The MNIST dataset is a widely used collection of handwritten digits, serving as an introduction to deep learning and image processing. It consists of <strong>70,000 grayscale images</strong> divided into training and testing sets, with each image representing a single handwritten digit from 0 to 9.</p>
        <h4><strong>Characteristics of the Dataset</strong></h4>
        <ul>
            <li><strong>Size:</strong> 70,000 images (60,000 training images and 10,000 testing images)</li>
            <li><strong>Image Format:</strong> 28x28 pixels in grayscale</li>
            <li><strong>Applications:</strong> Classification, image processing, and machine learning</li>
            <li><strong>Challenge:</strong> Despite its simplicity and small image size, the dataset forms a solid foundation for initial experiments with neural networks.</li>
        </ul>
    </div>
    <div>
        <img src="https://upload.wikimedia.org/wikipedia/commons/2/27/MnistExamples.png" alt="MNIST Examples" style="max-width: 80%; height: auto;">
    </div>
</div>

#### **Significance in Deep Learning**

MNIST is a standard dataset for beginners in machine learning. It effectively demonstrates basic concepts of Convolutional Neural Networks (CNNs) and other classification algorithms. Thanks to its simplicity and numerous benchmarks, it is an **ideal starting point** for training, evaluating, and optimizing models.

#### **Additional Features**
- The neural network is **fully configurable**, allowing adjustments to the architecture and training parameters.
- At the end, **custom digits can be tested to evaluate the model's performance on user-provided data.**
> My 1 looks like a comination of 7 & 1 in the Mnist dataset, the result accordingly

<div style="display: flex; align-items: center; margin-top: 30px;">
    <p></p>
</div>

[GitRepo](https://github.com/Nr44suessauer/DeepLearning_assignment2/blob/main/mnauendo_Simple%20MNIST%20Handwritten%20Digit%20Recognition.ipynb) 
<br>

[Tutorial from Tensorflow](https://www.tensorflow.org/datasets/keras_example)

{::nomarkdown}
{% assign jupyter_path = "assets/jupyter/mnauendo_Simple MNIST Handwritten Digit Recognition.ipynb" | relative_url %}
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