---
layout: post
thumbnail-img: "/assets/img/posts/2/codeforces-solution.webp"
title: CodeForces Solution (Auto Updated)
description: Here are my Codeforces solutions from problems that i coded for my assignment, preparing for competitions. You can use it for solution or something like that
lang: en
categories:
- sharing
tags: competitive-programming
---

## Codeforces solution 

<p></p>

<div class="row justify-content-center">
  <div class="col-auto">
    <div id="codeforces">
    </div>
  </div>
</div>

<script>
  window.addEventListener('DOMContentLoaded', function () {
    fetch("https://api.tgbao.me/training/codeforces")
      .then(x => x.json())
      .then(data => $("#codeforces").html(data.data))
  })
</script>