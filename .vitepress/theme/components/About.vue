<template>
  <div class="about">
    <div class="aboutPage">
      <h2 class="about-header">欢迎来到 七夜的许愿星 的个人小站</h2>
      <h3 class="about-description" style="margin-top: 0">
        一个专注于 javascript 的技术爱好者
      </h3>
      <h4 class="chart-title">更新日志</h4>
      <div class="about-charts">
        <input
          type="button"
          value="切换"
          @click="changeChartType"
          class="change-chart-type"
        />
        <div id="main" style="width: 40rem; height: 400px"></div>
      </div>
    </div>
  </div>
</template>
<script setup>
import initEcharts from "./../utils/Echart.js";
import { onMounted, ref } from "vue";
import { useData } from "vitepress";

const chartType = ref("");
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

//生成图表
onMounted(() => {
  initEcharts(chartObj);
});
//更改图表类型 bar , line
const changeChartType = () => {
  if (chartObj.series[0].type === "line") {
    chartObj.series[0].type = "bar";
  } else {
    chartObj.series[0].type = "line";
  }

  initEcharts(chartObj);
};
</script>
<style scoped>
.change-chart-type {
  position: absolute;
  top: 10px;
  right: 10px;
  background-color: rgba(255, 255, 255, 0);
  border: 0;
  cursor: pointer;
}
.chart-title {
  width: 40rem;
  display: flex;
  justify-content: flex-start;
}
.about-header {
  padding: 10px;
  text-align: center;
}

.about-charts {
  position: relative;
  margin-top: 10px;
  padding: 30px 10px 0 5px;
  background-color: rgba(238, 240, 251, 0.5);
}
.about-title {
  margin: 10px 0;
}
.about-description {
  padding: 10px;
  text-align: center;
  font-size: var(--font-title2-size);
  font-weight: var(--font-title2-weight);
}
.aboutPage {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 20px;
  width: 100%;
}
.about {
  display: flex;
  justify-content: center;
}

.content > div > div {
  background: unset;
  box-shadow: unset;
}
</style>