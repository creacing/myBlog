---
title: node执行外部脚本
description: node执行外部脚本
date: 2022-01-26
tags:
  - node
---
```javascript
function execCMD(cmd) {
    const { spawn } = require('child_process');
    const fs = require('fs')
    const iconv = require('iconv-lite');
    const config = {
        encoding: 'cp936',
        binaryEncoding: 'binary'
    }
    const command = spawn(cmd);
 
 
    command.stdout.on('data', (data) => {
        fs.appendFileSync('out.txt', iconv.decode(Buffer.from(data, config.binaryEncoding), config.encoding), { encoding: 'utf8' })
        console.log(`stdout: ${data}`);
    });
 
    command.stderr.on('data', (data) => {
        console.error(`stderr: ${data}`);
 
    });
 
    command.on('close', (code) => {
        console.log(`child process exited with code ${code}`);
    });
 
}
 
 
execCMD(cmd)
```