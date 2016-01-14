
var config = {
  entry: [],
  output: {
    path: '',
    filename: ''
  },
  module: {
    loaders: [{
      test: /\.js$/,
      include: '',
      exclude: /(node_modules)/,
      loaders: ['babel']
    }]
  }
}



module.exports = config