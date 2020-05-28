const path = require("path");

module.exports = {
    mode: "none",
    entry: "./src/index.tsx",
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: "ts-loader",
                exclude: /node_modules/,
            },
            {
                test: /\.css$/,
                use: [
                    "style-loader",
                    "css-modules-typescript-loader",
                    {
                        loader: "css-loader",
                        options: { modules: true }
                    },
                ],
            },
        ],
    },
    resolve: {
        extensions: [ ".tsx", ".ts", ".js" ],
    },
    output: {
        filename: "min.bundle.js",
        path: path.resolve(__dirname, "dist"),
    },
};