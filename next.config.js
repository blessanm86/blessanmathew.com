const path = require("path");
const SOURCE_PATH = path.join(__dirname);

module.exports = {
  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
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
