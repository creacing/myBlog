<template>
  <div class="share-poetrys">
    <span class="home-title-large">{{ poetry }}</span>
    <span class="home-title-small">{{ poetry }}</span>
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";
//循环歌词
const poetryList = [
  "半生的漂泊，止于你相遇。",
  "胳膊一挽，对影成双。",
  "至此，心猿归林，意马有缰。",
  "初见乍惊欢，久处仍怦然。",
  "我本世间远行客，幸得风雨同舟人。",
  "从此山河两相悦，缠尽青山尝清河。",
  "欲揽群花伴吾眠，惊遇牡丹无别心。",
  "书生喜有琴声伴，翰墨新添戴墨香。",
  "半生逍遥红尘客，偶遇佳人坠星河。",
  "满牟苍翠已成梦，从此单恋一棵松。",
  "本想长笑入寺庙，无奈错步入红尘。",
  "风流怎奈佳人至，笑收沧海浪子心。",
  "从此烟雨落京城，一人撑伞两人行。",
  "月色真美。",
  "乌鸦为什么像写字台？就像我喜欢你不需要理由。",
];
let poetry = ref(poetryList[0]);
let countPoetry = 0;
setInterval(() => {
  if (countPoetry === poetryList.length) {
    countPoetry = 0;
  }
  poetry.value = poetryList[countPoetry];
  countPoetry++;
}, 5000);
</script>
<style scoped>
.share-poetrys {
  position: fixed;
  top: 30px;
  left: 50%;
  font-size: 1rem;
  transform: translate(-50%, -50%);
  z-index: 1000;
}
@media (max-width: 1100px) {
  .share-poetrys {
    display: none;
  }
}
@media (min-width: 1100px) {
  .home-title-small {
    display: none;
  }
}
</style>

