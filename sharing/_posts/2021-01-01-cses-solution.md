---
layout: post
thumbnail-img: "/assets/img/posts/3/cses-solution.webp"
title: Cses Solution (Auto Updated)
description: Here are my Cses solutions from problems that i coded for my assignment, preparing for competitions. You can use it for solution or something like that
lang: en
categories:
- sharing
tags: competitive-programming
---

## Cses solution 

<div class="row justify-content-center">
  <div class="col-auto">
    <div id="cses">
    </div>
  </div>
</div>

<script>
  window.addEventListener('DOMContentLoaded', function () {
    fetch("https://api.tgbao.me/training/cses")
      .then(x => x.json())
      .then(data => $("#cses").html(data.data))
  })
</script>