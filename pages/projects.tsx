import Container from 'components/container';
import Divider from 'components/timeline/divider';
import { allProjects, Project } from '.contentlayer/generated';
import ProjectPost from 'components/projectpost';

export default function Projects({ projects }: { projects: Project[] }) {
  return (
    <Container>
      <div className="flex flex-col justify-center items-start max-w-2xl mx-auto mb-16">
        <h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-4 text-black dark:text-white">
          Projects
        </h1>
        <p className="tracking-tight text-gray-600 dark:text-gray-400">
          Check back for thoughts and retrospectives on projects I've
          contributed to.
        </p>
        <Divider />
        {projects.map((proj) => (
          <ProjectPost key={proj.title} {...proj} />
        ))}
      </div>
    </Container>
  );
}

export function getStaticProps() {
  const projects = allProjects.sort(
    (a, b) => Number(new Date(b.publishedAt)) - Number(new Date(a.publishedAt))
  );

  return { props: { projects } };
}
