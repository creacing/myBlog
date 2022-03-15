---
title: Z 字形变换
description:
date: 2021-04-15
tags:
  - javascript
---

```javascript
var convert = function (s, numRows) {
    //numRows行
    if (numRows < 2) {
        return s
    }
    const mid = numRows - 2 //中间列
    const len = s.length
    //求列
 
    if (len < 2) {
        return s
    }
    let count = Math.floor(len / (numRows + mid)) * (mid + 1)
 
    // console.log(count, 'count');
    const tmp = len % (numRows + mid)
    // console.log(tmp, 'tmp');
    if (tmp < numRows) {
        count = count + 1
    } else {
        count = count + 1 + (tmp - numRows)
    }
    console.log(count);
    //生成二维数组 numRows行 count列
    const store = new Array(numRows).fill('').map(() => {
        return new Array(count).fill('')
    })
    let j = 0, k = 0, flag = true
    for (let i = 0; i < len; i++) {
        if (j === numRows) {
            flag = false
            j = j - 2
            k++
        }
        if (j === 0) {
            flag = true
        }
        if (flag) {
            store[j][k] = s[i]
            j++
        } else {
            store[j][k] = s[i]
            j--
            k++
        }
 
    }
    const result = []
    for (const e of store) {
        for (const f of e) {
            if (f !== '') {
                result.push(f)
            }
        }
    }
 
 
    return result.join('')
 
 
};
```