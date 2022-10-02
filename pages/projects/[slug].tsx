// @ts-ignore import path
import { allProjects, Project } from 'contentlayer/generated';
import Container from '../../components/container';
import Image from 'next/image';
import { useMDXComponent } from 'next-contentlayer/hooks';

export async function getStaticPaths() {
  const paths: string[] = allProjects.map((post) => `/projects/${post.slug}`);
  return {
    paths,
    fallback: false
  };
}

export async function getStaticProps({ params }) {
  const post: Project = allProjects.find((post) => post.slug === params.slug);
  return {
    props: {
      post
    }
  };
}

export default function ProjectLayout({ post }: { post: Project }) {
  const MDXContent = useMDXComponent(post.body.code);

  return (
    <Container
      title={`${post.title} – Brian Bagdasarian`}
      description={post.summary}
      image={`https://ahappypie.github.io${post.image}`}
      date={new Date(post.publishedAt).toISOString()}
      type="article"
    >
      <article className="flex flex-col items-start justify-center w-full max-w-2xl mx-auto mb-16">
        <h1 className="mb-4 text-3xl font-bold tracking-tight text-black md:text-5xl dark:text-white">
          {post.title}
        </h1>
        <div className="flex flex-col items-start justify-between w-full mt-2 md:flex-row md:items-center">
          <div className="flex items-center">
            <Image
              alt="Brian Bagdasarian"
              height={24}
              width={24}
              src="/images/thumbnail.jpg"
              className="rounded-full"
            />
            <p className="ml-2 text-sm text-gray-700 dark:text-gray-300">
              {'Brian Bagdasarian | '}
              {new Date(post.publishedAt).toLocaleDateString('en-us', {
                year: 'numeric',
                month: 'numeric',
                day: 'numeric'
              })}
            </p>
          </div>
        </div>
        <div className="w-full mt-4 prose dark:prose-invert max-w-none">
          <MDXContent />
        </div>
      </article>
    </Container>
  );
}
