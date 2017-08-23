---
layout: post
title: "My Core Environment"
date: 2017-4-10
---
<link rel="stylesheet"
      href="//cdnjs.cloudflare.com/ajax/libs/highlight.js/9.12.0/styles/default.min.css">
<script src="//cdnjs.cloudflare.com/ajax/libs/highlight.js/9.12.0/highlight.min.js"></script>
<script>hljs.initHighlightingOnLoad();</script>
<div>
  <img class="ui avatar image" src="/images/avatars/mac.png">
  <img class="ui avatar image" src="/images/avatars/jetbrains.png">
  <img class="ui avatar image" src="/images/avatars/docker.png">
  <img class="ui avatar image" src="/images/avatars/atomio.png">
  <img class="ui avatar image" src="/images/avatars/googlecloud.png">
</div>
<h2 class="ui header">Background</h2>
As I look forward to starting my hybrid role at [FIJI Water](https://fijiwater.com) as a data engineer and sales analyst, I've found myself chasing down all the tools I use on a regular basis in my development environment. So, instead of chase them down again every time I need to spin up a new environment, I'm going to make a list.

<h2 class="ui header">The List</h2>
<div class="ui relaxed list">
  <div class="item">
    <div class="content">
      <div class="header">MacBook Pro (Retina, 13-inch, Early 2015)</div>
      <div class="description">
        <div class="ui bulleted list">
          <div class="item">OS X 10.10.5 (Yosemite) - still the champ.</div>
          <div class="item">Terminal.app - dead simple.</div>
          <div class="item"><a href="https://brew.sh/">Homebrew</a> - saves headaches, like when you have 3 different Python installations.</div>
          <div class="item"><a href="https://www.docker.com/community-edition">Docker</a> - saves lives, like when you have 3 different databases running.</div>
          <div class="item"><a href="https://atom.io/">Atom</a> - for text.</div>
          <div class="item"><a href="https://www.jetbrains.com/toolbox/">WebStorm</a> - for JS.</div>
          <div class="item"><a href="https://www.jetbrains.com/toolbox/">IntelliJ</a> - for Scala.</div>
        </div>
      </div>
    </div>
  </div>
  <div class="item">
    <div class="content">
      <div class="header">Core Homebrew Packages</div>
      <div class="description">
        <div class="ui list">
          <div class="item">
            <pre><code class="bash">#Scan the network
brew install nmap</code></pre>
          </div>
          <div class="item">
            <pre><code class="bash">#Manage Node.js versions and packages
brew install nvm node yarn</code></pre>
          </div>
          <div class="item">
            <pre><code class="bash">#Full Scala package and the Scala Build Tool
brew install scala --with-docs --with-src && brew install sbt</code></pre>
          </div>
          <div class="item">
            <pre><code class="bash">#Google Cloud SDK
brew cask install google-cloud-sdk</code></pre>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="item">
    <div class="content">
      <div class="header">Core Docker Images</div>
      <div class="description">
        <div class="ui list">
          <div class="item">
            <pre><code class="bash">#NoSQL database
docker pull mongo:latest</code></pre>
          </div>
          <div class="item">
            <pre><code class="bash">#Relational database
docker pull postgres:latest</code></pre>
          </div>
          <div class="item">
            <pre><code class="bash">#Key-Value store
docker pull redis:latest</code></pre>
          </div>
          <div class="item">
            <pre><code class="bash">#S3-alike object store
docker pull minio/minio</code></pre>
          </div>
          <div class="item">
            <pre><code class="bash">#Docker management GUI for performance metrics
docker pull portainer/portainer</code></pre>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
<h2 class="ui header">Why Google Cloud?</h2>
I tend to use Google Cloud Platform when spinning up personal projects because of the awesome always free offerings \(though I did recently use AWS in a [demo](/blog/2017/03/14/twitter-sentiment-demo) because I was out of free compute at the time\) and \(mostly\) because of the amazing `gcloud` command line tool. Sure, all the public clouds have CLIs, but I have yet to find something as simple and intuitive as `gcloud compute ssh`, a major bonus for small projects. And, if you want to spin up a machine and run some commands on the go \(or at the beach...\), the Google Cloud Shell can't be beat.
<h2 class="ui header">Custom Terminal.app</h2>
Stock Terminal.app is, well, boring. Stock Homebrew theme is, well, stock. My custom theme.
<div class="ui relaxed list">
  <div class="item">Font: <a href="https://be5invis.github.io/Iosevka/">Iosevka</a> Term Slab Light, 11 pt.</div>
  <div class="item" style="color:#2E2E2E">Background: #2E2E2E, Opacity: 25% (inactive: 50%), Blur: 100%</div>
  <div class="item" style="color:#000000;">Black: #000000</div>
  <div style="background-color:rgba(46, 46, 46, .25)">
    <div class="item" style="color:#FF2730;">Red: #FF2730</div>
    <div class="item" style="color:#12BA8E;">Green: #12BA8E</div>
    <div class="item" style="color:#F8D61E;">Yellow: #F8D61E</div>
    <div class="item" style="color:#34A6F8;">Blue: #34A6F8</div>
    <div class="item" style="color:#7E6BF7;">Magenta: #7E6BF7</div>
    <div class="item" style="color:#5FCBFD;">Cyan: #5FCBFD</div>
    <div class="item" style="color:#BFBFBF;">White: #BFBFBF</div>
    <div class="item" style="color:#F8D61E;">Cursor: @Yellow</div>
    <div class="item" style="color:#F5F5EF;">Text/Bold Text: #F5F5EF</div>
    <div class="item"><mark style="color:#F5F5EF;background-color:#5FCBFD;">Selection: #5FCBFD</mark></div>
  </div>
</div>
I use a primarily dark background so the lighter colors contrast.

That's it \(for now\)! There are lots of other things that get used on a project-by-project basis, but these are the core components of my development environment.
