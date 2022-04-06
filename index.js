const HtmlWebpackTagsPlugin = require('html-webpack-tags-plugin');

module.exports = (api, options) => {
  api.chainWebpack(webpackConfig => {
    webpackConfig
      .plugin('copy')
      .tap(([config]) => {
        const c = config.concat([
          { from: './libs/jessibuca.js', to: '' },
          { from: './libs/decoder.js', to: '' },
          { from: './libs/decoder.wasm', to: '' },
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
