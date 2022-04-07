import { getPosts, getPostLength } from "./theme/serverUtils";

async function config() {
    return {
        lang: "zh-CN",
        title: "七夜许愿星",
        description: "七夜许愿星的博客",
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
                    content: "七夜的许愿星",
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
                    content: "七夜许愿星的博客",
                },
            ],
        ],
        themeConfig: {
            // repo: "clark-cui/homeSite",
            // logo: "/tea.svg",
            logo: "./avator.jpg",
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
                    text: "🏠主页",
                    link: "/",
                },
                {
                    text: "📝归档",
                    link: "/archives",
                },
                {
                    text: "🏷️标签",
                    link: "/tags",
                },
                {
                    text: "🌱关于",
                    link: "/about",
                },
                // {
                //     text: "📺追番",
                //     link: "/fanju",
                // },
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
