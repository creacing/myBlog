---
title: element ui table 点击行变色
description:
date: 2021-03-23
tags:
  - element_ui
---

```javascript
<template>
  <el-table
    :data="tableData"
    style="width: 100%"
    :row-class-name="tableRowClassName"
    @row-click="rowClick"
    :row-style="selectedstyle"
  >
    <el-table-column prop="date" label="日期" width="180"> </el-table-column>
    <el-table-column prop="name" label="姓名" width="180"> </el-table-column>
    <el-table-column prop="address" label="地址"> </el-table-column>
  </el-table>
</template>
 
  <script>
export default {
  data() {
    return {
      getIndex: null,
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
    //设置行对象(row)的样式(style)
    selectedstyle({ row, rowIndex }) {
      if (this.getIndex === rowIndex) {
        return {
          "background-color": "#f0f9eb",
        };
      }
    },
    //为行对象(row)设置index属性
    tableRowClassName({ row, rowIndex }) {
      row.index = rowIndex;
    },
    //行点击事件,这里获取到的行对象(row)是没有index属性的
    rowClick(row) {
      this.getIndex = row.index;
    },
  },
};
</script>
```