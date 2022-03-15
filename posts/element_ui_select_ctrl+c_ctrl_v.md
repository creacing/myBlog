---
title: element ui select框实现ctrl+c 和ctrl+v的功能
description: 
date: 2021-07-21
tags:
  - element_ui
---
```javascript
 <template>
  <div>
    <el-select
      ref="select"
      placeholder="请选择主食"
      filterable
      id="food"
      @keydown.ctrl.67.native="copyFocusedBoxContent"
      @paste.native.capture.prevent="handlePaste"
      v-model="formData.food"
      clearable
      multiple
      collapse-tags
    >
      <el-option
        v-for="item in options"
        :key="item.label"
        :label="item.label"
        :value="item.code"
      >
      </el-option>
    </el-select>
  </div>
</template>
 
<script>
export default {
  methods: {
    handlePaste(e) {
      const inputValueArr = e.clipboardData.getData("Text").split(",");
 
      const recordIndex = [];
      for (const e of this.options) {
        recordIndex.push(e.code);
      }
      for (const f of inputValueArr) {
        if (recordIndex.includes(f) && !this.formData.food.includes(f)) {
          this.formData.food.push(f);
        }
      }
    },
 
    copyFocusedBoxContent() {
      this.$copyText(this.formData.food).then(
        (e) => {
          this.$message({
            message: "Copied",
            duration: 200,
          });
        },
        (e) => {
          this.$message({
            message: "Can not copy",
            duration: 200,
          });
        }
      );
    },
  },
  data() {
    return {
      formData: {
        food: [],
      },
      options: [
        {
          code: "11",
          label: "11-黄金糕",
        },
        {
          code: "12",
          label: "12-双皮奶",
        },
        {
          code: "13",
          label: "13-蚵仔煎",
        },
        {
          code: "14",
          label: "14-龙须面",
        },
        {
          code: "15",
          label: "15-北京烤鸭",
        },
        {
          code: "115",
          label: "115-乌冬面",
        },
 
        {
          code: "111",
          label: "111-炸鸡",
        },
      ],
    };
  },
};
</script>
```