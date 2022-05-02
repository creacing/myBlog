---
title: hover选择哪一个元素问题
description: 
date: 2022-05-2
tags:
  - css
---

### path与svg

```
.myDiv :hover{//:hover前有空格
    background: black;
}
.myDiv:hover{//:hover前没有空格
    background: black;
}
```
```
第一种:hover选择的是.myDiv的所有子元素，而第二种选择的是.myDiv本身。
第一种会将.myDiv所有子元素背景设为black
第二种会将.myDiv自己的背景设为black
```
