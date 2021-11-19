---
layout: post
thumbnail-img: "/assets/img/posts/17/how-to-install-skype-ubuntu-18-04.png"
title: How to Install and Uninstall Skype on Ubuntu 18.04
description: This guide shows you how to install Skype on Ubuntu 18.04 using snap or install skype deb ubuntu. And this guide also provide you ways to uninstall Skype Linux.
lang: en
categories:
- tutorial
tags: skype ubuntu
---

Due to Covid-19, **Skype** is now becoming one of the most popular communication applications in the world. It is a cross-platform app, which means you can use this one on Windows, macOS or Linux. You can use Skype for instant messaging, file transfer, making calls are more.

This guide provides two ways to install skype linux and a way to uninstall skype ubuntu completely. Choose the installation method that you think it is easy for you :).

{% picture lazy-load /assets/img/posts/17/how-to-install-skype-ubuntu-18-04.png --alt How to Install Skype Linux on Ubuntu 18.04  %} 

<div class="bg-light sidebar-module sidebar-module-inset" id="toc"></div>

## Use Snaps to Install Skype on Ubuntu 18.04

[Snaps](https://snapcraft.io/) are pre-configured software packages that are easy to build and deploy. They are safe to use and auto-update. They also work on all major Linux systems without modification because their dependencies are bundled. [Microsoft](https://www.microsoft.com/) also distributes and supports Skype as a snap package.

To install Skype on Ubuntu 18.04 using Snap we need to Open [Your Terminal](https://tgbao.me/install-alacritty-terminal-emulator-ubuntu/) (or `Ctrl+Alt+T`) and run the following commands:

{% highlight bash %}
$ sudo snap install skype --classic
{% endhighlight %}

If you get this message, it means you have installed Skype completely.
{% picture lazy-load /assets/img/posts/17/install-snap-skype-linux.png --alt Install Skype Linux using Snap Store %} 

## Install Skype Deb Ubuntu

Using the **skype deb package** to install is a way to get skype for ubuntu, it helps you get the newest version, which has many features. But it may be hard if you are new to Ubuntu, follow this step-by-step guide, you can install it very, very easily.

### Using Ubuntu GUI

Install skype ubuntu using gui is very easy for beginner Ubuntu users.

#### Step 1: Go to Skype Download Center

To install Skype, we need go to [Skype Download Center](https://www.skype.com/en/get-skype/)

{% picture lazy-load /assets/img/posts/17/go-to-skype-download-center.png --alt Go to Skype Download Center to install Skype %} 

#### Step 2: Choose Linux Skype

Choose `Get Skype for Linux DEB` option to download app

{% picture lazy-load /assets/img/posts/17/choose-get-skype-for-linux-deb.jpg --alt Choose get Skype for Linux DEB %} 

#### Step 3: Go to downloaded folder

Go to downloaded folder and follow below steps

#### Step 4: Install software

We need to right-click and choose `Open with Software Install`

{% picture lazy-load /assets/img/posts/17/right-click-open-with-software-install.png --alt Right click and Open with Software Install %} 

#### Step 5: Start Skype installation

Follow it's steps to Install Skype Linux<

### Using Command Line

Install Skype Linux using command line is faster than traditional ways and it is often for advance users.

#### Step 1: Download the lastest version

Open your Terminal Emulator (or `Ctrl+Alt+T`) and download the lastest .deb Skype

{% highlight bash %}
$ wget https://go.skype.com/skypeforlinux-64.deb
{% endhighlight %}

#### Step 2: Install with dpkg

Use `dpkg` to install downloaded file

{% highlight bash %}
$ sudo dpkg -i skypeforlinux-64.deb
{% endhighlight %}

{% picture lazy-load /assets/img/posts/17/skype-installed-on-linux-completely.jpg --alt How to Install Skype Ubuntu 18.04 %} 

## Uninstall Skype Ubuntu

In some cases, you want to uninstall Skype Linux on your machine. You can follow this:

### Uninstall Skype Linux installed by Snap

Snap provides you ways to install packages and it also help you to uninstall Skype Linux completely with one command:

{% highlight bash %}
$ sudo snap remove skype
{% endhighlight %}

{% picture lazy-load /assets/img/posts/17/uninstall-snap-install-skype.png --alt Uninstall Skype installed by Snap %} 

### Uninstall Skype App installed by DEB Package

To uninstall, please run this command:

{% highlight bash %}
sudo apt-get --purge remove skypeforlinux
{% endhighlight %}

## Conclusion

In this post, I’ve shown you How to install Skype on 18.04 Ubuntu and ways to uninstall Skype when you need. Don't forget to leave a comment below if you want :)