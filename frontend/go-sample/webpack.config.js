const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const env = process.env.NODE_ENV || 'development'
const isDevelopment = env === 'development'


const entries = {
  'index': "./src/jsx/index.jsx",
  'test/index': "./src/jsx/index.jsx",
};


module.exports = {
  entry: entries,
  output: {
    path: `${__dirname}/dist`,
    filename: "js/[name].bundle.js",
  },
  resolve: {
    extensions: [".js", ".jsx"],
  },
  devServer: {
    static: {
      directory: "./dist",
      serveIndex: false,
      watch: true,
    },
  },
  mode: isDevelopment ? "development" : "production",
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader',
        options: { presets: ['@babel/env','@babel/preset-react'] },
      },
      {
        test: /\.(scss|sass|css)$/i,
        use: [ MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
      },
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'css/[name].css',
    }),
    ...Object.keys(entries).map(k => (
    new HtmlWebpackPlugin({
      inject: 'body',
      filename: k + '.html',
      template: 'src/html/template.html',
      chunks: [k]
    })
  ))
  ],
  devtool: isDevelopment ? 'source-map' : false,
  watchOptions: {
    ignored: /node_modules/
  }
};
