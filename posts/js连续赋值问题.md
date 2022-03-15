---
title: js连续赋值问题
description:
date: 2021-06-07
tags:
  - javascript
---

```javascript
let a = {
    b: 42
}
 
let d = a
a.x = a = { c: 44 } //最先调用的是 a.x (因为 . 的优先级高于 = ) a.x 为undefined 这里的a指向 { b: 42 }
// 然后a指向{ c: 44 } 再把指向{ b: 42 }也就是之前的a的x赋值为{ c: 44 }
 
console.log('a.x', a.x); //这里的a指向赋值之后的a即{ c: 44 }
console.log('d', d); //d { b: 42, x: { c: 44 } }
 
 
let a = { n: 1 };
 
let b = a
 
a.n = a = { n: 2 };
console.log(a.n); // 输出2
console.log(b);// 输出{ n: { n: 2 } }
</style>
```