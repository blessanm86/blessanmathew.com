---
title: "Rolled Out My Blog"
date: "2013-07-27"
tags: ["general"]
excerpt: "I've been contemplating for some time about starting a blog. There are a gazillion developer blogs out there, so why should I start one..."
description: "This articles talks about the tech considerations for rolling out blessanmathew.com."
---

## Rolled Out My Blog

### Why another blog?

I've been contemplating for some time about starting a blog. There are a gazillion developer blogs out there, so why should I start one? There are numerous occasions where I've been saved by some random developers blog post and from my experience, you do more research when you need to write about something. Those are good enough reasons for me.

### What to use?

The next step was to select a blogging platform. I considered going for [Wordpress](http://wordpress.org/) or [Blogger](http://blogger.com/) but I just wanted something very simple. I also wanted it to be hosted on [Github Pages](http://pages.github.com/). So I decided to go for a static site generator. Github pages introduced me to the concept of static site generators. When I googled around I found many players out there in which the prominent one seems to be [Jekyll](http://jekyllrb.com/) which Github Pages uses internally.

So, now I needed to decide what generator I was going to use. [Jekyll](http://jekyllrb.com/) was my first option but I kinda skipped over it cause I found [Punch](http://laktek.github.io/punch/) and [Phrozn](http://www.phrozn.info/en/) which are written in Javascript and PHP respectively. Those are languages that I know. So I started off with [Punch](http://laktek.github.io/punch/). Its really powerful and every part of it can be tweaked by modifying its configuration values. For some reason, it just didn't work out as I hoped it would. It just refused to accept my markdown files for processing. I gave it one whole day and then just gave up.

[Phrozn](http://www.phrozn.info/en/) looked promising but its installation uses [Composer](http://getcomposer.org/). That's all new to me. The last time I wrote any serious php was like 1.5 years back. So I finally decided to try out Jekyll before trying out any other alternative. I work on a windows machine, so getting it installed and ready took some additional steps. But the good thing is, since its used so widely there's always some answer out there when you search the web.

I kind of read through their whole [documentation](http://jekyllrb.com/docs/home/) and then started a new project. Surprisingly everything just worked. I was mostly worried that I would have to debug Ruby errors and I have no experience with Ruby. But no errors that I couldn't handle came up. Most of the things I needed were built in and for other stuffs like RSS and comments there were blog posts. My experience with Jekyll has been great so far and I recommend it.

### What did I learn?

I did learn some new stuffs like how to use [Markdown](http://daringfireball.net/projects/markdown/) in a project. I became aware of markdown when I started to write README files for my github repos. I always throught these markdown converters just spit out html that will have all the required styles. I kept asking my self, why arn't my files looking like Github README files on the browser. I felt stupid after realizing that I just needed to include a stylesheet. Well thats how you figure things out.

This blog also gave me a reason to learn how to implement RSS feeds and a commenting system.

### What's next?

I'll be blogging about the new stuffs I learn and and my opinions. Well thats it for now.