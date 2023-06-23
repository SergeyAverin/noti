const path = require("path");

const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

const MODE = process.env.NODE_ENV;
const PORT = process.env.FRONTEND_PORT;
const HOST =   process.env.FRONTEND_HOST;


const plugins = [
  new CleanWebpackPlugin(),
  new HtmlWebpackPlugin({
    template: "./index.html",
    inject: "body",
    hash: false,
  }),
];

if (MODE === "development") {
  // Development plugins 
  // plugins.push(new PluginName());
}

const config = {
  mode: MODE === "production" ? "production" : "development",

  devtool: "source-map",

  resolve: {
    extensions: [".ts", ".tsx", ".js"],
  },

  context: path.resolve(__dirname, "src"),

  entry: "./index.tsx",

  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
  },

  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        use: 'ts-loader',
        exclude: '/node_modules/'
      },    
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(png|jpe?g|gif|svg|webp|ico)$/i,
        type: MODE === "production" ? "asset" : "asset/resource",
      },
      {
        test: /\.(woff2?|eot|ttf|otf)$/i,
        type: "asset/resource",
      },
    ],
  },

  plugins,

  devServer: {
    static: {
      directory: path.join(__dirname, "public"),
    },
    port: PORT,
    host: HOST,
    hot: true,
  },
};

module.exports = config;
