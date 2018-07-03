const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const PATHS = {
  app : path.resolve(__dirname, 'src'),
  build : path.resolve(__dirname, 'public')
};

const HtmlWebpackPluginConf = new HtmlWebpackPlugin({
  template: './src/index.html',
  filename : 'index.html',
  inject: 'body',
  title: 'React App'
});

var ExtractTextPlugin = require('extract-text-webpack-plugin');

/**
*/
module.exports = {
  entry: './src/index.js',
  output : {
    filename : 'bundle.js',
    path : PATHS.build
  },
  module : {
    rules : [
      { test : /\.js$/, use : 'babel-loader', exclude : /node_modules/ },
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: "css-loader"
        })
      }
    ]
  },
  plugins : [
    HtmlWebpackPluginConf,
    new ExtractTextPlugin("style.css")
  ]
};
