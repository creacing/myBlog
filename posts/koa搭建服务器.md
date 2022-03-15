---
title: koa搭建服务器
description: 
date: 2021-08-24
tags:
  - javascript
---

```javascript
const Koa = require('koa')
const app = new Koa()
const router = require('koa-router')()
 
app.use(async (ctx, next) => {
    console.log('First');
    await next();
});
 
router.get('/', async (ctx, next) => {
    console.log('1');
    ctx.response.body = `<h1>Hello!</h1>`;
    await next()
});
 
router.get('/2', async (ctx, next) => {
    console.log('2'); //没有返回 前端显示404
    await next()
});
 
app.use(router.routes());
 
app.use(async (ctx, next) => {
    console.log('A');
    await next()
})
 
app.use(async (ctx, next) => {
    console.log('B');
    await next()
})
 
app.use(async (ctx, next) => {
    console.log('C');
})
 
app.listen(3000);
console.log('app started at port 3000...');
```




