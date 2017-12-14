const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

console.log(path.resolve('./node_modules'))

module.exports = {
    entry: {
        index: path.join(__dirname, 'index'),
    },
    output: {
        path: path.join(__dirname, 'dist'),
        filename: '[name]_[hash].js',
    },
    resolve: {
        modules: [__dirname, 'node_modules'],
        extensions: ['.tsx', '.ts', '.jsx', '.js'],
    },
    module: {
        rules: [
            {
                test: /\.tsx?/,
                loader: 'awesome-typescript-loader'
            }
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'react-shortcuts',
            template: path.join(__dirname, 'index.html'),
        }),
    ],
}
