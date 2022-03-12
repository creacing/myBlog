<template>
  <div></div>
  <!-- <div class="pic">/div> -->
</template>
<script lang="ts" setup>
// import avator from "../../../public/avator.jpg";
import { onMounted } from "vue";
//实时渲染动画的库
import lottie from "lottie-web";
onMounted(() => {
  // storage lottie
  const svgContainer = document.getElementById("svgContainer");
  if (svgContainer) {
    return;
  }
  // created insertNode and add style
  // const insertNode = document.createElement("div");
  // insertNode.id = "svgContainer";
  // insertNode.style.width = "300px";
  // insertNode.style.margin = "0 auto";
  // const pic = document.getElementsByClassName("pic")[0];
  // pic.appendChild(insertNode);
  // // created lottie 通过lottie.loadAnimation生成动图

  // const animItem = lottie.loadAnimation({
  //   container: insertNode,
  //   renderer: "svg",
  //   loop: true,
  //   path: "https://labs.nearpod.com/bodymovin/demo/markus/isometric/markus2.json",
  // });

  // console.log("animItem", animItem); //返回的值为一个动画的对象
});
</script>
<style scoped>
.pic {
  text-align: center;
}
</style>
