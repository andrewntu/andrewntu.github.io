---
layout: page
title: "CV"
permalink: /cv/
---

{% include base_path %}

Education
======
* Ph.D in Geology & Geophysics, University of Utah, 2026 (expected)
* M.S. in Geoscience, National Taiwan University, 2019
* B.S. in Earth Science, National Cheng Kung University, 2017

Work experience
======
* May. 2024 - Aug. 2024: Research Intern
  * Lawrence Berkeley National Laboratory
  * Duties includes: Updates and improvements to template
  * Supervisor: The Users

* Jan. 2019 - Jul. 2021: Research Assistant
  * Institute of Earth Science, Academia Sinica
  * Duties included: Merging pull requests
  * Supervisor: Professor Hub
  
Skills
======
* Skill 1
* Skill 2
  * Sub-skill 2.1
  * Sub-skill 2.2
  * Sub-skill 2.3
* Skill 3

Publications
======
  <ul>{% for post in site.publications reversed %}
    {% include archive-single-cv.html %}
  {% endfor %}</ul>
  
Talks
======
  <ul>{% for post in site.talks reversed %}
    {% include archive-single-talk-cv.html  %}
  {% endfor %}</ul>
  
Teaching
======
  <ul>{% for post in site.teaching reversed %}
    {% include archive-single-cv.html %}
  {% endfor %}</ul>
  
Service and leadership
======
* Currently signed in to 43 different slack teams
