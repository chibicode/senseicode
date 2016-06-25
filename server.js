var webpack = require('webpack')
var WebpackDevServer = require('webpack-dev-server')
var config = require('./webpack.config')
config.plugins.push(new webpack.HotModuleReplacementPlugin())

new WebpackDevServer(webpack(config), {
  publicPath: 'http://0.0.0.0:8788/',
  hot: true,
  inline: true,
  historyApiFallback: true,
  // See: https://github.com/webpack/webpack/issues/1191#issuecomment-157148084
  stats: 'errors-only',
  headers: { 'Access-Control-Allow-Origin': '*' }
}).listen(8788, '0.0.0.0', function (err, result) {
  if (err) {
    console.log(err)
  }
  console.log('Listening at localhost:8788')
})
