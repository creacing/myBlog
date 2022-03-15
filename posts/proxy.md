---
title: js proxy数据绑定与可观察对象
description: 
date: 2021-08-12
tags:
  - javascript
---
```javascript
// //数据绑定与可观察对象
// const userList = []
 
// class User {
//     constructor(name) {
//         this._name = name
//     }
// }
 
// const proxy = new Proxy(User, {
//     construct() {
//         const newUser = Reflect.construct(...arguments)
//         userList.push(newUser)
//         return newUser
//     }
// })
 
// new proxy('1')
// new proxy('2')
// new proxy('3')
 
// console.log(userList);
 
const userList = []
function emit(newValue) {
    // console.log(newValue);
}
 
const proxy = new Proxy(userList, {
    set(target, property, value, receiver) {
        const result = Reflect.set(...arguments)
        console.log('result', result);
        if (result) {
            emit(Reflect.get(target, property, receiver))
        }
        return result
    }
})
 
proxy.push('xxx')
proxy.push('yyy')
```
打印四次

result true
result true
result true
result true