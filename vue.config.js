const path = require('path')

module.exports = {
  outputDir: 'build/www',
  transpileDependencies: ['vuetify'],
  transpileDependencies: ['vue-echarts', 'resize-detector'],
  chainWebpack: config => {
    config
      .entry('app')
      .clear()
      .add('./ui/main.js')
      .end()
    config.resolve.alias.set('@', path.join(__dirname, './ui'))
  }
}
