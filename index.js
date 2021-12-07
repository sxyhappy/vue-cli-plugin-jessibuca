const path = require('path');
const HtmlWebpackTagsPlugin = require('html-webpack-tags-plugin');

const direction = path.dirname(require.resolve('jessibuca/package.json'))

module.exports = (api, options) => {
  api.chainWebpack(webpackConfig => {
    webpackConfig
      .plugin('copy')
      .tap(([config]) => {
        const c = config.concat([
          { from: path.resolve(direction, './demo/public/index.js'), to: '' },
          { from: path.resolve(direction, './demo/public/ff.js'), to: '' },
          { from: path.resolve(direction, './demo/public/ff.wasm'), to: '' },
        ])
        return [c];
      })

    webpackConfig
      .plugin('tag')
      .use(HtmlWebpackTagsPlugin, [
        {
          tags: ['index.js'],
          append: true
        }
      ])

    return webpackConfig;
  })
}
