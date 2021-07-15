const path = require('path')

module.exports = {
  mode: 'development',
  entry: {
    main: path.resolve(__dirname, './src/index.js'),
  },
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: '[name].bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: (resource) => {
          if (
              resource.includes(path.join('/node_modules/', 'ky')) ||
              resource.includes(path.join('/node_modules/', 'ky-universal'))
          ) {
            return false;
          }
          return resource.includes('/node_modules/');
        },
        use: ['babel-loader'],
      },
    ]
  }
}
