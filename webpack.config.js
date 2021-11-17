const { manifest, entry } = require('./extension.config')
const path = require('path')
const { VueLoaderPlugin } = require('vue-loader')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const GenerateJsonPlugin = require('generate-json-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

const isProd = process.env.NODE_ENV === 'production'

const output = {
  path: path.resolve(__dirname, './dist'),
}

const plugins = [
  new VueLoaderPlugin(),
  new HtmlWebpackPlugin({
    template: './index.html'
  }),
  new MiniCssExtractPlugin(),
  new GenerateJsonPlugin('manifest.json', manifest)
]

const rules = [
  {
    test: /\.vue$/,
    loader: 'vue-loader',
  },
  {
    test: /\.json$/,
    loader: 'json-loader'
  },
  {
    test: /\.scss$/i,
    use: [
      MiniCssExtractPlugin.loader,
      "css-loader",
      "sass-loader",
    ],
  },
]

const config = {
  entry,
  output,
  module: { rules },
  plugins,
}

if (!isProd) {
  config.devtool = 'source-map'
}

module.exports = config