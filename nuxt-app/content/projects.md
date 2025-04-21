---
layout: default
head:
  title: Projects
description: 
title: Projects
---

# My Projects

<div class="projects-container">
  <a href="/projects/project1" class="project-card">
    <img src="/alpine-0.webp" alt="Projektbild" class="project-card__image" />
    <div class="project-card__content">
      <div class="project-card__title">Projektname</div>
      <div class="project-card__desc">Kurze Projektbeschreibung mit Features und Technologien.</div>
      <div class="project-card__tags">
        <span class="project-card__tag">Vue.js</span>
        <span class="project-card__tag">Firebase</span>
      </div>
    </div>
  </a>

  <a href="/projects/project1" class="project-card">
    <img src="/alpine-0.webp" alt="Projektbild" class="project-card__image" />
    <div class="project-card__content">
      <div class="project-card__title">Projektname</div>
      <div class="project-card__desc">Kurze Projektbeschreibung mit Features und Technologien.</div>
      <div class="project-card__tags">
        <span class="project-card__tag">Vue.js</span>
        <span class="project-card__tag">Firebase</span>
      </div>
    </div>
  </a>

  <a href="/projects/project1" class="project-card">
    <img src="/alpine-0.webp" alt="Projektbild" class="project-card__image" />
    <div class="project-card__content">
      <div class="project-card__title">Projektname</div>
      <div class="project-card__desc">Kurze Projektbeschreibung mit Features und Technologien.</div>
      <div class="project-card__tags">
        <span class="project-card__tag">Vue.js</span>
        <span class="project-card__tag">Firebase</span>
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
