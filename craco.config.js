const path = require('path')
const CracoLessPlugin = require('craco-less')

module.exports = {
  // ...
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            modifyVars: { '@primary-color': '#ff9212', 'link-color': '#0066cc' },
            javascriptEnabled: true,
          },
        },
      },
    },
  ],
  webpack: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
      _c: path.resolve(__dirname, 'src/components'),
    },
    plugins: {
      add: [] /* An array of plugins */,
      remove: [] /* An array of plugin constructor's names (i.e. "StyleLintPlugin", "ESLintWebpackPlugin" ) */,
    },
    configure: {
      /* Any webpack configuration options: https://webpack.js.org/configuration */
    },
    // configure: (webpackConfig, { env, paths }) => { return webpackConfig; }
  },
}
