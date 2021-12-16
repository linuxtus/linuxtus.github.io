---
layout: post
thumbnail-img: "/assets/img/posts/22/1-minute-learn-grep-command-in-linux.jpg"
image: "/assets/img/posts/22/1-minute-learn-grep-command-in-linux.jpg"
title: 1 Minute to Learn Grep Command in Linux with Examples
description: Grep command is a powerful command in Linux. Let learn grep command in linux with these simple example. It won't take you too long to understand them.
lang: en
category: linux
tags: development ubuntu
---

Grep command is one of the best common ones for Unix users. If you use it well, you can improve your productivity using Linux. In this article, I will help you **learn grep command in linux** with simple examples. I believe that you can be a **grep expert** after reading this post.

<div id="toc-post"></div>

## What is Grep command in Linux?

Grep is a command-line tool for looking for lines that match a regular expression in plain-text data sets. The text search pattern is called a regular expression. When it discovers a match, it generates lines contain the result to [Terminal](https://tgbao.me/install-alacritty-terminal-emulator-ubuntu/). It is an acronym that stands for **<u>G</u>lobal <u>R</u>egular <u>E</u>xpression <u>P</u>rint**. Nowadays, use can use grep without any installation on some Unix-like systems such as Ubuntu, Zorin OS, Fedora, Arch Linux and so on.

## Learn Grep command with examples

I created a file named `grep-linux.txt` to help you learn grep command in Linux. You can create one and follow me.

{% highlight bash %}
THIS IS THE 1ST LINE IN THIS FILE.
This is the 2nd line in this file.

Phone: 0123456789
Email: xxxxxxx@gmail.com
{% endhighlight %}

### 1. Search for the string in a file

The grep command's basic function is to look for a given string in a specified file, as demonstrated below. To search a string, you can use this command

{% highlight bash %}
grep "pattern" "file"
{% endhighlight %}

{% picture lazy-load /assets/img/posts/22/search-given-string-in-file.png --alt Searching a given string in files %}

The above command displays all instances that contain the word `li` in the file and outputs the results.

### 2. Grep with ignoring case-sensitivity

In the above example, I filtered the word `li` in the file, but it only return 2nd line because this line contains exactly `line` (lowercase). You can also grep with ignoring case sensitivity by following this command

{% highlight bash %}
grep -i "pattern" file
{% endhighlight %}

We use option `-i` or `--ignore-case` to filter words that ignore case sensitivity

{% picture lazy-load /assets/img/posts/22/search-given-string-ignoring-case-sensitivity.png --alt Searching a given string in files that ignore case sensitivity %}

### 3. Finding whole words only

If you follow the first example to find a word that contains the word `is`, the result will be line 2 with three matches: `This` , `is` , `this` . To find whole words only, we will use option `-w` or `--word-regexp`

{% highlight bash %}
grep -w "pattern" file
{% endhighlight %}

This image will help you visualize it better

{% picture lazy-load /assets/img/posts/22/difference-between-w-option-and-no-w-option.png --alt Difference between example one and example three %}

### 4. Grep with Regex

As we know, grep is stands for Global Regex Expression Print, so that you can use [Regex](https://regexr.com/) to find patterns in files. Let consider this command to find a line that starts with character `P` (in `Phone` word)

{% highlight bash %}
grep regex_pattern file
grep ^P file
{% endhighlight %}

{% picture lazy-load /assets/img/posts/22/grep-strings-with-regex-linux.png --alt Grep in Linux with Regex %}

### 5. Counting the number of matches

Option `-c` stands for `count`. It helps you to display the number of lines where each line has letters matching the pattern. To use this grep command, you can use:

{% highlight bash %}
grep -c pattern file
{% endhighlight %}

{% picture lazy-load /assets/img/posts/22/grep-count-numbers-of-lines-match.png --alt Count of lines where it contains a match %}

In the first command, it returns `1` because there is only line 2 contains the `is` word. Same as in the 2nd statement, we have 2nd and 5th lines containing the word matching pattern.

### 6. Find files containing the extension

In [Linux](https://tgbao.me/upgrade-to-ubuntu-21-10/), the grep command also allows us to search for files that match the patterns, let's look at the example of finding files with the extension `webp`.

{% highlight bash %}
ls Downloads | grep ".webp"
{% endhighlight %}

{% picture lazy-load /assets/img/posts/22/find-files-contain-extension-in-linux.png --alt Find files have the extension webp %}

You can replace `webp` with any other extension to locate specific files. You can also use `regex` in the above grep command.

### 7. Grep all Files in Directory

To search files in the current directory (or any folder) that contain pattern, we can use an asterisk instead of a filename or location of the folder we want to grep. We can also use option `-r` to use recursive search.

{% highlight bash %}
grep -r pattern *
grep -r pattern ~/Downloads
{% endhighlight %}

{% picture lazy-load /assets/img/posts/22/search-all-files-in-directory.png --alt Find all files in a folder %}

### 8. Find phone number by Grep command

You can use regex to filter phone numbers from text files. Note that you must adjust the template to fit the type of phone number you need.

{% highlight bash %}
grep '\(([0-9]\{3\})\|[0-9]\{3\}\)[ -]\?[0-9]\{3\}[ -]\?[0-9]\{4\}' file
{% endhighlight %}

{% picture lazy-load /assets/img/posts/22/grep-phone-number-linux-use-regex.png --alt Grep with Regex to find phone number %}

### 9. Using Grep to find email address 

Same as finding phone numbers, you can also use grep command to find email addresses in Linux. To do it, you should run this command:

{% highlight bash %}
grep -E '\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,6}\b' file
{% endhighlight %}

{% picture lazy-load /assets/img/posts/22/grep-command-linux-find-email-address.png --alt Using Grep command in Linux to find email addresses %}

### 10. Show lines around result

When working with large files, having the option to select a search that displays the lines before, after, or around the result line can be useful. Using this grep's option to do it:

{% highlight bash %}
grep -<A, B or C> <n> "pattern" file
-- A : after
-- B : before
-- C : around
-- n : count lines
{% endhighlight %}

{% picture lazy-load /assets/img/posts/22/show-line-around-grep-results.png --alt Showing lines before, after, around line contains result %}  

## Conclusion 

After reading this article, I hope you can know **How to use the grep command in Linux**. If you are needed, please leave a comment below, I will try my best to help you.