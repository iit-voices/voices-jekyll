---
layout: default
title: Interviews
---
<section id="interviewees">
  <h3>Interviews by Name</h3>
  <ul>
    {% for interviewee in site.data.records %}
    <li>
      <a href="{{ interviewee[1].interviewee.identifier }}/">{{ interviewee[1].interviewee.name }}</a>
    </li>
    {% else %}
    Collection is empty
    {% endfor %}
  </ul>
</section>
