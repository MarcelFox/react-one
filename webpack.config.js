const path = require('path');
const dotenv = require('dotenv');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

dotenv.config();

const NODE_ENV =
  process.env.NODE_ENV === 'production' ? 'production' : 'development';

const port = process.env.PORT || 8080;
module.exports = {
  mode: NODE_ENV,
  entry: './src/main.jsx',
  output: {
    filename: 'bundle.[hash].js',
  },
  devtool: 'inline-source-map',
  devServer: {
    hot: true,
    port: port,
    compress: true,
    host: '0.0.0.0',
    historyApiFallback: true,
  },
  resolve: {
    extensions: ['.js', '.jsx'],
    alias: {
      '@Domain': path.resolve(__dirname, 'src/domains'),
      '@Core': path.resolve(__dirname, 'src/core'),
      '@Public': path.resolve(__dirname, 'src/core/public'),
      '@': path.resolve(__dirname, 'src'),
    },
  },
  target: 'web',
  module: {
    rules: [
      {
        test: /\.html$/i,
        loader: 'html-loader',
        options: {
          minimize: true,
        },
      },
      {
        test: /\.(mov|mp4|jpg|svg|gif|png|ico)$/,
        loader: 'file-loader',
      },
      {
        test: /\.(woff|woff2|ttf|svg|eot)$/,
        loader: 'file-loader',
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules|public)/,
        use: {
          loader: 'babel-loader',
          options: {
            cacheDirectory: true,
            presets: ['@babel/preset-env', '@babel/preset-react'],
            plugins: [
              'react-hot-loader/babel',
              '@babel/plugin-syntax-dynamic-import',
              '@babel/plugin-proposal-object-rest-spread',
            ],
          },
        },
      },
      {
        test: /\.(scss|css)$/i,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
      }
    ],
  },
  optimization: {
    minimizer: [new UglifyJsPlugin()],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/core/public/index.html',
      favicon: './src/core/public/favicon.ico',
    }),
    new MiniCssExtractPlugin(),
  ],
};
