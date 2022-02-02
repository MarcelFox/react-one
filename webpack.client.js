const path = require('path');
const dotenv = require('dotenv');
const TerserPlugin = require('terser-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

dotenv.config();

const NODE_ENV = process.env.NODE_ENV === 'production' ? 'production' : 'development';

module.exports = {
  mode: NODE_ENV,
  target: 'web',
  entry: {
    landingPage: './src/apps/landingPage/client.entry.jsx',
    dashboard: './src/apps/dashboard/client.entry.jsx',
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'public'),
  },
  resolve: {
    extensions: ['.js', '.jsx'],
    alias: {
      '@App': path.resolve(__dirname, 'src/apps'),
      '@Core': path.resolve(__dirname, 'src/core'),
      '@Public': path.resolve(__dirname, 'src/core/public'),
      '@': path.resolve(__dirname, 'src'),
    },
  },
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
        exclude: /(node_modules|public|dist)/,
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
      },
    ],
  },
  optimization: {
    minimize: true,
    minimizer: [new TerserPlugin()],
    splitChunks: {
      // include all types of chunks
      chunks: 'all',
    },
  },
  plugins: [
    // new HtmlWebpackPlugin(),
    new HtmlWebpackPlugin({
      inject: 'body',
      template: './src/core/public/template.html',
      favicon: './src/core/public/favicon.ico',
      chunks: ['landingPage'],
    }),
    new HtmlWebpackPlugin({
      inject: 'body',
      filename: 'dashboard.html',
      template: './src/core/public/template.html',
      favicon: './src/core/public/favicon.ico',
      chunks: ['dashboard'],
    }),
    new HtmlWebpackPlugin({
      filename: '404.html',
      template: './src/core/public/404.html',
      favicon: './src/core/public/favicon.ico',
    }),
    new MiniCssExtractPlugin(),
  ],
};
