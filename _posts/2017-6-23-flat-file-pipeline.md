---
layout: post
title: "The FIJI Water Flat File ETL Pipeline"
date: 2017-6-23
---
<strong><span style="color:red;">Update 13 July 2017: </span>There is a <a href="https://ideas.powerbi.com/forums/265200-power-bi-ideas/suggestions/10172688-sql-azure-connector-with-azure-ad-auth">known bug</a> with Active Directory authentication, Azure SQL Database and Power BI Desktop. This is a significant issue that has delayed the push of this project to production. Hopefully Microsoft will resolve this issue in a timely manner.</strong>
<h2 class="ui header">Background</h2>
Over the last few weeks I've been working to understand the needs of the teams my department supports here at [FIJI Water](https://fijiwater.com), and it has become relatively obvious that the lack of authoritative data is a major blocker to multiple business processes. All of our data is stored, accessed and analyzed in Excel, which has a perceived use case that many people shy away from. To rectify that, I've been shepherding the adoption of [Power BI](https://powerbi.microsoft.com), Microsoft's next generation business intelligence toolkit. It's built on a modified Analysis Services Tabular Model and TypeScript, a superset of JavaScript, so Power BI is fast and works everywhere a JavaScript engine can run \(so, everywhere\). Coupled with an Office 365 Enterprise subscription and a well maintained Active Directory, Power BI doesn't require any additional skills beyond Excel, but provides interactive visualizations and great collaboration capabilities. However, any visualization layer is only as good as the data it presents. My challenge has been to create an authoritative data source for Power BI to tap.
<h2 class="ui header">The Stack</h2>
Since the Power BI Service lives in Microsoft Azure, I've chosen Azure services to match. Of course, that doesn't mean you are locked into Azure services, but always be aware of network egress costs in a public cloud - it doesn't cost us anything to move data within an Azure region, but if we were coming from AWS or GCP, we would incur those bandwidth charges. The stack consists of the following components:
<div class="ui relaxed list">
  <div class="item">
    <div class="content">
      <a class="header" href="https://azure.microsoft.com/en-us/services/hdinsight/">Azure HDInsight</a>
      <div class="description">An Ambari Hadoop/Spark cluster running on 3 A3-size virtual machines for a total of 12 cores and 21 GB RAM.</div>
    </div>
  </div>
  <div class="item">
    <div class="content">
      <a class="header" href="https://azure.microsoft.com/en-us/services/sql-database/?v=16.50">Azure SQL Database</a>
      <div class="description">S0-level fully managed SQL Server database with 250 GB of storage.</div>
    </div>
  </div>
  <div class="item">
    <div class="content">
      <a class="header" href="https://azure.microsoft.com/en-us/services/storage/">Azure Storage</a>
      <div class="description">Separate storage accounts for staging/persistence and cold storage.</div>
    </div>
  </div>
</div>
<h2 class="ui header">Architecture
  <div class="sub header"><a href="/images/projects/etl/HDInsight Cluster.svg">Click here</a> for the diagram</div>
</h2>
Files are uploaded to a storage bucket using the excellent [Azure Storage Explorer](https://azure.microsoft.com/en-us/features/storage-explorer/). Since we're at a low volume, and we only receive data once a week from our vendors, the different ETL pipelines are written as [Zeppelin](https://zeppelin.apache.org) notebooks, which can be run once the files are in place. A huge benefit of the public cloud is the ability to spin resources up and down - if we only use the HDInsight cluster for a few minutes to push new files into SQL Database, that's all we pay for. The best way to manage that is by backing HDFS with a storage bucket - Azure Storage here, but S3 and Google Cloud Storage work the same way with their respective Hadoop offerings. This allows us to spin up a cluster right where we left off, as well as stage raw data files for direct access by Spark. Then, I just set the scheduled refresh in Power BI Service, and everyone gets the new data without lifting a finger.
<h2 class="ui header">Conclusion</h2>
One of the major initiatives at FIJI Water has been to reduce repetitive tasks and find more time for every team. This architecture is a perfect example of that initiative. Our team spends the majority of its time supporting ad hoc requests for data from various other groups within the company. Now, because of Power BI, not only do we have a single source of truth, but it's accessible to every employee - from the executives to the field representatives. Questions that used to take two or three days to return can now be answered anywhere, at any time. It's a huge win, but the general-purpose nature of the architecture leaves the door open to many more use cases - some which I hope to explore in the coming months.
