import Link from 'next/link';

const ExternalLink = ({ href, children }) => (
  <a
    className="text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200 transition"
    target="_blank"
    rel="noopener noreferrer"
    href={href}
  >
    {children}
  </a>
);

export default function Footer() {
  return (
    <footer className="flex flex-col justify-center items-start max-w-2xl mx-auto w-full mb-8">
      <hr className="w-full border-1 border-gray-200 dark:border-gray-800 mb-8" />
      <div className="w-full max-w-2xl grid grid-cols-1 gap-4 pb-16 sm:grid-cols-3">
        <div className="flex flex-col space-y-4">
          <Link href="/">
            <a className="text-gray-600 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-200 transition">
              Home
            </a>
          </Link>
          <Link href="/projects">
            <a className="text-gray-600 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-200 transition">
              Projects
            </a>
          </Link>
          <Link href="/about">
            <a className="text-gray-600 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-200 transition">
              About
            </a>
          </Link>
          <Link href="/files/bbagdasarian_resume.pdf">
            <a className="text-gray-600 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-200 transition">
              Resume
            </a>
          </Link>
        </div>
        <div className="flex flex-col space-y-4">
          <ExternalLink href="https://github.com/ahappypie">
            GitHub
          </ExternalLink>
          <ExternalLink href="https://www.linkedin.com/in/brian-bagdasarian-a8a497102">
            LinkedIn
          </ExternalLink>
        </div>
      </div>
    </footer>
  );
}
