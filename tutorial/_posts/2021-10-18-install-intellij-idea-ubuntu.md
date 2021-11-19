---
layout: post
thumbnail-img: "/assets/img/posts/14/how-to-install-intellij-idea-ubuntu.webp"
title: How to Install IntelliJ IDEA on Ubuntu 21.04
description: IntelliJ IDEA is a Java, Kotlin IDE. This is step by step guide to install IntelliJ IDEA on Ubuntu 21.04 and other Linux distributions very easily.
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

{% picture lazy-load /assets/img/posts/14/how-to-install-intellij-idea-ubuntu.webp --alt How to Install IntelliJ IDEA on Ubuntu 21.04 %} 

## Option 1: Install IntelliJ IDEA from the Software Center Ubuntu

If you are using Ubuntu, I think Software Center Ubuntu should be your first choice. Because it contains many packages (also IntelliJ IDEA), and you can install them very easily.

<ol id="steps">
<li>
You need to open Software Center from your Ubuntu to install JetBrains’s product

{% picture lazy-load /assets/img/posts/14/open-ubuntu-software-install-intellij-idea.webp --alt Open Ubuntu Software To Install IntelliJ IDEA %}
</li>

<li>
You just have to search IntelliJ IDEA and it will show the possible results.

{% picture lazy-load /assets/img/posts/14/choose-intellij-version-to-install-ubuntu.webp --alt Choose IntelliJ Version to Install on Ubuntu %}
</li>

<li>
Choose the version you want to install on your Ubuntu 21.04 and click the Install button.

{% picture lazy-load /assets/img/posts/14/click-install-button-install-intellij-ubuntu.webp --alt Click Install Ubuntu to Install IntelliJ IDEA %}
</li>
</ol>

## Option 2: Install IntelliJ IDEA in Linux using Snap packages

[Snaps](https://snapcraft.io/) are containerised software packages that are simple to create and install. They auto-update and are safe to run. And because they bundle their dependencies, they work on all major Linux systems without modification.

<ol id="steps">
<li> Make sure that you have installed Snap on your Linux distribution.  
<br/>
If you don’t know how to install it, follow: <a href="https://snapcraft.io/docs/installing-snap-on-ubuntu">Installing snap on Linux</a>

</li>

<li>
Choose a version of IntelliJ IDEA to install on Linux.

<table class="table">
    <thead>
        <tr>
            <th scope="col">IntelliJ IDEA's version</th>
            <th scope="col">Installation Steps</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>Free Version</td>
            <td>sudo snap install intellij-idea-ultimate --classic</td>
        </tr>
        <tr>
            <td>Ultimate Version</td>
            <td>sudo snap install intellij-idea-ultimate --classic</td>
        </tr>
        <tr>
            <td>Educational Version</td>
            <td>sudo snap install intellij-idea-ultimate --classic</td>
        </tr>
    </tbody>
</table>

</li>
</ol>

## Option 3: Install using the Toolbox App

The [JetBrains Toolbox App](https://www.jetbrains.com/toolbox-app/) is the recommended tool to install JetBrains products. You can use it to manage and install different products, including Early Access Program (EAP) and Nightly releases, update and roll back when you need, and easily remove any tool. The Toolbox App maintains a list of all your projects to quickly open any project in the right IDE and version.

To install IntelliJ IDEA using the Toolbox App, please follow:

<ol id="steps">
<li>
Download the <code>*.tar.gz</code> from the <a href="https://www.jetbrains.com/toolbox-app/">Toolbox App</a>

{% picture lazy-load /assets/img/posts/14/download-jetbrains-toolbox-intellij-idea-ubuntu.webp --alt Download JetBrains Toolbox to install IntelliJ IDEA %} 
</li>

<li>
Extract the downloaded file to <code>/opt</code> to execute JetBrains Toolbox App

{% highlight bash %}
sudo tar -xzf jetbrains-toolbox-*****.tar.gz -C /opt
{% endhighlight %}
</li>

<li>
Execute this command from <code>/opt/jetbrains-toolbox-***</code> directory to run App

{% highlight bash %}
./jetbrains-toolbox
{% endhighlight %}
</li>

{% picture lazy-load /assets/img/posts/14/use-jetbrains-toolbox-install-intellij-idea-ubuntu.webp --alt Use JetBrains Toolbox to install IntelliJ IDEA on Linux %} 

</ol>

After running the Toolbox App, it will automatically add the Toolbox App icon to the main menu. Next, choose any IntelliJ IDEA's version to install on your Ubuntu. 

## Option 4: Install IntelliJ IDEA on Ubuntu using PPA

Personal Package Archives (PPAs) are software repositories designed for Ubuntu users and are easier to install than other third-party repositories. PPAs are often used to distribute pre-release software so that it can be tested.

<ol id="steps"> 

<li>You have to open your <a href="https://tgbao.me/install-alacritty-terminal-emulator-ubuntu/">Terminal Emulator</a>
</li>

<li>
Add the official <code>mmk2410’s ppa</code> to your Ubuntu:

{% highlight bash %}
sudo add-apt-repository ppa:mmk2410/intellij-idea-community
sudo apt update
{% endhighlight %}
</li>

<li>
You can install IntelliJ IDEA on your Ubuntu now

{% highlight bash %}
sudo apt install intellij-idea-community
{% endhighlight %}
</li>
</ol>

> Note: only the Community version is available via this PPA, so if you want to install other versions, please consider other ways in this post to install.

To **uninstall IntelliJ** installed from the above PPA, use these Linux’s commands:

```
sudo apt remove intellij-idea-community 
sudo add-apt-repository --remove ppa:mmk2410/intellij-idea-community
```

## Option 5: Install IntelliJ IDEA from Source using Ubuntu
    
Although, install IntelliJ IDEA on Ubuntu from the source is a little difficult, but you can download the latest version of one, which means there will have more features. 

So to install, you should follow:

<ol id="steps">
<li>
Go to <a href="https://www.jetbrains.com/idea/download/">Jetbrain's Download Center</a>
<br/>
Choose Linux, and download the version you want to install

{% picture lazy-load /assets/img/posts/14/choose-version-jetbrains-install-intellij-idea-linux.webp --alt Choose Linux Version to Install IntelliJ IDEA %}
</li>

<li>
Extract the downloaded files to <code>/opt</code> directory by running this command:

{% highlight bash %}
sudo tar -xzf ideaIU.tar.gz -C /opt
{% endhighlight %}
</li>

<li>
Execute the <code>idea.sh</code> script from the extracted directory to run IntelliJ IDEA.
</li>
</ol>

## Conclusion

I hope this post helped you to **install IntelliJ IDEA on Ubuntu** and other Linux distributions. If you need to ask any questions, feel free to contact me :)
