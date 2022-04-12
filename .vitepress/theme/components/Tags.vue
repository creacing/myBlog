<template>
  <div class="my-tags">
    <div class="tags">
      <div
        class="tag-shell"
        v-for="(item, key, index) in data"
        :key="item"
        :style="[{ background: colorList[index] }]"
        style="opacity: 0.7"
      >
        <span
          @click="toggleTag(key)"
          class="tag"
          :style="getFontSize(data[key].length)"
          :class="{ activetag: selectTag === key }"
        >
          {{ key }}
          <span class="tag-length">{{ data[key].length }}</span>
        </span>
      </div>
    </div>
    <h4 class="header">
      <svg
        t="1641783753540"
        class="fas-icon"
        viewBox="0 0 1024 1024"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        p-id="1254"
        width="200"
        height="200"
      >
        <path
          d="M995.126867 592.38l-360.08 360.08a53.333333 53.333333 0 0 1-71.333334 3.68l356.22-356.22a64 64 0 0 0 0-90.506667L495.8402 85.333333h45.573333a52.986667 52.986667 0 0 1 37.713334 15.62l416 416a53.4 53.4 0 0 1 0 75.426667z m-128 0l-360.08 360.08a53.333333 53.333333 0 0 1-75.426667 0l-416-416A52.986667 52.986667 0 0 1 0.0002 498.746667V138.666667a53.393333 53.393333 0 0 1 53.333333-53.333334h360.08a52.986667 52.986667 0 0 1 37.713334 15.62l416 416a53.4 53.4 0 0 1 0 75.426667zM341.333533 341.333333a85.333333 85.333333 0 1 0-85.333333 85.333334 85.426667 85.426667 0 0 0 85.333333-85.333334z"
          fill="var(--c-brand)"
          p-id="1255"
        ></path></svg
      ><span class="header-text">{{ selectTag }}</span>
    </h4>
    <div
      class="article-shell1"
      v-for="(article, index) in data[selectTag]"
      :key="index"
    >
      <div class="article-shell2">
        <a :href="withBase(article.regularPath)" class="article">
          <div class="title">
            <div class="title-o"></div>
            {{ article.frontMatter.title }}
          </div>
          <div class="date">{{ article.frontMatter.date }}</div>
        </a>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { computed, ref, onMounted } from "vue";
import { useData, withBase } from "vitepress";
import { initTags } from "../utils";
//颜色列表
const colorList: Array<string> = [
  "#ff9804",
  "#69b9cd",
  "#60a8d3",
  "#f1a9cc",
  "#caaeff",
  "#45cadd",
  "#b29ddb",
  "#84dcc6",
  "#fcc7f5",
  "#c2f8f6",
  "#b288ff",
  "#9ed8d8",
  "#c2e9e6",
  "#b9f2e7",
  "#2ac6da",
  "#8193f1",
  "#ffcbd5",
  "#ff9804",
  "#b68dff",
  "#84c7d0",
  "#62b6cb",
  "#c9abf3",
  "#5f558e",
  "#2fc7db",
  "#decdfd",
  "#d59787",
  "#35bdb2",
  "#d0bfb4",
  "#8d99ae",
  "#7ecccb",
  "#c7a0c5",
  "#98ba5d",
  "#53807a",
  "#6f556b",
  "#ad93d6",
];

const { theme } = useData();
const data = computed(() => initTags(theme.value.posts));
console.log("dataxx", data);

let articlesNum = theme.value.postLength;

//给tags设置默认值
const selectTagDefault: string = Object.keys(data.value)[0];
let selectTag = ref("");
selectTag.value = selectTagDefault;

const toggleTag = (tag: string) => {
  selectTag.value = tag;
};

// set font-size
const getFontSize = (length: number) => {
  let size = length * 0.04 + 0.85;
  return { fontSize: `${size}em` };
};
</script>

<style scoped>
.article-shell1 {
  width: 100%;
  display: flex;
  justify-content: center;
  padding: 0.3rem;
  border-radius: 1rem;
  background-color: rgba(200, 206, 243, 0.2);
  margin: 0.1rem 0;
}
.article-shell2 {
  width: 100%;
  display: flex;
  justify-content: center;
  border-radius: 1rem;
  background-color: rgba(200, 206, 243, 0.2);
}
.article-shell1 :hover {
  padding-left: 2rem;
  padding-right: 2rem;
}
.tag-shell {
  border-radius: 1rem;
  margin: 0.2rem;
}

.tags-header {
  font-weight: bold;
  padding-bottom: 14px;
}
.tags {
  margin-top: 14px;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: left;
  /* border-bottom: 1px dashed mediumslateblue; */
  margin-bottom: 10px;
}
.tag {
  display: inline-block;
  margin: 6px 8px;
  font-size: 0.85em;
  line-height: 25px;
  transition: 0.4s;
  color: var(--c-color);
  cursor: pointer;
  font-weight: var(--font-title2-weight);
  font-size: 1rem !important;
}
/* 标签  */
.tag:hover {
  color: mediumslateblue;
}
/* 标签激活 */
.activetag {
  color: mediumslateblue;
}
.tag-length {
  color: var(--c-brand);
  font-size: 12px !important;
  position: relative;
  top: -8px;
}
.header {
  font-size: 1.5rem;
  font-weight: 600;
  margin: 1.5rem 0;
  display: flex;
  align-items: center;
  justify-content: left;
}
.fas-icon {
  width: 2rem;
  height: 2rem;
}
.header-text {
  padding-left: 10px;
}
.article {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 10px 10px;
  color: var(--c-color);
  font-weight: 600;
  transition: border 0.3s ease, color 0.3s ease;
}
.article:hover {
  text-decoration: none;
  color: mediumslateblue;
}
.date {
  font-family: Georgia, sans-serif;
}
.content > div > div {
  background: unset;
  box-shadow: unset;
}
</style>
