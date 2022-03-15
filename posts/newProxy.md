---
title: js代理 new Proxy()
description: 
date: 2021-08-17
tags:
  - javascript
---
```javascript
//代理函数
//获取数组中值的function
function median(...nums) {
    return nums.sort()[Math.floor(nums.length / 2)]
}
 
const proxy = new Proxy(median, {
    apply(target, thisArg, argumentsList) {
 
        console.log('target', target);
        console.log('thisArg', thisArg);
        for (const arg of argumentsList) {
            if (typeof arg !== 'number') {
                throw 'Non-number argument provided'
            }
        }
        return Reflect.apply(...arguments)
    }
})
 
console.log(proxy(4, 7, 1));
console.log(proxy(4, '7', 1)); //报错
 
//代理构造函数
class User {
    constructor(id) {
        this.id_ = id
    }
}
const proxy = new Proxy(User, {
    construct(target, argumentsList, newTarget) {
        if (argumentsList[0] === undefined) {
            throw 'User cannot be instantiated without id'
        } else {
            return Reflect.construct(...arguments)
        }
    }
})
 
new proxy(1)
new proxy() //报错

```