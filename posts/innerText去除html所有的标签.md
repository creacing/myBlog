---
title: innerText去除html所有的标签
description: innerText去除html所有的标签
date: 2021-09-09
tags:
  - html
---

```html
<html>
<head></head>
<body>
    <div id='first'>
        <div>
            start:
            <span>1</span>
            <span>2</span>
            <span>3</span>
            <span>4</span>
            <span>5</span>
            <span>6</span>
            :end
        </div>
    </div>
    <div id='second'></div>
    <script>
        const first = document.getElementById('first')
        const firstinnerText = first.innerText
        const second = document.getElementById('second')
        second.innerText = firstinnerText
        //去除所有的标签
    </script>
</body>
</html>
```