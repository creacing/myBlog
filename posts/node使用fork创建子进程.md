---
title: node使用fork创建子进程
description:
date: 2021-04-05
tags:
  - javascript
---

```javascript
//master.js
 
const child_process = require('child_process')
//使用fork创建子进程  子进程worker.js 参数['args1']
const worker = child_process.fork('worker.js', ['args1'])
//监听exit 事件
worker.on('exit', () => {
    console.log('child progress exit');
})
//向子进程发送
worker.send({ hello: 'child' })
//监听子进程发来的信息
worker.on('message', (msg) => {
    console.log('from child', msg);
})
 
//**************************************
 
//worker.js
 
//process.argv为一个数组 0 存放node.exe的路径 , 1存放worker.js ,2 存放master里fork传来的参数
console.log('process.argv', process.argv);
//子进程
const begin = process.argv[2]
 
console.log('i am worker ' + begin);
//监听master传来的message
process.on('message', (msg) => {
    console.log('from parent', msg);
    process.exit();
})
//向master发送信息
process.send({ hello: 'parent' })
```