<template>
  <div class="getstart">
    <Panel style="width:70%">
      <template #header>
        <router-link to="/" class="getstart_home">首页</router-link>
        <span> / Node.js 新手入门</span>
      </template>
      <template #content>
        <div class="novice">
          <h2>Node.js 入门</h2>
          <div>
            <h4>《汇智网 Node.js 课程》</h4>
            <a href="http://www.hubwiz.com/course/?type=nodes"
              >http://www.hubwiz.com/course/?type=nodes</a
            >
          </div>
          <div>
            <h4>《快速搭建 Node.js 开发环境以及加速 npm》</h4>
            <a
              href="http://fengmk2.com/blog/2014/03/node-env-and-faster-npm.html"
              >http://fengmk2.com/blog/2014/03/node-env-and-faster-npm.html</a
            >
          </div>
          <div>
            <h4>《Node.js 包教不包会》</h4>
            <a href="https://github.com/alsotang/node-lessons"
              >https://github.com/alsotang/node-lessons</a
            >
          </div>
          <div>
            <h4>《ECMAScript 6入门》</h4>
            <a href="http://es6.ruanyifeng.com/">http://es6.ruanyifeng.com/</a>
          </div>
          <div>
            <h4>《七天学会NodeJS》</h4>
            <a href="https://github.com/nqdeng/7-days-nodejs"
              >https://github.com/nqdeng/7-days-nodejs</a
            >
          </div>
          <div>
            <h4>《Node入门-一本全面的Node.js教程》</h4>
            <a href="http://www.nodebeginner.org/index-zh-cn.html"
              >http://www.nodebeginner.org/index-zh-cn.html</a
            >
          </div>
        </div>
        <div class="resources">
          <h2>Node.js 资源</h2>
          <div>
            <h4>《node weekly》</h4>
            <a href="http://nodeweekly.com/issues"
              >http://nodeweekly.com/issues</a
            >
          </div>
          <div>
            <h4>《node123-node.js中文资料导航》</h4>
            <a href="https://github.com/youyudehexie/node123"
              >https://github.com/youyudehexie/node123</a
            >
          </div>
          <div>
            <h4>
              《A curated list of delightful Node.js packages and resources》
            </h4>
            <a href="https://github.com/sindresorhus/awesome-nodejs"
              >https://github.com/sindresorhus/awesome-nodejs</a
            >
          </div>
          <div>
            <h4>
              《Node.js Books》
            </h4>
            <a href="https://github.com/pana/node-books"
              >https://github.com/pana/node-books</a
            >
          </div>
        </div>
        <div class="celebrity">
          <h2>Node.js 名人</h2>
          <div>
            <h4>《名人堂》</h4>
            <a href="https://github.com/cnodejs/nodeclub/wiki/名人堂"
              >https://github.com/cnodejs/nodeclub/wiki/名人堂</a
            >
          </div>
        </div>
        <div class="server">
          <h2>Node.js 服务器</h2>
          <p>
            新手搭建 Node.js 服务器，推荐使用无需备案的
            <a href="https://www.digitalocean.com/"
              >DigitalOcean(https://www.digitalocean.com/)</a
            >
          </p>
        </div>
      </template>
    </Panel>
  </div>
</template>

<script>
import Panel from "../layout/Panel";
export default {
  name: "Getstart",
  components: { Panel }
};
</script>

<style lang="less">
.getstart {
  margin-top: 20px;
  margin-left: 134px;
  .getstart_home {
    color: orange;
  }
  h2 {
    border-bottom: 1px solid #eee;
  }
  a {
    color: #08c;
  }
  .content {
    > div {
      margin-bottom: 42px;
    }
  }
}
</style>
