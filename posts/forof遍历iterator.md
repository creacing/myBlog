---
title: 给对象部署iterator 来使用for of遍历
description:
date: 2021-04-07
tags:
  - javascript
---

```javascript
//部署iterator
function MyIter(array) {
    this.array = array
}
MyIter.prototype[Symbol.iterator] = function () {
    let index = 0
    let next = () => {
        if (index < this.array.length) {
            return {
                value: this.array[index++],
                done: false
            }
        } else {
            return { value: undefined, done: true }
        }
    }
    return { next }
}
 
const myIter = new MyIter(["a", "b"])
console.log(myIter); //MyIter { array: [ 'a', 'b' ] }
 
for (let i of myIter) {
    console.log(i);//a,b
}
```