// const path = require('path');

module.exports = {
  type: 'web-app',
  webpack: {
    publicPath: '',
    html: {
      minify: {
        removeRedundantAttributes: false,
      },
    },
  },
  devServer: {
    watchContentBase: true,
  },
};
