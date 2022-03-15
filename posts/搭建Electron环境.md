---
title: 搭建Electron环境
description:
date: 2021-06-12
tags:
  - electron
---

### 1. 升级vue-cli到3.0以上版本

### 2. vue create demo

### 3. cd demo

### 4. vue add electron-builder

### 5. npm install --save-dev electron 

这里用cnpm安装 npm安装不上

### 6. npm run electron:serve

>启动项目

每次npm run electron:build 会很慢甚至无法下载
设置Electron镜像地址
npm config set electron_mirror https://mirrors.huaweicloud.com/electron/

设置electron_builder_binaries镜像地址
npm config set electron_builder_binaries_mirror https://mirrors.huaweicloud.com/electron-builder-binaries/

控制台快捷键ctrl+shift+i
