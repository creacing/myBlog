---
title: 批量rename(批量重命名图片)
description: 
date: 2022-04-12
tags:
  - node
---
### 批量给图片重命名 或者 按照 0 1 2 3 的顺序来命名
```javascript
const fs = require('fs')

const pictures = fs.readdirSync('./articlesPictures')
let count = 0
for (const picture of pictures) {
    console.log(picture);
    fs.renameSync(`./articlesPictures/${picture}`, `./articlesPictures/${count++}.jpg`)
}
```