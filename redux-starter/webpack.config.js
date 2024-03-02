const path = require("path");

module.exports = {
  entry: "./src/index.ts",
  output: {
    filename: "app.js",
    path: path.resolve(__dirname, "dist"),
  },
  devServer: {
    static: {
      directory: path.join(__dirname, "dist"),
    },
    port: 3000,
  },
  mode: "development",
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx']
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/, 
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
};
