<template>
  <div>
    <div class="archives-page">
      <div class="years-shell">
        <div class="years">
          <div v-for="(yearList, index) in data" :key="yearList" class="year">
            <div class="year-name" @click="showArchivesByYear(index)">
              {{ yearList[0].frontMatter.date.split("-")[0] }}
              <span class="year-num">{{ yearList.length }}</span>
            </div>
          </div>
        </div>
      </div>
      <div
        class="article-shell1"
        v-for="(article, index) in year_archives"
        :key="index"
      >
        <div class="article-shell2">
          <a :href="withBase(article.regularPath)" class="article">
            <div class="title">
              <div class="title-o"></div>
              {{ article.frontMatter.title }}
            </div>
            <div class="date">
              {{ article.frontMatter.date.slice(5) }}
            </div>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useData, withBase } from "vitepress";
import { computed, onMounted, ref } from "vue";
import { useYearSort } from "../utils";

const { theme } = useData();
const data = computed(() => useYearSort(theme.value.posts));
const year_archives = ref([]);
onMounted(() => {
  year_archives.value = data.value[0];
});

const showArchivesByYear = (index: number) => {
  year_archives.value = data.value[index];
};
</script>

<style scoped>
.years-shell {
  width: 100%;
}
.years {
  display: flex;
  /* padding: 10px; */
  /* padding: 0.3rem;
  border-radius: 1rem;
  background-color: rgba(200, 206, 243, 0.2);
  margin: 0.1rem 0; */
}
.year {
  /* border-radius: 0.7rem; */
  margin: 0.2rem;
  padding: 0 0.2rem;
  height: 2.5rem;
  line-height: 2.5rem;
}
.year-name {
  padding: 0.2rem 0;
  font-size: 1.3rem;
  font-weight: 600;
  color: var(--c-color);
  width: 5rem;
}
.year:hover {
  width: 100%;
}
.year-num {
  color: var(--c-brand);
  font-size: 12px !important;
  position: relative;
  top: -8px;
}
.archives-page {
  padding-top: 10px;
}

.article {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0.2rem;
  /* color: #666; */
  color: #000;
  font-weight: 600;
  transition: border 0.3s ease, color 0.3s ease;
  padding: 0.1rem;
}
.article-shell1 {
  width: 100%;
  display: flex;
  justify-content: center;
  padding: 0.3rem;
  border-radius: 1rem;
  /* background-color: rgba(200, 206, 243, 0.2); */
  margin: 0.1rem 0;
}
.article-shell2 {
  width: 100%;
  display: flex;
  justify-content: center;
  border-radius: 1rem;
  /* background-color: rgba(200, 206, 243, 0.2); */
}
.article-shell1 :hover {
  padding-left: 2rem;
  padding-right: 2rem;
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
