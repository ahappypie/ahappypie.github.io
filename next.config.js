const { withContentlayer } = require('next-contentlayer');

/**
 * @type {import('next').NextConfig}
 */
module.exports = withContentlayer({
  swcMinify: true,
  reactStrictMode: true,
  experimental: {
    legacyBrowsers: false,
    browsersListForSwc: true
  }
});
