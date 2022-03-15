---
title: js 动态规划法
description:
date: 2021-04-11
tags:
  - 动态规划
---

```javascript
function fb(n) {
    if (n < 2) return n
    const store = new Array(n).fill(0)
    store[0] = 1
    store[1] = 1
    for (let i = 2; i < n; i++) {
        store[i] = store[i - 1] + store[i - 2]
    }
    return store[n - 1]
}
 
console.log(fb(100));
```
### js动态规划法求斐波那契额数列，代码如上。100的斐波那契结果354224848179262000000