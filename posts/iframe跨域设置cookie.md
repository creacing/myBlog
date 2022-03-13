---
title: iframe跨域设置cookie
description: iframe跨域设置cookie
date: 2021-09-28
tags:
  - cookie
---

```javascript
<?php 
    header("Set-Cookie: test=xxx;Secure;SameSite=None");
?>
```