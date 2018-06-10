const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const PATHS = {
    app: path.join(__dirname , 'app'),
    dist: path.join(__dirname, 'dist'),
}

const config = {
    devServer: {
        contentBase: PATHS.dist,
        host: process.env.HOST,
        port: 9000
    },
    entry: {
        app: PATHS.app,
    },
    output: {
        path: PATHS.dist,
        filename: "[name].js",
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: "Webpack Demo",
        }),
    ]
};

module.exports = config;
