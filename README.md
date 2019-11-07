npm init -y
npm i jquery -S
npm i vue -S
cnpm i bootstrap -S
webpack .\src\main.js
webpack-dev-server 自动打包编译 npm i webpack-dev-server -D 这个工具要本地安装webpack才能使用
webpack-dev-server打包的bundle.js文件并没有存放到实际的文件夹中而是托管到了电脑内存中，这个内存在文件夹根目录下
-g的工具才能在终端中解决

cnpm i html-webpack-plugin -D

1.npm init -y 初始化项目
2.webpack .\src\main.js .\dist\bundle.js (配置webpack.config.js)
 {
    cnpm i webpack-dev-server -d (配置package.json中的dev) (用于自动刷新) npm i -D webpack-cli
    cnpm i webpack -d
    npm run dev (更改引用的根目录)
    cnpm i html-webpack-plugin -D (用于生成内存式网页)(配置webpack.config.js中的HTMLWebpackPlugin)
    cnpm i style-loader css-loader -D (用于引用css)(在wbp.cfg中配置module的rules)
    cnpm i less-loader less -D (用于引用less)(在wbp.cfg中配置module的rules)
    cnpm i sass-loader node-sass -D (用于引用scss)(在wbp.cfg中配置module的rules)
    cnpm i url-loader file-loader -D (用于能处理url文件（图片）)(在wbp.cfg中配置module的rules)
    cnpm i babel-core bable-loader babel-plugin-transform-runtime -D(下)
    cnpm i babel-preset-env babel-preset-stage-0 -D (与上一起 用于解决高级语法不能使用问题 ) （配置wp.cfg.module.rules）（新建一个.babelrc文件作为babel配置 属于Json文件）
    cnpm i vue-loader vue-template-compiler -D (配置wbpk)
 }# WebpackStudy
