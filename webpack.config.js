const path = require("path");
const webpack = require("webpack");

const HtmlWebpackPlugin = require("html-webpack-plugin");
console.log("NODE_ENV", process.env.NODE_ENV);
module.exports = (env, argv) => {
  console.log(env, "=============", argv);
  return {
    // mode: "development",
    mode: process.env.NODE_ENV === "development" ? "development" : "production",
    devtool: false,
    entry: "./src/index.js",
    output: {
      path: path.resolve("dist"),
      filename: "main.js",
    },
    module: {
      rules: [
        {
          test: /\.scss$/,
          use: ["style-loader", "css-loader", "sass-loader"],
        },
        {
          test: /\.css$/,
          use: ["style-loader", "css-loader"],
        },
      ],
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: "./aaa/index.html",
      }),
      new webpack.DefinePlugin({
        "process.env.NODE_ENV_p": "production",
        Version: "1.0.0",
      }),
    ],
    devServer: {
      static: {
        directory: path.resolve(__dirname, "aaa"),
        publicPath: "/work",
      },
      port: 8080,
      open: true,
    },
  };
};
