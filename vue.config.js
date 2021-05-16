// 导出的对象就是配置对象
module.exports = {
  // publicPath 公共路径，主要作用是资源的路径，就是index.html使用什么样的地址去找 css js img 等
  // 默认值是 '/' 就是服务器根地址 假如你的服务器地址是https://<USERNAME>.github.io/<REPO>/ 那么 publicPath 默认就是https://<USERNAME>.github.io/，当你的 index.html 导入资源的时候，路径就是错误的
  // 要区分生产环境和开发环境，只有在部署的时候也就是生产环境下需要设置 publicPath
  publicPath: process.env.NODE_ENV === "production" ? "/Vue-Community/" : "/"
};
