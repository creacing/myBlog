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
    <!-- <div class="sideIntro">
      <h1 class="side-avator">
        <img class="info-avator" src="/avator.jpg" />
        <span class="info-intro">ooo</span>
      </h1>
      <div>
        <p>测试测试测试测试测试测试测试测试测试测试</p>
        <p>测试测试测试测试测试测试测试测试测试测试</p>
        <p>测试测试测试测试测试测试测试测试测试测试</p>
        <p>测试测试测试测试测试测试测试测试测试测试</p>
        <p>测试测试测试测试测试测试测试测试测试测试</p>
      </div>

      <div class="info-friends"></div>
    </div> -->
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
  /* height: 100px; */
  border-radius: 50px;
  /* margin: 10px auto; */
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
  /* background: rgba(255, 255, 255, 0.4);
  border-radius: 10px;
  box-shadow: 3px 3px 3px rgba(255, 255, 255, 0.4);
  border: 1px solid rgba(255, 255, 255, 0.4); */
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
  /* background: #fff; */
  max-width: 600px;
  /* color: var(--c-color); */
  /* box-shadow: 3px 3px 3px #dddfe1;
  border: 1px solid rgba(245, 248, 250, 0.8); */
  /* border: 1px solid #282936; */
}
/* article :hover {
  text-decoration: none;
  transform: translate(-2px, -2px);
  box-shadow: 10px 10px var(--c-brand);
} */
p {
  line-height: 1.6;
  display: block;
  margin-block-start: 1em;
  margin-block-end: 1em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
  /* color: rgb(55, 70, 60); */
  color: var(--c-color);
}
</style>