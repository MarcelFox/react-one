const path = require('path');
const nodeExternals = require('webpack-node-externals');

const NODE_ENV = process.env.NODE_ENV === 'production' ? 'production' : 'development';

module.exports = {
  mode: NODE_ENV,
  entry: ['babel-polyfill', './src/server.jsx'],
  output: {
    path: path.join(__dirname, './dist'),
    filename: 'server.js',
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
  target: 'node',
  externals: [nodeExternals()],
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules|public|dist)/,
        use: {
          loader: 'babel-loader',
          options: {
            cacheDirectory: true,
            presets: ['@babel/preset-env', '@babel/preset-react'],
          },
        },
      },
    ],
  },
};
