<template>
  <div>
    <!-- <div class="archives-sidebar"></div> -->
    <div style="padding-top: 10px" class="archives-page">
      <div v-for="yearList in data" class="yearItem" :key="yearList">
        <div class="year">
          {{ yearList[0].frontMatter.date.split("-")[0] }}
        </div>
        <a
          :href="withBase(article.regularPath)"
          v-for="(article, index) in yearList"
          :key="index"
          class="article"
        >
          <div class="title">
            <div class="title-o"></div>
            {{ article.frontMatter.title }}
          </div>
          <div class="date">{{ article.frontMatter.date.slice(5) }}</div>
        </a>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useData, withBase } from "vitepress";
import { computed } from "vue";
import { useYearSort } from "../utils";

const { theme } = useData();
const data = computed(() => useYearSort(theme.value.posts));
console.log(data, "data");
</script>

<style scoped>
/* .archives-sidebar {
  width: 200px;
  position: fixed;
  height: 400px;
  border: 1px solid black;
  top: 50%;
  left: 30px;
  transform: translate(0, -50%);
} */
.archives-page {
  /* margin-top: 1rem;
  background-color: rgba(255, 255, 255, 0.2);
  border-radius: 10px;
  padding: 10px;
  box-shadow: 4px 4px 12px 2px rgba(123, 104, 238, 0.2); */
}
.yearItem {
  border-bottom: 1px dashed mediumslateblue;
}
.yearItem:last-child {
  border: none;
}
.year {
  padding: 16px 0 8px 0;
  font-size: 1.3rem;
  font-weight: 600;
  color: var(--c-color);
}

.article {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 10px 10px;
  /* color: #666; */
  color: #000;
  font-weight: 600;
  transition: border 0.3s ease, color 0.3s ease;
}
.article:hover {
  text-decoration: none;
  color: var(--c-brand);
}
.date {
  font-family: Georgia, sans-serif;
}
.content > div > div {
  background: unset;
  box-shadow: unset;
}
</style>
