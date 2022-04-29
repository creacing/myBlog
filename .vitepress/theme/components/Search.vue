<template>
  <div class="search">
    <div class="search-btn" @click="isShowSearchDiolag">🔎</div>

    <div class="search-dialog" v-show="showSearchDiolag">
      <div>
        <input v-model="inputValue" class="search-input-text" type="text" />
        <button @click="searchForValue" class="search-input-btn">搜索</button>
      </div>

      <ul class="search-list">
        <li v-for="item in searchRes" :key="item" class="search-list-item">
          <div class="search-content">
            <a :href="withBase(item.regularPath)" @click="goToArticle">{{
              item.frontMatter.title
            }}</a>
          </div>
          <div class="row-space-line"></div>
        </li>
      </ul>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { ref, onBeforeMount } from "vue";
import { useData, withBase } from "vitepress";
const { theme } = useData();

let inputValue = ref("");

let postsAll = theme.value.posts || [];
const searchRes = ref([]);

const searchForValue = () => {
  if (inputValue.value === "") {
    return;
  }
  searchRes.value = [];
  for (const e of postsAll) {
    if (e.frontMatter.title.includes(inputValue.value)) {
      searchRes.value.push(e);
    }
  }
};

const goToArticle = () => {
  showSearchDiolag.value = false;
};

let showSearchDiolag = ref(false);
const isShowSearchDiolag = () => {
  console.log("isShowSearchDiolag");
  showSearchDiolag.value = !showSearchDiolag.value;
};

onBeforeMount(() => {
  (function () {
    document.addEventListener("click", (e) => {
      showSearchDiolag.value = false;
    });
    setTimeout(() => {
      const dialog = document.getElementsByClassName("search-dialog")[0];
      dialog.addEventListener("click", (e) => {
        e.stopPropagation();
      });
      const searchBtn = document.getElementsByClassName("search-btn")[0];
      searchBtn.addEventListener("click", (e) => {
        e.stopPropagation();
      });
    });
  })();
});
</script>
<style scoped>
.row-space-line {
  border-bottom: 1px dashed rgb(198, 202, 204, 0.4);
}
/* 搜索图标 */
.search-btn {
  width: 22px;
  z-index: 1000;
  /* 搜索图标与左侧距离 */
  margin-left: 15px;
  cursor: pointer;
}
.search-dialog {
  height: 400px;
  width: 600px;
  position: fixed;
  top: 35%;
  left: 50%;
  z-index: 1000;
  background-color: #fff;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  padding: 10px;
  border-radius: 5px;
  background-color: rgba(238, 237, 240, 0.9);
}
@media (max-width: 1400px) {
  .search-dialog {
    width: 20rem;
  }
}

.search-input-text {
  width: 520px;
  height: 30px;
  border: 1px solid #fff;
  border-radius: 5px;
  /* box-shadow: 0 0 10px mediumslateblue; */
}
@media (max-width: 1400px) {
  .search-input-text {
    width: 15rem;
  }
}
.search-input-btn {
  height: 30px;
  width: 50px;
  margin-left: 10px;
  padding: 2px;
  border: 1px solid #fff;
  border-radius: 5px;
  /* box-shadow: 0 0 10px mediumslateblue; */
  background-color: rgba(123, 104, 238, 0.3);
}
.search-input-text:focus {
  outline: none;
}
.search-list {
  list-style: none;
  padding: 0;
  overflow: auto;
}
.search-content > a {
  text-decoration: none;
  color: black;
}
.search-content > a:hover {
  color: mediumslateblue;
}
/* 搜索弹框滚动条样式 */
/* 滚动条的宽度 */
::-webkit-scrollbar {
  width: 5px;
}
/* 滚动条的按钮 */
::-webkit-scrollbar-button {
  display: none;
}
/* 滚动条的滑块 */
::-webkit-scrollbar-thumb {
  background-color: grey;
  border-radius: 5px;
}
</style>