---
title: webSoket
description: 
date: 2022-4-16
tags:
  - webSoket
---
## 2022-4-7
### HTTP 通信只能由客户端发起

客户端要获知服务器状态就需要通过轮询去查询服务器有没有新的信息。 (轮询效率低，浪费资源)

### WebSocket 

服务器可以主动向客户端推送信息 (bidirectional)

### 特点

建立在 TCP 协议之上

与 HTTP 协议有着良好的兼容性

数据格式比较轻量

可以发送或二进制数据。

没有同源限制

协议标识符是ws加密为wss
## 2022-4-16
### websocket ip不能用浏览器直接访问

### node端搭建
```javascript
const ws = require('nodejs-websocket')

let PORT = 4567

const server = ws.createServer((connection) => {
    connection.on('text', function(result) {
        console.log('发送消息', result)
    })
    connection.on('connect', function(code) {
        console.log('开启连接', code)
    })
    connection.on('close', function(code) {
        console.log('关闭连接', code)
    })
    connection.on('error', function(code) {
        console.log('异常关闭', code)
    })
})

server.listen(PORT, () => {
    console.log('服务器启动成功，端口' + PORT);
})
```
### 客户端搭建
```javascript
    const ws = new WebSocket("ws://127.0.0.1:4567");

    ws.onopen = function (event) {
        console.log("Connection open ...");
        ws.send("Hello WebSockets!");
    };

    ws.onmessage = function (event) {
        console.log("Received Message: " + event.data);
        ws.close();
    };

    ws.onclose = function (event) {
        console.log("Connection closed.");
    };
```