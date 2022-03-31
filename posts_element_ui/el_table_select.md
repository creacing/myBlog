---
title: element table select 表格复选框
description: 
date: 2022-03-29
tags:
  - element
---
### table 中添加
```javascript
<el-table-column
    v-if="selection === true" // 启用select
    type="selection" //表格样式为复选框
    :reserve-selection="reserveSelection" //保存选择的记录
    :selectable="fn" //仅对 type=selection 的列有效，类型为 Function，Function 的返回值用来决定这一行的 CheckBox 是否可以勾选
    width="30"//width 过小复选框后方会出现 ..
/>
```
### 持久化 添加
```javascript
:row-key="(row)=>{ return row.key}" //每行唯一的key
:reserve-selection="true"
```
### 选中事件
```javascript
@select="selectRow"
selectRow(row :Array){}
```