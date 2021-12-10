module.exports = [
  {
    // Add support for native node modules
    test: /\.node$/,
    use: 'node-loader',
  },
  {
    // Webpack asset relocator loader
    test: /\.(m?js|node)$/,
    parser: { amd: false },
    use: {
      loader: '@marshallofsound/webpack-asset-relocator-loader',
      options: {
        outputAssetBase: 'native_modules',
      },
    },
  },
  {
    // Typescript loader
    test: /\.tsx?$/,
    exclude: /(node_modules|\.webpack)/,
    use: {
      loader: 'ts-loader',
      options: {
        transpileOnly: true,
      },
    },
  },
  {
    // CSS Loader
    test: /\.css$/,
    use: [{ loader: 'style-loader' }, { loader: 'css-loader' }],
  },
  {
    test: /\.(scss)$/,
    use: [{
      loader: 'style-loader', // inject CSS to page
    }, {
      loader: 'css-loader', // translates CSS into CommonJS modules
    }, {
      loader: 'postcss-loader', // Run post css actions
      options: {
        plugins: function () { // post css plugins, can be exported to postcss.config.js
          return [
            require('precss'),
            require('autoprefixer')
          ];
        }
      }
    }, {
      loader: 'sass-loader' // compiles Sass to CSS
    }]
  },
  {
    // Less loader
    test: /\.less$/,
    use: [
      { loader: 'style-loader' },
      { loader: 'css-loader' },
      { loader: 'less-loader' },
      
    ],
  },
  {
    // Images Loader
    test: /\.(gif|jpe?g|tiff|png|webp|bmp|svg)$/,
    use: [
      {
        loader: 'file-loader',
        options: {
          name: 'images/[name].[ext]',
          publicPath: '../.',
        },
      },
    ],
  },
  {
    // Font & SVG loader
    test: /\.(woff(2)?|ttf|otf|eot)$/,
    use: [
      {
        loader: 'file-loader',
        options: {
          name: 'fonts/[name].[ext]',
          publicPath: '../.',
        },
      },
    ],
  },
];
