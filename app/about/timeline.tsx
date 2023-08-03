import Divider from './components/timeline/divider';
import Year from './components/timeline/year';
import Step from './components/timeline/step';

export default function Timeline() {
  return (
    <div>
      <Divider />
      <Year>Right Now</Year>
      <ul>
        <Step title="The Next Frontier">
          Designing complex systems for the next-generation immersive
          entertainment platform, including proving immutable infrastructure concepts
          for management & control of legacy on-premise systems.
        </Step>
      </ul>
      <Divider />
      <Year>2022</Year>
      <ul>
        <Step title="A Platform for All">
          Scaled and supported a fully-remote development platform for
          a multi-language monorepo with dozens of developers.
        </Step>
        <Step title="Managable Infrastructure Abstractions">
          Designed an infrastructure-as-code framework for granular control of cloud resources.
        </Step>
      </ul>
      <Divider />
      <Year>2021</Year>
      <ul>
        <Step title="Joined Cosm">
          I joined Cosm to build complex systems that power the future of immersive
          entertainment.
        </Step>
        <Step title="Architecting the Future">
          Deployed Nativo's next generation data architecture, based on Kafka
          and Delta Lake.
        </Step>
        <Step title="Building Together">
          Lead Nativo's technical integration with Databricks, ensuring our data
          engineering and data science teams had effective infrastructure and a
          single source of truth.
        </Step>
      </ul>
      <Divider />
      <Year>2020</Year>
      <ul>
        <Step title="Joined Nativo">
          I joined Nativo to architect a next generation data platform for
          arbitrary scale and massive efficiency.
        </Step>
      </ul>
      <Divider />
      <Year>2018</Year>
      <ul>
        <Step title="Joined Regent">
          Joining Regent, a private equity company, provided an opportunity to
          work on problems across all kinds of different business - and try to
          hone in on the fundamental problems that all of them dealt with.
        </Step>
      </ul>
      <Divider />
      <Year>2017</Year>
      <ul>
        <Step title="Joined FIJI Water">
          Based on my previous experience as an intern FIJI's parent company,
          The Wonderful Company, I was brought on to develop FIJI's first data
          systems. I knew I would be challenged to bring value to a highly
          successful business.
        </Step>
      </ul>
      <Divider />
      <Year>2016</Year>
      <ul>
        <Step title="Graduated College">
          I wanted to get a jumpstart on my full time career, and finished
          college a semester early.
        </Step>
      </ul>
      <Divider />
      <Year>2014</Year>
      <ul>
        <Step title="Joined BlueLine Grid">
          My first step in the world of software engineering. I supported
          infrastructure and backend development. I configured Jenkins and
          TestFlight for our iOS app, and was given the fateful job of
          evaluating Scala and Akka for backend services - and haven't written a
          line of Java since.
        </Step>
      </ul>
      <Divider />
      <Year>2013</Year>
      <ul>
        <Step title="Started College">
          I chose the Gallatin School at NYU because I wanted to blend my
          interest in politics with the practical engineering skills I had
          started developing in high school.
        </Step>
      </ul>
      <Divider />
      <Year>2011</Year>
      <ul>
        <Step title="First official computer science course">
          I had always been interested (especially about hardware), but high
          school was my first opportunity to take proper computer science. My
          first language was Java (6).
        </Step>
      </ul>
      <Divider />
      <Year>2010</Year>
      <ul>
        <Step title="Introduction to engineering">
          I started working in my high school theater, and was asked to take
          responsibility for a brand new performing space. I ended up learning
          all about the day to day process of being an engineer and I still
          trace a lot of my working habits to early on the job experience.
        </Step>
      </ul>
    </div>
  );
}
