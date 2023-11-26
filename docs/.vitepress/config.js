export default {
  base: "/hz/",
  title: "華的文档", //站点标题
  description: "编程文档集合",
  themeConfig: {
    logo: "/logo.png",
    nav: [
      // {
      //   text: "前端",
      //   link: "/fe/html/index",
      // },
    ],
    sidebar: {
      "/fe/": [
        {
          text: "基础知识",
          items: [
            { text: "html", link: "/fe/html/index" },
            { text: "css", link: "/fe/css/index" },
            { text: "javascript", link: "/fe/js/index" },
            { text: "typescript", link: "/fe/ts/index" },
            {
              text: "vue",
              items: [
                { text: "vue2", link: "/fe/vue/vue2" },
                { text: "vue3", link: "/fe/vue/vue3" },
              ],
            },
            { text: "vue3", link: "/fe/vue/vue3" },
            { text: "react", link: "/fe/js/index" },
          ],
        },
      ],
      "/se/": {
        text: "基础知识",
        items: [{ text: "java", link: "/se/java/index" }],
      },
    },
  },
};
