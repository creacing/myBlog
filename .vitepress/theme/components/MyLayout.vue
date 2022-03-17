<template>
  <div class="cover"></div>
  <div class="mask"></div>
  <div class="nav-bar-mask"></div>
  <Search />
  <Layout>
    <template #navbar-search> <ToggleTheme /></template>
    <template #page-top class="page-top">
      <Title v-if="isPost" />
      <Category v-if="isPost" />
    </template>
    <template #page-bottom>
      <!-- <Comments v-if="isPost" /> -->
    </template>
    <!-- Home slot-->
    <template #home-hero><HomeHero /> </template>
    <template #home-features> <Page /></template>
  </Layout>
  <!-- copywright -->
  <CopyWright />
</template>
<script lang="ts" setup>
import DefaultTheme from "vitepress/theme";
const { Layout } = DefaultTheme;
import HomeHero from "./HomeHero.vue";
import CopyWright from "./CopyWright.vue";
// import Comments from "./Comments.vue";
import Page from "./Page.vue";
import ToggleTheme from "./ToggleTheme.vue";
import Category from "./Category.vue";
import Search from "./Search.vue";
import Title from "./Title.vue";
import { useData } from "vitepress";
import { computed, onMounted, onBeforeMount } from "vue";

onBeforeMount(() => {
  //背景图片渐进式加载

  // var placeholder = document.querySelector(".component-placeholder"),
  //   small = placeholder.querySelector(".component-img-small");

  // // 1: load small image and show it
  // var img = new Image();
  // img.src = small.src;
  // img.onload = function () {
  //   small.classList.add("loaded");
  // };

  // // 2: load large image
  // var imgLarge = new Image();
  // imgLarge.src = placeholder.dataset.large;
  // imgLarge.onload = function () {
  //   imgLarge.classList.add("loaded");
  // };
  // placeholder.appendChild(imgLarge);

  //引入樱花特效
  const sakura = document.createElement("script");
  sakura.type = "text/javascript";
  sakura.src = "/sakura.min.js";
  document.body.appendChild(sakura);
  //  <link rel="stylesheet" href="path/to/sakura.min.css">
  const sakuraCss = document.createElement("link");
  sakuraCss.rel = "stylesheet";
  sakuraCss.href = "/sakura.min.css";
  document.head.appendChild(sakuraCss);
});
//樱花特效
onMounted(() => {
  setTimeout(() => {
    const sakura = new Sakura("body", {
      colors: [
        {
          gradientColorStart: "rgba(71, 69, 140, 0.9)",
          gradientColorEnd: "rgba(101, 133, 158, 0.9)",
          gradientColorDegree: 120,
        },
        {
          gradientColorStart: "rgba(23, 23, 97)",
          gradientColorEnd: "rgba(87, 82, 148)",
          gradientColorDegree: 120,
        },
        {
          gradientColorStart: "rgba(111, 96, 165)",
          gradientColorEnd: "rgba(178, 178, 176)",
          gradientColorDegree: 120,
        },
      ],
    });
  }, 2000);
});

const isPost = computed(() => {
  //判断是否为文章页面用于控制 <Title/> <Category/> 显示
  return useData().page.value.relativePath.indexOf("posts") > -1 ? true : false;
});
</script>
<style scoped>
.cover {
  height: 100vh;
  width: 100%;
  z-index: -10;
  /* background-image: url(https://steamcdn-a.akamaihd.net/steamcommunity/public/images/items/386480/ddde844ee9b1b677395b071f53f55a8bdad5a96c.jpg); */
  background-image: url(/bgys50.jpg);
  position: fixed;
  top: 0;
  left: 0;
}

@media (max-width: 1200px) {
  .cover {
    height: 100vh;
    width: 100%;
    z-index: -10;
    background-image: url(/mbbg.png);
    position: fixed;
    top: 0;
    left: 0;
    background-repeat: no-repeat;
  }
}
.mask {
  height: 100vh;
  width: 100%;
  /* filter: blur(9px); */
  position: fixed;
  z-index: -9;
  background-color: rgba(255, 255, 255, 0.3);
  top: 0;
  left: 0;
}
.nav-bar-mask {
  position: fixed;
  width: 100%;
  height: var(--header-height);
  background: rgba(255, 255, 255, 0.1);
  right: 0;
  left: 0;
  z-index: -1;
}
</style>