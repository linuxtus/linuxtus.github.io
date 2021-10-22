---
layout: post
thumbnail-img: "/assets/img/posts/14/how-to-install-intellij-idea-ubuntu.webp"
title: How to Install IntelliJ IDEA on Ubuntu 21.10
description: Steps to install IntelliJ IDEA on Ubuntu 21.10 and other Linux distributions very easily.
lang: en
categories:
- tutorial
tags: development ubuntu
---

[IntelliJ IDEA](https://www.jetbrains.com/) is an intelligent, context-aware IDE for working with Java and other JVM languages like Kotlin, Scala, and Groovy on all sorts of applications. It is developed by [JetBrains](https://www.jetbrains.com/) and is available as an Apache 2 Licensed community edition, and in a proprietary commercial edition. Both can be used for commercial development.

<div class="bg-light sidebar-module sidebar-module-inset" id="toc"></div>

## IntelliJ IDEA’s Features:

* IntelliJ IDEA is a cross-platform IDE that provides consistent experience on Windows, macOS, and Linux.
* It supported many languages: Java, Kotlin, Scala, Groovy, …
* It has many plugins that can help you improve productivity.
* It provided intelligent code completion
* You can run, debug, test your code on IntelliJ IDEA
* And many others [Features](https://www.jetbrains.com/idea/features/)

In this post, I will help you to install IntelliJ IDEA on Ubuntu. It has many ways, but this post will introduce some easiest guide. Let go.

## Option 1: Install IntelliJ IDEA from the Software Center Ubuntu

If you are using Ubuntu, I think Software Center Ubuntu should be your first choice. Because it contains many packages (also IntelliJ IDEA), and you can install them very easily.

Firstly, you need to open Software Center from your Ubuntu to install JetBrains’s product

{% picture lazy-load /assets/img/posts/14/open-ubuntu-software-install-intellij-idea.webp --alt Open Ubuntu Software To Install IntelliJ IDEA %}

Secondly, you just have to search IntelliJ IDEA and it will show the possible results.

{% picture lazy-load /assets/img/posts/14/choose-intellij-version-to-install-ubuntu.webp --alt Choose IntelliJ Version to Install on Ubuntu %}

Third, choose the version you want to install on your Ubuntu 21.10 and click the Install button.

{% picture lazy-load /assets/img/posts/14/click-install-button-install-intellij-ubuntu.webp --alt Click Install Ubuntu to Install IntelliJ IDEA %}

## Option 2: Install IntelliJ IDEA in Linux using Snap packages

[Snaps](https://snapcraft.io/) are containerised software packages that are simple to create and install. They auto-update and are safe to run. And because they bundle their dependencies, they work on all major Linux systems without modification.

First, please make sure that you have installed Snap on your Linux distribution. If you don’t know how to install it, follow: [Installing snap on Linux](https://snapcraft.io/docs/installing-snap-on-ubuntu)

After that, you should choose a version of IntelliJ IDEA to install on Linux.

For the **community version** ( Free version ):

```
sudo snap install intellij-idea-ultimate --classic
```

For the **ultimate version** ( Paid version ):

```
sudo snap install intellij-idea-ultimate --classic
```

For the **educational version**:

```
sudo snap install intellij-idea-ultimate --classic
```

## Option 3: Install using the Toolbox App

The [JetBrains Toolbox App](https://www.jetbrains.com/toolbox-app/) is the recommended tool to install JetBrains products. You can use it to manage and install different products, including Early Access Program (EAP) and Nightly releases, update and roll back when you need, and easily remove any tool. The Toolbox App maintains a list of all your projects to quickly open any project in the right IDE and version.

To install IntelliJ IDEA using the Toolbox App, please follow:

1. Download the `.tar.gz` from the [Toolbox App web page](https://www.jetbrains.com/toolbox-app/)

{% picture lazy-load /assets/img/posts/14/download-jetbrains-toolbox-intellij-idea-ubuntu.webp --alt Download JetBrains Toolbox to install IntelliJ IDEA %} 

2. Extract the downloaded file to `/opt` to execute JetBrains Toolbox App

```
sudo tar -xzf jetbrains-toolbox-*****.tar.gz -C /opt
```

3. Execute this command from `/opt/jetbrains-toolbox-***` directory to run App

```
./jetbrains-toolbox
```

{% picture lazy-load /assets/img/posts/14/use-jetbrains-toolbox-install-intellij-idea-ubuntu.webp --alt Use JetBrains Toolbox to install IntelliJ IDEA on Linux %} 

After running the Toolbox App, it will automatically add the Toolbox App icon to the main menu. Next, choose any IntelliJ IDEA's version to install on your Ubuntu. 

## Option 4: Install IntelliJ IDEA on Ubuntu using PPA

Personal Package Archives (PPAs) are software repositories designed for Ubuntu users and are easier to install than other third-party repositories. PPAs are often used to distribute pre-release software so that it can be tested.

First, you have to open your [Terminal Emulator](https://tgbao.me/install-alacritty-terminal-emulator-ubuntu/)

Second, add the official `mmk2410’s ppa` to your Ubuntu:

```
sudo add-apt-repository ppa:mmk2410/intellij-idea-community
sudo apt update
```

Third, you can install IntelliJ IDEA on your Ubuntu now

```
sudo apt install intellij-idea-community
```

> Note: only the Community version is available via this PPA, so if you want to install other versions, please consider other ways in this post to install.

To **remove IntelliJ** installed from the above PPA, use these Linux’s commands:

```
sudo apt remove intellij-idea-community 
sudo add-apt-repository --remove ppa:mmk2410/intellij-idea-community
```

## Option 5: Install IntelliJ IDEA from Source using Ubuntu

Although, install IntelliJ IDEA on Ubuntu from the source is a little difficult, but you can download the latest version of one, which means there will have more features. 

So to install, you should follow:

Go to [Jetbrains’s Download Center](https://www.jetbrains.com/idea/download/)

Choose Linux, and download the version you want to install

{% picture lazy-load /assets/img/posts/14/choose-version-jetbrains-install-intellij-idea-linux.webp --alt Choose Linux Version to Install IntelliJ IDEA %}

Extract the downloaded files to `/opt` directory by running this command:

```
sudo tar -xzf ideaIU.tar.gz -C /opt
```

Execute the `idea.sh` script from the extracted directory to run IntelliJ IDEA.

## Conclusion

I hope this post helped you to **install IntelliJ IDEA on Ubuntu** and other Linux distributions. If you need to ask any questions, feel free to contact me :)