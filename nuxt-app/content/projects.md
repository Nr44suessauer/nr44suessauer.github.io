---
layout: default
head:
  title: Projects
description: 
title: Projects
---

# My Projects

<div class="projects-container">
  <a href="/projects/develop_pc" class="project-card">
    <img src="https://github.com/Nr44suessauer/nr44suessauer.github.io/blob/main/nuxt-app/assets/pictures/minipc/1st_try_mit_wasser.gif?raw=true" alt="Develop PC Projektbild" class="project-card__image" />
    <div class="project-card__content">
      <div class="project-card__title">Develop PC</div>
      <div class="project-card__desc">Custom-built mini PC featuring an innovative water bubble system with RGB lighting effects.</div>
      <div class="project-card__tags">
        <span class="project-card__tag">Hardware</span>
        <span class="project-card__tag">3D-Printing</span>
        <span class="project-card__tag">C/C++</span>
        <span class="project-card__tag">Fun</span>
      </div>
    </div>
  </a>
</div>

<style>
.projects-container {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
  background-color: transparent;
}

@media (max-width: 768px) {
  .projects-container {
    grid-template-columns: 1fr;
  }
}
</style>
