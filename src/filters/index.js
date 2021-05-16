// 全局过滤器
import Vue from "vue";
Vue.filter(
  // 得到文章的中文类别
  "getPostChineseTab",
  post =>
    post.top
      ? "置顶"
      : post.good
      ? "精华"
      : post.tab === "share"
      ? "分享"
      : post.tab === "ask"
      ? "问答"
      : post.tab === "job"
      ? "招聘"
      : "客户端测试"
);
