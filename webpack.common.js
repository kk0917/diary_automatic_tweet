const path = require("path");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
  entry: "./src/cloud_functions/main.js",
  plugins: [
    new CleanWebpackPlugin({
      cleanOnceBeforeBuildPatterns: ["**/*.js", "**/*.js.map"],
    })
  ],
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "./dist/"),
  },
  resolve: {
    extensions: [
      '.ts', '.js',
    ]
  }
};
