---
title: element ui 日期组件当前月份显示在右侧
description: element ui 日期组件当前月份显示在右侧
date: 2020-11-10
tags:
  - element_ui 
---

## 网上的方法是通过 default-value来设置

但是这种方式在默认值的情况下或者选择值的情况下失效

```javascript
<template>
  <el-date-picker
    v-model="value"
    type="daterange"
    range-separator="至"
    start-placeholder="开始日期"
    end-placeholder="结束日期"
    format="yyyyMMdd"
    value-format="yyyyMMdd"
    :default-value="defaultTime"
  >
  </el-date-picker>
</template>
 
<script>
export default {
  data() {
    return {
      value: [],
      defaultTime: "",
    };
  },
  created() {
    this.defaultTime = new Date();
    this.defaultTime.setMonth(new Date().getMonth() - 1);
  },
  methods: {},
};
</script>
```
## 由于v-model的原因会导致月份表根据v-model的值进行渲染，导致default-value的值失效。这边提供了一种解决思路，通过更改饿了么源码的方式
```javascript
element-ui.common.js
/* harmony default export */ var date_picker = ({
        mixins: [picker],
 
        name: 'ElDatePicker',
 
        props: {
          rightCurrentMonth: {},//******获取传入的值******
          type: {
            type: String,
            default: 'date'
          },
          timeArrowControl: Boolean,
 
        },
 
 
element-ui.common.js
 
  mountPicker: function mountPicker() {
            var _this3 = this;
            this.picker = new external_vue_default.a(this.panel).$mount();
           
            this.picker.rightCurrentMonth = this.rightCurrentMonth;//******将值往下传递******
 
            this.picker.defaultValue = this.defaultValue;
            this.picker.defaultTime = this.defaultTime;
            this.picker.popperClass = this.popperClass;
            this.popperElm = this.picker.$el;
            this.picker.width = this.reference.getBoundingClientRect().width;

```
## data中需要增加 rightCurrentMonth: false
```javascript
element-ui.common.js
 
data: function data() {
          return {
            rightCurrentMonth: false,
            popperClass: '',
            value: [],
            defaultValue: null,
            defaultTime: null,
            minDate: '',
            maxDate: '',
            leftDate: new Date(),
            rightDate: Object(date_util_["nextMonth"])(new Date()),
            rangeState: {
              endDate: null,
              selecting: false,
              row: null,
              column: null
            },
            showTime: false,
```
## 重写后的value方法
```javascript
 value: function value(newVal) {
            console.log('rightCurrentMonth', this.rightCurrentMonth);
            if (!newVal) {
              this.minDate = null;
              this.maxDate = null;
            } else if (Array.isArray(newVal)) {
              this.minDate = Object(date_util_["isDate"])(newVal[0]) ? new Date(newVal[0]) : null;
              this.maxDate = Object(date_util_["isDate"])(newVal[1]) ? new Date(newVal[1]) : null;
              //*******************************************************
              //*******************************************************
              if (!this.rightCurrentMonth) {
                if (this.minDate) {
                  this.leftDate = this.minDate;
                  if (this.unlinkPanels && this.maxDate) {
                    var minDateYear = this.minDate.getFullYear();
                    var minDateMonth = this.minDate.getMonth();
                    var maxDateYear = this.maxDate.getFullYear();
                    var maxDateMonth = this.maxDate.getMonth();
                    this.rightDate = minDateYear === maxDateYear && minDateMonth === maxDateMonth ? Object(date_util_["nextMonth"])(this.maxDate) : this.maxDate;
                  } else {
                    this.rightDate = Object(date_util_["nextMonth"])(this.leftDate);
                  }
                } else {
                  this.leftDate = date_rangevue_type_script_lang_js_calcDefaultValue(this.defaultValue)[0];
                  this.rightDate = Object(date_util_["nextMonth"])(this.leftDate);
                }
              } else {
                if (this.maxDate) {
                  this.rightDate = this.maxDate;
                  if (this.unlinkPanels && this.minDate) {
                    console.log('111111');
                    const minDateYear = this.minDate.getFullYear();
                    const minDateMonth = this.minDate.getMonth();
                    const maxDateYear = this.maxDate.getFullYear();
                    const maxDateMonth = this.maxDate.getMonth();
                    this.leftDate = minDateYear === maxDateYear && minDateMonth === maxDateMonth ? Object(date_util_["prevMonth"])(this.maxDate) : this.minDate;
                  } else {
                    console.log('222222');
                    this.leftDate = Object(date_util_["prevMonth"])(this.rightDate);
                  }
                } else {
                  console.log('333333');
                  this.leftDate = date_rangevue_type_script_lang_js_calcDefaultValue(this.defaultValue)[0];
                  this.rightDate = Object(date_util_["nextMonth"])(this.leftDate);
                }
                //*******************************************************
                //*******************************************************
              }
 
            }
          },
```