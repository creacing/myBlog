---
title: vue2 自定义事件
description:
date: 2021-04-03
tags:
  - javascript
---

```javascript
<!DOCTYPE html>
<html>
 
<head></head>
 
<body>
    <div id="app">
    </div>
    <script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>
    <script type="text/javascript">
        const events = new Vue()
        let count = 0
        function logCount() {
            count++
            console.log(`打印了-${count}-次`);
        }
        events.$on('test-event', logCount) //监听事件
        setInterval(() => {
            events.$emit('test-event')//每秒 触发事件
        }, 1000)
        setTimeout(() => {
            events.$off('test-event')//十秒后 移除事件
        }, 10000)
    </script>
</body>
 
</html>
```