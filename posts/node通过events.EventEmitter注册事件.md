---
title: node通过events.EventEmitter注册事件
description:
date: 2021-04-10
tags:
  - javascript
---

```javascript
const events = require('events')
const eventEmitter = events.EventEmitter
class Producer extends eventEmitter {
 
}
 
const producer = new Producer();
//注册监听事件
producer.on('start', () => {
    console.log('start game');
    console.log('this:', this);
})
//触发事件
producer.emit('start')
```