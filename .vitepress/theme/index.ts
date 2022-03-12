import DefaultTheme from "vitepress/theme";
import Archives from "./components/Archives.vue";
import Tags from "./components/Tags.vue";
import About from "./components/About.vue";
import MyLayout from "./components/MyLayout.vue";
import "./custom.css";

//引入樱花特效
const sakura = document.createElement("script");
sakura.type = "text/javascript";
sakura.src = "/sakura.min.js";
document.body.appendChild(sakura);
//  <link rel="stylesheet" href="path/to/sakura.min.css">
const sakuraCss = document.createElement("link");
sakuraCss.rel = "stylesheet";
sakuraCss.href = "/sakura.min.css";
document.head.appendChild(sakuraCss);

export default {
  ...DefaultTheme,
  Layout: MyLayout,
  enhanceApp({ app, router, siteData }) {
    // register global components
    app.component("Archives", Archives);
    app.component("Tags", Tags);
    app.component("About", About);
    // app is the Vue 3 app instance from createApp()
    // router is VitePress' custom router (see `lib/app/router.js`)
    // siteData is a ref of current site-level metadata.
  },
};

//注册全局组件