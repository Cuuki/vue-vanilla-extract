const { VanillaExtractPlugin } = require('@vanilla-extract/webpack-plugin');

module.exports = {
  configureWebpack: {
    plugins: [new VanillaExtractPlugin()],
  },
};
