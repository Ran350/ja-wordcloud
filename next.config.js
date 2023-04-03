/* eslint-disable @typescript-eslint/no-var-requires */
const urlPrefix = process.env.NODE_ENV === 'production' ? '/ja-wordcloud' : ''

/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  reactStrictMode: true,

  assetPrefix: urlPrefix,
  basePath: urlPrefix,
  trailingSlash: true,
  publicRuntimeConfig: { urlPrefix },

  optimizeFonts: true,
}

module.exports = nextConfig
