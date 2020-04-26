const path = require('path');

module.exports = {
  entry: path.resolve(__dirname, 'src/appletart.ts'),  
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'appletart.js',
    library: 'appletart',
    libraryTarget: 'umd',
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.(js)$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      }
    ],
  },
  resolve: {
    extensions: ['.js', '.ts', '.tsx'],
    modules: [path.resolve(__dirname, 'src')],
  },
  // mode: 'development',
  // devtool: 'sourceMap',
};
