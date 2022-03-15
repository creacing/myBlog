---
title: element ui 搭建复杂表格
description:
date: 2021-04-24
tags:
  - element_ui
---
![域名配置](/ympz1.png)
```javascript
 <template>
  <div>
    <el-table
      :data="tableData"
      :span-method="arraySpanMethod"
      style="width: 100%; margin-top: 20px"
      :header-cell-style="headerStyle"
    >
      <el-table-column
        prop="id"
        label="123"
        ref="pj"
        colspan="2"
        align="center"
      >
      </el-table-column>
 
      <el-table-column>
        <el-table-column prop="f1"> </el-table-column>
        <el-table-column prop="f2"> </el-table-column>
      </el-table-column>
 
      <el-table-column prop="rrr" label="444" align="center"> </el-table-column>
 
      <el-table-column prop="amount1" label="555" align="center">
        <el-table-column prop="amount1" label="666" align="center">
          <el-table-column prop="amount1" label="77" align="center">
          </el-table-column>
          <el-table-column prop="amount1" label="88" align="center">
          </el-table-column>
        </el-table-column>
        <el-table-column prop="amount1" label="99" align="center">
          <el-table-column prop="amount1" label="1111" align="center">
          </el-table-column>
          <el-table-column prop="amount1" label="222" align="center">
          </el-table-column>
        </el-table-column>
      </el-table-column>
 
      <el-table-column prop="amount3" label="cccc" align="center">
      </el-table-column>
    </el-table>
  </div>
</template>
 
  <script>
export default {
  name: "HelloWorld",
  data() {
    return {
      formData: {},
      tableData: [
        {
          f1: "xxxxxx",
          id: "qqqqq",
          name: "王小虎",
          amount1: "234",
          amount2: "3.2",
          amount3: 10,
        },
        {
          f1: "sssss",
          id: "",
          name: "王小虎",
          amount1: "165",
          amount2: "4.43",
          amount3: 12,
        },
        {
          f1: "dddddddddd",
          id: "",
          name: "王小虎",
          amount1: "324",
          amount2: "1.9",
          amount3: 9,
        },
        {
          f1: "rrrrrrr",
          f2: "ddddd",
          id: "",
          name: "王小虎",
          amount1: "621",
          amount2: "2.2",
          amount3: 17,
        },
        {
          id: "",
          f2: "fffffffffff",
          name: "cccccccccccc",
          amount1: "539",
          amount2: "4.1",
          amount3: 15,
        },
        {
          id: "",
          f2: "22222222",
          name: "王小虎",
          amount1: "539",
          amount2: "4.1",
          amount3: 15,
        },
        {
          id: "rrrrrrr",
          name: "mmmmmm",
          amount1: "539",
          amount2: "4.1",
          amount3: 15,
        },
        {
          f1: "xxxxxxx",
          id: "ggggggg",
          name: "王小虎",
          amount1: "539",
          amount2: "4.1",
          amount3: 15,
        },
        {
          id: "",
          f1: "nnnnnnnn",
          name: "王小虎",
          amount1: "539",
          amount2: "4.1",
          amount3: 15,
        },
        {
          id: "",
          f1: "vvvvvvvvvv",
          name: "王小虎",
          amount1: "539",
          amount2: "4.1",
          amount3: 15,
        },
        {
          id: "",
          f1: "ggg",
          f2: "bbbb",
          name: "王小虎",
          amount1: "539",
          amount2: "4.1",
          amount3: 15,
        },
        {
          id: "",
          f2: "hhhhhh",
          name: "王小虎",
          amount1: "539",
          amount2: "4.1",
          amount3: 15,
        },
        {
          id: "",
          f2: "tttttttt",
 
          name: "王小虎",
          amount1: "539",
          amount2: "4.1",
          amount3: 15,
        },
      ],
    };
  },
  methods: {
    headerStyle({ row, column, rowIndex, columnIndex }) {
      if (rowIndex === 1 && columnIndex === 0) {
        return { display: "none" };
      }
 
      if (rowIndex === 1 && columnIndex === 1) {
        return { display: "none" };
      }
 
      if (rowIndex === 0 && columnIndex === 1) {
        return { display: "none" };
      }
 
      if (rowIndex === 0 && columnIndex === 0) {
        this.$nextTick(() => {
          document
            .getElementsByClassName(column.id)[0]
            .setAttribute("colSpan", 3);
        });
      }
    },
    arraySpanMethod({ row, column, rowIndex, columnIndex }) {
      if (columnIndex === 0) {
        if (rowIndex === 0) {
          return [6, 1];
        } else if (rowIndex === 6) {
          return [1, 3];
        } else if (rowIndex === 7) {
          return [6, 1];
        } else {
          return [0, 0];
        }
      }
 
      if (columnIndex === 1) {
        if (rowIndex === 0 || rowIndex === 1 || rowIndex === 2) {
          return [1, 2];
        } else if (rowIndex === 3) {
          return [3, 1];
        } else if (rowIndex === 7 || rowIndex === 8 || rowIndex === 9) {
          return [1, 2];
        } else if (rowIndex === 10) {
          return [3, 1];
        } else {
          return [0, 0];
        }
      } else if (columnIndex === 2) {
        if (
          rowIndex === 0 ||
          rowIndex === 1 ||
          rowIndex === 2 ||
          rowIndex === 6 ||
          rowIndex === 7 ||
          rowIndex === 8 ||
          rowIndex === 9
        ) {
          return [0, 0];
        } else {
          return [1, 1];
        }
      }
    },
  },
};
</script>
```