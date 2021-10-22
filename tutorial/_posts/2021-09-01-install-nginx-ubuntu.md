---
layout: post
thumbnail-img: "/assets/img/posts/7/how-to-install-nginx-on-ubuntu.webp"
title: How To Install NGINX Web Server On Ubuntu
description: NGINX is a web server that also acts as an email proxy, reverse proxy, and load balancer. NGINX's structure is asynchronous. Here is how to install it on Ubuntu.
lang: en
redirect_from:
- /how-to-install-nginx-on-ubuntu/
categories:
- tutorial
tags: ubuntu development tools
---

In this blog, I want to explain nginx and how to install it, host your local website, ok, let's go

<div class="bg-light sidebar-module sidebar-module-inset" id="toc"></div>

## \# What is NGINX

> NGINX is open source software for web serving, reverse proxying, caching, load balancing, media streaming, and more. It started out as a web server designed for maximum performance and stability

To learn more about it, please visit their website: [https://www.nginx.com/resources/glossary/nginx/](https://www.nginx.com/resources/glossary/nginx/)

## \# How to install on Ubuntu?

### Update package and install nginx 

To do it, we can simply do: 
```bash
$ sudo apt update
$ sudo apt install nginx
```

## \# Testing

### 1. Create folder project in /var/www

NOTE: If folder isn't exists, you can create new

```bash
$ cd /var/www
$ sudo mkdir your-project
```

### 2. Create example project

```bash
$ touch index.html
$ vim index.html
```

Editng your index.html, example:

{% picture lazy-load /assets/img/posts/7/edit-nginx-for-local-web-hosting.webp --alt Edit nginx for local website hosting %}

### 3\. Create the Virtual Host

We can do it by: 
```bash
$ cd /etc/nginx/sites-enabled/
$ sudo vim project 
```

Editing your project like this:
```
server {
	listen 81;
	listen [::]:81;

	server_name project.com;
	root /var/www;
	index index.html;

	location / {
		try_files $uri $uri/ =404;
	}
}
```

NOTE: Don't remember to replace `root` and `index`

### 4. Restart Nginx

After editing, don't forget to restart nginx :D

```bash
$ sudo service nginx restart
```

### 5. Your website is working :D

{% picture lazy-load /assets/img/posts/7/your-website-using-nginx-is-now-working.webp --alt Your website using nginx is now working %}

## \# Conclusion

The above is a way to install nginx as well as some operations when working with it. Hope to see you in next posts :D
