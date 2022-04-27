---
title: element select tag 拖动
description: 
date: 2022-04-26
tags:
  - element
---
### 绑定所有默认属性和监听事件
```
 v-bind="$attrs"
 v-on="$listeners"
```
### 安装 sortablejs 功能强大的JavaScript 拖拽库
```
import Sortable from "sortablejs";
```
### DragSelect.vue
```javascript
<template>
  <el-select
    ref="dragSelect"
    v-model="selectVal"
    v-bind="$attrs" 
    class="drag-select"
    multiple
    v-on="$listeners"
  >
    <slot />
  </el-select>
</template>

<script>
import Sortable from "sortablejs";

export default {
  name: "DragSelect",
  props: {
    value: {
      type: Array,
      required: true,
    },
  },
  computed: {
    selectVal: {
      get() {
        return [...this.value];
      },
      set(val) {
        this.$emit("input", [...val]);
      },
    },
  },
  mounted() {
    this.setSort();
  },
  methods: {
    setSort() {
      const el = this.$refs.dragSelect.$el.querySelectorAll(
        ".el-select__tags > span"
      )[0];
      this.sortable = Sortable.create(el, {
        ghostClass: "sortable-ghost",
        setData: function (dataTransfer) {
          dataTransfer.setData("Text", "");
        },
        onEnd: (evt) => {
          const targetRow = this.value.splice(evt.oldIndex, 1)[0];
          this.value.splice(evt.newIndex, 0, targetRow);
        },
      });
    },
  },
};
</script>

<style scoped>
::v-deep .drag-select .sortable-ghost {
  opacity: 0.8;
  color: #fff !important;
  background: #42b983 !important;
}
::v-deep .drag-select .el-tag {
  cursor: pointer;
}
</style>
```
### 使用组件
```javascript
<template>
  <div>
    <el-drag-select
      v-model="value"
      style="width: 500px"
      multiple
      placeholder="请选择"
    >
      <el-option
        v-for="item in options"
        :key="item.value"
        :label="item.label"
        :value="item.value"
      />
    </el-drag-select>
  </div>
</template>

<script>
import ElDragSelect from "./DragSelect"; 

export default {
  name: "DragSelectDemo",
  components: { ElDragSelect },
  data() {
    return {
      value: ["Apple", "Banana", "Orange"],
      options: [
        {
          value: "选项1",
          label: "黄金糕",
        },
        {
          value: "选项2",
          label: "双皮奶",
        },
        {
          value: "选项3",
          label: "蚵仔煎",
        },
        {
          value: "选项4",
          label: "龙须面",
        },
        {
          value: "选项5",
          label: "北京烤鸭",
        },
      ],
    };
  },
};
</script>
```