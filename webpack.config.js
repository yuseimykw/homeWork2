module.exports = {
    entry: "./src/index.js",
    mode: "development",/////本番production
    output: {
        filename: "main.js",
        path: __dirname + "/dist"
    },
    devServer: {
        contentBase: "./dist"
    },
    devtool: "inline-source-map",
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: [
                    "style-loader",
                    "css-loader",
                    "sass-loader"
                ]
            }
        ]
    }
}