<template>
  <div>
    <ShareCard />
    <div class="blogList">
      <div class="blogListBg">
        <a
          class="blog"
          v-for="item in posts"
          :href="withBase(item.regularPath)"
          :key="item"
        >
          <div class="article-short-intro">
            <!-- 防止title溢出 -->
            <div class="title">
              {{
                item.frontMatter.title.length > 20
                  ? `${item.frontMatter.title.slice(0, 11)}...`
                  : item.frontMatter.title
              }}
            </div>
            <div v-show="showDate" class="date">
              {{ transDate(item.frontMatter.date) }}
            </div>
          </div>
        </a>
      </div>
    </div>
    <div class="pagination">
      <div @click="getPrePages" class="link">&lt;</div>
      <div
        class="link"
        :class="{ activeLink: pageCurrent === i }"
        v-for="i in pagesQueue"
        :key="i"
        @click="go(i)"
      >
        {{ i }}
      </div>
      <div @click="getAfterPages" class="link">&gt;</div>
    </div>
  </div>
</template>
<script lang="ts" setup>
//进行类型推断
interface post {
  regularPath: string;
  frontMatter: object;
}
import { onMounted, ref, reactive } from "vue";
import ShareCard from "./ShareCard.vue";
import { useData, withBase } from "vitepress";
const { theme } = useData();
const showDate = window.screen.width > 600 ? true : false;
// get posts
let postsAll = theme.value.posts || [];
// get postLength
let postLength = theme.value.postLength;
// get pageSize
let pageSize = theme.value.pageSize + 3;

//  pagesNum
let pagesNum =
  postLength % pageSize === 0
    ? postLength / pageSize
    : postLength / pageSize + 1;
//pagesQueue当前可以看到的pages页码有哪些
const pagesQueueValue: number[] = [];
const pagesQueue = ref(pagesQueueValue);

pagesNum = parseInt(pagesNum.toString());
//判断pagesNum 的大小
if (pagesNum > 5) {
  for (let i = 0; i < 5; i++) {
    pagesQueue.value.push(i + 1);
  }
} else {
  for (let i = 0; i < pagesNum; i++) {
    pagesQueue.value.push(i + 1);
  }
}

const getPrePages = function () {
  if (pagesQueue.value[0] === 1) {
    return;
  } else {
    pagesQueue.value.unshift(pagesQueue.value[0] - 1);
    pagesQueue.value.pop();
  }
};
const getAfterPages = function () {
  if (pagesNum === pagesQueue.value[pagesQueue.value.length - 1]) {
    return;
  }
  if (pagesQueue.value.length === 5) {
    pagesQueue.value.push(pagesQueue.value[pagesQueue.value.length - 1] + 1);
    pagesQueue.value.shift();
  } else {
    pagesQueue.value.push(pagesQueue.value[pagesQueue.value.length - 1] + 1);
  }
};
//pageCurrent
let pageCurrent = ref(1);
// filter index post
postsAll = postsAll.filter((item: post) => {
  return item.regularPath.indexOf("index") < 0;
});
// console.log("posts", postsAll);
//按时间排序
postsAll.sort((a: object, b: object) => {
  //   console.log("xx", b.frontMatter.date.split("-").join(""));

  return (
    Number(b.frontMatter.date.split("-").join("")) -
    Number(a.frontMatter.date.split("-").join(""))
  );
});

// pagination
let allMap = {};
for (let i = 0; i < pagesNum; i++) {
  allMap[i] = [];
}
let index = 0;
for (let i = 0; i < postsAll.length; i++) {
  if (allMap[index].length > pageSize - 1) {
    index += 1;
  }
  allMap[index].push(postsAll[i]);
}
// set posts
let posts = ref([]);
posts.value = allMap[pageCurrent.value - 1];

// click pagination
const go = (i) => {
  pageCurrent.value = i;
  posts.value = allMap[pageCurrent.value - 1];
};
// timestamp transform
const transDate = (date: string) => {
  const dateArray = date.split("-");
  let year = dateArray[0],
    month = ``,
    day = dateArray[2];
  switch (dateArray[1]) {
    case "1":
    case "01":
      month = `Jan`;
      break;
    case "2":
    case "02":
      month = `Feb`;
      break;
    case "3":
    case "03":
      month = `Mar`;
      break;
    case "4":
    case "04":
      month = `Apr`;
      break;
    case "5":
    case "05":
      month = `May`;
      break;
    case "6":
    case "06":
      month = `Jun`;
      break;
    case "7":
    case "07":
      month = `Jul`;
      break;
    case "8":
    case "08":
      month = `Aug`;
      break;
    case "9":
    case "09":
      month = `Sep`;
      break;
    case "10":
      month = `Oct`;
      break;
    case "11":
      month = `Nov`;
      break;
    case "12":
      month = `Dec`;
      break;
    default:
      month = `Month`;
  }
  return `${month} ${day}, ${year}`;
};
</script>

<style scoped>
.article-short-intro :hover {
  color: mediumslateblue;
}
.article-short-intro {
  display: flex;
  justify-content: space-between;
  padding: 10px;

  border: 1px solid #fff;
  border-radius: 5px;
  box-shadow: 0 0 10px mediumslateblue;
  height: 48px;
}
/* .line {
  border-bottom: 1px dashed rgb(198, 202, 204, 0.4);
} */
.blog-title {
  text-align: center;
  font-weight: bold;
}
.blogList {
  padding: 30px 0;
  padding-bottom: 120px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.blogListBg {
  width: 100%;
  border-radius: 10px;
  max-width: 700px;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.blog {
  width: 85%;
  display: block;
  border-radius: 10px;
  padding: 0 20px;
  margin: 10px;
  /* background: var(--c-bg); */
  /* max-width: 600px; */
  max-width: 700px;
  /* box-shadow: 6px 6px var(--c-brand);
  border: 4px solid #282936; */
  cursor: pointer;
  /* color: var(-c-color); */
}
.blog:hover {
  text-decoration: none;
  transform: translate(-2px, -2px);
}
.title {
  font-size: 1.2em;
  font-weight: bold;
  color: var(--c-color);
}
.date {
  font-size: 1.2em;
  font-weight: bold;
  color: var(--c-color);
}
.pagination {
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  bottom: 70px;
  width: 100%;
}
.link {
  margin-right: 5px;
  width: 2rem;
  height: 2rem;
  line-height: 2rem;
  text-align: center;
  /* border: 1px solid #282936; */
  cursor: pointer;
  /* border-right: none; */
  transition: 0.2s;
  border-radius: 2px;
  border: 1px solid rgba(0, 0, 0, 0.2);
}
.link:last-child {
  /* border-right: 1px solid #282936; */
}
.link:hover {
  transform: translate(-1px, -1px);
}
.activeLink {
  /* background-color: var(--c-brand); */
  background-color: mediumslateblue;
  color: white;
}
</style>
