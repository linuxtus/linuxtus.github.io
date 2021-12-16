---
layout: post
thumbnail-img: "/assets/img/posts/23/highlight-syntax-code-snippets-jekyll-site.png"
image: "/assets/img/posts/23/highlight-syntax-code-snippets-jekyll-site.png"
title: How to Highlight Syntax Code Snippets in Jekyll site
description: Following this guide, you can know how to make your code snippets more beautiful, reader-friendly, ... by using Syntax Highlight in Jekyll.
lang: en
category: web
tags: Jekyll
---

[Jekyll](https://jekyllrb.com/) is a website generator that creates static pages. There are many benefits to using Jekyll compared to a dynamic website, such as: speed, easy to build, no coding, ... Besides that, it has powerful support for syntax highlight so that code snippets highlighted are more reader-friendly. Following this guide, you can **Highlight code in Jekyll site**

<div id="toc-post"></div>

## Highlight code in Jekyll

There are two ways to do it. Each of them will have different cons and pros so that you should consider both and choose which way you think is easy for you to highlight Jekyll.

{% picture lazy-load /assets/img/posts/23/highlight-syntax-code-snippets-jekyll-site.png --alt Highlight Syntax Code Snippets in Jekyll site %} 

### 1. Using Rouge to highlight Jekyll

[Rouge](https://github.com/rouge-ruby/rouge) is a pure Ruby syntax highlighter. It can help Jekyll highlight more than 200 programming languages. Convert them to HTML tags and embed them into your static websites. As a result, Rouge is Jekyll's default syntax highlighter.

#### Installing Rouge syntax highlighter

In some cases, Rouge is not installed by default. You can install this Jekyll syntax highlighter by running this command in your [terminal](https://tgbao.me/install-alacritty-terminal-emulator-ubuntu/).

{% highlight bash %}
gem install kramdown rouge
{% endhighlight %}

After this installation, you need to add or modify your `_config.yml` file.

{% highlight yml %}
markdown: kramdown
highlighter: rouge

kramdown:
  input: GFM
{% endhighlight %}

#### Using Rouge to highlight Jekyll

Now, you can enable syntax highlighting for your code snippets by warping your ones in `{% raw %}{% highlight language %}{% endraw %}` and `{% raw %}{% endhighlight %}{% endraw %}` tags. Don't forget to replace `language` with your code's language. You can find it at [Rouge supported languages](https://github.com/rouge-ruby/rouge/wiki/List-of-supported-languages-and-lexers).

{% highlight plaintext %}
{% raw %}
{% highlight cpp %}
int add(int a, int b) {
  return a + b;
}

int main() {
  cout << add(5, 10);
}
{% endhighlight %}
{% endraw %}
{% endhighlight %}

{% highlight cpp %}
int add(int a, int b) {
  return a + b;
}

int main() {
  cout << add(5, 10);
}
{% endhighlight %}

You can also use `linenos` next to `language`, so that your Jekyll's code snippets will show line numbers when Rouge process it.

### 2. Using GitHub fenced code blocks 

On [GitHub](https://github.com/), you can highlight syntax by using triple backticks <code>{% raw %}```language{% endraw %}</code> before and <code>{% raw %}```{% endraw %}</code> after the code snippets block to create fenced code blocks. Similarly, we can use the following syntax to highlight code on the Jekyll site:

{% highlight text %}
{% raw %}
```python
def add(a, b):
  return a + b

def main():
  print(add(5, 10))
```
{% endraw %}
{% endhighlight %}

{% highlight python %}
def add(a, b):
  return a + b

def main():
  print(add(5, 10))
{% endhighlight %}

In the above example, I used [Python](https://tgbao.me/install-python-ubuntu/), but you can replace it with the `language` you want highlight, you can find it in the list that I mentioned in method 1.

## Conclusion

On this post, I introduced ways to **Highlight Syntax in Jekyll**, I hope you can know how to use them to make your Jekyll code snippets more beautiful, reader-friendly. Please let me know if you have any questions. Hope to see you on next posts.