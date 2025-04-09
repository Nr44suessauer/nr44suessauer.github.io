---
layout: page
permalink: /TechnicalContent/
title: Technical Content
description:
nav: true
#nav: false
nav_order: 3
---
<!-- 
INSTRUCTIONS FOR EDITING THIS PAGE:
==================================

This page uses several JavaScript libraries for animation and layout:
- Font Awesome for icons (fas fa-* classes)
- AOS (Animate On Scroll) for scroll animations
- AnimeJS for advanced animations
- Custom CSS in /assets/css/lectures.css

GENERAL STRUCTURE:
1. Matrix background animation (Canvas element)
2. Main container with header, course overview, current semester, and interactive elements
3. JavaScript for animations at the end of the page

EDITING GUIDELINES:
- To add a new lecture: Copy a "lecture-card" block and adjust the content
- To update the current semester: Edit the "timeline-item" entries
- Icons can be changed via Font Awesome classes (e.g., "fas fa-laptop-code")
- Fade animation delays can be adjusted via "data-aos-delay"
-->

<!-- This style block hides the page title -->
<style>
  .post-header {
    display: none !important;
  }
</style>

<!-- Matrix Background Animation -->
<div class="matrix-bg">
  <canvas id="matrix-canvas"></canvas>
</div>

<div class="lectures-container">
  <div class="lectures-header" style="background-image: url('https://wallpapercave.com/wp/wp11780218.jpg'); background-size: cover; background-position: center -150px; height: 150px; margin-bottom: 20px;">
    <!-- All content in the header area has been removed -->
  </div>

  <!-- 
  LECTURE CARDS:
  - Each block represents a lecture
  - Icon classes can be found at fontawesome.com
  - "data-aos" controls the animation when scrolling
  - "data-aos-delay" specifies when the animation starts (in ms)
  -->
  <div class="lectures-grid">
    <div class="lecture-card" data-aos="fade-up" data-aos-delay="200">
      <div class="lecture-icon"><i class="fas fa-brain"></i></div>
      <h3>Machine & Deep Learning</h3>
      <p>Introduction to Machine Learning and AI concepts, small projects that each address a specific use case</p>
      <div class="lecture-highlights">
        <a href="https://deadlinedriven.dev/blog/2025/Mnist-Handwritten-digit-recognition/" class="blog-link" target="_blank">
          <i class="fas fa-pen-alt"></i> MNIST Handwriting Recognition
        </a>
      </div>
      <div class="lecture-highlights">
        <a href="https://deadlinedriven.dev/blog/2025/Neural_Style_Transfer/" class="blog-link" target="_blank">
          <i class="fas fa-paint-brush"></i> Neural Style Transfer
        </a>
      </div>
    </div>
    <div class="lecture-card" data-aos="fade-up" data-aos-delay="300">
      <div class="lecture-icon"><i class="fas fa-microchip"></i></div>
      <h3>Embedded Systems</h3>
      <p>Hardware-oriented projects | includes the use of various manufacturing methods: 3D printing, laser cutting, CNC</p>
      <div class="lecture-highlights">
        <a href="https://deadlinedriven.dev/projects/Develop_Pc/" class="blog-link" target="_blank">
          <i class="fas fa-desktop"></i> Develop PC 
        </a>
      </div>
      <div class="lecture-highlights">
        <a href="https://deadlinedriven.dev/projects/I-Scan/" class="blog-link" target="_blank">
          <i class="fas fa-camera"></i> I-Scan | Lifesize 3D Scanner
        </a>
      </div>
    </div>
    <div class="lecture-card" data-aos="fade-up" data-aos-delay="500">
      <div class="lecture-icon"><i class="fas fa-project-diagram"></i></div>
      <h3>Algorithms and Data Structures</h3>
      <p>Fundamental topics in algorithms and their implementation/visualization in Python | One topic usually includes multiple algorithms</p>
      <div class="lecture-highlights">
        <a href="https://deadlinedriven.dev/blog/2025/Algo-Vertretungsstunde-Christofides-Algo/" class="blog-link" target="_blank">
          <i class="fas fa-file-alt"></i> Traveling Salesman Problem
        </a>
      </div>
    </div>
  </div>

<!-- 
EXTERNAL LIBRARIES AND CSS:
These are needed to display animations and icons
-->
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css">
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/aos/2.3.4/aos.css">
<script src="https://cdnjs.cloudflare.com/ajax/libs/aos/2.3.4/aos.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/animejs/3.2.1/anime.min.js"></script>
<link rel="stylesheet" href="/assets/css/lectures.css">

<!-- 
JAVASCRIPT CODE FOR ANIMATIONS:
This section controls all interactive elements of the page
- Matrix animation
- AOS (Animate On Scroll) initialization
- AnimeJS animations for various elements
-->
<script>
  document.addEventListener('DOMContentLoaded', function() {
    // Matrix animation
    const canvas = document.getElementById('matrix-canvas');
    const ctx = canvas.getContext('2d');
    
    // Ensure canvas fills the entire window size
    function resizeCanvas() {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    }
    
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);
    
    // Character set for the matrix (can be expanded)
    const characters = 'アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz$+-*/=%"\'#&_(),.;:?!\\|{}<>[]^~';
    const charArray = characters.split('');
    
    // Columns in the canvas based on screen width
    const fontSize = 14;
    const columns = Math.floor(canvas.width / fontSize);
    
    // An array for each column storing how far down each character has fallen
    const drops = [];
    
    // Initial value for all columns
    for (let i = 0; i < columns; i++) {
      // Random Y position for each character
      drops[i] = Math.random() * -100;
    }
    
    // Matrix rain drawing function
    function drawMatrix() {
      // Black background with transparency for trailing effect
      ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      
      // More intense green for the matrix characters
      ctx.fillStyle = '#00ff41';
      ctx.font = fontSize + 'px monospace';
      
      // Draw each character
      for (let i = 0; i < drops.length; i++) {
        // Select a random character
        const char = charArray[Math.floor(Math.random() * charArray.length)];
        
        // Draw character at (x, y)
        const x = i * fontSize;
        const y = drops[i] * fontSize;
        
        // Variable brightness for some characters
        if (Math.random() > 0.975) {
          ctx.fillStyle = '#00ff88'; // Lighter green for accents
        } else {
          ctx.fillStyle = '#00ff41'; // Standard matrix green
        }
        
        ctx.fillText(char, x, y);
        
        // After the character has fallen completely, reset it upward
        if (y > canvas.height && Math.random() > 0.975) {
          drops[i] = 0;
        }
        
        // Move character downward
        drops[i]++;
      }
    }
    
    // Start matrix animation
    setInterval(drawMatrix, 50);
    
    // Initialize AOS Animation Library
    AOS.init({
      duration: 800,
      easing: 'ease-in-out',
      once: false
    });
    
    // AnimeJS animations
    
    // Hover effects for cards
    const cards = document.querySelectorAll('.lecture-card');
    cards.forEach(card => {
      card.addEventListener('mouseenter', function() {
        anime({
          targets: this,
          translateY: -15,
          boxShadow: '0 15px 30px rgba(0,0,0,0.2)',
          duration: 300,
          easing: 'easeOutExpo'
        });
      });
      
      card.addEventListener('mouseleave', function() {
        anime({
          targets: this,
          translateY: 0,
          boxShadow: '0 5px 15px rgba(0,0,0,0.1)',
          duration: 300,
          easing: 'easeOutExpo'
        });
      });
    });

    // Additional wave animation control
    anime({
      targets: '.wave',
      translateY: [
        { value: -5, duration: 1500 },
        { value: 0, duration: 1500 }
      ],
      opacity: [
        { value: 0.7, duration: 1000 },
        { value: 1, duration: 1000 }
      ],
      easing: 'easeInOutSine',
      loop: true,
      delay: anime.stagger(200)
    });
  });
</script>

