import type { Metadata } from 'next';
import Link from 'next/link';
import { allProjects } from 'contentlayer/generated';

export const metadata: Metadata = {
  title: 'Projects',
  description: 'My thoughts on some projects',
};

export default async function ProjectPage() {

  return (
    <section>
      <h1 className="font-medium text-2xl mb-2 tracking-tighter">
        Thoughts and Retrospectives
      </h1>
      <div className="border border-neutral-200 dark:border-neutral-800 w-full mb-8" />
      {allProjects
        .sort((a, b) => {
          if (new Date(a.publishedAt) > new Date(b.publishedAt)) {
            return -1;
          }
          return 1;
        })
        .map((post) => (
          <Link
            key={post.slug}
            className="flex flex-col space-y-2 mb-4"
            href={`/projects/${post.slug}`}
          >
            <div className="w-full flex flex-col">
              <p className="text-neutral-900 dark:text-neutral-100 tracking-tight">
                {post.title}
              </p>
              <p className="text-sm text-neutral-600 dark:text-neutral-400">
                {post.summary}
              </p>
            </div>
          </Link>
        ))}
    </section>
  );
}