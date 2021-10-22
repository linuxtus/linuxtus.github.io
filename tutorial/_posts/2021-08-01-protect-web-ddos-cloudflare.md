---
layout: post
thumbnail-img: "/assets/img/posts/4/how-to-protect-web-from-ddos-cloudflare.webp"
title: How To Protect Web Application From DDoS Cloudflare
description: Cloudflare DDoS protection protects websites, applications, and entire networks while guaranteeing that genuine traffic does not suffer.
lang: en
redirect_from:
- /how-to-protect-web-from-ddos-cloudflare/
categories: tutorial
tags:
- tools
- web
---

A website is called complete only if it meets the criteria of speed, flexibility, interface, etc. And an important part of that is the ability to prevent external-scale denial-of-service (DOS) attacks.

Along with the development of the Internet, the number of websites is increasing rapidly, but the issue of protecting the website from attacks has not been taken care of. These problems only when these occur, people start to pay attention, but by then, it has caused great damage to the system!

In this article, I will introduce you to what a DDOS attack is like, and how to limit it :D

<div class="bg-light sidebar-module sidebar-module-inset" id="toc"></div>

## What is a denial-of-service attack?

Denial of Service (DOS) or Distributed Denial of Service (DDOS). An attempt to make it impossible for users to use a computer's resources. Although the means of conduct, the motive, and target of a denial-of-service attack may vary, it generally includes coordination, malicious attempts by one or more people to make a page, or network unable to use, interrupt, or make that system significantly slower for the average user, by overloading the system's resources.

{% picture lazy-load /assets/img/posts/4/use-cloudflare-to-prevent-ddos.webp --alt Using cloudflare to prevent ddos %}

We can understand that a denial-of-service attack is the use of botnets around the world, sending a request to a website, an IP address. Make it impossible for the server to respond to such requests in time, making the server clogged with bandwidth and resources. Thereby, the website cannot meet the user requirements, affecting the user experience, affecting the economy and profitability of businesses.


## How to prevent

We have many ways to limit the impact of denial-of-service attacks:

*    Limit the number of requests per ip for a certain period of time.
*    Set up Firewall, to block use from ip backlists, from countries
*    Use a proxy system to hide a server's IP
*    Limit requirements during peak periods
*    Analyze traffic to take appropriate measures
*    And there's more to it than that...

Besides, we can use `Cloudflare`, a website protection service is used in variable streets, with 2 versions: free and paid version. While it's a free version, it's also effective in limiting moderate and medium-sized denial-of-service attacks. Let's find out about it.

## Sign up for a Cloudflare account

That's obvious :)

1\. Visit [Cloudflare](https://www.cloudflare.com/).. Then press Sign Up to register

{% picture lazy-load /assets/img/posts/4/sign-up-account-on-cloudflare.webp --alt SignUp account on Cloudflare %}

2\. Enter your email address, password you want to register

{% picture lazy-load /assets/img/posts/4/register-your-account-on-cloudflare.webp --alt Register your account on Cloudflare %}

3\. Enter the domain name that you want to register with cloudflare service

{% picture lazy-load /assets/img/posts/4/enter-your-domain-to-cloudflare.webp --alt Enter your domain to Cloudflare %}

4\. Choose plans (I use Free plans)

{% picture lazy-load /assets/img/posts/4/choose-plan-to-work-with-cloudflare.webp --alt Choose plan to work with Cloudflare %}

5\. Then press the Continue button to continue, because those ones I can also config later

{% picture lazy-load /assets/img/posts/4/choose-plan-to-work-with-cloudflare-2.webp --alt Choose plan to work with Cloudflare %}

6\. Change the nameserver of the page you register the domain name, to nameserver of cloudflare

{% picture lazy-load /assets/img/posts/4/chang-nameserver-to-work-with-cloudflare.webp --alt Change nameserver to work with Cloudflare %}

Then I press Done to finish :D

## Customize Cloudflare to limit DDOS

In Cloudflare there are quite a lot of pretty good features such as traffic analysis, free SSL, firewall, cache to optimize speed, ... In addition, we can install apps for the web, just like installing plugins with wordpress.  

{% picture lazy-load /assets/img/posts/4/customize-cloudflare-to-prevent-ddos.webp --alt Customize Cloudflare to prevent DDOS %}

1\. First, you go to overview and click Under Attack Mode

{% picture lazy-load /assets/img/posts/4/turn-on-under-attack-mode-in-cloudflare.webp --alt Turn on Under Attack Mode in Cloudflare %}

2\. Once turned on, everything will be like this

{% picture lazy-load /assets/img/posts/4/turn-on-under-attack-mode-in-cloudflare-2.webp --alt Turn on Under Attack Mode in Cloudflare %}

3\. So it has been successful, now all users when accessing the web will have to wait 5s for cloudflare to check if it is a virtual user. This can reduce the burden of bandwidth and memory for your website. 

{% picture lazy-load /assets/img/posts/4/website-is-protected-cloudflare.webp --alt Now your website is protected from ddos %}

Although it seems annoying to wait 5s, you can compare before turning on and when it's turned on, things will be very different. If you find it still unblockable, you can try adding a config Firewall or buy a paid version to open more functions. 

## Summary

Through this article, I have introduced you to Cloudflare, a popular service used in protecting websites from large-scale attacks. As far as I know, codelearn.io is also using cloudflare service, so you can understand the need and power of Cloudflare~ If you have difficulty setting up Cloudflare, you have more comments below or join the Cloudflare community for support. <3
