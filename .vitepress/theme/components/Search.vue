<template>
  <div class="search">
    <div class="search-btn" @click="isShowSearchDiolag">🔎</div>

    <div class="search-dialog" v-show="showSearchDiolag">
      <div>
        <input v-model="inputValue" class="search-input-text" type="text" />
        <button @click="searchForValue" class="search-input-btn">search</button>
      </div>

      <ul class="search-list">
        <li v-for="item in searchRes" :key="item">
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
import { ref, onMounted } from "vue";
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
// const dialogShowClassName = [
//   "search-btn",
//   "search-dialog",
//   "search-input-text",
//   "search-input-btn",
//   "search-list",
//   "search-content",
//   "row-space-line",
// ];
document.addEventListener("click", (e) => {
  // if (!dialogShowClassName.includes(e.target.className)) {
  showSearchDiolag.value = false;
  // }
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
</script>
<style scoped>
.row-space-line {
  border-bottom: 1px dashed rgb(198, 202, 204, 0.4);
}
.search-btn {
  position: fixed;
  top: 20px;
  right: 20px;
  z-index: 1000;
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
  background-color: rgba(255, 255, 255, 0.9);
}
.search-input-text {
  width: 520px;
  height: 30px;
  border: 1px solid #fff;
  border-radius: 5px;
  box-shadow: 0 0 10px mediumslateblue;
}
.search-input-btn {
  height: 30px;
  width: 50px;
  margin-left: 10px;
  padding: 2px;
  border: 1px solid #fff;
  border-radius: 5px;
  box-shadow: 0 0 10px mediumslateblue;
}
.search-input-text:focus {
  outline: none;
}
.search-list {
  list-style: none;
  padding: 0;
  overflow: auto;
}

::-webkit-scrollbar {
  width: 5px;
}
::-webkit-scrollbar-button {
  display: none;
}
::-webkit-scrollbar-thumb {
  background-color: grey;
  border-radius: 5px;
}
</style>