module.exports = {
  module:{
    rules: [
      {
        test: /\.js$/,
        exclude: /node _modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-react']
          }
        }
      }
    ]
  }
}