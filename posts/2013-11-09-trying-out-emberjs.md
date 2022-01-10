---
title: "Trying Out EmberJS"
date: "2013-11-09"
tags: ["ember", "javascript"]
excerpt: "EmberJS is picking up these days with the release of version 1.0 and it's Ember Data persistance library. In my current company, most of us work with BackboneJS or AngularJS. I saw a presentation..."
---

### Trying Out EmberJS

[EmberJS](http://emberjs.com/) is picking up these days with the release of version 1.0 and it's [Ember.Data](https://github.com/emberjs/data) persistance library. In my current company, most of us work with [BackboneJS](http://backbonejs.org/) or [AngularJS](http://angularjs.org/).

I saw a presentation video from Tom Dale titled '[Stop Breaking The Web](http://www.youtube.com/watch?v=OSEXpsVcTxI)'. The main message was that the URL is the univeral UI for the web and one of its greatest strength's over native applications. For the past year I've been developing single page web applications (SPA) that ignore the URL. I kept ignoring it because it just didn't seem easy to maintain the view state and the projects I worked on weren't strict about it.

EmberJS gives a lot of emphasis on URL's with it's Ember.Router. The routing system and knowing that EmberJS and [Handlebars](http://handlebarsjs.com/) are from the same team has made me interested (We use Handlebars a lot with Backbone). So I've decided to learn and try it out in my spare time. I'm thinking of trying to rewrite my [backbone responsive example](https://github.com/blessenm/backbone-responsive-example) with EmberJS. This sample doesn't contain any CRUD. It just fetches some data from an API and displays it. Well lets start with that and see how it goes.

As I proceed, I'll try to write a multi-part tutorial on how I got the sample running.