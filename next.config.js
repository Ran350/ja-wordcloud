const withPWA = require("next-pwa");

module.exports = withPWA({
  reactStrictMode: true,

  pwa: {
    dest: "public",
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
