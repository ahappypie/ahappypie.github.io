---
layout: post
title: "Twitter Sentiment Demo"
date: 2017-3-14
---
<div>
  <img class="ui avatar image" src="/images/avatars/scala.png" title="Scala">
  <img class="ui avatar image" src="/images/avatars/akka.png" title="Akka">
  <img class="ui avatar image" src="/images/avatars/mysql.png" title="MySQL">
  <img class="ui avatar image" src="/images/avatars/aws.jpg" title="Amazon Web Services">
  <img class="ui avatar image" src="/images/avatars/twitter.png" title="Twitter">
</div>
<h2 class="ui header">Background</h2>
During some conversations surrounding potential data-gathering expansions for [FIJI Water](https://www.fijiwater.com/), I mentioned that it would be possible to join social media data to other on-premise information \(like sales data\), to get a more comprehensive view of the business. I put together a small demonstration of a sentiment analysis pipeline using Twitter's [Streaming API](https://dev.twitter.com/streaming/public) and Stanford's [CoreNLP](http://stanfordnlp.github.io/CoreNLP/) natural language processing library. The source code is available at [GitHub](https://github.com/ahappypie/twitter-stream-demo).

<h2 class="ui header">Insights</h2>
Including the AWS [outage](https://aws.amazon.com/message/41926/) on February 28th, the insights from the pipeline total 14 days worth of tweets mentioning the following keywords: *fijiwater*, *fiji water*, *FIJIWater*, *FijiWater*, *FIJI Water*, *Fiji Water*. Twitter provides a good explanation of how to use the tracking system [here](https://dev.twitter.com/streaming/overview/request-parameters#track).

Activity for the period totaled **1318** original messages, or about **94 messages/day**. Retweets were ignored for clarity.

Individual message sentiment breaks down as follows:
<img class="ui image" src="/images/projects/sentimentdemo/sentiment-bar.png">
While this may initially seem alarming, drilling into the text of each messages shows that the algorithm used to score each message has some consistent limitations. Notably, nearly 5% of negatively classified messages were people inquiring about sponsorships, which is more likely a sign of positive engagement than negative engagement. There are several more examples of misclassification among both negatively and neutrally classified messages simply because of the limitations of the model, which I will discuss in a moment.

First, however, I would like to highlight instances where the model did classify messages properly.

Here is a negative example that extra engagement may help rectify:
<blockquote class="twitter-tweet" data-lang="en"><p lang="en" dir="ltr">Fiji Water.  Yes, it really is bottled at and shipped from Fiji.  I can&#39;t imagine buying this stuff.</p>&mdash; Bonaire (@BonaireVolt) <a href="https://twitter.com/BonaireVolt/status/840712919725797377">March 11, 2017</a></blockquote>
Here is a positive example that could be liked or retweeted by the FIJI Water account:
<blockquote class="twitter-tweet" data-lang="en"><p lang="en" dir="ltr">Fiji water is really something special I must say</p>&mdash; michael beecher (@hunnydutch) <a href="https://twitter.com/hunnydutch/status/836434386899906562">February 28, 2017</a></blockquote>
<script async src="//platform.twitter.com/widgets.js" charset="utf-8"></script>
In a more robust environment, messages could be automatically pushed to a dashboard for approval, then joined with other information to discover the impact of marketing actions, influencers, and other press on the company.
<h2 class="ui header">Limitations</h2>
Through multiple experiences with Stanford CoreNLP I have discovered that while it is incredibly easy to use from an engineering standpoint, the provided sentiment pipeline is not precise with limited amounts of text. Considering Twitter limits users to only 140 characters, this is certainly one of the major reasons for misclassifications. Furthermore, sentiment models struggle determining context and tone, especially in short messages. A more generic model trained from a dataset like [Sentiment140](http://help.sentiment140.com/) might help solve some of these issues.

Another helpful insight that can easily be extracted from this type of data is brand comparison across competitors. This is as simple as adding additional keywords to the tracking list. Using Twitter's [sample](https://dev.twitter.com/streaming/reference/get/statuses/sample) stream, any brand sentiment could also be distinguished from overall community sentiment.
<h2 class="ui header">Architecture
  <div class="sub header"><a href="https://github.com/ahappypie/twitter-stream-demo">GitHub repo</a></div>
</h2>
The entire demo is hosted on [Amazon Web Services](https://aws.amazon.com/), using free tier offerings of [Elastic Cloud Compute](https://aws.amazon.com/ec2/?nc2=h_m1) \(EC2\) and the [Relational Database Service](https://aws.amazon.com/rds/?nc2=h_m1) \(RDS\). The reference architecture is as follows:
<img class="ui image" src="/images/projects/sentimentdemo/architecture.png">
A single EC2 instance establishes a connection to the streaming endpoint using [Twitter4j](http://twitter4j.org/en/). Messages are sent via the [Akka](http://akka.io) actor system to the singleton *Dispatcher*, which routes unprocessed messages to a *SentimentActor* for analysis, and to a *SQLActor* once the pipeline has completed. *SQLActor* connects to the [MySQL](https://www.mysql.com/) RDS instance and inserts the processed message in the database. Akka actors provide asynchronous execution and failure resiliency. Data can be queried via a MySQL-compatible driver \([PowerBI](https://powerbi.microsoft.com), in this instance\).

This architecture is ***not scalable*** due to the lack of connection pooling in the database connection method. A scalable architecture could take advantage of [Apache Spark](https://spark.apache.org), specifically the [Streaming](https://spark.apache.org/streaming/) and [MLib](https://spark.apache.org/mllib/) \(machine learning\) libraries. There are numerous production examples of Twitter sentiment analysis pipelines using Spark. Spark is available as a fully-managed service on AWS [Elastic Map Reduce](https://aws.amazon.com/emr/) \(EMR\), Microsoft Azure [HDInsight](https://azure.microsoft.com/en-us/services/hdinsight/) and Google [Cloud Dataproc](https://cloud.google.com/dataproc/), as well as on-premise machines running under the Hadoop Distributed File System.
