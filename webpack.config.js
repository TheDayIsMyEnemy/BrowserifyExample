const path = require('path');

module.exports = {
    entry: './js/game.js',
    output: {
        path: path.resolve(__dirname, './'),
        filename: 'webpackbundle.js'
    },
    module: {
        rules: [
          {
            test: /\.js$/,
            exclude: /(node_modules|bower_components)/,
            use: {
              loader: 'babel-loader',
              options: {
                presets: ['@babel/preset-env'],
                plugins: ['@babel/plugin-proposal-class-properties']
              }
            }
          }
        ]
      },
    optimization: {
        minimize: false
    }

}