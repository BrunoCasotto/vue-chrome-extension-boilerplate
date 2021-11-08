const path = require('path')
const { VueLoaderPlugin } = require('vue-loader')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const GenerateJsonPlugin = require('generate-json-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

const isProd = process.env.NODE_ENV === 'production'
const entry =  ['./src/main.js']

const output = {
  path: path.resolve(__dirname, './dist'),
}

const plugins = [
  new VueLoaderPlugin(),
  new HtmlWebpackPlugin({
    template: './index.html'
  }),
  new MiniCssExtractPlugin({
    filename: '[name].css',
    chunkFilename: '[name].css',
  }),
  new GenerateJsonPlugin('manifest.json', {
    name: "CsgoSeller",
    description: "Tool to sell csgo items",
    version: "1.0",
    manifest_version: 3,
    background: {
      service_worker: "main.js"
    },
    permissions: ["storage"],
    action: {
      default_popup: "index.html"
    },
  })
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
    test: /\.s[ac]ss$/i,
    use: [
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