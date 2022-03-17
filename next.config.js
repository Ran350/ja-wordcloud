const runtimeCaching = require('next-pwa/cache')
const withPWA = require('next-pwa')

module.exports = withPWA({
  reactStrictMode: true,
  assetPrefix: '/web-wordcloud',
  basePath: '/web-wordcloud',

  pwa: {
    dest: 'public',
    runtimeCaching,
    scope: '/web-wordcloud',
    disable: process.env.NODE_ENV === 'development',
  },
})
