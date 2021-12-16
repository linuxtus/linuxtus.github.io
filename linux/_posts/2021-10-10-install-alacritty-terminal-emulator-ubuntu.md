---
layout: post
title: Install and Uninstall Alacritty Terminal Emulator on Ubuntu
description: Alacritty Terminal is the fastest Linux terminal emulator currently available. It makes advantage of the GPU for rendering. Here's how to get it working in Ubuntu or others Linux.
thumbnail-img: "/assets/img/posts/10/how-to-install-alacritty-on-ubuntu.webp"
image: "/assets/img/posts/10/how-to-install-alacritty-on-ubuntu.webp"
lang: en
redirect_from:
- /how-install-alacritty-terminal-emulator-on-ubuntu/
category: linux
tags: ubuntu tools development
---

The terminal emulator is one of the most controversial applications in Linux. There are many terminal emulators, but in this post, I will show you **How to Install and Uninstall Alacritty Terminal** - the fastest linux terminal emulator.

<div id="toc-post"></div>

## What is Alacritty?

[Alacritty Terminal](https://github.com/alacritty/alacritty) is a cross-platform, GPU-accelerated terminal emulator works on macOS, Ubuntu, BSD, and Windows. It’s free and open-source software that strongly focus on simplicity and performance. And it features Vi mode, search, Vi search etc.

{% picture lazy-load /assets/img/posts/10/alacritty-is-a-gpu-accelerated-terminal-emulator.webp --alt Alacritty is a cross-platform, GPU-accelerated linux terminal emulator %}

## System Requirements

<table class="table">
    <thead>
        <tr>
            <th scope="col">Category</th>
            <th scope="col">System Requirements</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>OS</td>
            <td>Linux - Ubuntu 18.04 to 21.10 with 2GB RAM (4GB preferable)</td>
        </tr>
        <tr>
            <td>Access</td>
            <td>Privileged access to your Linux system as root or via the sudo command.
            </td>
        </tr>
    </tbody>
</table>

## Option 1: Install Alacritty on Ubuntu using APT

### 1. Open up your linux terminal emulator

Firstly, We need to open your terminal to run any command

### 2. Add the PPA to your Linux

{% highlight bash %}
sudo add-apt-repository ppa:aslatter/ppa
{% endhighlight %}

The system will prompt you to press enter to continue

{% picture lazy-load /assets/img/posts/10/install-alacritty-on-ubuntu-linux.webp --alt Install alacritty on Ubuntu and Linux %}

### 3. Update the latest versions of the packages

{% highlight bash %}
sudo apt update
{% endhighlight %}

### 4. Start installation with the latest version

Now you can start the installation with this command.

{% highlight bash %}
sudo apt install alacritty
{% endhighlight %}

Don’t forget to check if is installed correctly.

{% highlight bash %}
alacritty -V
{% endhighlight %}

{% picture lazy-load /assets/img/posts/10/install-alacritty-use-apt-ubuntu.webp --alt Install Alacritty on ubuntu linux %}

## Option 2: Install Alacritty from Source Code

### Prerequisites

#### 1. Clone the source code

Before compiling **Alacritty Terminal**, you'll have to first clone the source code by using these ubuntu commands:

{% highlight bash %}
git clone https://github.com/alacritty/alacritty.git
cd alacritty
{% endhighlight %}

#### 2. Install the Rust compiler with rustup

- Install [rustup.rs](https://rustup.rs/)
- To make sure you have the right Rust compiler installed, run these ubuntu commands:

{% highlight bash %}
rustup override set stable
rustup update stable
{% endhighlight %}

#### 3. Install Alacritty Dependencies

These are the very minimal requirements for building; however, some installations may require extra dependencies.

If you're using Wayland with an Nvidia GPU, you'll probably want to install the EGL drivers as well (these are called libegl1-mesa-dev on Ubuntu).

{% highlight bash %}
sudo apt-get install cmake pkg-config libfreetype6-dev libfontconfig1-dev libxcb-xfixes0-dev libxkbcommon-dev python3
{% endhighlight %}

### Building Alacritty Terminal

{% highlight bash %}
cargo build --release
{% endhighlight %}

If all goes well, this should place a binary at target/release/alacritty.

### Create Desktop Entry

Many Linux and BSD distributions support desktop entries for adding applications to system menus. This will create a desktop shortcut for this powerful tool:

{% highlight bash %}
sudo cp target/release/alacritty /usr/local/bin # or anywhere else in $PATH
sudo cp extra/logo/alacritty-term.svg /usr/share/pixmaps/Alacritty.svg
sudo desktop-file-install extra/linux/Alacritty.desktop
sudo update-desktop-database
{% endhighlight %}

## How to Uninstall Alacritty?

If you installed Alacritty using APT, you can uninstall by following these steps

{% highlight bash %}
sudo apt remove --auto-remove alacritty
{% endhighlight %}

When it is uninstalled, you should remove this PPA to make your Ubuntu clean.

{% highlight bash %}
sudo add-apt-repository --remove ppa:aslatter/ppa
{% endhighlight %}

## Conclusion

That’s what there is to it. You’ve completed the installation and setup of the Alacritty Terminal Emulator on Ubuntu.