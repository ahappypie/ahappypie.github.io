import Link from 'next/link';
import Outlink from "./components/icons/outlink";

export default async function Page() {
  return (
    <section>
      <h1 className="font-medium text-2xl mb-8 tracking-tighter">
        Brian Bagdasarian
      </h1>
      <p className="prose prose-neutral dark:prose-invert">
        {`I'm a systems designer, platform builder, and process improver. I currently
          work as Senior Data Platform Engineer at `}
        <a href="https://amberdata.io"
           className="hover:text-neutral-800 dark:hover:text-neutral-100 transition-all"
        >Amberdata</a>.
      </p>
      <div className="prose prose-neutral dark:prose-invert">
        <p>
          I've worked across many industries, including immersive entertainment,
          ad tech, private equity, retail, and consumer packaged goods.
        </p>
        <p>
          In my journey, I've led transformation and construction of large scale data systems,
          internal developer platforms, and order-of-magnitude process efficiency increases.
        </p>
        <p>
          {`You can read `}
          <Link key='/projects'
                href='/projects'
                className="hover:text-neutral-800 dark:hover:text-neutral-100 transition-all"
          >my thoughts and takeaways</Link>
          {` on some of these projects, or `}
          <Link key='/about'
                href='/about'
                className="hover:text-neutral-800 dark:hover:text-neutral-100 transition-all"
        >learn more about me</Link>.
        </p>
      </div>
      <ul className="flex flex-col md:flex-row mt-8 space-x-0 md:space-x-4 space-y-2 md:space-y-0 font-sm text-neutral-600 dark:text-neutral-300">
        <li>
          <a
            className="flex items-center hover:text-neutral-800 dark:hover:text-neutral-100 transition-all"
            rel="noopener noreferrer"
            target="_blank"
            href="https://www.linkedin.com/in/brian-bagdasarian-a8a497102"
          >
            <Outlink /> {/*TODO add brand svg?*/}
            <p className="h-7 ml-2">linkedin</p>
          </a>
        </li>
        <li>
          <a
            className="flex items-center hover:text-neutral-800 dark:hover:text-neutral-100 transition-all"
            rel="noopener noreferrer"
            target="_blank"
            href="https://github.com/ahappypie"
          >
            <Outlink />
            <p className="h-7 ml-2">github</p>
          </a>
        </li>
      </ul>
    </section>
  );
}