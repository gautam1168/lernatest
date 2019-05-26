const path = require('path');

module.exports = {
  entry: './lib/main.js',
  mode: 'development',
  output: {
    libraryTarget: 'umd',
    path: path.resolve(__dirname, 'public'),
    filename: 'bundle.js'
  }
};
