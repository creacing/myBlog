---
title: div可以滚动但不显示滚动条
description:
date: 2021-06-15
tags:
  - javascript
---
### 需要个div，

### 第1个固定大小是600*800px

### 第2个不固定大小要用第3个div把个撑开但是这个div必需要有滚动条，

### 第3个固定大小与第1个div保持一致600*800
```html
<html>
 
<head></head>
 
<body>
    <div style="width:800px;height:600px;position:relative;overflow:hidden;background-color:yellow">
        <div style="overflow:auto;position:absolute">
            <div style="width:800px;height:600px">
                <ul>
                    <li>xxxxxx</li>
                    <li>xxxxxx</li>
                    <li>xxxxxx</li>
                    <li>xxxxxx</li>
                    <li>xxxxxx</li>
                    <li>xxxxxx</li>
                    <li>xxxxxx</li>
                    <li>xxxxxx</li>
                    <li>xxxxxx</li>
                    <li>xxxxxx</li>
                    <li>xxxxxx</li>
                    <li>xxxxxx</li>
                    <li>xxxxxx</li>
                    <li>xxxxxx</li>
                    <li>xxxxxx</li>
                    <li>xxxxxx</li>
                    <li>xxxxxx</li>
                    <li>xxxxxx</li>
                    <li>xxxxxx</li>
                    <li>xxxxxx</li>
                    <li>xxxxxx</li>
                    <li>xxxxxx</li>
                    <li>xxxxxx</li>
                    <li>xxxxxx</li>
                    <li>xxxxxx</li>
                    <li>xxxxxx</li>
                    <li>xxxxxx</li>
                    <li>xxxxxx</li>
                    <li>xxxxxx</li>
                    <li>xxxxxx</li>
                    <li>xxxxxx</li>
                </ul>
            </div>
        </div>  
    </div>
</body>
 
</html>
```