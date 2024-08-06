---
layout: page
title: News
permalink: /news/
---

## All News

<ul>
  {% for item in site.data.news %}
    <li>
      <strong>{{ item.date | date: "%B %Y" }}:</strong> {{ item.description }}
    </li>
  {% endfor %}
</ul>
