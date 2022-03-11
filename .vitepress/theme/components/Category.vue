<template>
  <div class="category" v-if="headers.length > 0">
    <ul>
      <li class="header" v-for="(item, index) in headers" :key="item">
        <a :href="`#${item.slug}`" class="header-h1" v-if="item.level === 2"
          >{{ `${index + 1}. ${item.title}` }}
          <div class="hr"></div
        ></a>
        <ul v-if="item.level === 3">
          <li>
            <a :href="`#${item.slug}`" class="header-h2">{{ item.title }}</a>
            <div class="hr"></div>
          </li>
        </ul>
      </li>
    </ul>
  </div>
</template>
<script lang="ts" setup>
import { useData } from "vitepress";
const pageData = useData();
const headers = pageData.page.value.headers;
console.log(headers, "pageData");
</script>
<style scoped>
.category {
  width: 20rem;
  /* background: var(--c-bg); */
  /* box-shadow: 6px 6px var(--c-brand);  */
  /* box-shadow: 6px 6px var(--c-brand); */

  /* border: 4px solid #282936; */
  /* border: 4px dashed #c7c7c7; */
  /* background-color: rgba(245, 248, 250, 0.2); */
  border-radius: 24px;
  /* color: var(--c-brand-light); */
  /* box-shadow: 3px 3px 3px #dddfe1; */
  padding: 10px;
  /* border: 1px solid rgba(245, 248, 250, 0.8); */
}
.header-h2 {
  text-indent: 2;
}
a {
  /* color: rgb(55, 70, 60); */
  /* color: rgb(62, 62, 95); */
  color: var(--c-color);
  font-weight: 900;
  display: block;
  padding: 5px 0;
}
a:hover {
  /* text-decoration: none; */
}
ul {
  list-style-type: none;
}
.hr {
  /* width: 100%;
  border-bottom: 1px dashed rgb(62, 62, 95); */
}
@media (min-width: 1400px) {
  .category {
    position: fixed;
    /* right: 20px; */
    /* display: none; */
    left: 20px;
  }
}
@media (max-width: 1400px) {
  .category {
    display: none;
  }
}
</style>

