import Container from "@/components/container";

import { allProjects } from 'contentlayer/generated';
import Divider from "../components/timeline/divider";

export default function Projects({
    projects
                                 }) {
    return (
        <Container>
            <div className="flex flex-col justify-center items-start max-w-2xl mx-auto mb-16">
                <h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-4 text-black dark:text-white">
                    Projects
                </h1>
                <Divider/>
                {projects.map(proj => (
                    <ProjectPost key={proj.title} {...proj} />
                ))}
            </div>
        </Container>
    )
}

export function getStaticProps() {
    const projects = allProjects
        // .map((proj) => pick(post, ['slug', 'title', 'summary', 'publishedAt']))
        .sort(
            (a, b) =>
                Number(new Date(b.publishedAt)) - Number(new Date(a.publishedAt))
        );

    return { props: { projects } };
}