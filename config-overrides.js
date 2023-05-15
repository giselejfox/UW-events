const path = require('path');

module.exports = function override(config) {
  config.resolve.fallback = {
    ...config.resolve.fallback,
    path: require.resolve('path-browserify'),
    stream: require.resolve("stream-browserify"),
    zlib: require.resolve("browserify-zlib"),
    http: require.resolve("stream-http"),
    crypto: require.resolve("crypto-browserify"),
    fs: false,
    net: false
  };

  return config;
};