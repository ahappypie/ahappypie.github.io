import Container from 'components/container';
import Timeline from 'components/timeline';

export default function About() {
  return (
    <Container title="About - Brian Bagdasarian">
      <div className="flex flex-col justify-center items-start max-w-2xl mx-auto mb-16">
        <h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-4 text-black dark:text-white">
          About Me
        </h1>
        <div className="mb-8 prose leading-6 text-gray-600 dark:text-gray-400">
          <p>
            Hi, I’m Brian. I solve fundamental problems. I work at Cosm as a
            Lead Platform Engineer responsible for platform and data infrastructure.
          </p>
          <p>
            I’ve worked across many industries including immersive entertainment,
            ad tech, private equity, retail and consumer packaged goods.
          </p>
          <p>
            I studied the interplay between data and decision making, with a
            special focus on how emerging data technologies affect political
            decisions.
          </p>
        </div>
        <h3 className="font-medium mb-2 text-lg">
          <a
            className="flex items-center text-blue-600 dark:text-gray-100"
            target="_blank"
            rel="noopener noreferrer"
            href="/files/bbagdasarian_resume.pdf"
          >
            Grab a portable copy of my resume
            <div>
              <svg
                className="h-4 w-4 ml-1"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                />
              </svg>
            </div>
          </a>
        </h3>
        <Timeline />
      </div>
    </Container>
  );
}
