---
title: element ui table 实现点击行变色
description: 
date: 2021-07-22
tags:
  - element_ui
---
```javascript
 <template>
  <div>
    <table ref="table" @rowClick="rowClick" id="table"></table>
  </div>
</template>
<script>
import table from "@/components/Table.vue";
export default {
  components: {
    table,
  },
  methods: {
    rowClick(row, column, event) {
      const name = row.name;
      if (this.name === name) {
        this.flag = !this.flag;
      } else {
        this.flag = false;
      }
      this.name = name;
//以下两种方式获取dom节点的内容
 console.log(
        this.$refs.table.$refs.table.$refs.bodyWrapper.childNodes[0]
          .childNodes[1].childNodes
      );
      let obj =
        document.getElementById("table").childNodes[0].childNodes[2]
          .childNodes[0].childNodes[1];
      const arr = [];
      let i = 0;
      while (obj.childNodes[i]) {
        arr.push(obj.childNodes[i]);
        i++;
      }
 
      for (const e of arr) {
        if (e && e.childNodes[1]) {
          if (e.childNodes[1].childNodes[0].innerHTML === name && !this.flag) {
            //这种情况下只有鼠标移开才会变色，具体原因还不清楚
            // e.style.color = "yellow";
            // e.style.backgroundColor = "green";
            //以下是点击直接变色的方法
            let j = 0;
 
            while (e.childNodes[j]) {
              e.childNodes[j].style.color = "red";
              e.childNodes[j].style.backgroundColor = "pink";
 
              j++;
            }
          } else {
            let j = 0;
 
            while (e.childNodes[j]) {
              e.childNodes[j].style.color = "";
              e.childNodes[j].style.backgroundColor = "";
 
              j++;
            }
          }
        }
      }
    },
  },
  data() {
    return {
      flag: true,
      name: null,
    };
  },
};
</script>
```