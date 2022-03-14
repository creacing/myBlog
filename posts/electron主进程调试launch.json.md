---
title: vscode electron 主进程调试 launch.json
description: 
date: 2021-8-24
tags:
  - electron
---

```json
{
    "configurations": [
        {
            "name": "调试主进程", //配置名称
            "type": "node", //调试环境
            "request": "launch",
            "cwd": "${workspaceRoot}",
            "runtimeExecutable": "${workspaceRoot}/node_modules/.bin/electron", //批处理文件 用于启动Electron ${workspaceRoot}为正在进行调试的程序的工作目录的绝对路径
            "window": {
                "runtimeExecutable": "${workspaceRoot}/node_modules/.bin/electron.cmd",
            },
            "args": [ //启动参数 此处的值是主程序的简写形式"./index.js"也可
                "."
            ],
            "outputCapture": "std"
        }
    ]
}
```