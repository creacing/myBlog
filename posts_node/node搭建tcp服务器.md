---
title: node搭建tcp服务器
description: 
date: 2022-04-21
tags:
  - node
---
### server
```javascript
//引入net模块
const net = require('net');
//创建TCP服务器
const server = net.createServer(function(socket) {
    console.log('有新的客户端接入');
});
//设置监听端口
server.listen(8001, function() {
    console.log('服务正在监听中。。。')
});
```
### client
```javascript
//引入net模块
const net = require('net');
//创建TCP客户端
const client = new net.Socket();
//设置连接的服务器
//本地
client.connect(8001, '127.0.0.1', function() {
    console.log("连接服务器成功");
});
```
### 未完