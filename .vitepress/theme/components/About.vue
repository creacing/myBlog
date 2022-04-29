<template>
  <div class="about">
    <div class="aboutPage">
      <article>
        <h2><p class="about-header">欢迎来到 七夜的许愿星 的个人小站</p></h2>
        <h3 class="about-article-head" style="margin-top: 0">
          一个专注于 javascript 的技术爱好者
        </h3>
      </article>
      <div class="chart-title"><h4>更新记录</h4></div>
      <div class="about-charts">
        <div id="main" style="width: 600px; height: 400px"></div>
      </div>
      <article class="about-body-article">
        <!-- <h3 class="about-title">博客地址</h3>
        <h4><a>https://github.com/creacing/myBlog</a></h4>
        <h3 class="about-title">高清背景图</h3>
        <h4><a>https://jsui.fun/bg.jpg</a></h4>
        <h3 class="about-title">日记</h3> -->
        <!-- <h4>2022.3.15</h4>
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
        <h4>2022.3.22</h4>
        <p>> 更新文章</p>
        <h4>2022.3.25</h4>
        <p>> 修复滚动条溢出bug</p>
        <h4>2022.3.27</h4>
        <p>> 修复页面溢出</p>
        <h4>2022.3.30</h4>
        <p>> 追番记录</p>
        <h4>2022.4.7</h4>
        <p>> 分页改造 > tags样式修改</p>
        <h4>2022.4.10</h4>
        <p>> butterfly > search</p> -->
      </article>
    </div>
  </div>
</template>
<script setup>
import initEcharts from "./../utils/Echart.js";
import { nextTick } from "vue";
import { useData } from "vitepress";

// 基于准备好的dom，初始化echarts实例
const chartObj = {
  title: {
    text: "",
  },
  xAxis: {
    data: [],
  },
  series: [
    {
      name: "文章数",
      type: "bar",
      data: [],
    },
  ],
};

//获取数据
const { theme } = useData();

const posts = theme.value.posts;
const xAxisDic = {};
for (const post in posts) {
  const date = posts[post]["frontMatter"]["date"];
  if (!xAxisDic[date]) {
    xAxisDic[date] = 1;
  } else {
    xAxisDic[date]++;
  }
}
const xAxis = Object.keys(xAxisDic).reverse();
const series = Object.values(xAxisDic).reverse();
chartObj.xAxis.data = xAxis;
chartObj.series[0].data = series;
// console.log("xAxis---series", xAxis, series);

//生成图表
nextTick(() => {
  initEcharts(chartObj);
});
</script>
<style scoped>
.chart-title {
  width: 600px;
  display: flex;
  justify-content: flex-start;
}
.about-header {
  width: 600px;
  padding: 10px;
  /* background-color: rgba(238, 240, 251, 0.3);
  border-radius: 10px; */
  text-align: center;
}

.about-charts {
  margin-top: 10px;
  padding: 30px 10px 0 5px;
  /* border-radius: 20px; */
  background-color: rgba(238, 240, 251, 0.5);
}
.about-title {
  margin: 10px 0;
}
.about-article-head {
  width: 600px;
  padding: 10px;
  /* background-color: rgba(238, 240, 251, 0.3);
  border-radius: 10px; */
  text-align: center;
  font-size: var(--font-title2-size);
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
.aboutPage {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 20px;
}
.about {
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