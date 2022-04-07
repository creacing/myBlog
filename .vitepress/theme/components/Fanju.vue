<template>
  <div class="fanjuPage">
    <div class="fanju">
      <article>
        <h2 class="fanju-header"><p>追番日志</p></h2>
      </article>
      <div class="video-type">
        <span
          class="video-type-item"
          v-for="(type, index) in videoType"
          :key="index"
          >{{ type }}</span
        >
      </div>

      <div class="fanju-body-article">
        <div
          class="fanju-name"
          v-for="(fanjuName, index) in fanjuNames"
          :key="index"
        >
          <p>
            {{ `${index + 1} : ${fanjuName}` }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import fanjuNames from "../utils/fanju";
const videoType: Array<string> = [
  "日漫",
  "国漫",
  "日剧",
  "美剧",
  "治愈",
  "黑暗",
];
</script>
<style scoped>
.video-type {
  display: flex;
  /* 即换行，其子元素的宽度不会被挤压变小 */
  flex-wrap: wrap;
  align-items: center;
  justify-content: left;
  border-bottom: 1px dashed mediumslateblue;
  margin-bottom: 10px;
}
.video-type-item {
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
.fanju-name {
  width: 600px;
  margin-top: 5px;
  margin-bottom: 5px;
  /* box-shadow: 0 0 7px mediumslateblue; */
  height: 60px;
  /* border: 1px solid rgba(255, 255, 255, 0.3); */
  /* background-color: rgba(255, 255, 255, 0.3); */
  /* background-color: rgba(169, 174, 197, 0.3); */
  /* border-radius: 3px; */
  padding-left: 10px;
}

@media (max-width: 1400px) {
  .fanju-name {
    width: 300px;
  }
}
.fanju-header {
  border-bottom: 1px solid rgba(255, 255, 255, 0.6);
}
.fanju-body-article {
  display: flex;
  flex-direction: column;
}
.fanju {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 20px;
}
.fanjuPage {
  display: flex;
  justify-content: center;
}
article {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  border-radius: 10px;
  padding: 0 20px;
  margin: 10px;
}

p {
  line-height: 1.6;
  display: block;
  margin-block-start: 1em;
  margin-block-end: 1em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
  color: var(--c-color);
}
.content > div > div {
  background: unset;
  box-shadow: unset;
}
</style>