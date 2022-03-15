---
title: echart纵坐标值单位修改
description: 
date: 2021-08-13
tags:
  - javascript
---
## 给yAxis的axisLabel设置formatter方法
```javascript
xxxxxxx.yAxis.axisLabel = {undefined

  formatter: function(v){undefined

    return v/10000 // 给纵坐标的值统一除以10000 就变成了以万为单位

    }

}
```