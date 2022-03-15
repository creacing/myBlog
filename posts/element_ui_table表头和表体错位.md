---
title: chrome 下 缩放element ui 的table组件会导致表头和表体错位
description:
date: 2021-10-19
tags:
  - element_ui
---

chrome 下 缩放element ui 的table组件会导致表头和表体错位
 
在index.html或者入口文件App.vue中添加样式
 
亲测App.vue中无效的话就在index.html中添加
```
body .el-table th.gutter{
    display: table-cell!important;
}
```
给类名为 gutter的表头单元格添加display: table-cell!important;

display: table-cell

这个属性让元素变成表格单元

配合display:table可以模拟table的布局属性