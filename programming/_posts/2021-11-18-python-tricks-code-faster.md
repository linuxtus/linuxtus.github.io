---
layout: post
thumbnail-img: "/assets/img/posts/20/tips-code-python-faster-speed-up.jpg"
image: "/assets/img/posts/20/tips-code-python-faster-speed-up.jpg"
title: How To Speed Up Python Programs With These Tips
description: Tips to Speed Up Python programs and code one faster. Follow this guide, you can know some tips or tricks to improve performance. This is a step-by-step guide.
lang: en
category: programming
tags: python programming
---

Not same as Java, C++, C# which are compiled languages, Python is Interpreted. You write a Python program and then tell the interpreter to execute it. It runs the program one line at a time, translating each line before running it. Therefore, your Python program will be executed very slowly. However, we can speed up Python excretion by optimizing our code mentioned in this article. Some tips you will already know, but some ones can be your new knowledge today. Following this guide, you can speed up your programs and also code faster.

<div id="toc-post"></div>

{% picture lazy-load /assets/img/posts/20/tips-code-python-faster-speed-up.jpg --alt Tips to speed up Python Programs and code faster %} 

## Tips to Code Python Faster

### 1. Install the latest Python

It is always the best way to speed up your python program by [installing the latest Python](https://tgbao.me/install-python-ubuntu/). Latest Python, which means that it contains improved performance modules, adds some new syntax to the language, a few minor tweaks to existing behavior, and most importantly, a slew of a bunch of speed improvements. Therefore, I think you should update your Python to the latest Python version before continuing.

### 2. Using Builtin Functions

Builtin functions is a collection code that is coded by Python (and community). Using builtin functions is one of the best ways to speed up your python programs. The advantages of using these functions are:

- Reducing code duplication
- Increasing the code's clarity
- Reusability of code
- The concealment of information
- Improve the speed of execution.

Replace your custom created function with a library function and compare the program's performance.

{% picture lazy-load /assets/img/posts/20/python-built-in-functions.jpg --alt Python Built-in Functions Speed Up Python %} 

### 3. Using List Comprehension

List Comprehension is a powerful syntax in Python. It provides a new way to construct a list from an old one or in-line loop fast, in combination with given conditions. You should consider this example.

{% highlight python %}
import time


def normal_way():
    start_time = time.time()

    # main
    res = []
    for i in range(10000000):
        res.append(i * i)

    print("normal: --- %s seconds ---" % (time.time() - start_time))

    return res


def faster_way():
    start_time = time.time()

    # main
    res = [i * i for i in range(10000000)]

    print("faster: --- %s seconds ---" % (time.time() - start_time))

    return res


normal_way()
faster_way()
{% endhighlight %}

After running this script, we can see that list comprehension is 50% faster than the normal way. This image is taken when I was [Using Alacritty](https://tgbao.me/install-alacritty-terminal-emulator-ubuntu/).

{% picture lazy-load /assets/img/posts/20/code-python-faster-with-list-comprehension.png --alt Speed Up Python Programs With List Comprehension %} 

**List Comprehension** is the fastest and most direct method of accomplishing the same task. It's a lot faster than using the append approach in Python. As a result, you should always strive to use a list comprehension solution. Read more about [List Comprehension](https://docs.python.org/3/tutorial/datastructures.html#list-comprehensions)

### 4. Do not use Global Variables

Python has **global** keyword to declare global variables. But global variables take higher time during operation than a local variable. So, do not use global variables if it is not necessary to speed up program.

### 5. Concating String with Join Function

**join** function is a built-in Python function that has the same function as the **+** operator. Use this tip, you can speed up your Python programs and code faster. Below is the example and difference in both ways.

{% highlight python %}
import time


def normal_way():
    start_time = time.time()

    # main
    ret = ""
    for i in range(10000000):
        ret += str(i * i)

    print("normal: %s seconds" % (time.time() - start_time))


def faster_way():
    start_time = time.time()

    # main
    ret = "".join(str(i * i) for i in range(10000000))

    print("faster: %s seconds" % (time.time() - start_time))


normal_way()
faster_way()
{% endhighlight %}

In this example, you can reduce the execution time by 0.5 seconds.

{% picture lazy-load /assets/img/posts/20/code-python-faster-with-join-function.png --alt Speed Up Python Programs With List Comprehension %} 

When compared to simple concatenation, the [join method](https://python-reference.readthedocs.io/en/latest/docs/str/join.html) is both faster and more accurate. As a result, the method is more accurate, faster, and saves time. I hope it can help you in improving your python performance.

### 6. Using Multiple Assignments

Rather than completing a single assignment, you should complete several. Because it can help your programs execute faster. Let consider this example to know:

{% highlight python %}
# Single assignment
a = 2
b = 3
c = 4
d = 5

# Multiple assignments
a, b, c, d = 2, 3, 4, 5
{% endhighlight %}

### 7. Optimize your algorithm

The algorithm has a huge impact on the execution time of the program. It will instruct the program on how to operate. Approach an optimal algorithm, which will make your program execute faster and you will code shorter

### 8. Reducing the For Loop

Loop optimization is the process of increasing loop execution speed while lowering loop overheads. It's crucial for increasing cache performance and making the most of parallel processing capabilities. Therefore, we should use it carefully to make you program run faster.

### 9. Use Linux instead of Windows

According [Phoronix Research](https://www.phoronix.com/scan.php?page=article&item=ryzen3-windows-linux&num=8), Python 3 performance is still much faster on Linux than Windows because [Linux](https://tgbao.me/upgrade-to-ubuntu-21-10/) is more lighter then windows and it consume lesser memory of your system. So I think you should consider using Linux for big Python projects.

## Conclusion

In this guide, I introduced **Tips to Code Python Faster**. I hope it will assist you in speeding up your python programs. If you are needed, please leave a comment below.