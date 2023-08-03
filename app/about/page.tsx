import Timeline from './timeline';
import Outlink from "../components/icons/outlink";

export default function About() {
  return (
    <section>
      <h1 className="font-medium text-2xl mb-2 tracking-tighter">
        About Me
      </h1>
      <div className="prose prose-neutral dark:prose-invert mb-8">
        <p>
          {`Currently: Lead Platform Engineer, `}
          <a href="https://cosm.com"
             className="hover:text-neutral-800 dark:hover:text-neutral-100 transition-all">
            Cosm
          </a>
        </p>
        <p>
          Academics: Gallatin School, New York University
        </p>
      </div>
      <div className="mb-2 text-lg">
        <a
          className="flex items-center text-blue-600 dark:text-gray-100"
          target="_blank"
          rel="noopener noreferrer"
          href="/files/bbagdasarian_resume.pdf"
        >
          <Outlink/> {` Grab a PDF copy of my resume`}
        </a>
      </div>
      <Timeline />
    </section>
  );
}
