const withPWA = require("next-pwa");
const runtimeCaching = require("next-pwa/cache");

module.exports = withPWA({
  reactStrictMode: true,
  assetPrefix: "/web-wordcloud",
  basePath: "/web-wordcloud",

  pwa: {
    dest: "public",
    runtimeCaching,
    scope: "/web-wordcloud",
    disable: process.env.NODE_ENV === "development",
  },

  webpack: (config, { isServer }) => {
    config.experiments = {
      asyncWebAssembly: true,
    };
    config.output.webassemblyModuleFilename =
      (isServer ? "../" : "") + "static/wasm/webassembly.wasm";
    return config;
  },
});
