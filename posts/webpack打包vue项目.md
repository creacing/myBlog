---
title: webpack打包vue项目
description:
date: 2021-06-05
tags:
  - javascript
---

cnpm 安装

npm install -g cnpm --registry=https://registry.npm.taobao.org

或者 npm install -g cnpm

 

创建如下文件目录

 

webpackDemo

## app

#### main.js

#### app.js

## common

#### index.html

## webpack.config.js

 

安装依赖

npm install webpack@4 --save-dev

npm install webpack@4 webpack-cli --save-dev

 

main.js

 

const greeter = require('./app.js');

document.querySelector("#root").appendChild(greeter());

//将dom对象添加到document对象上

 

app.js

 

module.exports = function () {
    const greet = document.createElement('div');

    greet.textContent = "welcome to use webpack!";

    return greet;

}//创建一个dom对象

 

index.html

 

<!doctype html>

<html lang="en">

 

<head>

    <meta charset="UTF-8">

    <title>Document</title>

</head>

 

<body>

    <div id="root"></div>

    <script type="text/javascript" src="index.js"></script> //通过webpack打包生成的index.js文件

</body>

 

</html>

 

webpack.config.js

//配置webpack打包的入口和打包后文件存放的位置

module.exports = {
    // webpack4需要添加这个配置，development为开发环境，production为生产环境

    mode: "development",

    entry: __dirname + "\\app\\main.js", // 入口文件

    output: {
        path: __dirname + "\\common", // 打包后的文件存放的地方

        filename: "index.js" // 打包后输出文件的文件名

    }

}

 

node_modules/.bin/webpack .\app\main.js .\common\index.js      需要保证两个文件存在

node_modules/.bin/webpack      需要在webpack.config.js进行配置

 

打包成功后运行index.html即可看到效果