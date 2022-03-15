<template>
  <div class="aboutPage">
    <div class="about">
      <article>
        <h2><p class="about-header">欢迎来到😱七夜许愿星😱的个人小站</p></h2>
      </article>

      <article>
        <p class="about-article-head">个人介绍</p>
        <p class="about-article-body">一个专注于前端技术爱好者</p>
      </article>
    </div>
  </div>
</template>
<script lang="ts" setup>
</script>
<style scoped>
.about-article-head {
  font-size: var(--font-title2-size);
  font-weight: var(--font-title2-weight);
}
.about-article-body {
  font-weight: var(--font-title2-weight);
}
.side-avator {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.info-avator {
  width: 100px;
  border-radius: 50px;
}
.info-intro {
  font-size: 1rem;
  display: block;
  text-align: center;
}
.about {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 20px;
}
.aboutPage {
  display: flex;
  justify-content: center;
}
.sideIntro {
  max-width: 200px;
  display: flex;
  flex-direction: column;
}

article {
  min-width: 600px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  border-radius: 10px;
  padding: 0 20px;
  margin: 10px;
  max-width: 600px;
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