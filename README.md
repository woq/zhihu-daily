# zhihu-daily

## home

- views/home.vue

1. 顶部状态栏
    1.1 日期
    1.2 问候
    1.3 头像
2. 滚动轮播 `top_Stories`
    2.1 轮播文字 `top_Stories.title`
3. 文章列表  `stories`
   3.1 组件 `components/home-article`
        3.1.1 文章缩略图 `stories.images[0]`
        3.1.2 文章标题 `stories.title`
        3.1.3 作者与阅读时间 `stories.hint`
   3.2 日期分隔符
   3.3 懒加载 与 无限加载