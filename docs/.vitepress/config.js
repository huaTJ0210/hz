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
          text: "工程化",
          items: [{ text: "vue组件库", link: "/fe/project/cpn-vue-lib" }],
        },
        {
          text: "基础知识",
          items: [
            { text: "html", link: "/fe/html/index" },
            {
              text: "css",
              items: [
                {
                  text: "基础",
                  link: "/fe/css/index",
                },
                {
                  text: "布局",
                  link: "/fe/css/layout",
                },
              ],
            },
            {
              text: "javascript",
              items: [
                {
                  text: "基础",
                  link: "/fe/js/index",
                },
                {
                  text: "数据类型",
                  link: "/fe/js/data-type",
                },
                {
                  text: "函数",
                  link: "/fe/js/function",
                },
                {
                  text: "数组",
                  link: "/fe/js/array",
                },
                {
                  text: "集合",
                  link: "/fe/js/set",
                },
                {
                  text: "面向对象",
                  link: "/fe/js/oop",
                },
                {
                  text: "object",
                  link: "/fe/js/object",
                },
                {
                  text: "class",
                  link: "/fe/js/class",
                },
                {
                  text: "模块",
                  link: "/fe/js/module",
                },
              ],
            },
            { text: "typescript", link: "/fe/ts/index" },
            {
              text: "vue",
              items: [
                { text: "vue2", link: "/fe/vue/vue2" },
                { text: "vue3", link: "/fe/vue/vue3" },
              ],
            },
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
