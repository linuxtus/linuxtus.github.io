---
layout: post
thumbnail-img: "/assets/img/posts/6/how-to-install-editor-vim-p2.webp"
title: How To Install Vim Editor For Windows And Unix (Part 2)
description: Vim is a Lighting fast editor with a steep learning curve, the only text editor you'll ever need. And here is how to install it on Windows, Linux, MacOS (Part 2).
lang: en
redirect_from:
- /how-to-install-editor-vim-p2/
categories:
- tutorial
tags: tools development
---

Hello guys, in the [previous article](https://tgbao.me/install-editor-vim-p1/) I introduced you to Vim, how to install Vim Editor and some basic operations. In today's article, I will show you how to refine Vim and install some variable plugins. I will work in full with Linux, with some of you using MacOS, Windows you can do the same

<div class="bg-light sidebar-module sidebar-module-inset" id="toc"></div>

## Basic Vim Customization

By default, vim's config file will be located in `~/.vimrc` In some cases, it may be `/etc/vim/vimrc` or `/etc/vimrc`. Or if the file doesn't exist, create a new file using a command

```
$ touch ~/.vimrc
$ vim ~/.vimrc
```

{% picture lazy-load /assets/img/posts/6/vim-themes-when-open-editor-vim.webp --alt Vim's theme when open Vim %}

You switch to INSERT MODE and add the configs as follows:

```
" Enable syntax highlights for a file type (such as .py, .cpp, .xml)
syntax enable
syntax on

" Show the order number of the line
set number

" Do not show the order number of the line
set nonumber

" Show the number in relative
"The current line is numbered 0, the upper line and the bottom line are 1, 
" and so on for other lines.
set relativenumber

" Show the number in a hybrid way
" The current numbered line is the actual line number, 
"The upper and lower lines are 1, and so on for the other lines
set number relativenumber

" Adjust 4 spaces per tab
set tabstop=4

" Adjust 4 spaces per indent
set shiftwidth=4

" Use space character instead of character tab when pressing Tab
set expandtab

" Automatic indent when down the line
set autoindent

" Use clipboard system change buffer of vim
set clipboard=unnamedplus

" Adjust the delay (ms) in the middle of the transition
set ttimeoutlen=60

" Highlight the current line
set cursorline'
```

Save and exit Vim by command `:wq` When we reopen, we'll have an interface like this.

{% picture lazy-load /assets/img/posts/6/vim-themes-after-config-editor-vim.webp --alt Vim's theme after config %}

## Install Plugin for Vim Editor

We have two ways to install plugins for Vim:

*   Install pure Vim by hand
*   Install Vim with Plugin management packages

### Manual Vim Installation

Default, folder `~/.vim` there will be no structure to install plugins, we will create folders by

```
$ mkdir -p ~/.vim/pack/vendor/start`
```

Then add the plugins you want to install in that folder, it will load automatically when you open the vim.

For example, when installing --NERDTree-- (Sidebar selects file), we do:

```
$ git clone --depth 1 https://github.com/preservim/nerdtree.git ~/.vim/pack/vendor/start/nerdtree
```

### Install Vim with Plugin management packages

There are many Vim's plugin management packages such as Bundle, Vim-Plug, Pathogen,... and so on. In this article I will use it `Vim-Plug`. Because I think it has a lot of good features.

*   Compact syntax, easy to remember
*   Pretty fast
*   Installation is also easy.

#### How to install Vim-Plug

**Linux / MacOS**

```
$ curl -fLo ~/.vim/autoload/plug.vim --create-dirs https://raw.githubusercontent.com/junegunn/vim-plug/master/plug.vim`
```  

**Windows (using PowerShell)**

```
$ iwr -useb https://raw.githubusercontent.com/junegunn/vim-plug/master/plug.vim |`
    ni "$(@($env:XDG_DATA_HOME, $env:LOCALAPPDATA)[$null -eq $env:XDG_DATA_HOME])/nvim-data/site/autoload/plug.vim" -Force
```

#### Use Vim-Plug

1.  We open `~/.vimrc` up
2.  Find which part is empty :))
3.  Then add the call starter `plug#begin()`
4.  Below we write plugins that want syntax `Plug "xxxx"` (With xxxx being the tail of the github path to the plugin to install)
5.  After adding, we end the plugin settings by adding `call plug#end()` at the end

**Example:**

```
" Call first
call plug#begin('~/.vim/plugged')

" Install plugin Shorthand notation;  https://github.com/junegunn/vim-easy-align
Plug 'junegunn/vim-easy-align'

" or using direct link
Plug 'https://github.com/junegunn/vim-github-dashboard.git'

" Install multiple plugins by using |
Plug 'SirVer/ultisnips' | Plug 'honza/vim-snippets'

" Loading after installing Plugin. 
Plug 'scrooloose/nerdtree', { 'on':  'NERDTreeToggle' }
Plug 'tpope/vim-fireplace', { 'for': 'clojure' }

" Install plugin with option branch
Plug 'rdnetto/YCM-Generator', { 'branch': 'stable' }

" Install plugin with tag released
Plug 'fatih/vim-go', { 'tag': '*' }

" Options when install Plugin
Plug 'nsf/gocode', { 'tag': 'v.20160303', 'rtp': 'vim' }

" Install from non-offical site ~/.vim/plugged với post-update
Plug 'junegunn/fzf', { 'dir': '~/.fzf', 'do': './install --all' }

" Call at the end
call plug#end()
```

Then save and reload by command `:source %` or we get out of the open. Then type a command. `:PlugInstall` to install plugins, :D

{% picture lazy-load /assets/img/posts/6/install-plugins-with-editor-vim.webp --alt Install plugins with Vim %}

There are also some commands such as:

*    `PlugUpdate`: update plugins to the latest version
*    `PlugClean`: Delete plugins installed but not in config
*    `PlugUpgrade`: Self-update Vim-Plug itself
*    `PlugStatus`: View the status of plugins
*    `PlugSnapshot`: Create a backup in case it is lost

## Some popular plugins for Vim

### [vim-airline](https://github.com/vim-airline/vim-airline)

Plugin changes the look and look for Vim's status bar

```
" Install by Vim-Plug
Plug 'vim-airline/vim-airline'
Plug 'vim-airline/vim-airline-themes'
```

You can visit [vim-airline-themes](https://github.com/vim-airline/vim-airline-themes#vim-airline-themes--) to choose your favorite themes.


### [nerdtree](https://github.com/preservim/nerdtree)


Plugin showing folders, files in tree form

```
" Install with Vim-Plug
Plug 'preservim/nerdtree'

" Add this paragraph to .vimrc then reload and :P lugInstall
syntax on
filetype plugin indent on
```

{% picture lazy-load /assets/img/posts/6/nerd-tree-for-editor-vim.webp --alt Plugin NERDTree for Vim %}

### [Nerd Commenter](https://github.com/preservim/nerdcommenter)

Diverse comment plugins for Vim

```
" Vim-Plug
Plug 'preservim/nerdcommenter'
```

### [fzf](https://github.com/junegunn/fzf.vim)

Quick file search plugin

```
" Vim-Plug
Plug 'junegunn/fzf', { 'do': { -> fzf#install() } }
Plug 'junegunn/fzf.vim'
```

### [Vim Surround](https://github.com/tpope/vim-surround)

Fast-working plugin with brackets, xml tags, quotes, apostrophes ...

```
" Vim-Plug
Plug 'tpope/vim-surround'
```

## Set the interface for Vim

### [Dracula Theme](https://github.com/dracula/vim)

*   Install Dracula Theme

```
" Vim-Plug
Plug 'dracula/vim', { 'name': 'dracula' }

" Add this lines to .vimrc
syntax enable
colorscheme dracula

" Reload .vimrc and run
:PlugInstall
```

* Dracula Theme's Images

{% picture lazy-load /assets/img/posts/6/dracula-theme-for-editor-vim.webp --alt Dracula Theme for Vim %}

### [Monokai Theme](https://github.com/sickill/vim-monokai)

*   Install Monokai Theme

```
" Install with Vim-Plug
Plug 'sickill/vim-monokai'

" Add this paragraph to .vimrc
syntax enable
colorscheme monokai

" Then reload .vimrc and use the command
:PlugInstall
```

*   Monokai Theme's Images

{% picture lazy-load /assets/img/posts/6/monokai-theme-for-editor-vim.webp --alt Monokai Theme for Vim %}

### [Solarized Theme](https://github.com/altercation/vim-colors-solarized)

*   Install Solarized Theme

```
" Install with Vim-Plug
Plug 'altercation/vim-colors-solarized'

" Add this paragraph to .vimrc, change dark to light 
" if you want a bright interface
syntax enable
set background=dark
colorscheme solarized

" Then reload .vimrc and use the command
:PlugInstall
```

*   Solarized Theme's Images

{% picture lazy-load /assets/img/posts/6/solarized-theme-for-editor-vim.webp --alt Solarized theme for Vim %}

## Result

{% picture lazy-load /assets/img/posts/6/editor-vim-after-config.webp --alt Editor Vim After Customization %}

You can use my config [here](https://gist.github.com/tgbaodeeptry/491347d1ae0c7fdd0440f61e92ee9802)

## Epilogue

Through two articles, I introduced almost everything basic of Vim. Vim is very, very good and also essential for every programmer to improve productivity. This series only introduces the basics, you can explore for yourself to improve speed and skill. See you in other posts. Don't forget to share your rate and share it :D And if you don't understand the part that can comment below.
