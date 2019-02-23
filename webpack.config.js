const path = require('path');

module.exports = {
  mode: 'development',
  entry: path.resolve(__dirname, './client/index.jsx'),
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, './public/dist'),
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-env', '@babel/preset-react'],
        },
      },
      {
        test: /\.css$/,
        use: [
          {
             loader: 'style-loader',
          },
          {
             loader: 'css-loader',
             options: {
                sourceMap: true,
                modules: true,
                localIdentName: '[local]___[hash:base64:5]'
               }
          }
        ],
      },
    ],
  },
};
