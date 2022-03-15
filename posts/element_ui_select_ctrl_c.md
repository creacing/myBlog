---
title: element-ui select框实现ctrl+c复制内容
description: 
date: 2021-07-12
tags:
  - element_ui
---
```javascript
<template>
  <div>
    <el-select
      ref="select"
      placeholder="请选择主食"
      multiple
      filterable
      collapse-tags
      id="food"
      :name="name"
      @focus="whichSearchBoxFocus(name)"
      @keyup.ctrl.67.native="copyFocusedBoxContent"
      v-model="formData.food"
    >
      <el-option
        v-for="item in options"
        :key="item.label"
        :label="item.label"
        :value="item.label"
      >
      </el-option>
    </el-select>
    <el-select
      ref="select"
      placeholder="请选择水果"
      multiple
      filterable
      collapse-tags
      id="fruit"
      name="fruit"
      @focus="whichSearchBoxFocus('fruit')"
      @keyup.ctrl.67.native="copyFocusedBoxContent"
      v-model="formData.fruit"
    >
      <el-option
        v-for="item in options2"
        :key="item.label"
        :label="item.label"
        :value="item.label"
      >
      </el-option>
    </el-select>
  </div>
</template>
 
<script>
export default {
  methods: {
    whichSearchBoxFocus(whichSearchBox) {
      //判断哪个select被focus//把值赋值给whichSearchBoxFocused
      console.log("whichSearchBox", whichSearchBox);
      this.searchBoxFocused = whichSearchBox;
    },
    copyFocusedBoxContent() {
      //把 this.formData[this.searchBoxFocused]; 赋值到粘贴板
      console.log("this.$copyText", this.$copyText);
      this.$copyText(this.formData[this.searchBoxFocused]).then(
        function (e) {
          alert("Copied");
          console.log(e);
        },
        function (e) {
          alert("Can not copy");
          console.log(e);
        }
      );
    },
  },
  data() {
    return {
      name: "food",
      formData: {
        food: [],
        fruit: [],
      },
      searchBoxFocused: null,
      options: [
        {
          label: "黄金糕",
        },
        {
          label: "双皮奶",
        },
        {
          label: "蚵仔煎",
        },
        {
          label: "龙须面",
        },
        {
          label: "北京烤鸭",
        },
      ],
      options2: [
        {
          label: "西瓜",
        },
        {
          label: "香蕉",
        },
        {
          label: "葡萄",
        },
        {
          label: "蜜瓜",
        },
        {
          label: "苹果",
        },
      ],
    };
  },
};
</script>
```