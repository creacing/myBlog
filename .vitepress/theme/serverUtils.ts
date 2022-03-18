import globby from "globby";
import matter from "gray-matter";
import fs from "fs-extra";
import path from "path";

export async function getPosts() {
    let paths = await getPostMDFilePaths();
    let posts = await Promise.all(
        paths.map(async (item) => {
            const content = await fs.readFile(item, "utf-8");
            const { data } = matter(content);
            data.date = _convertDate(data.date);
            return {
                frontMatter: data,
                regularPath: `/${item.replace(".md", ".html")}`,
            };
        })
    );
    posts.sort(_compareDate);
    return posts;
}

function _convertDate(date = new Date().toString()) {
    const json_date = new Date(date).toJSON();
    return json_date.split("T")[0];
}

function _compareDate(obj1, obj2) {
    return obj1.frontMatter.date < obj2.frontMatter.date ? 1 : -1;
}

async function getPostMDFilePaths() {
    //全局匹配.md文件
    let paths = await globby(["**.md"], {
        ignore: ["node_modules", "README.md"],
    });
    // console.log('paths', paths);

    return paths.filter((item) => {
        // console.log('item', item);

        // item posts/禁用页面部分复制功能.md
        // item posts/移除元素.md
        // item posts/给echarts坐标轴添加hover提示框.md
        // item posts/网页快捷键禁用.md
        // item.includes("posts/")
        return item.startsWith("posts")
    });
}

export async function getPostLength() {
    // getPostMDFilePath return type is object not array
    return [...(await getPostMDFilePaths())].length;
}
