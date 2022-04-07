import DefaultTheme from "vitepress/theme";
import Archives from "./components/Archives.vue";
import Tags from "./components/Tags.vue";
import About from "./components/About.vue";
import Fanju from "./components/Fanju.vue";
import MyLayout from "./components/MyLayout.vue";
import "./custom.css";
//入口
export default {
    ...DefaultTheme,
    Layout: MyLayout,
    enhanceApp({ app, router, siteData }) {
        // 注册全局组件
        app.component("Archives", Archives);
        app.component("Tags", Tags);
        app.component("About", About);
        app.component("Fanju", Fanju);
        // app is the Vue 3 app instance from createApp()
        // router is VitePress' custom router (see `lib/app/router.js`)
        // siteData is a ref of current site-level metadata.
    },
};

//注册全局组件