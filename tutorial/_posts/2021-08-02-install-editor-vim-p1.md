---
layout: post
thumbnail-img: "/assets/img/posts/5/install-vim-editor-for-windows-unix.webp"
title: How To Install Vim Editor For Windows And Unix (Part 1)
description: Vim is a Lighting fast editor with a steep learning curve, the only text editor you'll ever need. And here is how to install it on Windows, Linux, MacOS (Part 1).
lang: en
redirect_from:
- /how-to-install-editor-vim-p1/
categories:
- tutorial
tags: tools development
---

Hello guys. In today's article, I will share with you an extremely famous and popular divine editor that is used by 25% of programmers globally, which is Vim.

<div class="bg-light sidebar-module sidebar-module-inset" id="toc"></div>

## What is VIM?

> Vim (Vi IMproved) is an open source software introduced in 1991 based on Bill Joy's micro with a number of additional features. Vim was originally developed for the Amiga, but was later developed into a cross-platform application (for Windows, Linux, MacOS, etc.). In 2003, Vim was voted the most popular editor.

## Vim's advantages and limitations

### \# Advantages

*   Compact, lightweight: Vim's face is not based on menus or icons but on commands given from the user interface text. So you don't have to worry about whether it consumes ram like VS Code doesn't :))
*   Fast work speed: Vim mainly interacts with users through commands, so as long as you type the key well, you will see a faster working speed.
*   High customization: Part of Vim's power is that it can be widely customized. The basic interface can be changed by the many options available. In other words, you can turn Vim as you wish.
*   Many plugins: Vim has a huge number of plugins that allow users to improve performance, improve the interface, ...
*   Huge community: Because it's a pretty good editor, the user gong is huge (> 25% of developers are using it).
*   Cool feeling: Vim mainly uses a keyboard, so you can watch when you have a girl next to you and open up to type for cool :))

### \# Cons:

*   Many shortcuts: Since Vim's purpose is to improve work speed through typing, the number of shortcuts is countless.
*   Very discouraging: For the first time users, it is easy to get discouraged for many reasons (the original interface is not customized, shortcuts, statements, ... )

So we have a lot of reasons to use Vim.

{% picture lazy-load /assets/img/posts/5/leaderboard-most-used-editor.webp --alt Leaderboard Most Used Editor in 2020 %}

## How to install

Vim is built into the latest versions of Linux, but you can also install it separately for some other operating systems.

### \# Windows:

```
You set the following link: https://www.vim.org/download.php#pc
```

### \# Linux:

```
$ sudo apt-get update
$ sudo apt-get install vim
```

### \# MacOS:

```
$ ruby -e ""$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"" < /dev/null 2> /dev/null
$ brew install vim
```

## Boot

You can start the vim then select the file, or open the vim with the file at the same time. In the examples below, I will show you how to open the vim with the file at the same time. You can delete the file, you can open the blank vim.

### \# Windows:

You open PowerShell or Command Prompt and type the following statement. Remember to change the path to vim.exe and file.txt to the path to your file.

```
"C:\program Files\gvim\vim9.9\vim.exe" file.txt
```

### \# Linux / MacOS:

```
$ vim file.txt 
```

{% picture lazy-load /assets/img/posts/5/default-them-of-editor-vim.webp --alt Default theme of Editor Vim %}

## Basic operations

In vim there are three degrees:

*   NORMAL: In this mode, you can use command shortcuts without affecting the typed text.
*   INSERT: You can type this code, text in this mode. At the same time in this mode you cannot use shortcuts or commands.
*   VISUAL: Selection mode. You can use this mode to quickly select the text section to process.

{% picture lazy-load /assets/img/posts/5/motion-in-editor-vim.webp --alt Motions in Editor Vim %}

Move:

*    `h`: move the mouse pointer to the left
*    `j`: move the mouse pointer down
*    `k`: move the mouse pointer upwards
*    `l`: move the mouse pointer to the right
*    `$`: move the mouse pointer to the end of the line
*    `0`: move the mouse pointer to the top of the line
*    `Gg`: move the mouse pointer to the top of the text
*    `G`: move the mouse pointer to the end of the text
*    `Ctrl-y`: scroll up a line text
*    `Ctrl-e`: scroll down text by one line
*    `Ctrl-u`: scroll up half-screen text
*    `Ctrl-d`: scroll down to half-screen text

Mode changes:

*    `i`: Switch to INSERT mode
*    `v`: Switch to VISUAL mode
*    `V`: Switch to VISUAL LINE mode (select rows instead of words like VISUAL)
*    `Esc`: Switch to NORMAL mode

Operation with text:

*    `x`: Delete characters at the cursor
*    `he`: Copy the selected text in VISUAL mode
*    `p`: Paste the saved text
*    `d`: Delete text
*    `d2w`: Delete 2 words posted after the cursor (delete ... word)
*    `d$`: Delete to the end of the line
*    `d3b`: Delete 2 words in front of the cursor (delete ... backwards)
*    `dt)`: Delete to the letter ")" (delete till ...)
*    `d2j`: Delete the two lines below (delete... J is down)
*    `d2h`: Delete 2 words on the spread (delete ... H is to the left)
*    `Dd`: Delete the cursor's current line
*    `u`: Undo
*    `Ctrl-r`: Redo

Frequently stated statements:

*    `:w`: Save text
*    `:wq`: Save and exit text (or use ZZ)
*    `:q!`: Air traffic exit

To get to know Vim better you can use commands `:Tutor` to open the default installed tutorial in Vim

{% picture lazy-load /assets/img/posts/5/working-with-editor-vim.webp --alt Working with Editor Vim %}
---------------------------------------------------------------------------------------------------------

## Summary

The above is a way to install Vim as well as some operations when working with Vim to improve the speed and productivity of work. In the next article, I will show you how to customize Vim as you like and introduce some plugins or necessary.

See more part two [here](https://tgbao.me/install-editor-vim-p2/).
