---
layout: archive
title: "News"
permalink: /news/
author_profile: true
redirect_from:
  - /news
---

## All News

<ul>
  {% for item in site.data.news %}
    <li>
      <strong>{{ item.date | date: "%B %Y" }}:</strong> {{ item.description }}
    </li>
  {% endfor %}
</ul>
