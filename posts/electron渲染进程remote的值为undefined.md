---
title: electron渲染进程let { remote } = require(‘electron‘)； remote的值为undefined
description: 
date: 2021-08-23
tags:
  - electron
---

需要在主进程中的new BrowserWindow 中的webPreferences中添加 enableRemoteModule: true 