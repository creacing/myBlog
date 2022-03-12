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
  border-radius: 24px;
  padding: 10px;
}
.header-h2 {
  text-indent: 2;
}
a {
  color: var(--c-color);
  font-weight: 900;
  display: block;
  padding: 5px 0;
}

ul {
  list-style-type: none;
}

@media (min-width: 1400px) {
  .category {
    position: fixed;
    left: 20px;
  }
}
@media (max-width: 1400px) {
  .category {
    display: none;
  }
}
</style>

