---
layout: post
thumbnail-img: "/assets/img/posts/12/how-to-install-python-on-ubuntu.webp"
title: How To Install Python 3 On Ubuntu 18.04 (20.04)
description: How to install Python 3 on Ubuntu 18.04 or 20.04 using APT or from the source code. Follow this step-by-step tutorial and install Python with ease!
lang: en
redirect_from:
- /how-to-install-python-on-ubuntu/
categories:
- tutorial
tags: python development ubuntu
---

According to [Python’s docs](https://www.python.org/doc/essays/blurb/), Python is an interpreted, object-oriented, high-level programming language with dynamic semantics. Its high-level built-in data structures, combined with dynamic typing and dynamic binding, make it very attractive for Rapid Application Development, as well as for use as a scripting or glue language to connect existing components.

<div class="bg-light sidebar-module sidebar-module-inset" id="toc"></div>

## Prerequisites to install Python 3?

* Operating system: Linux - Ubuntu 16.04 to 20.10 with 2GB RAM (4GB preferable)
* You can use a terminal to run Linux script
* A user account with sudo privileges

## Option 1: Install Python 3 using APT (Easier)

As we knew, APT or Advanced Package Tool is the default package manager that you will find on Ubuntu. You can download the Python package from the official Ubuntu repository. Here's how to do it.

### Step 1: Open up your terminal emulator

Firstly, We need to open your terminal to run any command. If you don’t have any terminal, please follow this to install: [How to Install Alacritty Terminal Emulator on Ubuntu](https://tgbao.me/install-alacritty-terminal-emulator-ubuntu/)

### Step 2: Update the latest versions of the packages

```bash
sudo apt-get update
```

### Step 3: Download the latest version of Python 3

Now you can start the installation of Python 3.9 with the command.

```bash
sudo apt install python
```

After installing Python 3, don’t forget to check Python’s version to ensure everything is working correctly.

```bash
python --version
```

If you get something like this. It means Python is installed on your Ubuntu.

```
Python 3.9.7
```

{% picture lazy-load /assets/img/posts/12/install-python-using-apt-ubuntu.webp --alt Install Python using APT on Ubuntu %}

## Option 2: Install lastest Python use Deadsnakes PPA

Personal Package Archives (PPAs) are software repositories designed for Ubuntu users and are easier to install than other third-party repositories. PPAs are often used to distribute pre-release software so that it can be tested.

### Step 1: Install the above-mentioned package on your Ubuntu

```bash
sudo apt-get install software-properties-common
```

### Step 2: Add the official Deadsnakes PPA link to your Linux's repository list

```bash
sudo add-apt-repository ppa:deadsnakes/ppa
```

The system will prompt you to press enter to continue

### Step 3: Update the latest versions of the packages

```bash
sudo apt update
```

### Step 4: Download the latest version of Python from the added PPA

Now you can start the installation of Python 3.9 with this command.

```bash
sudo apt install python3.10
```

Don’t forget to check Python’s version.

```bash
python --version
```

{% picture lazy-load /assets/img/posts/12/install-python-using-deadsnakes-ppa-ubuntu.webp --alt Install Python using Deadsnakes PPA on Ubuntu %}

## Option 3: Install Python 3 from Source Code

Although Downloading and building the latest version of Python from the official Python website seems a bit daunting to you at first, it'll become easier once you know the process.

### Step 1: Update your system's local repository list:

```bash
sudo apt update
```

### Step 2: Install Python’s dependencies on your Ubuntu using APT

```bash
sudo apt-get install build-essential zlib1g-dev libncurses5-dev libgdbm-dev libnss3-dev libssl-dev libreadline-dev libffi-dev wget
```

### Step 3: Create a new directory to store the Python source files

```bash
mkdir /python && cd /python
```

### Step 4: Download the Python source code from the official FTP server

```bash
wget https://www.python.org/ftp/python/3.9.7/Python-3.9.7.tgz
```

### Step 5: Extract the TGZ file that you just downloaded

```bash
tar –xf Python-3.9.7.tgz
```

### Step 6: Build the package using the MakeFile present in the directory

```bash
sudo make install
```

{% picture lazy-load /assets/img/posts/12/install-python-from-source-code.webp --alt Install Python from Source Code on Ubuntu %}

## Conclusion

Python comes preinstalled on almost every Linux system and it is also available on official distribution repositories. If you still don't get Python installed on your computer, then you can easily download it using Ubuntu's package manager.

Programming languages have become important because of the growing demand for developers across industries. The Python language is used in a variety of different sectors, and its applications are enough to demonstrate how powerful it is.