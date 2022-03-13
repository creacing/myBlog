---
title: element-ui的table添加递增序号
description: element-ui的table添加递增序号
date: 2021-10-27
tags:
  - element_ui
---

```javascript
data() {
    return {
      pagger:{
        dataTotal: 1000,  // 数据总数
        pagesize:10,  //每页的数据条数
        currentPage:1,//当前页
      }
        
    }
}
 
 
<el-table-column label="序号" width="100">
    <template slot-scope="scope">
        <span>{{(pagger.currentPage - 1) * pagger.pagesize + scope.$index + 1}}</span>
    </template>
</el-table-column>
```