---
title: 递归实现indexof 实现 strStr()
description:
date: 2021-05-22
tags:
  - javascript
---

```javascript
var strStr = function (haystack, needle) {
 
    if (needle === '') {
        return 0
    }
 
    if (haystack === '' && needle !== '') {
        return -1
    }
 
 
    if (haystack === '' && needle === '') {
        return 0
    }
    let result = []
 
    for (let i = 0; i < haystack.length; i++) {
        const arr = [0, 0]
 
        if (haystack[i] === needle[0]) {
            let tmpStr = haystack.slice(i)
            if (tmpStr.length >= needle.length) {
                result.push(handle(haystack.slice(i), needle, arr, i))
            }
        } else {
            result.push(-1)
        }
 
    }
    const out = []
    for (const e of result) {
        if (e > -1) {
            out.push(e)
        }
    }
    if (out.length === 0) {
        return -1
    }
    return Math.min(...out)
};
function handle(haystack, needle, arr, index) {
    if (arr[0] === haystack.length && arr[1] !== needle.length) {
        return -1
    }
 
    if (arr[1] === needle.length) {
 
        return arr[0] - arr[1] + index
    }
 
    const i = arr[0]
    const j = arr[1]
 
    if (haystack[i] === needle[j]) {
        arr[1]++
    }
    if (haystack[i] !== needle[j]) {
        arr[1] = 0
    }
 
    arr[0]++
 
    return handle(haystack, needle, arr, index)
}
 
// console.log(strStr("hello", "ll"));
console.log(strStr("a", "a"));
```