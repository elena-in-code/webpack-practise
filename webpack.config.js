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

const sassRules = {
  test: /\.s[ac]ss$/i,
  use: [
    // Creates `style` nodes from JS strings
    'style-loader',
    // Translates CSS into CommonJS
    'css-loader',
    {
      // Compiles Sass to CSS
      loader: 'sass-loader',
      options: {
        // Prefer `dart-sass`
        implementation: require('sass'),
      },
    },
  ]
}

module.exports = {
  output: {
    filename: 'app.[contentHash].js'
  },
  module:{
    rules: [javascriptRules, sassRules]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'src/index.html'
    })
  ]
}