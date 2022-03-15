---
title: vue2.0 自定义组件
description:
date: 2021-04-01
tags:
  - javascript
---

```javascript
方式一
 
 
<!DOCTYPE html>
<html>
 
<head></head>
 
<body>
    <div id="app">
        <custom-button></custom-button>
    </div>
    <script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>
    <script type="text/javascript">
        const CustomButton = {
            template: '<button>自定义按钮</button>'
        }
        new Vue({
            el: '#app',
            components: {
                CustomButton
            }
        })
    </script>
</body>
 
</html>
```