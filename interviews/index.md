---
layout: default
title: Interviews
---
<section id="interviewees">
  <h3>Interviews by Name</h3>
  <ul>
    {% for interviewee in site.data %}
    <li>
      <b class="name">{{ interviewee.name }}</b>
    </li>
    {% else %}
    Collection is empty
    {% endfor %}
  </ul>
</section>
