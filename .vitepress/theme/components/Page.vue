<template>
  <div class="blogPage">
    <div class="blogList">
      <div class="blogListBg">
        <div v-for="(item, index) in posts" :key="item" class="blogBg1">
          <div class="blogBg2">
            <!-- <div class="blogImage"> -->
            <!-- <img src="/articlePicture.png" alt="文章背景图" /> -->
            <!-- 多图情况下使用，这里由于性能问题 -->
            <!-- <img
                :src="
                  pageCurrent * 5 + index < 89
                    ? `./articlesPictures/${pageCurrent * 5 + index}.jpg`
                    : `./articlesPictures/${(pageCurrent - 18) * 5 + index}.jpg`
                "
                alt="文章背景图"
              /> -->
            <!-- articlePicture -->
            <!-- </div> -->
            <a class="blog" :href="withBase(item.regularPath)">
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
                  🔖&nbsp;{{
                    item.frontMatter.tags && item.frontMatter.tags.join(" ")
                  }}
                </div>
                <div class="date article-short-intro-el">
                  <div>
                    {{ transDate(item.frontMatter.date) }}
                  </div>
                  <button class="read-more" v-show="screenWidth > 600">
                    阅读全文 >>
                  </button>
                </div>
              </div>

              <div class="blog-hr"></div>
            </a>
          </div>
        </div>
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
let pageSize = theme.value.pageSize;

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
const monthDic = {
  "1": `Jan`,
  "01": `Jan`,
  "2": `Feb`,
  "02": `Feb`,
  "3": `Mar`,
  "03": `Mar`,
  "4": `Apr`,
  "04": `Apr`,
  "5": `May`,
  "05": `May`,
  "6": `Jun`,
  "06": `Jun`,
  "7": `Jul`,
  "07": `Jul`,
  "8": `Aug`,
  "08": `Aug`,
  "9": `Sep`,
  "09": `Sep`,
  "10": `Oct`,
  "11": `Nov`,
  "12": `Dec`,
};
const transDate = (date: string) => {
  const dateArray = date.split("-");
  let year = dateArray[0],
    month = ``,
    day = dateArray[2];
  if (Object.keys(monthDic).includes(dateArray[1])) {
    month = monthDic[dateArray[1]];
  } else {
    month = "";
  }
  return `${month} ${day}, ${year}`;
};
</script>

<style scoped>
/* long picture style */
/* .blogImage {
  height: 10rem;
  width: 20rem;
  border-radius: 1rem;
  overflow: hidden;
} */

.blogImage {
  height: 10rem;
  width: 12rem;
  border-radius: 1rem;
  overflow: hidden;
}
.blogImage > img {
  height: 100%;
  width: 100%;
}
@media (max-width: 1400px) {
  .blogImage {
    display: none;
  }
}
.blogPage {
  display: flex;
  flex-direction: column;
  padding-bottom: var(--header-height);
}
.blogBg1 {
  width: 100%;
  display: flex;
  justify-content: center;
  padding-top: 10px;
  padding-bottom: 10px;
  border-radius: 3rem;
  /* background-color: rgba(200, 206, 243, 0.2); */
  margin: 5px 0;
  padding: 10px;
  width: 100%;
}
.blogBg2 {
  width: 100%;
  display: flex;
  justify-content: center;
  /* border-radius: 2rem; */
  background-color: rgba(238, 240, 251, 0.2);
  padding: 10px 20px;
  padding-top: 1.5rem;
}
.read-more {
  background-color: rgba(255, 255, 255, 0.2);
  border: 0;
  display: block;
  padding: 5px;
  border-radius: 5px;
}
.article-short-intro-el {
  padding-bottom: 20px;
}

.blog-hr {
  border-bottom: 2px solid rgb(123, 104, 238, 0.3);
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
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-bottom: 10px;
}
@media (max-width: 1400px) {
  .blogListBg {
    max-width: 55%;
  }
}

.blogListBg {
  width: 100%;
  border-radius: 10px;
  max-width: 55%;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 3rem;
  padding: 10px;
}
@media (max-width: 1400px) {
  .blogListBg {
    max-width: 100%;
  }
}

.blog {
  /* height: 10rem; */
  width: 100%;
  display: flex;
  flex-direction: column;
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
  /* text-align: center; */
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
  /* position: absolute;
  bottom: 70px; */
  width: 100%;
}
.link {
  border-radius: 0.5rem;
  margin-right: 5px;
  width: 2.5rem;
  height: 2rem;
  line-height: 2rem;
  text-align: center;
  cursor: pointer;
  transition: 0.2s;
  border: 1px solid rgba(0, 0, 0, 0.2);
}
.link:hover {
  transform: translate(-1px, -1px);
}
.activeLink {
  background-color: #958daf;
  color: white;
}
</style>
