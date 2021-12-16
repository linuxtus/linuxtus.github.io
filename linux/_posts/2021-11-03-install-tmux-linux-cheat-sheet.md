---
layout: post
thumbnail-img: "/assets/img/posts/18/how-to-install-tmux-ubuntu-linux.png"
image: "/assets/img/posts/18/how-to-install-tmux-ubuntu-linux.png"
title: How to Install and Uninstall Tmux on Linux - Tmux Cheat Sheet 
description: Steps to install and uninstall tmux on Linux and Unix systems. This guide also provides Tmux Cheat Sheet to help you use Tmux.
lang: en
category: linux
tags: tools development ubuntu
---

[Tmux](https://github.com/tmux/tmux) is an open-source terminal multiplexer for Unix-like operating systems. It allows multiple terminal sessions to be accessed simultaneously in a single window. Tmux can be disconnected from a screen and left running in the background, then reattached later. 

This guide will help you **install Tmux Ubuntu** and other Linux distributions (Fedora, CentOS / RHEL, Arch Linux). This one also helps you how to **Uninstall Tmux** and Cheat Sheet that you can need. Choose a way for your Linux device.

<div id="toc-post"></div>

## Install Tmux on Linux

Every Linux distribution will have different ways to get, we will consider them respectively. 

### Install Tmux on Ubuntu / Debian

On Ubuntu or Debian, just run one of the following commands:

{% highlight bash %}
sudo apt install tmux
{% endhighlight %}

### Install Tmux on Fedora

For Fedora use dnf package managers

{% highlight bash %}
sudo dnf install tmux
{% endhighlight %}

### Install Tmux on RHEL / CentOS	

Use yum package managers for CentOS or RHEL

{% highlight bash %}
sudo yum install tmux
{% endhighlight %}

### Install Tmux on Arch Linux	

Same as Ubuntu, we just run this command

{% highlight bash %}
sudo pacman -S tmux
{% endhighlight %}

### Install Tmux from Source (all Linux distribution)

If you want to install from source code, you can run following commands

{% highlight bash %}
git clone https://github.com/tmux/tmux.git
cd tmux
sh autogen.sh
./configure && make
{% endhighlight %}

## Uninstall Tmux on Linux

If you want to uninstall Tmux, please follow the tutorial that is for your version

### Uninstall Tmux on Ubuntu / Debian

It also take a line of command

{% highlight bash %}
sudo apt-get remove --auto-remove tmux
{% endhighlight %}

### Uninstall Tmux on Fedora

Fedora have a powerful package managers, so you can uninstall it easily

{% highlight bash %}
sudo dnf remove tmux
{% endhighlight %}

### Uninstall Tmux on RHEL / CentOS	

{% highlight bash %}
sudo yum remove tmux
{% endhighlight %}

### Uninstall Tmux on Arch Linux	

{% highlight bash %}
sudo pacman -Rn tmux
{% endhighlight %}

### Uninstall Tmux from Source Code

If you install Tmux from source code, you must run following commands to uninstall it.

{% highlight bash %}
sudo rm /usr/local/bin/tmux 
sudo rm /usr/local/share/man/man1/tmux.1
{% endhighlight %}

{% picture lazy-load /assets/img/posts/18/how-to-install-tmux-ubuntu-linux.png --alt How to Install Tmux on Linux Ubuntu %} 

## Use Tmux on Linux - Tmux Cheat Sheet

### General of Tmux

| Command                   | Uses                                           |
| ------------------------- | ---------------------------------------------- |
| Ctrl + b                  | Press this keybinding to execute Tmux commands |
| tmux                      | Start new                                      |
| tmux new -s name          | Start new session with name                    |
| tmux attach               | attach                                         |
| tmux attach -t name       | attach to named                                |
| tmux ls                   | List sessions                                  |
| tmux kill-session -t name | Kill session                                   |

### Session Tmux

| Command | Uses           | Need Prefix |
| ------- | -------------- | ----------- |
| s       | list sessions  | Yes         |
| $       | rename session | Yes         |

### Window Tmux

| Command | Uses            | Need Prefix |
| ------- | --------------- | ----------- |
| c       | create window   | Yes         |
| w       | list windows    | Yes         |
| n       | next window     | Yes         |
| p       | previous window | Yes         |
| f       | find window     | Yes         |
| ,       | name window     | Yes         |
| &       | kill window     | Yes         |

### Panes Tmux

| Command | Uses                | Need Prefix |
| ------- | ------------------- | ----------- |
| %       | vertical split      | Yes         |
| "       | horizontal split    | Yes         |
| o       | swap panes          | Yes         |
| q       | show numbers        | Yes         |
| x       | kill                | Yes         |
| +       | break into window   | Yes         |
| -       | restore from window | Yes         |
| space   | toggle layouts      | Yes         |
| (       | move left           | Yes         |
| )       | move right          | Yes         |
| z       | toggle zoom         | Yes         |

### Copy mode Tmux

| Command               | Vim   | Emacs   |
| --------------------- | ----- | ------- |
| back to indentation   | ^     | M-m     |
| start selection       | space | C-Space |
| clear selection       | Esc   | C-g     |
| copy selection        | Enter | M-w     |
| cursor down           | j     | down    |
| cursor up             | k     | up      |
| cursor right          | l     | right   |
| cursor left           | h     | left    |
| delete line           | d     | C-u     |
| delete to end of line | D     | C-k     |
| end of line           | $     | C-e     |
| start of line         | 0     | C-a     |
| next page             | C-f   | PgDn    |
| next word             | w     | M-f     |
| paste buffer          | p     | C-y     |
| quit mode             | q     | Esc     |
| scroll up             | K     | C-up    |
| scroll down           | J     | C-down  |
| search again          | n     | n       |
| search backward       | ?     | C-r     |
| search forward        | /     | C-s     |

### Reload Tmux

{% highlight bash %}
tmux source-file ~/.tmux.conf
{% endhighlight %}

## Conclusion

In this post, I show you steps to install Tmux on Ubuntu and other Linux distributions. I also provide some keybindings, commands that you need to work with one. Don't forget to comment below some tmux commands that are not here. Hope you like it :)