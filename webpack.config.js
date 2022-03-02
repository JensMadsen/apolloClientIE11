const webpack = require("webpack");
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const babelEnvDeps = require("webpack-babel-env-deps");

module.exports = {
  devServer: {
    hot: true,
  },
  entry: {
    app: [path.resolve(__dirname, "./src/index.tsx")],
  },
  module: {
    rules: [
      // {
      //   test: /\.(js|jsx)$/,
        
      //   use: ["babel-loader"],
      // },
      {
        test: /\.(ts|tsx)$/,
        // exclude: /node_modules/,
        exclude: babelEnvDeps.exclude(),
        use: ["ts-loader"],
      },
    ],
  },
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "./dist"),
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      template: path.join(__dirname, "src", "index.html"),
    }),
  ],
  resolve: {
    extensions: ["*", ".cjs",".js", ".ts", ".tsx"],
  },
};
