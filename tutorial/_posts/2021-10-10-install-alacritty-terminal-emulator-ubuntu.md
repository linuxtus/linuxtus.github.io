---
layout: post
title: Install and Uninstall Alacritty Terminal Emulator on Ubuntu
description: Alacritty Terminal is the fastest Linux terminal emulator currently available. It makes advantage of the GPU for rendering. Here's how to get it working in Ubuntu or others Linux.
thumbnail-img: "/assets/img/posts/10/how-to-install-alacritty-on-ubuntu.webp"
lang: en
redirect_from:
- /how-install-alacritty-terminal-emulator-on-ubuntu/
categories:
- tutorial
tags: ubuntu tools development
---

The terminal emulator is one of the most controversial applications in Linux. There are many terminal emulators, but in this post, I will show you **Alacritty Terminal** - the fastest linux terminal emulator.

<div class="bg-light sidebar-module sidebar-module-inset" id="toc"></div>

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

## Option 1: Install Alacritty on Ubuntu using APT?

### Step 1: Open up your linux terminal emulator

Firstly, We need to open your terminal to run any command

### Step 2: Add the PPA to your Linux

```bash
sudo add-apt-repository ppa:aslatter/ppa
```

The system will prompt you to press enter to continue

{% picture lazy-load /assets/img/posts/10/install-alacritty-on-ubuntu-linux.webp --alt Install alacritty on Ubuntu and Linux %}

### Step 3: Update the latest versions of the packages

```bash
sudo apt update
```

### Step 4: Start installation with the latest version

Now you can start the installation with this command.

```bash
sudo apt install alacritty
```

Don’t forget to check if is installed correctly.

```bash
alacritty -V
```

{% picture lazy-load /assets/img/posts/10/install-alacritty-use-apt-ubuntu.webp --alt Install Alacritty on ubuntu linux %}

## Install Alacritty from Source Code

### Prerequisites

#### Clone the source code

Before compiling **Alacritty Terminal**, you'll have to first clone the source code by using these ubuntu commands:

```bash
git clone https://github.com/alacritty/alacritty.git
cd alacritty
```

#### Install the Rust compiler with rustup

1\. Install [rustup.rs](https://rustup.rs/)

2\. To make sure you have the right Rust compiler installed, run these ubuntu commands:

```bash
rustup override set stable
rustup update stable
```

#### Install Alacritty Dependencies

These are the very minimal requirements for building; however, some installations may require extra dependencies.

If you're using Wayland with an Nvidia GPU, you'll probably want to install the EGL drivers as well (these are called libegl1-mesa-dev on Ubuntu).

```bash
sudo apt-get install cmake pkg-config libfreetype6-dev libfontconfig1-dev libxcb-xfixes0-dev libxkbcommon-dev python3
```

### Building Alacritty Terminal

```bash
cargo build --release
```

If all goes well, this should place a binary at target/release/alacritty.

### Create Desktop Entry

Many Linux and BSD distributions support desktop entries for adding applications to system menus. This will create a desktop shortcut for this powerful tool:

```bash
sudo cp target/release/alacritty /usr/local/bin # or anywhere else in $PATH
sudo cp extra/logo/alacritty-term.svg /usr/share/pixmaps/Alacritty.svg
sudo desktop-file-install extra/linux/Alacritty.desktop
sudo update-desktop-database
```

## How to Uninstall Alacritty?

```bash
sudo apt remove --auto-remove alacritty
```

When it is uninstalled, you should remove this PPA to make your Ubuntu clean.

```bash
sudo add-apt-repository --remove ppa:aslatter/ppa
```

## Conclusion

That’s what there is to it. You’ve completed the installation and setup of the Alacritty Terminal Emulator on Ubuntu.