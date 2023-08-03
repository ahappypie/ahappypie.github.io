import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { Mdx } from '../../components/mdx';
import { allProjects } from 'contentlayer/generated';
import Balancer from 'react-wrap-balancer';

export async function generateMetadata({
                                         params,
                                       }): Promise<Metadata | undefined> {
  const post = allProjects.find((post) => post.slug === params.slug);
  if (!post) {
    return;
  }

  const {
    title,
    publishedAt: publishedTime,
    summary: description,
    image,
    slug,
  } = post;
  const ogImage = image
    ? `https://ahappypie.github.io${image}`
    : `https://ahappypie.github.io/og?title=${title}`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: 'article',
      publishedTime,
      url: `https://ahappypie.github.io/projects/${slug}`,
      images: [
        {
          url: ogImage,
        },
      ],
    }
  };
}

function formatDate(date: string) {
  return new Date(date).toLocaleString('en-us', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  });
}

export default async function Projects({ params }) {
  const post = allProjects.find((post) => post.slug === params.slug);

  if (!post) {
    notFound();
  }

  return (
    <section>
      <script type="application/ld+json" suppressHydrationWarning>
        {JSON.stringify(post.structuredData)}
      </script>
      <h1 className="font-bold text-2xl tracking-tighter max-w-[650px]">
        <Balancer>{post.title}</Balancer>
      </h1>
      <div className="flex justify-between items-center mt-2 mb-8 text-sm max-w-[650px]">
        <p className="text-sm text-neutral-600 dark:text-neutral-400">
          {formatDate(post.publishedAt)}
        </p>
      </div>
      <Mdx code={post.body.code} />
    </section>
  );
}

export async function generateStaticParams() {
  return allProjects.map((post) => {return {slug: `/projects/${post.slug}`}});
}