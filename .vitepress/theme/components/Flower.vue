<template>
  <div>
    <div class="div1 petal"></div>
    <div class="div2 petal"></div>
    <div class="div3 petal"></div>
    <div class="div4 petal"></div>
    <div class="div5 petal"></div>
    <div class="div6 petal"></div>
    <div class="div7 petal"></div>
    <div class="div8 petal"></div>
    <div class="div9 petal"></div>
    <div class="div10 petal"></div>
    <div class="div11 petal"></div>
    <div class="div12 petal"></div>
    <div class="div13 petal"></div>
    <div class="div14 petal"></div>
    <div class="div15 petal"></div>
    <div class="div16 petal"></div>
    <div class="div17 petal"></div>
    <div class="div18 petal"></div>
  </div>
</template>
<script lang='ts' setup>
</script>

<style scoped>
.petal {
  position: fixed;
  top: 20%;
  left: 50%;
  /* background: pink; */
  /* background: rgba(123, 104, 236, 0.7); */
  background: rgb(173, 175, 224, 0.7);
  opacity: 0.3.4;
  width: 300px;
  height: 300px;
  border-radius: 300px 0px;
  /* 旋转基点 */
  transform-origin: 0px 300px;
  /* 逆时针旋转45度 */
  transform: rotate(-45deg);
}
.div1 {
  /* z-index: -1; */
  /* 动画名称 持续时间 时间函数 延迟时间 循环次数 动画方向 播放装态 填充模式 */
  animation: a1 2s ease 1 forwards;
}
.div2 {
  /* z-index: 2; */
  /* 动画名称 持续时间 时间函数 延迟时间 循环次数 动画方向 播放装态 填充模式 */
  animation: a2 2s ease 1 forwards;
}

.div3 {
  /* z-index: 3; */
  animation: a3 2s ease 1 forwards;
}

.div4 {
  /* z-index: 4; */
  animation: a4 2s ease 1 forwards;
}

.div5 {
  /* z-index: 5; */
  animation: a5 2s ease 1 forwards;
}

.div6 {
  /* z-index: 6; */
  animation: a6 2s ease 1 forwards;
}

.div7 {
  /* z-index: 7; */
  animation: a7 2s ease 1 forwards;
}

.div8 {
  /* z-index: 8; */
  animation: a8 2s ease 1 forwards;
}

.div9 {
  /* z-index: 9; */
  animation: a9 2s ease 1 forwards;
}

.div10 {
  /* z-index: 10; */
  animation: a10 2s ease 1 forwards;
}

.div11 {
  /* z-index: 11; */
  animation: a11 2s ease 1 forwards;
}

.div12 {
  /* z-index: 12; */
  animation: a12 2s ease 1 forwards;
}

.div13 {
  /* z-index: 13; */
  animation: a13 2s ease 1 forwards;
}

.div14 {
  /* z-index: 14; */
  animation: a14 2s ease 1 forwards;
}

.div15 {
  /* z-index: 15; */
  animation: a15 2s ease 1 forwards;
}

.div16 {
  /* z-index: 16; */
  animation: a16 2s ease 1 forwards;
}

.div17 {
  /* z-index: 17; */
  animation: a17 2s ease 1 forwards;
}

.div18 {
  /* z-index: 18; */
  animation: a18 2s ease 1 forwards;
}

@keyframes a1 {
  from {
    opacity: 0.1;
    z-index: -1;
  }
  to {
    opacity: 0.5;
    z-index: -2;
  }
}

@keyframes a2 {
  from {
    opacity: 0.1;
    z-index: -1;
    transform: rotate(-45deg);
  }
  to {
    opacity: 0.5;
    z-index: -2;
    transform: rotate(-25deg);
  }
}

@keyframes a3 {
  from {
    opacity: 0.1;
    z-index: -1;
    transform: rotate(-45deg);
  }
  to {
    opacity: 0.5;
    z-index: -2;
    transform: rotate(-5deg);
  }
}

@keyframes a4 {
  from {
    opacity: 0.1;
    z-index: -1;
    transform: rotate(-45deg);
  }
  to {
    opacity: 0.5;
    z-index: -2;
    transform: rotate(15deg);
  }
}

@keyframes a5 {
  from {
    opacity: 0.1;
    z-index: -1;
    transform: rotate(-45deg);
  }
  to {
    opacity: 0.5;
    z-index: -2;
    transform: rotate(35deg);
  }
}

@keyframes a6 {
  from {
    opacity: 0.1;
    z-index: -1;
    transform: rotate(-45deg);
  }
  to {
    opacity: 0.5;
    z-index: -2;
    transform: rotate(55deg);
  }
}

@keyframes a7 {
  from {
    opacity: 0.1;
    z-index: -1;
    transform: rotate(-45deg);
  }
  to {
    opacity: 0.5;
    z-index: -2;
    transform: rotate(75deg);
  }
}

@keyframes a8 {
  from {
    opacity: 0.1;
    z-index: -1;
    transform: rotate(-45deg);
  }
  to {
    opacity: 0.5;
    z-index: -2;
    transform: rotate(95deg);
  }
}

@keyframes a9 {
  from {
    opacity: 0.1;
    z-index: -1;
    transform: rotate(-45deg);
  }
  to {
    opacity: 0.5;
    z-index: -2;
    transform: rotate(115deg);
  }
}

@keyframes a10 {
  from {
    opacity: 0.1;
    z-index: -1;
    transform: rotate(-45deg);
  }
  to {
    opacity: 0.5;
    z-index: -2;
    transform: rotate(135deg);
  }
}

@keyframes a11 {
  from {
    opacity: 0.1;
    z-index: -1;
    transform: rotate(-45deg);
  }
  to {
    opacity: 0.5;
    z-index: -2;
    transform: rotate(155deg);
  }
}

@keyframes a12 {
  from {
    opacity: 0.1;
    z-index: -1;
    transform: rotate(-45deg);
  }
  to {
    opacity: 0.5;
    z-index: -2;
    transform: rotate(175deg);
  }
}

@keyframes a13 {
  from {
    opacity: 0.1;
    z-index: -1;
    transform: rotate(-45deg);
  }
  to {
    opacity: 0.5;
    z-index: -2;
    transform: rotate(195deg);
  }
}

@keyframes a14 {
  from {
    opacity: 0.1;
    z-index: -1;
    transform: rotate(-45deg);
  }
  to {
    opacity: 0.5;
    z-index: -2;
    transform: rotate(215deg);
  }
}

@keyframes a15 {
  from {
    opacity: 0.1;
    z-index: -1;
    transform: rotate(-45deg);
  }
  to {
    opacity: 0.5;
    z-index: -2;
    transform: rotate(235deg);
  }
}

@keyframes a16 {
  from {
    opacity: 0.1;
    z-index: -1;
    transform: rotate(-45deg);
  }
  to {
    opacity: 0.5;
    z-index: -2;
    transform: rotate(255deg);
  }
}

@keyframes a17 {
  from {
    opacity: 0.1;
    z-index: -1;
    transform: rotate(-45deg);
  }
  to {
    opacity: 0.5;
    z-index: -2;
    transform: rotate(275deg);
  }
}

@keyframes a18 {
  from {
    opacity: 0.1;
    z-index: -1;
    transform: rotate(-45deg);
  }
  to {
    opacity: 0.5;
    z-index: -2;
    transform: rotate(295deg);
  }
}
</style>
