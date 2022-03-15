---
title: electron + vue + element ui设置table背景颜色透明
description:
date: 2021-06-24
tags:
  - javascript
---

```javascript
<template>
  <div>
    <el-table
      :data="tableData"
      style="width: 100%"
      :header-cell-style="headerCellStyle"
    >
      <el-table-column prop="date" label="日期" width="180"> </el-table-column>
      <el-table-column prop="name" label="姓名" width="180"> </el-table-column>
      <el-table-column prop="address" label="地址"> </el-table-column>
    </el-table>
  </div>
</template>
 
    <script>
export default {
  name: "Main",
  data() {
    return {
      tableData: [
        {
          date: "2016-05-02",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄",
        },
        {
          date: "2016-05-04",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1517 弄",
        },
        {
          date: "2016-05-01",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1519 弄",
        },
        {
          date: "2016-05-03",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1516 弄",
        },
      ],
    };
  },
  methods: {
    headerCellStyle() {
      return "background-color:transparent;color:#000;";
    },
  },
};
</script>
 
<style scoped>
/deep/ .el-table,
.el-table__expanded-cell {
  background-color: transparent;
}
 
/deep/ .el-table tr {
  background-color: transparent !important;
}
</style>
```