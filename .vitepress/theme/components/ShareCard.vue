<template>
  <div class="shareCard">
    <div class="share-poetrys">
      <span class="home-title-large">{{ poetry }}</span>
      <span class="home-title-small">{{ poetry }}</span>
    </div>
    <!-- <p class="shortIntro">一个专注于前端技术爱好者</p> -->
    <div class="cardPart">
      <div class="card" v-for="item in list" @click="go(item)" :key="item">
        <!-- <svg
          t="1641801440748"
          class="icon"
          viewBox="0 0 1024 1024"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          p-id="2123"
          width="30"
          height="30"
        >
          <path :d="item.icon" fill="var(--c-brand)"></path>
        </svg> -->
      </div>
    </div>
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

type card = {
  text: string;
  icon: string;
  url: string;
};
const list: card[] = [
  // {
  //   text: "Github",
  //   icon: `M511.6 76.3C264.3 76.2 64 276.4 64 523.5 64 718.9 189.3 885 363.8 946c23.5 5.9 19.9-10.8 19.9-22.2v-77.5c-135.7 15.9-141.2-73.9-150.3-88.9C215 726 171.5 718 184.5 703c30.9-15.9 62.4 4 98.9 57.9 26.4 39.1 77.9 32.5 104 26 5.7-23.5 17.9-44.5 34.7-60.8-140.6-25.2-199.2-111-199.2-213 0-49.5 16.3-95 48.3-131.7-20.4-60.5 1.9-112.3 4.9-120 58.1-5.2 118.5 41.6 123.2 45.3 33-8.9 70.7-13.6 112.9-13.6 42.4 0 80.2 4.9 113.5 13.9 11.3-8.6 67.3-48.8 121.3-43.9 2.9 7.7 24.7 58.3 5.5 118 32.4 36.8 48.9 82.7 48.9 132.3 0 102.2-59 188.1-200 212.9 23.5 23.2 38.1 55.4 38.1 91v112.5c0.8 9 0 17.9 15 17.9 177.1-59.7 304.6-227 304.6-424.1 0-247.2-200.4-447.3-447.5-447.3z`,
  //   url: "https://github.com/clark-cui",
  // },
  // {
  //   text: "Twitter",
  //   icon: `M928 254.3c-30.6 13.2-63.9 22.7-98.2 26.4 35.4-21.1 62.3-54.4 75-94-32.7 19.5-69.7 33.8-108.2 41.2C765.4 194.6 721.1 174 672 174c-94.5 0-170.5 76.6-170.5 170.6 0 13.2 1.6 26.4 4.2 39.1-141.5-7.4-267.7-75-351.6-178.5-14.8 25.4-23.2 54.4-23.2 86.1 0 59.2 30.1 111.4 76 142.1-28-1.1-54.4-9-77.1-21.7v2.1c0 82.9 58.6 151.6 136.7 167.4-14.3 3.7-29.6 5.8-44.9 5.8-11.1 0-21.6-1.1-32.2-2.6C211 652 273.9 701.1 348.8 702.7c-58.6 45.9-132 72.9-211.7 72.9-14.3 0-27.5-0.5-41.2-2.1C171.5 822 261.2 850 357.8 850 671.4 850 843 590.2 843 364.7c0-7.4 0-14.8-0.5-22.2 33.2-24.3 62.3-54.4 85.5-88.2z`,
  //   url: "https://twitter.com/qingshuihe1",
  // },
  // {
  //   text: "Email",
  //   icon: `M874.666667 375.189333V746.666667a64 64 0 0 1-64 64H213.333333a64 64 0 0 1-64-64V375.189333l266.090667 225.6a149.333333 149.333333 0 0 0 193.152 0L874.666667 375.189333zM810.666667 213.333333a64.789333 64.789333 0 0 1 22.826666 4.181334 63.616 63.616 0 0 1 26.794667 19.413333 64.32 64.32 0 0 1 9.344 15.466667c2.773333 6.570667 4.48 13.696 4.906667 21.184L874.666667 277.333333v21.333334L553.536 572.586667a64 64 0 0 1-79.893333 2.538666l-3.178667-2.56L149.333333 298.666667v-21.333334a63.786667 63.786667 0 0 1 35.136-57.130666A63.872 63.872 0 0 1 213.333333 213.333333h597.333334z`,
  //   url: "mailto:rongchuancui@gmail.com",
  // },
];
const go = (item: card) => {
  window.location.href = item.url;
};
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
  /* .home-title-large {
    display: none;
  } */
}
@media (min-width: 1100px) {
  .home-title-small {
    display: none;
  }
}

.shareCard {
  padding-top: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.share-avator {
  width: 50px;
  border-radius: 50px;
}
.cardPart {
  display: flex;
}
.card {
  cursor: pointer;
}
.card:hover {
  transform: translate(-2px, -2px);
}
.shortIntro {
  font-weight: 600;
}
</style>

