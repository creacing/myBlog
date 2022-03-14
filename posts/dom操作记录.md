---
title: dom操作记录
description: 
date: 2020-11-11
tags:
  - javascript
---

```
querySelectorAll返回的是一个静态的快照

document.activeElement始终包含当前拥有焦点的dom元素

##### HTMLDocument扩展

1.readyState属性

document.readyState

返回值 loading 表示文档正在加载 complete 表示文档加载完成

作用 用于判断文档是否加载完毕

基本用法

if(document.readyState == "complete"){
    //execute action

}

2.compatMode

document.compatMode

返回值 标准模式‘CSS1Compat’ 混杂模式‘BackCompat’

作用 用于指示浏览器当前处于什么渲染模式

3.head属性

document.head

指向文档的head元素
```

