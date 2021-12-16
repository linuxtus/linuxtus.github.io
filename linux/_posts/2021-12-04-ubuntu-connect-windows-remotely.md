---
layout: post
thumbnail-img: "/assets/img/posts/24/connect-windows-ubuntu-remote-desktop-connection.jpg"
image: "/assets/img/posts/24/connect-windows-ubuntu-remote-desktop-connection.jpg"
title: Remote Desktop Connection to Connect Windows PC from Ubuntu 21.04
description: This tutorial shows you how to install and configure remote desktop client remmina to connect to Windows PC from Ubuntu or other Linux distributions.
lang: en
category: linux
tags: ubuntu remote-desktop-client
---

[Remote Desktop](https://support.microsoft.com/en-us/windows/how-to-use-remote-desktop-5fe128d5-8fb1-7a23-3b8a-41e636865e8c) is one of the useful features on Windows. It allows your computer to connect and control another one. This feature is also can be used on Ubuntu and other major Linux distributions. Remmina, a powerful RDP client that enables you to connect to Windows PC from Ubuntu remotely or from Ubuntu to Ubuntu.  The following steps will show you how to setup, configure, and connect to a remote desktop connection from Ubuntu to Windows.

<div id="toc-post"></div>

{% picture lazy-load /assets/img/posts/24/connect-windows-ubuntu-remote-desktop-connection.jpg --alt Remote Desktop Connection to Connect Windows from Ubuntu %}

## How To Install Remmina RDP Client

On almost all major Linux distributions, Remmina is installed by default, but in some cases (same as my case), you have to install it. There are many ways to install, you should choose a way that is easy for you.

### Option 1. Install Remmina with Snap

> citation ""
> [Snaps](https://snapcraft.io/) are containerised software packages that are simple to create and install. They auto-update and are safe to run. And because they bundle their dependencies, they work on all major Linux systems without modification.

First, make sure `snapd` is installed.  If not, you can install it by following this Ubuntu command:

{% highlight bash %}
sudo apt update
sudo apt install snapd
{% endhighlight %}

Then, install **Remmina** to use remote windows from ubuntu, it can be done by install from a [Terminal Emulator](https://tgbao.me/install-alacritty-terminal-emulator-ubuntu/) with:

{% highlight bash %}
sudo snap install remmina
{% endhighlight %}

### Option 2. Using PPA to install Remmina

> warning ""
> After the release of version 1.4.8, Remmina will no longer be accessible as a PPA package. So that, you shouldn't use this way to install Remmina to prevent risks.

Install Remmina from PPA, is one of the easiest ways to install, it doesn't get you too much time and is also easy to do. Copying and pasting these commands into a terminal, so that remote desktop client Remmina can be installed.

{% highlight bash %}
sudo apt-add-repository ppa:remmina-ppa-team/remmina-next
sudo apt update
sudo apt install remmina remmina-plugin-rdp remmina-plugin-secret
{% endhighlight %}

## How To Connect To Windows PC From Ubuntu

> info ""
> This guide is created on Ubuntu 21.04, but it also works on older versions such as 18.04 LTS, 20.04 LTS and so on.

After Remmina installation, now we continue to setup Remmina so that we can connect to Windows remotely from [Ubuntu](https://tgbao.me/upgrade-to-ubuntu-21-10/) or other Linux distributions. Following this tutorial carefully, you can easily be a master of Remote Desktop Client.

### 1. Enable Remote Desktop on Windows PC

First of all, you must set up your Windows PC to accept remote desktop connections if you want to allow other computers (Ubuntu, Arch Linux, Fedora, etc.) to connect remotely to it. To enable remote desktop on Windows, follow these steps:

On Windows PC you want to connect remotely (logged in as an administrator if necessary), open the `Start Menu` and select `Settings`. In the pop-up window, then search for `Remote Desktop`. Finally, turn `Enable Remote Desktop` on: 

> note ""
> These steps works only on Windows 10. On older versions, you should search Google for helping you enable remote desktop on your machine.

{% picture lazy-load /assets/img/posts/24/turn-enable-remote-desktop-on-windows.jpg --alt Turn on Enable Remote Desktop on Windows PC %}

### 2. Open Remmina Remote Desktop Client On Your Ubuntu

Once Remmina in installed, you now can launch this remote desktop client app, by searching `Remmina` in `Ubuntu Apps`

> note ""
> On other Linux distributions, you can also do it too, but in a different way

{% picture lazy-load /assets/img/posts/24/launch-remote-desktop-client-remmina-on-ubuntu.png --alt Launch Remote Desktop Client Remmina on Ubuntu %}

### 3. Configure Ubuntu remote desktop sessions to Windows

Now, you can configure the Remmina to connect to Windows from Ubuntu remotely. This is the default GUI of this remote desktop client app.

{% picture lazy-load /assets/img/posts/24/default-gui-remote-desktop-client-remmina.jpg --alt Default GUI of Remote Desktop Client Remmina %}

To create a Ubuntu remote desktop session to Windows, select `Add a new connection profile` from the drop-down menu. Its icon is a plus sign in the top-left corner of the window, which is easy to spot. In the popup windows, you can set up the remote desktop Ubuntu to Windows connections here.

{% picture lazy-load /assets/img/posts/24/configure-ubuntu-remote-desktop-session-to-windows.png  --alt Configure Remmina to Connect to Windows from Ubuntu %}

Click `Save and Connect` once you've finished configuring all of the details. This button helps you to save your connection profile (so that you can connect to Windows later without configuring) and then connects to the Windows PC via RDP. In a couple of seconds, you can now control your Windows PC from Ubuntu machine.

{% picture lazy-load /assets/img/posts/24/connect-windows-remotely-from-ubuntu-linux.png --alt Configure Remmina to Connect to Windows from Ubuntu %}

## How to Uninstall Remmina

> note ""
> If you used PPA to install remote desktop client Remmina, you can uninstall it with the following command:

{% highlight bash %}
sudo apt remove remmina remmina-plugin-rdp remmina-plugin-secret
{% endhighlight %}

You should remove this PPA after it is uninstalled to keep Ubuntu clean.

{% highlight bash %}
sudo add-apt-repository --remove ppa:remmina-ppa-team/remmina-next
{% endhighlight %}

> note ""
> If you used `Snap` to install Remmina, you can use this command to uninstall it.

{% highlight bash %}
sudo snap remove remmina
{% endhighlight %}

## Conclusion

In this tutorial, I show you How to setup, configure, and **connect to Windows PC from Ubuntu remotely** with the Remmina client. I hope this guide will be an easy one for you. If you need any help, don't hesitate to contact me by commenting on this post, I will try my best to help you.