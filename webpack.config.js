const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const {ModuleFederationPlugin } = require("webpack").container;

module.exports = {
  entry: "./src/index.jsx",
  // Where files should be sent once they are bundled
  output: {
    path: path.join(__dirname, "/dist"),
    filename: "[name].js",
    chunkFilename: "[id].[chunkhash].js",
  },
  resolve: {
    extensions: [".js", ".jsx"],
  },
  // webpack 5 comes with devServer which loads in development mode
  devServer: {
    port: 3000,
  },
  // Rules of how webpack will take our files, complie & bundle them for the browser
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /nodeModules/,
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({ template: "./public/index.html" }),
    new ModuleFederationPlugin({
        name: "shell-app",
        filename: "remote-shell-app.js",
        remotes: {
          mf1: "mf1@http://localhost:3001/mf1-remote.js",
          mf2: "mf2@http://localhost:3002/mf2-remote.js",
        },
      }),
            ],
};