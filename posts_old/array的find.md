---
title: Array.find
description: 
date: 2021-01-01
tags:
  - javascript
---
```javascript
let arr = [1, 2, 3, 4, 5, 6]

arr.find((element, index, array) => {
    console.log('element', element);
    console.log('index', index);
    console.log('array', array);
})

// element 1
// index 0
// array [ 1, 2, 3, 4, 5, 6 ]
// element 2
// index 1
// array [ 1, 2, 3, 4, 5, 6 ]
// element 3
// index 2
// array [ 1, 2, 3, 4, 5, 6 ]
// element 4
// index 3
// array [ 1, 2, 3, 4, 5, 6 ]
// element 5
// index 4
// array [ 1, 2, 3, 4, 5, 6 ]
// element 6
// index 5
// array [ 1, 2, 3, 4, 5, 6 ]
```