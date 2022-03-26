---
title: 花朵动画特效
description: 
date: 2021-01-01
tags:
  - html
---
```html
<html>

<head></head>
<style>
    .petal {
        position: fixed;
        top: 30%;
        left: 50%;
        background: rgba(123, 104, 236, 0.3);
        opacity: 0.4;
        width: 300px;
        height: 300px;
        border-radius: 300px 0px;
        /* 旋转基点 */
        transform-origin: 0px 300px;
        /* 逆时针旋转45度 */
        transform: rotate(-45deg);
    }
    
    .div2 {
        /* 动画名称 持续时间 时间函数 延迟时间 循环次数 动画方向 播放装态 填充模式 */
        animation: a2 2s ease 1 forwards;
    }
    
    .div3 {
        animation: a3 2s ease 1 forwards;
    }
    
    .div4 {
        animation: a4 2s ease 1 forwards;
    }
    
    .div5 {
        animation: a5 2s ease 1 forwards;
    }
    
    .div6 {
        animation: a6 2s ease 1 forwards;
    }
    
    .div7 {
        animation: a7 2s ease 1 forwards;
    }
    
    .div8 {
        animation: a8 2s ease 1 forwards;
    }
    
    .div9 {
        animation: a9 2s ease 1 forwards;
    }
    
    .div10 {
        animation: a10 2s ease 1 forwards;
    }
    
    .div11 {
        animation: a11 2s ease 1 forwards;
    }
    
    .div12 {
        animation: a12 2s ease 1 forwards;
    }
    
    .div13 {
        animation: a13 2s ease 1 forwards;
    }
    
    .div14 {
        animation: a14 2s ease 1 forwards;
    }
    
    .div15 {
        animation: a15 2s ease 1 forwards;
    }
    
    .div16 {
        animation: a16 2s ease 1 forwards;
    }
    
    .div17 {
        animation: a17 2s ease 1 forwards;
    }
    
    .div18 {
        animation: a18 2s ease 1 forwards;
    }
    
    @keyframes a2 {
        from {
            transform: rotate(-45deg);
        }
        to {
            transform: rotate(-25deg);
        }
    }
    
    @keyframes a3 {
        from {
            transform: rotate(-45deg);
        }
        to {
            transform: rotate(-5deg);
        }
    }
    
    @keyframes a4 {
        from {
            transform: rotate(-45deg);
        }
        to {
            transform: rotate(15deg);
        }
    }
    
    @keyframes a5 {
        from {
            transform: rotate(-45deg);
        }
        to {
            transform: rotate(35deg);
        }
    }
    
    @keyframes a6 {
        from {
            transform: rotate(-45deg);
        }
        to {
            transform: rotate(55deg);
        }
    }
    
    @keyframes a7 {
        from {
            transform: rotate(-45deg);
        }
        to {
            transform: rotate(75deg);
        }
    }
    
    @keyframes a8 {
        from {
            transform: rotate(-45deg);
        }
        to {
            transform: rotate(95deg);
        }
    }
    
    @keyframes a9 {
        from {
            transform: rotate(-45deg);
        }
        to {
            transform: rotate(115deg);
        }
    }
    
    @keyframes a10 {
        from {
            transform: rotate(-45deg);
        }
        to {
            transform: rotate(135deg);
        }
    }
    
    @keyframes a11 {
        from {
            transform: rotate(-45deg);
        }
        to {
            transform: rotate(155deg);
        }
    }
    
    @keyframes a12 {
        from {
            transform: rotate(-45deg);
        }
        to {
            transform: rotate(175deg);
        }
    }
    
    @keyframes a13 {
        from {
            transform: rotate(-45deg);
        }
        to {
            transform: rotate(195deg);
        }
    }
    
    @keyframes a14 {
        from {
            transform: rotate(-45deg);
        }
        to {
            transform: rotate(215deg);
        }
    }
    
    @keyframes a15 {
        from {
            transform: rotate(-45deg);
        }
        to {
            transform: rotate(235deg);
        }
    }
    
    @keyframes a16 {
        from {
            transform: rotate(-45deg);
        }
        to {
            transform: rotate(255deg);
        }
    }
    
    @keyframes a17 {
        from {
            transform: rotate(-45deg);
        }
        to {
            transform: rotate(275deg);
        }
    }
    
    @keyframes a18 {
        from {
            transform: rotate(-45deg);
        }
        to {
            transform: rotate(295deg);
        }
    }
</style>

<body>
    <div class="div1 petal"></div>
    <div class="div2 petal"></div>
    <div class="div3 petal"></div>
    <div class="div4 petal"></div>
    <div class="div5 petal"></div>
    <div class="div6 petal"></div>
    <div class="div7 petal"></div>
    <div class="div8 petal"></div>
    <div class="div9 petal"></div>
    <div class="div10 petal"></div>
    <div class="div11 petal"></div>
    <div class="div12 petal"></div>
    <div class="div13 petal"></div>
    <div class="div14 petal"></div>
    <div class="div15 petal"></div>
    <div class="div16 petal"></div>
    <div class="div17 petal"></div>
    <div class="div18 petal"></div>
</body>

</html>
```