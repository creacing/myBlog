---
title: 禁用右键F12和CTRL+C
description:
date: 2021-11-08
tags:
  - html
---

```html
<!DOCTYPE html>
<html lang="en">
 
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
 
<body>
    <p>dahfkjfhaflakdhfadhfaldfhlak</p>
 
    <script>
        //或者这样写
        document.oncontextmenu = function () {
            alert('菜单栏已经禁用');
            return false;
        }
 
        // //0是点击了鼠标左键，1中间滚轮键，2右键
        // document.onmousedown = function (event) {
        //     if (event.button == 1 || event.button == 2) {
        //         document.oncontextmenu = function () {
        //             alert('菜单栏已经禁用');
        //             return false;
        //         }
        //     }
        // };
        // document.onselectstart = function (event) {
        //     event.returnValue = false
        // }
 
        document.onkeydown = document.onkeyup = document.onkeypress = function () {
            if (window.event.keyCode == 67 & 0x1f) {
                alert("ctrl+c已禁用");
                window.event.returnValue = false; //消发生事件源元素的默认动作
            }
 
            if (window.event.keyCode == 123) {
                alert("F12已禁用");
                window.event.returnValue = false;
            }
        }
    </script>
</body>
 
</html>
```