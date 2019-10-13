const path = require('path')
const CompressionPlugin = require('compression-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const webpack = require('webpack')

const basePath = __dirname

module.exports = env => {
  // Parse environment variables and pass on to the application
  const envKeys = Object.keys(env).reduce((prev, next) => {
    prev[`process.env.${next}`] = JSON.stringify(env[next])
    return prev
  }, {})

  return {
    context: path.join(basePath, 'app'),
    resolve: {
      alias: {
        '@actions': path.resolve(__dirname, 'app/actions/'),
        '@api': path.resolve(__dirname, 'app/api/'),
        '@components': path.resolve(__dirname, 'app/components/'),
        '@config': path.resolve(__dirname, 'config/'),
        '@models': path.resolve(__dirname, 'app/models/'),
        '@pages': path.resolve(__dirname, 'app/pages/'),
        '@providers': path.resolve(__dirname, 'app/providers/'),
        '@reducers': path.resolve(__dirname, 'app/reducers/'),
        '@sagas': path.resolve(__dirname, 'app/sagas/'),
        '@services': path.resolve(__dirname, 'app/services/'),
        '@styles': path.resolve(__dirname, 'app/styles/'),
        '@utils': path.resolve(__dirname, 'app/utils/'),
      },
      extensions: ['.js', '.ts', '.tsx', '.scss'],
    },
    entry: {
      app: './index.tsx',
      vendor: [
        'react',
        'react-router',
        'react-router-dom',
        'connected-react-router',
        'react-redux',
        'redux',
      ],
    },
    output: {
      path: path.join(basePath, 'dist'),
      filename: '[name].[hash].js',
      chunkFilename: '[name].[hash].js',
    },
    module: {
      rules: [
        {
          test: /\.tsx?$/,
          exclude: /node_modules/,
          loader: 'awesome-typescript-loader',
          options: {
            useBabel: true,
          },
        },
        {
          test: /\.css$/,
          use: [MiniCssExtractPlugin.loader, 'css-loader'],
        },
        {
          test: /\.(s[ac]ss)$/i,
          use: [
            {
              loader: 'style-loader',
            },
            {
              loader: 'css-loader',
            },
            {
              loader: 'sass-loader',
            },
          ],
        },
        {
          test: /\.(png|jpg|gif|svg|md)$/,
          loader: 'file-loader',
          options: {
            name: 'assets/img/[name].[ext]?[hash]',
          },
        },
        {
          test: /\.md$/,
          use: 'raw-loader',
        },
      ],
    },
    // For development https://webpack.js.org/configuration/devtool/#for-development
    devtool: 'inline-source-map',
    devServer: {
      contentBase: path.resolve(__dirname, 'static'),
      disableHostCheck: true,
      headers: {
        'X-Powered-By': 'IdeaRobin',
      },
      host: '0.0.0.0',
      port: envKeys['process.env.PORT'],
      historyApiFallback: true,
      hot: true,
    },
    optimization: {
      runtimeChunk: 'single',
      splitChunks: {
        chunks: 'all',
        maxInitialRequests: Infinity,
        minSize: 0,
        cacheGroups: {
          vendor: {
            // sync + async chunks
            // import file path containing node_modules
            test: /node_modules/,
            name(module) {
              // get the name. E.g. node_modules/packageName/not/this/part.js
              // or node_modules/packageName
              const packageName = module.context.match(
                /[\\/]node_modules[\\/](.*?)([\\/]|$)/,
              )[1]

              // npm package names are URL-safe, but some servers don't like @ symbols
              return `npm.${packageName.replace('@', '')}`
            },
          },
        },
      },
    },
    plugins: [
      new webpack.DefinePlugin(envKeys),
      //Generate index.html in /dist => https://github.com/ampedandwired/html-webpack-plugin
      new webpack.HotModuleReplacementPlugin(),
      new HtmlWebpackPlugin({
        filename: 'index.html', //Name of file in ./dist/
        template: 'index.html', //Name of template in ./app
        hash: true,
      }),
      new MiniCssExtractPlugin({
        filename: '[name].css',
        chunkFilename: '[id].css',
      }),
      new CompressionPlugin({
        algorithm: 'brotliCompress',
        compressionOptions: { level: 11 },
        deleteOriginalAssets: false,
        minRatio: 0.6,
        test: /\.js$|\.css$|\.html$/,
        threshold: 10240,
      }),
      new CopyWebpackPlugin([{ from: '../static', to: '../dist/static' }]),
    ],
  }
}
