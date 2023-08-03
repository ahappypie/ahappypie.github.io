const { withContentlayer } = require('next-contentlayer');

/**
 * @type {import('next').NextConfig}
 */
module.exports = withContentlayer({
  output: 'export',
  distDir: 'docs',
  swcMinify: true,
  reactStrictMode: true,
  images: {
    unoptimized: true
  }
});
