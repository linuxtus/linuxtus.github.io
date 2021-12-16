---
layout: post
thumbnail-img: "/assets/img/posts/26/install-foxit-pdf-reader-on-ubuntu-21-04.jpg"
image: "/assets/img/posts/26/install-foxit-pdf-reader-on-ubuntu-21-04.jpg"
title: How to Install Foxit PDF Reader on Ubuntu 21.04
description: This tutorial will show you how to install Foxit PDF Reader on Ubuntu 21.04 or other Linux distros. It also provides ways to uninstall Foxit Reader.
lang: en
category: linux
tags: ubuntu foxit-reader
---

Foxit Reader is a free PDF reader, it is available in Windows, macOS, Android, IOS and more. Especial, Foxit Reader for Linux is one of the best PDF readers, which needs to be installed at first after installing any [Linux distributions](https://tgbao.me/upgrade-to-ubuntu-21-10/). Besides free versions, it also provides premium versions with many features, but for common demand, we can use the free version. This tutorial will introduce you to how to **install Foxit Reader on Linux**, especial Ubuntu 18.04, Ubuntu 21.04 or older. Let's go.

<div id="toc-post"></div>

## Which is Foxit Reader used for?

At the time I wrote this tutorial, Foxit Reader contains many features for Linux. These features include:

- Lightweight and quick
- Intuitive User Interface
- Comments support
- Multiple PDF documents support
- Protect PDF files
- Text search, page rotation
- Zoom in and out
- Annotate PDF support
- Print PDF documents
- Participate in a shared review

{% picture lazy-load /assets/img/posts/26/install-foxit-pdf-reader-on-ubuntu-21-04.jpg --alt How to Install Foxit PDF Reader on Ubuntu 21.04 %}

## Install Foxit PDF Reader on Ubuntu and other Linux distros

It is not a built-in application Linux. So that, in order to install Foxit PDF Reader on Ubuntu or on other Linux distributions, we need to follow these steps.

### 1. Downloading Foxit PDF Reader

Foxit Reader is not available in the official package repository of Ubuntu so that you can install it by using the Advanced Packaging Tool (APT). But you can easily download it from its homepage.

You can go to [this page](https://www.foxit.com/downloads/#Foxit-Reader/) and choose the version you want to install. Or you can also install faster by running these commands. Opening your any [Linux terminal](https://tgbao.me/install-alacritty-terminal-emulator-ubuntu/), copy and paste these lines into it. choose Ubuntu commands that are compatible with your OS hardware. 

For 64 bits OS:

{% highlight bash %}
wget https://cdn01.foxitsoftware.com/pub/foxit/reader/desktop/linux/2.x/2.4/en_us/FoxitReader.enu.setup.2.4.4.0911.x64.run.tar.gz
{% endhighlight %}

For 32 bits OS:

{% highlight bash %}
wget https://cdn01.foxitsoftware.com/pub/foxit/reader/desktop/linux/2.x/2.4/en_us/FoxitReader.enu.setup.2.4.4.0911.x86.run.tar.gz
{% endhighlight %}

### 2. Extracting the installer

Once the download process is done, you have to extract the Foxit Reader installer by running these commands. Don't forget to replace x64 with x86 if your OS only support 32bits.

{% highlight bash %}
tar -zxvf FoxitReader.enu.setup.2.4.4.0911.x64.run.tar.gz
{% endhighlight %}

### 3. Install Foxit PDF Reader on Ubuntu

Following the extraction, we begin the installation of Foxit Reader on Ubuntu 20.04. Make sure the installer is executable. If the installer is not able to execute or you don't know about it, running these Linux commands:

{% highlight bash %}
chmod 755 'FoxitReader.enu.setup.2.4.4.0911(r057d814).x64.run'
{% endhighlight %}

Once done, we can now start the installation.

{% highlight bash %}
sudo ./FoxitReader.enu.setup.2.4.4.0911\(r057d814\).x64.run
{% endhighlight %}

When the window appears, it will launch the installation wizard, which will allow you to select an installation location. Choosing the installation path to install Foxit PDF Reader on Linux.

{% picture lazy-load /assets/img/posts/26/choose-foxit-pdf-reader-installation-path.png --alt Choose Foxit PDF Reader Installation Path %}

Next, accept the end-user license agreement to begin the installation process:

{% picture lazy-load /assets/img/posts/26/license-agreement-foxit-reader-ubuntu.png --alt Accepting License Agreement to install Foxit Reader on Ubuntu %}

Clicking the `Next` button to begin the installation. Typing root Linux password if it is necessary.

{% picture lazy-load /assets/img/posts/26/start-foxit-reader-installation-linux-ubuntu.png --alt Foxit PDF Reader installation on Ubuntu or Linux %}

When the installation is finished, you can now use Foxit PDF Reader on Ubuntu. 

{% picture lazy-load /assets/img/posts/26/installation-foxit-reader-ubuntu-finished.png --alt Foxit Reader installation is finished on Ubuntu %}

## Launching Foxit PDF Reader on Ubuntu

As you saw, the installation is quite easy and you can also launch this app easily too. To launch this Foxit app, we go to `Activities` and search for `Foxit Reader`. Your Linux screen will like this:

{% picture lazy-load /assets/img/posts/26/launch-foxit-reader-from-ubuntu-activities.png --alt Launching Foxit Reader from Ubuntu Activities %}

On the first running, it will prompt you to make it as default PDF viewer, accept if you want or not :)

{% picture lazy-load /assets/img/posts/26/default-foxit-reader-windows-on-ubuntu.png --alt Default Foxit PDF Reader windows on Ubuntu %}

## Uninstalling Foxit PDF Reader on Ubuntu 

To uninstall it, simply delete the installation folder you selected above. In my case, I can uninstall Foxit Reader by running this command: 

{% highlight bash %}
sudo rm -r /opt/foxitsoftware/foxitreader
{% endhighlight %}

After that, it will be completely gone.

## Conclusion

This is the end of Foxit PDF Reader installation on Ubuntu or on other Linux distributions. Leave a comment below and tell us about your experience using it. were you aware of it? Do you make use of it? Also, please share this article.