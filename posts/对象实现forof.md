---
title: 对象实现for of
description: 
date: 2021-07-25
tags:
  - javascript
---
```javascript
const obj = {
    a: 11,
    b: 22,
    c: 33,
    [Symbol.iterator]: function* () {
        const arr = Object.keys(this)
        for (let i = 0; i < arr.length; i++) {
            yield {
                key: arr[i],
                value: this[arr[i]]
            }
        }
    }
}
 
for (const e of obj) {
    console.log(e);
}
```
