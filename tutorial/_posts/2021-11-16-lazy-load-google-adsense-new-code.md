---
layout: post
thumbnail-img: "/assets/img/posts/19/pagespeed-100-lazy-load-google-adsense.png"
title: How to Lazy Load Google Adsense - New Code
description: This Lazy Load Google Adsense will make your website load very fast. The implementation is easy and It won't take you more than 3 minutes. Believe in me.
lang: en
categories:
- tutorial
tags: google-adsense programming
---

Speed is very important for a website. It’s so important that Google has made it an actual ranking factor. You should work on making your site as fast and accessible as possible. If your website is using Google Adsense, it can be the first thing you must consider, because Adsense makes your website load very slowly.

In this post, I will help you to know steps to lazy load Google Adsense in your website to improve page speed, so that your website will load faster and it can rank higher.

<div class="bg-light sidebar-module sidebar-module-inset" id="toc"></div>

## What is Google Adsense

According to [Wikipedia](https://en.wikipedia.org/wiki/Google_AdSense), Google AdSense is a Google program that allows website publishers in the Google Network of content sites to serve text, image, video, or interactive media advertisements that are tailored to the content and audience of their sites. Google is in charge of administering, sorting, and maintaining these advertisements.

Google AdSense is a program that allows publishers to profit from their online content. AdSense works by finding ads that are relevant to your site's content and visitors. Advertisers who want to promote their products create and pay for the ads. The amount you earn will vary because these advertisers pay different prices for different ads.


## How does Lazy Loading works

To increase performance and save system resources, lazy loading is the technique of postponing the loading or initialization of resources or objects until they are really needed. For example, if a web page contains an image that requires the user to scroll down to see, you can show a placeholder and then lazy load the complete image once the user reaches the desired spot.

{% picture lazy-load /assets/img/posts/19/pagespeed-100-lazy-load-google-adsense.png --alt PageSpeed 100 After Lazy Load Google Adsense %} 


## Steps to Setup Lazy Loading for Google Adsense

> If your website is making money that depends on Google Adsense, you shouldn't follow these steps, because it can reduce your earning money rapidly, but your website will load very fast.

### 1. Remove your default Google Adsense code

By default, Google Adsense provides this code to use their's service

```
<script async='async' data-ad-client='ca-pub-xxxxxxxxxxx' src='https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js'/>
```

Here Google Adsense also delay code by adding `async='async'` but it is still not optimized, because the ads still load on same page, which making the page heavy and taking a long time to finish loading the page. To Lazy Loading Google Adsense and improve your page's speed, you should remove this code, and replace with these below code

### 2. Replace with new Google Adsense code

After removing the old code, you need to replace with these code to apply lazy loading for your page. You should put them above `</body>`  

```
<script>
  window.addEventListener('load', function() {
    var is_adsense_load = 0

    window.addEventListener('scroll', function() {
      if (is_adsense_load == 0) {
        is_adsense_load = 1;

        var ele = document.createElement('script');
        ele.async = true;
        ele.src = 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js'
        var sc = document.getElementsByTagName('script')[0]
        sc.parentNode.insertBefore(ele, sc);

        (adsbygoogle = window.adsbygoogle || []).push({
          google_ad_client: "ca-pub-xxxxxxxxx",
          enable_page_level_ads: true
        });
      }
    })
  })
</script>
```

Don't forget to replace your Adsense's ID with ID in `ca-pub-xxxxxxxxxxxx`. This approach will load ads once the user scrolls your web page. So that It will improve your website perfomance.


## Conclusion

In this guide, I introduced **Optimize Goolge Adsense By Lazy Loading**. I hope it will help you in improving speed of your site. Don't forget to comment below if you are in needed.