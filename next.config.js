const runtimeCaching = require('next-pwa/cache')
const withPWA = require('next-pwa')

const urlPrefix = '/web-wordcloud'

module.exports = withPWA({
  reactStrictMode: true,
  assetPrefix: urlPrefix,
  basePath: urlPrefix,
  trailingSlash: true,
  publicRuntimeConfig: { urlPrefix },

  pwa: {
    dest: 'public',
    runtimeCaching,
    scope: urlPrefix,
    disable: process.env.NODE_ENV === 'development',
  },
})
