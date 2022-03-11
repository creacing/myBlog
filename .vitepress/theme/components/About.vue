<template>
  <div class="aboutPage">
    <div class="about">
      <article>
        <h2><p class="about-header">欢迎来到 ooo 的个人小站</p></h2>
      </article>

      <article>
        <p>工具是第一生产力</p>
        <p>
          使用什么样的工具，就能做什么样的事。用工具的最佳实践来学习，往往能很快掌握一个领域
          80%的知识。
        </p>
        <p>
          重点是快速上手工具的能力，而不是死扣一个工具的细枝末节，投入与回报比例很低，也有工具过时的风险。
        </p>
      </article>
      <article>
        <p>Tools are the first productivity</p>
        <p>
          what you do with the tools you use is what you do. Learning with the
          best practices of tools often leads to a quick mastery of 80% of a
          field's knowledge.
        </p>
        <p>
          The focus is on the ability to get up to speed with a tool
          quickly.Instead of sticking to the nitty-gritty of a tool, the ratio
          of input to return is low, and there is a risk of tool obsolescence.
        </p>
      </article>
    </div>
    <div class="sideIntro">
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
    </div>
  </div>
</template>
<script lang="ts" setup>
</script>
<style scoped>
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
  display: block;
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