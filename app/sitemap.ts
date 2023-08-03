import { allProjects } from 'contentlayer/generated';

export default async function sitemap() {
  const projects = allProjects.map((post) => ({
    url: `https://ahappypie.github.io/projects/${post.slug}`,
    lastModified: post.publishedAt,
  }));

  const routes = ['', '/projects', '/about'].map(
    (route) => ({
      url: `https://ahappypie.github.io${route}`,
      lastModified: new Date().toISOString().split('T')[0],
    })
  );

  return [...routes, ...projects];
}