const path = require('path');
const crypto = require("crypto");
const crypto_orig_createHash = crypto.createHash;
crypto.createHash = algorithm => crypto_orig_createHash(algorithm == "md4" ? "sha256" : algorithm);

module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'public'),
        hashFunction: "sha256"
    },
    devServer: {
        contentBase: path.resolve(__dirname, 'public'),
        open: true,
        port: 8181,
        historyApiFallback: true,
    },
    module: {
        rules: [
        {
            test: /\.(js|jsx)$/,
            exclude: /node_modules/,
            use: {
              loader: 'babel-loader',
            },
        },
        ],
    },
    resolve: {
      extensions: ['.js', '.jsx'],
    },
    devtool: 'source-map',
};
