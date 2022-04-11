<template>
  <footer>
    <div>
      Powered by
      <a href="" target="https://github.com/creacing/myBlog" title="作者"
        >七夜的许愿星</a
      >
      Theme
      <a href="" target="https://github.com/creacing/myBlog" title="主题名"
        >midnight shadow</a
      >
      | Copyright © 2022-{{ date }} | MIT License
    </div>
  </footer>
</template>
<script lang="ts" setup>
const date = new Date().getFullYear();
</script>
<style scoped>
footer {
  position: fixed;
  bottom: 0;
  height: var(--header-height);
  text-align: center;
  width: 100%;
  background: var(--c-bg);
  color: var(--c-text);
  display: flex;
  justify-content: center;
  align-items: center;
}
a {
  color: var(--c-brand);
  font-weight: bold;
}
a:hover {
  text-decoration: none;
  color: var(--c-hover);
}
</style>

