import * as echarts from 'echarts';

// 基于准备好的dom，初始化echarts实例
export default function initEcharts(chartObj) {
    const myChart = echarts.init(document.getElementById("main"));
    console.log("myChart", myChart);
    // 绘制图表
    myChart.setOption({
        title: {
            text: chartObj.title.text,
        },
        tooltip: {},
        xAxis: {
            data: chartObj.xAxis.data,
        },
        yAxis: {},
        series: chartObj.series,
    });


}