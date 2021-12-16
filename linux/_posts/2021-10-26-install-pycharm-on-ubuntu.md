---
layout: post
thumbnail-img: "/assets/img/posts/15/how-to-install-pycharm-ubuntu.webp"
image: "/assets/img/posts/15/how-to-install-pycharm-ubuntu.webp"
title: How to Install PyCharm IDE on Ubuntu 21.04
description: PyCharm is a powerful Python IDE. Here is steps to install PyCharm on Ubuntu 21.04 and other Linux distributions.
lang: en
category: linux
tags: development ubuntu
---

[PyCharm](https://www.jetbrains.com/pycharm/) is an integrated development environment used in computer programming, specifically for the Python language. It is developed by the Czech company [JetBrains](https://www.jetbrains.com/)

This guide contains four ways to install Python on Ubuntu 21.04, you can choose a way you that is suitable for you enviroment.

<div id="toc-post"></div>

## PyCharm’s Features:

* PyCharm is a cross-platform IDE that provides consistent experience on Windows, macOS, and Linux.
* PyCharm has smart code completion, code inspections, on-the-fly error flagging and quick fixes, as well as automated code refactorings and rich navigation.
* PyCharm features a built-in debugger and test runner, a built-in terminal, a Python profiler, integration with major VCS and built-in database tools, remote development capabilities with remote interpreters, and Docker and Vagrant integration.
* PyCharm works with IPython Notebook, includes an interactive Python terminal, and supports Anaconda as well as a variety of scientific programs like Matplotlib and NumPy.

I'll show you how to build in PyCharm on Ubuntu in this post. It may be done in a variety of ways, but this article will focus on the most straightforward ones. 

Read more: [How to Install IntelliJ IDEA on Ubuntu 21.04](https://tgbao.me/install-intellij-idea-ubuntu/)

{% picture lazy-load /assets/img/posts/15/how-to-install-pycharm-ubuntu.webp --alt How to Install PyCharm IDE on Ubuntu 21.04 %} 

## Option 1: Install PyCharm from the Software Center Ubuntu

Software Center Ubuntu should be your first pick if you're running Ubuntu. Because it provides a large number of packages (including PyCharm) that are simple use.

### 1: Open Ubuntu Software Center 

To install this Python IDE, you must access Software Center from your Ubuntu.

{% picture lazy-load /assets/img/posts/15/open-ubuntu-software-install-pycharm.webp --alt Open Ubuntu Software To Install IntelliJ IDEA %}

### 2: Search for Pycharm

Ubuntu Software Center contains many packages, so we must type **PyCharm** into the search box, and the results will appear.

{% picture lazy-load /assets/img/posts/15/choose-pycharm-version-to-install-ubuntu.webp --alt Choose IntelliJ Version to Install on Ubuntu %}

### 3: Install a Pycharm Version

Select the version you wish to and click the **Install** button.

{% picture lazy-load /assets/img/posts/15/click-install-button-install-pycharm-ubuntu.webp --alt Click Install Ubuntu to Install IntelliJ IDEA %}

## Option 2: Using Toolbox App to install

The suggested tool for installing JetBrains products is the [JetBrains Toolbox App](https://www.jetbrains.com/toolbox-app/). It allows you to manage and install a variety of products, including Early Access Program (EAP) and Nightly versions, as well as upgrade and roll back as needed and delete any tool. The Toolbox App keeps track of all your projects so you can easily launch any of them in the appropriate IDE and version.

Please follow these steps to install Toolbox App:

### 1. Download Toolbox App

Download the `*.tar.gz` from the [Toolbox App](https://www.jetbrains.com/toolbox-app/)

{% picture lazy-load /assets/img/posts/15/download-jetbrains-toolbox-intellij-idea-ubuntu.webp --alt Download JetBrains Toolbox to install PyCharm %} 

### 2. Extract Toolbox App File

After Toolbox App installation, we extract the downloaded file to `/opt`.

{% highlight bash %}
sudo tar -xzf jetbrains-toolbox-*****.tar.gz -C /opt
{% endhighlight %}

### 3. Run Toolbox App

To launch App, run this command from the `/opt/jetbrains-toolbox-xxx` directory.

{% highlight bash %}
./jetbrains-toolbox
{% endhighlight %}

{% picture lazy-load /assets/img/posts/15/use-jetbrains-toolbox-install-pycharm-ubuntu.webp --alt Use JetBrains Toolbox to install PyCharm on Linux %} 

The Toolbox App icon will be immediately added to the main menu when you start it. After that, select any PyCharm version to install on Ubuntu.

## Option 3: Use Snap packages to install PyCharm on Linux.

[Snaps](https://snapcraft.io/) are easy-to-create and install containerized software bundles. They are safe to use and auto-update. They also function on all major Linux systems without change because their dependencies are included. To install snap, you should this guide: [Installing Snap on Linux](https://snapcraft.io/docs/installing-snap-on-ubuntu)

Next, to install PyCharm you need follow guide that corresponds to the version:

<table class="table">
    <thead>
        <tr>
            <th scope="col">PyCharm's version</th>
            <th scope="col">Installation Steps</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>Free Version</td>
            <td>sudo snap install pycharm-community --classic</td>
        </tr>
        <tr>
            <td>Professional Version</td>
            <td>sudo snap install pycharm-professional --classic</td>
        </tr>
        <tr>
            <td>Educational Version</td>
            <td>sudo snap install pycharm-educational --classic</td>
        </tr>
    </tbody>
</table>

## Option 4: Install PyCharm from Source Code

Although installing this Python IDE from the source on Ubuntu is a bit tricky, you may obtain the most recent version, which means it has more features.

To install, follow these steps:

### 1. Go to Pycharm Download Center

Go to [PyCharm Download Center](https://www.jetbrains.com/pycharm/download/), choose Linux, and download the version you want to install

{% picture lazy-load /assets/img/posts/15/choose-jetbrains-version-install-pycharm-linux.webp --alt Choose Linux Version to Install IntelliJ IDEA %}

### 2. Extract Pycharm file

Run the following command to extract the downloaded files to the `/opt` directory:

{% highlight bash %}
sudo tar -xzf pycharm-*.tar.gz -C /opt
{% endhighlight %}

### 3. Launch Pycharm

To launch IDE, execute the `pycharm.sh` script from the extracted directory.

## Conclusion

I hope this guide was helpful in getting PyCharm installed on Ubuntu and other Linux systems. Please do not hesitate to contact me if you have any questions.
