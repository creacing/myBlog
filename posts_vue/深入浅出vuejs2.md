---
title: 深入浅出vue.js笔记
description: 
date: 2022-5-29
tags:
  - vue
---

### 实例化vue.js
在实例化vue.js时会有一个初始化流程、会向vue.js实例上新增一些方法
 this.$otions 是其中之一
 他可以访问到实例化vue.js 时用户设置的参数 eg: template render

 如果实例化vue 时给出render 选项  那么template是无效的 
 因为不会进入模板编译流程 而是直接使用render 选项中提供的函数

 vue官方： 如果没有render 那么就需要获取模板并将模板编译成渲染函数 即render 函数赋值给render选项
