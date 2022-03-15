---
title: js柯里化
description:
date: 2021-04-09
tags:
  - javascript
---

```javascript
//js柯里化
//部分求值
//通过闭包保存传入的参数
//在真正需要求值的时候，之前传入的所有参数都会被一次性求值
 
//eg 计算每月开销
 
//普通写法
// let mothlyCost = 0
// const cost = function (money) {
//     mothlyCost += money
// }
// 柯里化
// const cost = (function () {
//     const args = []//存放传入的值
//     return function () {
//         if (arguments.length === 0) {
//             let money = 0
//             for (let i = 0, l = args.length; i < l; i++) {
//                 money += args[i]
//             }
 
//             return money
//         } else {
//             [].push.apply(args,arguments)
//         }
//     }
// })()
 
// cost(100)
// cost(200)
// cost(300)
 
// console.log(cost());
 
 
const curring = function (fn) {
    const args = []
    return function () {
        if (arguments.length === 0) { //不传参时调用fn
            return fn.apply(this, args)
        } else {
            [].push.apply(args, arguments) //将参数push进args
        }
    }
}
 
const cost = (function () {
    let money = 0
    return function () {
        for (let i = 0, l = arguments.length; i < l; i++) {
            money += arguments[i]
        }
        return money
    }
})()
 
const total = curring(cost)
 
total(100)
total(200)
total(300)
 
console.log(total());
```