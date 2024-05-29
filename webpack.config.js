const path = require("path");
const nodeExternals = require("webpack-node-externals");
module.exports = {
    mode: "development",
    entry: "./index.ts",
    target: "node",
    output: {
        path: path.join(__dirname, "./dist"),
        filename: "index.js" 
    },
    resolve: {
        extensions: [".js", ".ts", ".tsx"]
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: "ts-loader",
                exclude: /node_modules/
            }
        ]
    },
    externals: [nodeExternals()]
};