import Link from 'next/link';
import Container from 'components/container';

export default function Home() {
  return (
    <Container>
      <div className="flex flex-col justify-center items-start max-w-2xl mx-auto mb-16">
        <h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-4 text-black dark:text-white">
          Brian Bagdasarian
        </h1>
        <h2 className="text-gray-700 dark:text-gray-200 mb-4">
          Senior Data Engineer at <span className="font-bold">Cosm</span>
        </h2>
        <p className="prose text-gray-600 dark:text-gray-400">
          I design fundamental systems. Right now, I mostly work on stateful
          systems.
        </p>
        <p className="prose text-gray-600 dark:text-gray-400">
          <Link href="/projects">
            <a>Take a look at some of my projects</a>
          </Link>
          {' or '}
          <Link href="/about">
            <a>or learn more about me.</a>
          </Link>
        </p>
      </div>
    </Container>
  );
}
