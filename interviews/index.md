---
layout: default
title: Interviews
---
<section id="interviewees">
  <h3>Interviews by Name</h3>
  <ul>
    {% for interviewee in site.data.records %}
    <li>
      <b class="name">{{ interviewee[1].interviewee.name }}</b>
    </li>
    {% else %}
    Collection is empty
    {% endfor %}
  </ul>
</section>
