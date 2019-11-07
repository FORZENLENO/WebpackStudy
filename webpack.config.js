var path = require('path');

// // hot更新的第二部
// const webpack = require('webpack')

var htmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: './src/main.js',
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  // devServer:{
  //   //配置dev-server第二种方式，麻烦一些
  //   // "dev": "webpack-dev-server --open --port 8080 --contentBase src --hot"
  //   open:true,
  //   port:8080,
  //   contentBase:'src',
  //   // 热更新第一步
  //   hot:true
  // },
  //只要是插件就一定放到plugin节点里
  plugins:[
    // // new一个热更新模块对象 第三部
    // new webpack.HotModuleReplacementPlugin(),
    new htmlWebpackPlugin({
      template:path.join(__dirname,'./src/index.html'),
      filename:'index.html'
    })
  ],
  module:{
    rules:[
      {test:/\.css$/,use:['style-loader','css-loader']},
      {test:/\.less$/,use:['style-loader','css-loader','less-loader']},
      {test:/\.scss$/,use:['style-loader','css-loader','sass-loader']},
      // {test:/\.(jpg|png|gif|bmp|jpeg)$/,use:'url-loader'},
      {test:/\.(jpg|png|gif|bmp|jpeg)$/,use:'url-loader?limit=40000&name=[hash:8]-[name].[ext]'},
      {test:/\.(ttf|eot|svg|woff|woff2)$/,use:'url-loader'},
      // 在配置babel的规则时要把node_modules目录通过exclude选项排除
      // 因为其中的js不需要编译打包，且很耗资源
      {test:/\.js$/,exclude: /node_modules/, loader: "babel-loader"}
    ]
  }
};