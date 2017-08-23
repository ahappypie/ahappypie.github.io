---
layout: post
title: "Introducing ldr.js"
date: 2017-1-23
---
<div>
  <img class="ui avatar image" src="/images/avatars/node.jpg">
  <img class="ui avatar image" src="/images/avatars/mongodb.png">
  <img class="ui avatar image" src="/images/avatars/twitter.png">
</div>
<h2 class="ui header">Background
  <div class="sub header"></div>
</h2>
For the better part of the last year, I've pushed around the idea of my own system to track and record data from public officials. Originally, I toyed with sentiment analysis of the Presidential Primary debates, but the sentiment became relatively obvious and the full buildout of an analysis pipeline fell behind other work in my queue. However, when researching my senior thesis, I spent a good deal of time looking at the history of Twitter, and I came up with the idea to create a simple service to tap into its [Streaming API](https://dev.twitter.com/streaming/public).

<h2 class="ui header">Rationale
  <div class="sub header"></div>
</h2>
A quick poke around the documentation opened up a world of possibilities. Twitter streams allow for tracking of keywords, as well as individual users \(and geo boxes!\). Many examples have been made with [Apache Spark](http://spark.apache.org/), which would normally be my first stop for big data projects. However, setting up Spark and HDFS locally is a pain, and hosting long-running services gets very expensive. So, while Spark provides lots of built-in extensibility, I went with something far more lightweight: [Node.js](https://nodejs.org/).

<h2 class="ui header">Architecture
  <div class="sub header"></div>
</h2>
[ldr.js](https://github.com/ahappypie/ldr) is meant to be simple - meaning it needs to be easy to deploy and accessible to non-specialists. JavaScript certainly helps with both of those, and [Twitter's Node.js Library](https://www.npmjs.com/package/twitter) has great support for the entire API with asynchronous callbacks \(more on that below\). As of right now \(v0.2.1\), I've chosen [MongoDB](https://www.mongodb.com/) and [mongoose](http://mongoosejs.com/) for the storage layer, which has held up so far in limited testing, but also allows ldr to take advantage of Mongo's native scaling abilities in the long term.

<h2 class="ui header">Development
  <div class="sub header"></div>
</h2>
So far development has been relatively smooth. As part of my mandate to be simple, I've had to work around some ES6 features that Node doesn't like quite yet \(avoiding [Babel](https://babeljs.io/)\), though classes and arrow functions have both been invaluable in managing callback hell. By far the biggest blocker has been the Streaming API's [backoff](https://dev.twitter.com/streaming/overview/connecting) requirements, since each time a user modifies their tracking list, the stream must be destroyed and recreated with the new tracking parameters. [My solution](https://github.com/ahappypie/ldr/blob/master/ldr.js#L99) was inspired by [this](https://github.com/desmondmorris/node-twitter/issues/159) thread, and has held up well so far, though I expect it will need some tweaking in the future.

<h2 class="ui header">Going Forward
  <div class="sub header"></div>
</h2>
Speaking of the future, I've got many ideas for new features, including the creation of a command-line interface for the first stable release. Once I'm satisfied with the stability of ldr, I also plan on building a second project - frnt-ldr - with a [React](https://facebook.github.io/react/) based frontend. I'm also planning up setting up a continuous integration platform to speed up testing and explore orchestrating ldr with containers. If you'd like to contribute, or just have a question, send me a message!
