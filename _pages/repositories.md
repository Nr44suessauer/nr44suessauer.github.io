---
layout: page
permalink: /repositories/
title: repositories
description: A collection of my random repositories. Organization to be continued.
nav: true
nav_order: 4
---

{% if site.data.repositories.github_users %}

## GitHub users

<div class="repositories d-flex flex-wrap flex-md-row flex-column justify-content-between align-items-center">
  {% for user in site.data.repositories.github_users %}
    {% include repository/repo_user.liquid username=user %}
  {% endfor %}
</div>

---

{% if site.repo_trophies.enabled %}
  {% for user in site.data.repositories.github_users %}
    {% if site.data.repositories.github_users.size > 1 %}
      <h4>{{ user }}</h4>
    {% endif %}

<div class="repositories d-flex flex-wrap flex-md-row flex-column justify-content-between align-items-center">
      {% for trophy in user.trophies %}
        {% if trophy.type == "commits" or trophy.type == "experience" %}
          <!-- Trophy-Anzeige -->
          <div class="trophy">
            <img src="{{ trophy.image }}" alt="{{ trophy.name }}">
            <p>{{ trophy.name }}</p>
          </div>
        {% endif %}
      {% endfor %}
    </div>
  {% endfor %}
{% endif %}

---

{% endfor %}
{% endif %}
{% endif %}

{% if site.data.repositories.github_repos %}

## GitHub Repositories

<div class="repositories d-flex flex-wrap flex-md-row flex-column justify-content-between align-items-center">
  {% for repo in site.data.repositories.github_repos %}
    {% include repository/repo.liquid repository=repo %}
  {% endfor %}
</div>
{% endif %}
