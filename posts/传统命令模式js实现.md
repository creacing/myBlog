---
title: 传统命令模式js实现
description:
date: 2021-04-14
tags:
  - javascript
---

```javascript
<!DOCTYPE html>
<html>
 
<head></head>
 
<body>
    <button id="execute">打开</button>
    <button id="undo">关闭</button>
</body>
<script>
    //接收者(执行者)
    const TV = {
        open: function () {
            console.log('打开电视机');
        },
        close: function () {
            console.log('关闭电视机');
        }
    }
    //调用者
    const OpenTvCommand = function (receiver) {
        this.receiver = receiver
    }
    OpenTvCommand.prototype.execute = function () {
        this.receiver.open()
    }
    OpenTvCommand.prototype.undo = function () {
        this.receiver.close()
    }
    //执行
    const setCommand = function (command) {
        document.getElementById('execute').onclick = function () {
            command.execute()
        }
        document.getElementById('undo').onclick = function () {
            command.undo()
        }
    }
 
    setCommand(new OpenTvCommand(TV))
</script>
 
</html>
```
### 调用者-接收者(执行者)-执行