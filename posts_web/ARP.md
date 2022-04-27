---
title: 根据ip查mac地址
description: 
date: 2022-4-26
tags:
  - DNS
---
### yarn add node-arp
```javascript
const arp = require('node-arp');

arp.getMAC('192.168.0.1', function(err, mac) {
    if (!err) {
        console.log(mac);
    } else {
        console.log('mac is:', mac);
    }
});
```