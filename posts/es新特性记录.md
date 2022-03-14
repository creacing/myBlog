---
title: es新特性记录
description: 
date: 2021-12-20
tags:
  - javascript
---

```javascript
const arr = [1, 2, 3, [4, 5], [6, [7, [8]]]]
//falt(n) n为数组拍平的层数
console.log(arr.flat(1));
//[ 1, 2, 3, 4, 5, 6, [ 7, [ 8 ] ] ]
console.log(arr.flat(Infinity));
//[ 1, 2, 3, 4, 5, 6, 7, 8 ]
const arr = ['1_2', '2_3', '3_4']
console.log(arr.map(x => x.split('_')));
// [ [ '1', '2' ], [ '2', '3' ], [ '3', '4' ] ]
console.log(arr.flatMap(x => x.split('_')));
// [ '1', '2', '2', '3', '3', '4' ]
const str = '  xxs   '
console.log(str.trimStart);
console.log(str.trimEnd);
console.log(str.trim);
console.log(str.trimLeft);
console.log(str.trimRight);
// [Function: trimStart]
// [Function: trimEnd]
// [Function: trim]
// [Function: trimStart]
// [Function: trimEnd]
console.log(str.trimStart().length);
console.log(str.trimEnd().length);
console.log(str.trim().length);
console.log(str.trimLeft().length);
console.log(str.trimRight().length);
// 6
// 5
// 3
// 6
// 5
console.log(0 ?? '1');
console.log('' ?? '2');
console.log(false ?? '3');
console.log(null ?? '4');
console.log(undefined ?? '5');
// 0
//
// false
// 4    
// 5  
const demo = {}
// console.log(demo.foo.bar); //TypeError: Cannot read properties of undefined (reading 'bar')
console.log(demo.foo?.bar); //undefined
// BIGINT
console.log(typeof 1n);
const obj = { bar: 'foo', baz: 'bas' }
console.log(Object.getOwnPropertyDescriptors(obj));
// {
//     bar: {
//       value: 'foo',     
//       writable: true,   
//       enumerable: true, 
//       configurable: true
//     },
//     baz: {
//       value: 'bas',     
//       writable: true,   
//       enumerable: true, 
//       configurable: true
//     }
//   }
const foo = new SharedArrayBuffer(10)
console.log(foo.byteLength);//10
console.log(foo);
// SharedArrayBuffer {
//     [Uint8Contents]: <00 00 00 00 00 00 00 00 00 00>,
//     byteLength: 10
//   }
```




