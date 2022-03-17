---
title: element progress 控制进度条颜色
description: 
date: 2022-03-16
tags:
  - element
---
```javascript
<template>
  <div>
    <el-progress
      :percentage="percentage"
      :format="format"
      :color="customColors"
    ></el-progress>
    <!-- :status="status" -->
    <!-- :color="customColorMethod" 控制颜色方式一-->
    <!-- :color="customColors" 控制颜色方式二-->
  </div>
</template>

<script>
//format  和status 一起会被 status 覆盖掉
export default {
  mounted() {
    setInterval(() => {
      if (this.percentage === 100) {
        return;
      }
      this.percentage += 10;
    }, 1000);
  },
  data() {
    return {
      percentage: 0,
      // status: "success",
      customColors: [
        { color: "#f56c6c", percentage: 20 },
        { color: "#e6a23c", percentage: 40 },
        { color: "#5cb87a", percentage: 60 },
        { color: "#1989fa", percentage: 80 },
        { color: "#6f7ad3", percentage: 100 },
      ],
    };
  },
  methods: {
    format(percentage) {
      console.log("format(percentage)");
      return percentage === 100 ? "满" : `${percentage}%`;
    },
    // customColorMethod(percentage) {
    //   if (percentage < 30) {
    //     return "#909399";
    //   } else if (percentage < 70) {
    //     return "#e6a23c";
    //   } else {
    //     return "#67c23a";
    //   }
    // },
  },
};
</script>
```