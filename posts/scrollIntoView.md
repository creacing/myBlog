---
title: scrollIntoView
description: scrollIntoView
date: 2021-09-08
tags:
  - html
---

## scrollIntoView()

scrollIntoView()方法存在于所有HTML元素上

## 参数

- alignToTop 布尔值。

true：窗口滚动后元素的顶部与视口顶部对齐。

false：窗口滚动后元素的底部与视口底部对齐。

- scrollIntoViewOptions 是一个选项对象

behavior：定义过渡动画，可取值"smooth"和"auto"，默认为"auto"。

block：定义垂直方向的对齐，可取值"start"、"center"、"end"和"nearest"，默认为"start"。

inline：定义水平方向的对齐，可取值"start"、"center"、"end"和"nearest"，默认为"nearest"。

- 不传参数等同于alignToTop为true

这个方法可以用来在页面上发生某个事件时引起用户关注。把焦点设置到一个元素上也会导致浏览器将元素滚动到可见位置。