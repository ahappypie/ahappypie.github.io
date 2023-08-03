import {
  ComputedFields,
  defineDocumentType,
  makeSource
} from 'contentlayer/source-files';

// import remarkGfm from 'remark-gfm';
// import rehypeSlug from 'rehype-slug';
// import rehypeCodeTitles from 'rehype-code-titles';
// import rehypeAutolinkHeadings from 'rehype-autolink-headings';
// import rehypePrism from 'rehype-prism-plus';

const computedFields: ComputedFields = {
  wordCount: {
    type: 'number',
    resolve: (doc) => doc.body.raw.split(/\s+/gu).length
  },
  slug: {
    type: 'string',
    resolve: (doc) => doc._raw.sourceFileName.replace(/\.mdx$/, '')
  },
  structuredData: {
    type: 'json',
    resolve: (doc) => ({
      '@context': 'https://schema.org',
      '@type': 'BlogPosting',
      headline: doc.title,
      datePublished: doc.publishedAt,
      dateModified: doc.publishedAt,
      description: doc.summary,
      image: doc.image
        ? `https://ahappypie.github.io${doc.image}`
        : `https://ahappypie.github.io/og?title=${doc.title}`,
      url: `https://ahappypie.github.io/${doc._raw.flattenedPath}`,
      author: {
        '@type': 'Person',
        name: 'Brian Bagdasarian',
      },
    })
  }
};

const Project = defineDocumentType(() => ({
  name: 'Project',
  filePathPattern: 'projects/*.mdx',
  contentType: 'mdx',
  fields: {
    title: { type: 'string', required: true },
    publishedAt: { type: 'date', required: true },
    summary: { type: 'string', required: true },
    image: { type: 'string', required: false }
  },
  computedFields
}));

export default makeSource({
  contentDirPath: 'data',
  documentTypes: [Project],
  mdx: {
    // remarkPlugins: [remarkGfm],
    // rehypePlugins: [
    //     rehypeSlug,
    //     rehypeCodeTitles,
    //     rehypePrism,
    //     [
    //         rehypeAutolinkHeadings,
    //         {
    //             properties: {
    //                 className: ['anchor']
    //             }
    //         }
    //     ]
    // ]
  }
});
