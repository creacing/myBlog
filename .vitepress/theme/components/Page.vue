<template>
  <div>
    <!-- <ShareCard /> -->
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
            <div class="title article-short-intro-el">
              {{
                screenWidth < 400
                  ? `${
                      item.frontMatter.title &&
                      item.frontMatter.title.substring(0, 11)
                    }...`
                  : item.frontMatter.title
              }}
            </div>
            <div class="tags article-short-intro-el">
              🏷️&nbsp;{{
                item.frontMatter.tags && item.frontMatter.tags.join(" ")
              }}
            </div>
            <div class="date article-short-intro-el">
              <div>
                {{ transDate(item.frontMatter.date) }}
              </div>
              <button class="read-more" v-show="screenWidth > 400">
                阅读全文
              </button>
            </div>
          </div>

          <div class="blog-hr"></div>
        </a>
      </div>
    </div>
    <div class="pagination">
      <div @click="getPrePages" class="link" v-show="pagesNum > 5">&lt;</div>
      <div
        class="link"
        :class="{ activeLink: pageCurrent === i }"
        v-for="i in pagesQueue"
        :key="i"
        @click="go(i)"
      >
        {{ i }}
      </div>
      <div @click="getAfterPages" class="link" v-show="pagesNum > 5">&gt;</div>
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
// import ShareCard from "./ShareCard.vue";
import { useData, withBase } from "vitepress";
const { theme } = useData();
let screenWidth = ref(0);
onMounted(() => {
  screenWidth.value = screen.width;
});
// get posts
let postsAll = theme.value.posts || [];
// get postLength
let postLength = theme.value.postLength;
// get pageSize 文章数目
let pageSize = theme.value.pageSize + 3;

//pagesNum指共的页数
let pagesNum =
  postLength % pageSize === 0
    ? postLength / pageSize
    : postLength / pageSize + 1;
//pagesQueue当前可以看到的pages页码有哪些
const pagesQueueValue: number[] = [];
const pagesQueue = ref(pagesQueueValue);

pagesNum = parseInt(pagesNum.toString());
//初始化pageQueue
if (pagesNum > 5) {
  for (let i = 0; i < 5; i++) {
    pagesQueue.value.push(i + 1);
  }
} else {
  for (let i = 0; i < pagesNum; i++) {
    pagesQueue.value.push(i + 1);
  }
}
/***需求 页面导航每次显示五个页面 ***/
/***数据结构 队列 ***/
//获取前面的页数
const getPrePages = function () {
  //页面队列的第一个值减去五小于1就返回
  if (pagesQueue.value[0] - 5 < 1) {
    return;
  } else {
    //获取页面队列的第一个值
    const startPageValue = pagesQueue.value[0];
    //清空队列
    pagesQueue.value.splice(0);
    //填充较小的五个值
    for (let k = startPageValue - 1; k >= startPageValue - 5; k--) {
      pagesQueue.value.unshift(k);
    }
  }
};
//获取后面的页数
const getAfterPages = function () {
  //最后一页的页码与总共的页数相等就返回

  if (pagesNum - 1 === pagesQueue.value[pagesQueue.value.length - 1]) {
    return;
  }
  //下一个队列的开始值
  const startPageValue = pagesQueue.value[pagesQueue.value.length - 1] + 1;
  //清空队列
  pagesQueue.value.splice(0);
  //下下个个队列的开始值是否小于等于pagesNum 符合就加五个 不符合就剩下的全部加入
  if (startPageValue + 5 <= pagesNum) {
    for (let k = startPageValue; k < startPageValue + 5; k++) {
      pagesQueue.value.push(k);
    }
  } else {
    for (let k = startPageValue; k < pagesNum; k++) {
      pagesQueue.value.push(k);
    }
  }
};

//pageCurrent
let pageCurrent = ref(1);
// filter index post
postsAll = postsAll.filter((item: post) => {
  return item.regularPath.indexOf("index") < 0;
});
//按时间排序
postsAll.sort((a: object, b: object) => {
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
.read-more {
  background-color: rgba(255, 255, 255, 0.2);
  border: 0;
  display: block;
  padding: 3px;
}
.article-short-intro-el {
  padding-bottom: 20px;
}

.blog-hr {
  border-bottom: 2px solid rgb(123, 104, 238, 0.3);
  /* margin-top: 10px; */
}
.article-short-intro :hover {
  color: mediumslateblue;
}
.article-short-intro {
  display: flex;
  flex-direction: column;
}
.blog-title {
  text-align: center;
  font-weight: bold;
}
.blogList {
  padding: 30px 0;
  padding-bottom: 130px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-bottom: 10px;
}
.blogListBg {
  width: 100%;
  border-radius: 10px;
  max-width: 60%;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.blog {
  height: 160px;
  width: 85%;
  display: block;
  border-radius: 10px;
  padding: 0 20px;
  cursor: pointer;
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
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  font-size: 1.2em;
  font-weight: bold;
  color: var(--c-color);
}
.tags {
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
  cursor: pointer;
  transition: 0.2s;
  border-radius: 2px;
  border: 1px solid rgba(0, 0, 0, 0.2);
}
.link:last-child {
}
.link:hover {
  transform: translate(-1px, -1px);
}
.activeLink {
  background-color: mediumslateblue;
  color: white;
}
</style>
