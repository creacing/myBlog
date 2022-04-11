<template>
  <!-- 切换主题 -->
  <div class="toggleTheme" @click="toggle"></div>
</template>
<script lang="ts" setup>
import { ref } from "vue";
</script>
<style scoped>
.toggleTheme {
  display: flex;
  cursor: pointer;
  width: 22px;
  margin-left: 15px;
}
</style>