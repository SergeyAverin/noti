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
    publicPath: '/'
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
    alias: {
      "@atoms": path.resolve(__dirname, 'src/components/atoms'),
      "@molecules": path.resolve(__dirname, 'src/components/atoms'),
      "@organisms": path.resolve(__dirname, 'src/components/organisms'),
      "@templates": path.resolve(__dirname, 'src/components/templates'),
      "@pages": path.resolve(__dirname, 'src/components/pages'),
      "@public": path.resolve(__dirname, 'public'),
      "@redux": path.resolve(__dirname, 'src/redux')
    },
  },

  context: path.resolve(__dirname, "src"),

  entry: "./index.tsx",

  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
    publicPath: '/',
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
    historyApiFallback: true,
  },
  
};

module.exports = config;
