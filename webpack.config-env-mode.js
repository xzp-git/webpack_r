// const path = require("path");
// const HtmlWebpackPlugin = require("html-webpack-plugin");
// console.log("NODE_ENV", process.env.NODE_ENV);
// module.exports = (env, argv) => {
//   console.log(env, "=============", argv);
//   return {
//     mode: env.development ? "development" : "production",
//     devtool: false,
//     entry: "./src/index.js",
//     output: {
//       path: path.resolve("dist"),
//       filename: "main.js",
//     },
//     module: {
//       rules: [
//         {
//           test: /\.scss$/,
//           use: ["style-loader", "css-loader", "sass-loader"],
//         },
//         {
//           test: /\.css$/,
//           use: ["style-loader", "css-loader"],
//         },
//       ],
//     },
//     plugins: [
//       new HtmlWebpackPlugin({
//         template: "./public/index.html",
//       }),
//     ],
//   };
// };
console.log(process.env);
