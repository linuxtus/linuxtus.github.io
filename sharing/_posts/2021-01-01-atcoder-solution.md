---
layout: post
thumbnail-img: "/assets/img/posts/1/atcoder-solution.webp"
lang: en
title: AtCoder Solution (Auto Updated)
description: Here are my Atcoder solutions from problems that i coded for my assignment, preparing for competitions. You can use it for solution or something like that
categories:
- sharing
tags: competitive-programming
---

## Atcoder Solution

<p></p>

<div class="row justify-content-center">
  <div class="col-auto">
    <div id="atcoder">
    </div>
  </div>
</div>

<script>
  window.addEventListener('DOMContentLoaded', function () {
    fetch("https://api.tgbao.me/training/atcoder")
      .then(x => x.json())
      .then(data => $("#atcoder").html(data.data))
  })
</script>