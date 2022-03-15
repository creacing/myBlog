---
title: 给element ui date-picker 添加id
description: 
date: 2021-07-17
tags:
  - element_ui
---
```javascript
 <template>
  <div>
    <div class="block">
      <el-date-picker
        v-model="value1"
        type="daterange"
        start-placeholder="开始日期"
        end-placeholder="结束日期"
        :id="['start', 'end']"
      >
      </el-date-picker>
    </div>
  </div>
</template>
 
<script>
export default {
  data() {
    return {
      value1: "",
      value2: "",
    };
  },
};
</script>
```