---
layout: post
title: "Building a Test Server"
date: 2016-12-31
---
<h2 class="ui header">The Rationale
  <div class="sub header">Why waste the time and money on your own server?</div>
</h2>

It is easier than ever to host just about anything, anywhere, and at any time. If you work with any amount of data \(like me\), you know it's not quite that simple -- hosting even a basic service over a long period can get expensive, and the time spent developing scripts for spinning up test machines is, in my opinion, better spent somewhere else. Like right here, for instance. Building a test server allows you to spin up anything, *right here*, *right now*.

<h2 class="ui header">Tools & Resources
  <div class="sub header">What I'm using</div>
</h2>

<div class="ui relaxed list">
  <div class="item">
    <div class="content">
      <a class="header" href="http://www.intel.com/content/www/us/en/nuc/nuc-kit-nuc6i7kyk-features-configurations.html">Intel "Devil's Canyon" NUC</a>
      <div class="description">I've chosen this particular machine because, well, it's fast (really, really fast). Intel also thinks it looks fast, but there's an extra faceplate with no markings to blend in.</div>
    </div>
  </div>
  <div class="item">
    <div class="content">
      <a class="header" href="https://www.amazon.com/gp/product/B015YPB8ME/ref=oh_aui_detailpage_o01_s00?ie=UTF8&psc=1">Crucial 32GB 16x2 DDR4 RAM Kit</a>
      <div class="description">This is the maximum amount of (and the fastest) RAM the machine will support. Again, fast, but also helpful for a test server because you can run all kinds of processes without having to manage them too closely.</div>
    </div>
  </div>
  <div class="item">
    <div class="content">
      <a class="header" href="https://www.amazon.com/gp/product/B00TGIVZTW/ref=oh_aui_detailpage_o00_s00?ie=UTF8&psc=1">Samsung 850 EVO M.2 250GB SSD</a>
      <div class="description">M.2 drives may be more expensive (right now), but they're also faster (bet you didn't see that coming!). 250GB doesn't sound like a whole lot, but it'll go farther than you think for a test machine. Also, the NUC kit has a second M.2 slot for easy expansion.</div>
    </div>
  </div>
  <div class="item">
    <div class="content">
      <div class="header">MacBook Pro with OS X 10.10.5</div>
      <div class="description">My development machine. I haven't updated OS X because everything works and updates inevitably break something. <a href="http://brew.sh">Homebrew</a> always helps.</div>
    </div>
  </div>
  <div class="item">
    <div class="content">
      <div class="header">A Flash Drive</div>
      <div class="description">For the Linux install disk. Anything of reasonable size works here.</div>
    </div>
  </div>
</div>

<h2 class="ui header">Setup
  <div class="sub header">Where it all goes wrong</div>
</h2>

<div class="ui ordered list">
  <div class="item">
    <div class="content">
      <div class="header">Download your Distro</div>
      <div class="description">No one ever knows how long a download will take, especially since every distribution has a different delivery method. The secret? Skip to step 2.</div>
    </div>
  </div>
  <div class="item">
    <div class="content">
      <a class="header" href="https://unetbootin.github.io/">Use UNetbootin</a>
      <div class="description">I'd like to say this could all be done quite easily with curl and dd, but that's not really the case. It's easy to make fun of GUI tools until it only takes a couple clicks to create an install disk. Using UNetbootin is pretty self explanatory: pick your distribution, install type, and drive location. I've gone with the stable 64 bit network install version of Debian. This will require an ethernet connection to the new machine during install, so if that's going to be a problem, go with the full image options.</div>
    </div>
  </div>
  <div class="item">
    <div class="content">
      <div class="header">Building the Server</div>
      <div class="description">I can't say anything here that hasn't been said a million times: clean your workspace, have air duster nearby, wash your hands (and dry them), ground yourself or use anti-static gloves. While your image is prepared, build away. I didn't have any problems during the build, just remember to take out the M.2 screw before slotting in the drive.</div>
    </div>
  </div>
</div>
