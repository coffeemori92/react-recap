const path = require('path');

module.exports = {
  name: 'webpack-setting',
  mode: 'development',
  devtool: 'eval',
  resolve: {
    extensions: ['.js']
  },
  entry: {
    app: ['./client']
  },
  module: {
    rules: [{
      test: /\.js?/,
      loader: 'babel-loader',
      options: {
        presets: ['@babel/preset-env', '@babel/preset-react'],
        plugins: ['@babel/plugin-proposal-class-properties']
      }
    }]
  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'app.js'
  }
};