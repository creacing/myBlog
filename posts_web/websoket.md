---
title: webSoket
description: 
date: 2022-4-7
tags:
  - webSoket
---
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