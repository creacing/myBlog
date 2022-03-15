---
title: Symbol.asyncIterator
description:
date: 2021-06-30
tags:
  - javascript
---

```javascript
class Emitter {
    constructor(max) {
        this.max = max
        this.asyncIdx = 0
    }
    async *[Symbol.asyncIterator]() {
        while (this.asyncIdx < this.max) {
            yield new Promise((resolve) => resolve(this.asyncIdx++))
        }
    }
}
 
async function asyncCount() {
    let emitter = new Emitter(5)
    console.log('emitter', emitter);
 
    for await (const x of emitter) {
        console.log(x);
    }
}
 
asyncCount()
```