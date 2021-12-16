---
layout: post
thumbnail-img: "/assets/img/posts/16/upgrade-ubuntu-21-04-to-ubuntu-21-10.png"
image: "/assets/img/posts/16/upgrade-ubuntu-21-04-to-ubuntu-21-10.png"
title: Ubuntu 21.10 Released, Steps to Upgrade from Ubuntu 21.04
description: In this Ubuntu tutorial you will learn how to upgrade from Ubuntu 21.04 to 21.10 'Impish Indri' with many features, enhancements. This step by step guide is very easy to install.
lang: en
category: linux 
tags: development ubuntu
---

As mentioned at the outset, the Ubuntu 21.10 was released on October 14, 2021, with many new features, key changes and update coming with.

<div id="toc-post"></div>

## Ubuntu 21.10: New Features

Ubuntu 21.10 or Ubuntu **Impish Indri** is a Debian-based Linux distribution that uses largely free and open-source software. For Internet of Things devices and robots, Ubuntu is available in three editions: Desktop, Server, and Core. All editions can be installed on a single computer or on a virtual machine.

Ubuntu 21.10 - the newest Ubuntu was [released](https://releases.ubuntu.com/21.10/), and contains many features:

* [Gnome 40](https://forty.gnome.org/), contains many features like **touchpad gestures**, many **core apps**.
* [Linux Kernel 5.14](https://www.kernel.org/) with enhanced hardware support and performance improving
* A new desktop installer
* Light Theme now is the default theme

{% picture lazy-load /assets/img/posts/16/upgrade-ubuntu-21-04-to-ubuntu-21-10.png --alt How to Upgrade From Ubuntu 21.04 to Ubuntu 21.10 %} 

## Software Requirements

| Category | System Requirements                                                    |
| -------- | ---------------------------------------------------------------------- |
| System   | Ubuntu 21.04 Hirsute Hippo                                             |
| Access   | Privileged access to your Linux system as root or via the sudo command |
| Hardware | - 2 GHz dual core processor<br/> - 4 GiB RAM (system memory)<br/> - Hard drive space: 25 GB (8.6 GB as a minimum) (or USB stick, memory card or external drive but see LiveCD for an alternative approach)<br/> - VGA with a screen resolution of 1024x768 pixels<br/> - For the installer media, you'll need a CD/DVD drive or a USB port.<br/> - Internet access is helpful |

## Steps to Upgrade Ubuntu To 21.10 Impish Indri using commands

> Please keep in mind that you can only update to Ubuntu 21.10 from the Ubuntu 21.04 version. As a result, if you want to upgrade from Ubuntu 20.04 or 20.10, you must first update to Ubuntu 21.04. When you're ready, you can start the Ubuntu 21.10 upgrade process.

To Upgrade Ubuntu to 21.10 from 21.04, you need:

<ol id="steps">

<li>
To begin, make sure your Ubuntu 21.04 Linux system is updated. Run the following commands:
 
{% highlight bash %}
$ sudo apt update
$ sudo apt upgrade
$ sudo apt dist-upgrade
{% endhighlight %}
</li>

<li>
Configure the release upgrader. To adjust the release upgrader, you must open <code>/etc/update-manager/release-upgrades</code> file, and change file same as below:
 
{% highlight text %}
# Default behavior for the release upgrader.

[DEFAULT]
# Default prompting and upgrade behavior, valid options:
#
#  never  - Never check for, or allow upgrading to, a new release.
#  normal - Check to see if a new release is available.  If more than one new
#           release is found, the release upgrader will attempt to upgrade to
#           the supported release that immediately succeeds the
#           currently-running release.
#  lts    - Check to see if a new LTS release is available.  The upgrader
#           will attempt to upgrade to the first LTS release available after
#           the currently-running one.  Note that if this option is used and
#           the currently-running release is not itself an LTS release the
#           upgrader will assume prompt was meant to be normal.
Prompt=normal
{% endhighlight %}
</li>

<li>
Let's upgrade your Ubuntu 21.04 to Ubuntu 21.10 now
 
{% highlight bash %}
$ sudo do-release-upgrade
{% endhighlight %}
</li>

</ol>

## Upgrade to Ubuntu 21.10 using GUI

Beside using commands, you can upgrade your Ubuntu to newest version with Graphical User Interface:

<ol id="steps">
<li>
Open the <code>Software & Update application</code>

{% picture lazy-load /assets/img/posts/16/open-software-update-ubuntu.png --alt Open Software & Update on Ubuntu 21.04 %} 
</li>

<li>
Also, under the <code>Updates tab</code>, make sure <code>Notify me of a new Ubuntu version</code> is set to <strong>For any new version</strong>

{% picture lazy-load /assets/img/posts/16/turn-on-notify-new-versions-ubuntu.png --alt Make sure you set to For any new Version Ubuntu %} 
</li>

<li>
Now open <a href="https://tgbao.me/install-alacritty-terminal-emulator-ubuntu/">a Terminal</a> and make sure your system is updated
{% highlight bash %}
$ sudo apt update
$ sudo apt upgrade
{% endhighlight %}
</li>

<li>
After you've installed all of the updates on your Ubuntu 21.04 machine, use the update manager to search for development releases (Ubuntu 21.10 in this case). 

{% picture lazy-load /assets/img/posts/16/ubuntu-21-10-is-ready-to-upgrade.png --alt Your Ubuntu 21.04 is ready to upgrade to Ubuntu 21.10 %} 
</li>

<li>
Click Upgrade button to upgrade
</li>
</ol>

## Conclusion

Ubuntu 21.10 is the lastest Ubuntu version with many features. In this post, I introduced the requirements and step-by-step guide to install on your machine. If you need to ask any questions, feel free to contact me :)