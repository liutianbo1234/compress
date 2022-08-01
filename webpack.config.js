const path = require("path");
const webpack = require("webpack");
const es3ifyPlugin = require("es3ify-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const UglifyJsPlugin = require("uglifyjs-webpack-plugin"); //去除空格
module.exports = {
  entry: {
    layuiRouter: "./static/extends/layuiRouter.js",
    compatibleIE8: "./static/extends/compatibleIE8.js",
  },

  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "extends/[name].js",
  },

  module: {
    rules: [
      {
        test: /\.css$/,
        include: [path.resolve(__dirname, "./layui/css/layui.css")],
        use: ["style-loader", "css-loader"],
      },
    ],
  },
  mode: "development",
  plugins: [
    new es3ifyPlugin(),
    new HtmlWebpackPlugin({
      // favicon:'./index.html',//当前要打包的html文件
      filename: "index.html", //输出文件的文件名称
      template: path.resolve(__dirname, "./index.html"), //源模板文件
      minify: {
        // 压缩HTML文件
        removeComments: true, // 移除HTML中的注释
        collapseWhitespace: true, // 删除空白符与换行符
      },
      hash: true,
    }),
    new HtmlWebpackPlugin({
      // favicon:'./src/views/page01.html',//添加特定favicon路径到输出的html文档中
      filename: "static/src/views/page01.html",
      template: path.resolve(__dirname, "./static/src/views/page01.html"),
      minify: {
        // 压缩HTML文件
        removeComments: true, // 移除HTML中的注释
        collapseWhitespace: true, // 删除空白符与换行符
      },
      hash: true,
    }),
    new HtmlWebpackPlugin({
      // favicon:'./src/views/page02.html',//添加特定favicon路径到输出的html文档中
      filename: "static/src/views/page02.html",
      template: path.resolve(__dirname, "./static/src/views/page02.html"),
      minify: {
        // 压缩HTML文件
        removeComments: true, // 移除HTML中的注释
        collapseWhitespace: true, // 删除空白符与换行符
      },
      hash: true,
    }),
    new HtmlWebpackPlugin({
      // favicon:'./src/views/page02.html',//添加特定favicon路径到输出的html文档中
      filename: "static/src/views/page03.html",
      template: path.resolve(__dirname, "./static/src/views/page03.html"),
      minify: {
        // 压缩HTML文件
        removeComments: true, // 移除HTML中的注释
        collapseWhitespace: true, // 删除空白符与换行符
      },
      hash: true,
    }),
    new HtmlWebpackPlugin({
      // favicon:'./src/views/page02.html',//添加特定favicon路径到输出的html文档中
      filename: "static/src/views/page04.html",
      template: path.resolve(__dirname, "./static/src/views/page04.html"),
      minify: {
        // 压缩HTML文件
        removeComments: true, // 移除HTML中的注释
        collapseWhitespace: true, // 删除空白符与换行符
      },
      hash: true,
    }),

    new HtmlWebpackPlugin({
      // favicon:'./src/views/page02.html',//添加特定favicon路径到输出的html文档中
      filename: "static/src/views/page05.html",
      template: path.resolve(__dirname, "./static/src/views/page05.html"),
      minify: {
        // 压缩HTML文件
        removeComments: true, // 移除HTML中的注释
        collapseWhitespace: true, // 删除空白符与换行符
      },
      hash: true,
    }),
    new HtmlWebpackPlugin({
      // favicon:'./src/views/page02.html',//添加特定favicon路径到输出的html文档中
      filename: "static/src/views/page06.html",
      template: path.resolve(__dirname, "./static/src/views/page06.html"),
      minify: {
        // 压缩HTML文件
        removeComments: true, // 移除HTML中的注释
        collapseWhitespace: true, // 删除空白符与换行符
      },
      hash: true,
    }),

    new UglifyJsPlugin({
      //去除空格
      uglifyOptions: {
        mangle: false,
        output: {
          beautify: true,
        },
      },
    }),
  ],
};
