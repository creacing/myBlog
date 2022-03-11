import { getPosts, getPostLength } from "./theme/serverUtils";

async function config() {
  return {
    lang: "en-US",
    title: "ooo",
    description: "ooo •ᴗ• blog",
    head: [
      [
        "link",
        {
          rel: "icon",
          type: "image/jpeg",
          href: "/avator.jpg",
        },
      ],
      [
        "meta",
        {
          name: "author",
          content: "ooo",
        },
      ],
      [
        "meta",
        {
          property: "og:title",
          content: "Home",
        },
      ],
      [
        "meta",
        {
          property: "og:description",
          content: "ooo •ᴗ• blog",
        },
      ],
    ],
    themeConfig: {
      // repo: "clark-cui/homeSite",
      logo: "/tea.svg",
      docsDir: "/",
      // docsBranch: "master",
      lastUpdated: false,
      posts: await getPosts(),
      pageSize: 5, //几个为一页
      postLength: await getPostLength(), //博客有几篇
      // algolia: {
      //   apiKey: "90a0bae6ff7307fb76896cbe2f975b0c",
      //   indexName: "clark-cui-docs",
      // },
      nav: [
        {
          text: "🏠Home",
          link: "/",
        },
        {
          text: "🏷️Tags",
          link: "/tags",
        },
        {
          text: "📝Archives",
          link: "/archives",
        },
        {
          text: "🌱About",
          link: "/about",
        },
      ],
      //这里插入的是Emoji图片
      //侧边栏
      // sidebar: {
      //   "./posts/": false,
      //   "/": false,
      // },
      sidebar: false,
    },
  };
}
export default config();
