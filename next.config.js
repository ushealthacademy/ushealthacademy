/** @type {import('next').NextConfig} */
const path = require('path');

const nextConfig = {
  reactStrictMode: true,

  optimizeFonts: false,

  images : {
    unoptimized:true
  },

  sassOptions: {
    includePaths: [path.join(__dirname, 'src/styles/scss')],
    prependData:
      '@import "_variables.scss";@import "_mixins.scss";@import "_media_queries.scss";',
  },
}

module.exports = nextConfig
