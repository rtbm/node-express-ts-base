const path = require('path');

module.exports = {
  entry: './src/app.ts',
  target: 'node',

  output: {
    path: path.resolve(__dirname, 'server'),
    filename: 'app.js',
    publicPath: '/',
    chunkFilename: '[id].chunk.js',
  },

  resolve: {
    extensions: ['.js', '.ts'],
  },

  module: {
    rules: [{
      test: /\.ts$/,
      use: [{
        loader: 'awesome-typescript-loader',
      }],
    }],
  },
};
