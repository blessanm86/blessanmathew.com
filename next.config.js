const path = require("path");
const SOURCE_PATH = path.join(__dirname);

module.exports = {
  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    config.module.rules[1].oneOf.forEach((moduleLoader, i) => {
      Array.isArray(moduleLoader.use) &&
        moduleLoader.use.forEach((l) => {
          if (l.loader.includes("css-loader")) {
            l.options = {
              ...l.options,
              localsConvention: "camelCaseOnly",
            };
          }
        });
    });

    config.resolve.alias = {
      ...config.resolve.alias,
      Components: path.resolve(SOURCE_PATH, "components"),
      Lib: path.resolve(SOURCE_PATH, "lib"),
      Posts: path.resolve(SOURCE_PATH, "posts"),
      Assets: path.resolve(SOURCE_PATH, "public"),
    };
    return config;
  },
};
