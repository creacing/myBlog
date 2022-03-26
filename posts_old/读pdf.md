---
title: 读pdf
description: 
date: 2021-01-01
tags:
  - node
---
```javascript
const fs = require('fs')

const res = fs.readFileSync('./我的简历3.0.pdf', 'utf-8').toString()

console.log(res);
```