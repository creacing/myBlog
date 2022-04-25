---
title: element table展开行只显示一行
description: 
date: 2022-04-22
tags:
  - element
---
### 实现element table展开行只显示一行 需要三步
###  @expand-change="expandChange"
```javascript
@expand-change="expandChange"

data(){
    return {
        expandRowKeys:[]
    }
}


expandChange(row) {
    this.expandRowKeys = [row.id];
},
```

### :expand-row-keys="expandRowKeys"
```javascript
:expand-row-keys="expandRowKeys"
```
### :row-key="rowKey"

```javascript
:row-key="rowKey"

rowKey(row) {
    return row.id;
},
```

### 源码
```javascript
<template>
  <el-table
    :data="tableData"
    style="width: 100%"
    @expand-change="expandChange"
    :expand-row-keys="expandRowKeys"
    :row-key="rowKey"
  >
    <el-table-column type="expand">
      <template slot-scope="props">
        <el-form label-position="left" inline class="demo-table-expand">
          <el-form-item label="商品名称">
            <span>{{ props.row.name }}</span>
          </el-form-item>
          <el-form-item label="所属店铺">
            <span>{{ props.row.shop }}</span>
          </el-form-item>
          <el-form-item label="商品 ID">
            <span>{{ props.row.id }}</span>
          </el-form-item>
          <el-form-item label="店铺 ID">
            <span>{{ props.row.shopId }}</span>
          </el-form-item>
          <el-form-item label="商品分类">
            <span>{{ props.row.category }}</span>
          </el-form-item>
          <el-form-item label="店铺地址">
            <span>{{ props.row.address }}</span>
          </el-form-item>
          <el-form-item label="商品描述">
            <span>{{ props.row.desc }}</span>
          </el-form-item>
        </el-form>
      </template>
    </el-table-column>
    <el-table-column label="商品 ID" prop="id"> </el-table-column>
    <el-table-column label="商品名称" prop="name"> </el-table-column>
    <el-table-column label="描述" prop="desc"> </el-table-column>
  </el-table>
</template>

<script>
export default {
  methods: {
    expandChange(row) {
      //再次点击关闭
      if (row.id === this.expandRowKeys[0].id) {
        this.expandRowKeys = [];
      } else {
        this.expandRowKeys = [row.id];
      }
    },
    rowKey(row) {
      return row.id;
    },
  },
  data() {
    return {
      expandRowKeys: [],
      tableData: [
        {
          id: "12987122",
          name: "好滋好味鸡蛋仔",
          category: "江浙小吃、小吃零食",
          desc: "荷兰优质淡奶，奶香浓而不腻",
          address: "上海市普陀区真北路",
          shop: "王小虎夫妻店",
          shopId: "10333",
        },
        {
          id: "12987123",
          name: "好滋好味鸡蛋仔",
          category: "江浙小吃、小吃零食",
          desc: "荷兰优质淡奶，奶香浓而不腻",
          address: "上海市普陀区真北路",
          shop: "王小虎夫妻店",
          shopId: "10333",
        },
        {
          id: "12987125",
          name: "好滋好味鸡蛋仔",
          category: "江浙小吃、小吃零食",
          desc: "荷兰优质淡奶，奶香浓而不腻",
          address: "上海市普陀区真北路",
          shop: "王小虎夫妻店",
          shopId: "10333",
        },
        {
          id: "12987126",
          name: "好滋好味鸡蛋仔",
          category: "江浙小吃、小吃零食",
          desc: "荷兰优质淡奶，奶香浓而不腻",
          address: "上海市普陀区真北路",
          shop: "王小虎夫妻店",
          shopId: "10333",
        },
      ],
    };
  },
};
</script>

<style>
.demo-table-expand {
  font-size: 0;
}
.demo-table-expand label {
  width: 90px;
  color: #99a9bf;
}
.demo-table-expand .el-form-item {
  margin-right: 0;
  margin-bottom: 0;
  width: 50%;
}
</style>
```