const { VueLoaderPlugin } = require('vue-loader')

module.exports = {
  test: /\.vue(\.erb)?$/,
  use: [{
    loader: 'vue-loader',
    options: {
    plugins: [new VueLoaderPlugin()]
  }
  }],


}
