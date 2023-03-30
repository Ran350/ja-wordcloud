const runtimeCaching = require('next-pwa/cache')
const withPWA = require('next-pwa')

const isProd = process.env.NODE_ENV === 'production'
const urlPrefix = isProd ? '/ja-wordcloud' : ''

module.exports = withPWA({
  reactStrictMode: true,

  assetPrefix: urlPrefix,
  basePath: urlPrefix,
  trailingSlash: true,
  publicRuntimeConfig: { urlPrefix },

  optimizeFonts: false,

  pwa: {
    dest: 'public',
    runtimeCaching,
    scope: urlPrefix,
    disable: process.env.NODE_ENV === 'development',
  },
})
