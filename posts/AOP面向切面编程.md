---
title: js AOP(面向切面编程)
description:
date: 2021-04-17
tags:
  - javascript
---

```javascript
//AOP(面向切面编程)
//把一些和核心业务逻辑模块无关的功能抽离出来
//例如 日志统计，安全控制，异常处理模块
// 通常实现方式，将函数动态织入到另一个函数中
// 这里通过扩展Function.prototype来实现
 
Function.prototype.before = function (beforeFn) {
    const that = this // 保存原函数的引用
 
    return function () { // 返回包含了原函数和新函数的‘代理’函数
        beforeFn.apply(this) // 执行新函数，修正this
 
        that.apply(this) //执行原函数
    }
}
 
Function.prototype.after = function (afterFn) {
    const that = this // 保存原函数的引用
 
    return function () {
        that.apply(this) // 执行原函数，修正this
 
        afterFn.apply(this) // 执行新函数
    }
}
 
let fun = function () {
    console.log(2);
}
 
fun = fun.before(function () {
    console.log(1);
}).after(function () {
    console.log(3);
})
 
fun()
 
// fun = function () {
//   console.log(2);
//}
 
// function() {
//     console.log(1);
//     console.log(2);
// }
 
// function() {
//     console.log(1);
//     console.log(2);
//     console.log(3);
// }
```