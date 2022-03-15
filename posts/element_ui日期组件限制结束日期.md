---
title: element ui 日期组件 结束日期disabled
description:
date: 2021-06-17
tags:
  - element_ui
---

```javascript
<template>
  <div>
    <div class="block">
      <span class="demonstration">默认</span>
      <el-date-picker
        v-model="value1"
        type="datetimerange"
        range-separator="至"
        start-placeholder="开始日期"
        end-placeholder="结束日期"
        :picker-options="pickerOptions"
      >
      </el-date-picker>
    </div>
  </div>
</template>
 
<script>
export default {
  data() {
    return {
      pickerOptions: {
        //日期限制
        disabledDate: (time) => {
          //month 会比当前月份少一 这里的5 是六月份
          return time > new Date(2021, 5, 22);
        },
      },
      value1: [new Date(), new Date()],
      value2: "",
    };
  },
};
</script>
```