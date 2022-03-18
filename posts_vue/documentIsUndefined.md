 ---
title:  Hydration completed but contains mismatches. 报错
description: 
date: 2022-03-18
tags:
  - vue
---
### 起因

给弹框设置点击界面消失的功能

### 打包成功的情况下 浏览器报错

 Hydration completed but contains mismatches.

### 打包失败的情况下

yarn build 报 document is undefined

### 原因

构建项目的时候dom节点还未渲染出来就去访问document

### 解决方法
```javascript
onBeforeMount(() => {
  (function () {
    document.addEventListener("click", (e) => {
      showSearchDiolag.value = false;
    });
    setTimeout(() => {
      const dialog = document.getElementsByClassName("search-dialog")[0];
      dialog.addEventListener("click", (e) => {
        e.stopPropagation();
      });
      const searchBtn = document.getElementsByClassName("search-btn")[0];
      searchBtn.addEventListener("click", (e) => {
        e.stopPropagation();
      });
    });
  })();
});
```