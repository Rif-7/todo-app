const path =  require("path");
const HtmlWebPackPlugin = require("html-webpack-plugin");


module.exports = {
    mode: "production",
    entry: "./src/index.js",
    output: {
        filename: "[name].bundle.js",
        path: path.resolve(__dirname, "dist"),
        clean: true
    },
    plugins: [new HtmlWebPackPlugin({
        template: "./src/template.html"
    }),],
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ["style-loader", "css-loader"]
            }
        ]
    }
}