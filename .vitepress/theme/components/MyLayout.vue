<template>
  <div class="cover"></div>
  <div class="mask"></div>
  <Layout>
    <template #navbar-search> <ToggleTheme /></template>
    <template #page-top>
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
import Title from "./Title.vue";
import { useData } from "vitepress";
import { computed } from "vue";
const isPost = computed(() => {
  console.log("compute");
  return useData().page.value.relativePath.indexOf("posts") > -1 ? true : false;
});
</script>
<style scoped>
.cover {
  height: 100vh;
  width: 100%;
  z-index: -10;
  background-image: url(https://steamcdn-a.akamaihd.net/steamcommunity/public/images/items/386480/ddde844ee9b1b677395b071f53f55a8bdad5a96c.jpg);
  position: absolute;
  top: 0;
  left: 0;
}
.mask {
  height: 100vh;
  width: 100%;
  /* filter: blur(5px); */
  position: absolute;
  z-index: -9;
  background-color: rgba(255, 255, 255, 0.3);
  top: 0;
  left: 0;
}
</style>