---
title: js实现sleep
description: js实现sleep
date: 2021-01-12
tags:
  - javascript
---

```javascript
async function sleep(delay) {
    return new Promise(resolve => {
        setTimeout(resolve, delay)
    })
}
 
async function foo(delay) {
    const t0 = Date.now()
    await sleep(delay)
    console.log(Date.now() - t0);
}
foo(5000)//5006
```

