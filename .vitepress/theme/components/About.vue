<template>
  <div class="aboutPage">
    <div class="about">
      <article>
        <h2><p class="about-header">欢迎来到😱七夜许愿星😱的个人小站</p></h2>
      </article>

      <article>
        <h3 class="about-article-head">一个专注于 javascript 的技术爱好者</h3>
        <!-- <h3 class="about-article-head">个人介绍</h3> -->
        <!-- <h3>个人介绍</h3> -->
        <!-- <p class="about-article-body" style="font-size: 1rem; font-weight: 600">
          一个专注于 javascript 的技术爱好者
        </p> -->
        <!-- <p>一个专注于 javascript 的技术爱好者</p> -->
      </article>

      <article>
        <h3>博客地址</h3>
        <h4><a>https://github.com/creacing/myBlog</a></h4>
        <h3>日记</h3>
        <h4>2022.3.15</h4>
        <p>> 添加文章总数 > 给文章分类</p>
        <h4>2022.3.18</h4>
        <p>
          > 更新文章 > 添加基础的搜索功能 (后期会扩展 Algolia 和 Elastic Search)
          > about update
        </p>
        <h4>2022.3.20</h4>
        <p>
          > 更新最早的文章 > 添加背景音乐"井口裕香 - さらば29"和歌词显示功能
        </p>
        <h4>2022.3.21</h4>
        <p>> 更新文章 > 滚动条样式 > 动画背景特效</p>
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
  /* font-weight: var(--font-title2-weight); */
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