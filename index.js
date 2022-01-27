const path = require('path');
const HtmlWebpackTagsPlugin = require('html-webpack-tags-plugin');

const direction = path.dirname(require.resolve('jessibuca/package.json'))

module.exports = (api, options) => {
  api.chainWebpack(webpackConfig => {
    webpackConfig
      .plugin('copy')
      .tap(([config]) => {
        const c = config.concat([
          { from: path.resolve(direction, './dist/jessibuca.js'), to: '' },
          { from: path.resolve(direction, './dist/decoder.js'), to: '' },
          { from: path.resolve(direction, './dist/decoder.wasm'), to: '' },
        ])
        return [c];
      })

    webpackConfig
      .plugin('tag')
      .use(HtmlWebpackTagsPlugin, [
        {
          tags: ['jessibuca.js'],
          append: true
        }
      ])

    return webpackConfig;
  })
}
