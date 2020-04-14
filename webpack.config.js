const HtmlWebpackPlugin = require('html-webpack-plugin');

const javascriptRules = {
  test: /\.js$/,
  exclude: /node _modules/,
  use: {
    loader: 'babel-loader',
    options: {
      presets: ['@babel/preset-react', '@babel/preset-env']
    }
  }
}

module.exports = {
  output: {
    filename: 'app.[contentHash].js'
  },
  module:{
    rules: [javascriptRules]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'src/index.html'
    })
  ]
}