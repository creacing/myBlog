---
title: 去除excel的空行
description: 去除excel的空行
date: 2021-06-15
tags:
  - node
---
## 要点

- 初始化 npm init
- 安装依赖 npm install node-xlsx

## 引入依赖
```
const xlsx = require('node-xlsx');
const fs = require('fs')
```

### 读取数据
```javascript
const query = xlsx.parse(fs.readFileSync('t.xls')); //解析现有的文件 t.xls
const result = query[0].data //获取读取的数据
```

### 声明输出格式
```javascript
const tmp = [{
    name: 'xxxx',
    data: []
}]
```

### 去除空行的操作
```javascript
//去除空行 即每行元素的length === 0 每行元素为一个数组
for (const e of result) {
    if (e.length > 0) {
        tmp[0].data.push(e)
    }
}
```

### 构建buffer和写入
```javascript
//构建buffer
const buffer = xlsx.build(tmp);
//写入s.xls
fs.writeFileSync('s.xls', buffer)
```

### excel去除空行完整代码
```javascript
const xlsx = require('node-xlsx'); // 通过npm安装模块 git地址https://github.com/mgcrea/node-xlsx
const fs = require('fs')
 
const query = xlsx.parse(fs.readFileSync('t.xls')); //解析现有的文件 t.xls
 
const result = query[0].data //获取读取的数据
//输出数据格式
const tmp = [{
    name: 'xxxx',
    data: []
}]
 
//去除空行 即每行元素的length === 0 每行元素为一个数组
for (const e of result) {
    if (e.length > 0) {
        tmp[0].data.push(e)
    }
}
//构建buffer
const buffer = xlsx.build(tmp);
//写入s.xls
fs.writeFileSync('s.xls', buffer)
```
