<template>
  <div class="about">
    <Panel style="width:70%">
      <template #header>
        <router-link to="/">主页</router-link>
        <span> / 关于</span>
      </template>
      <template #content>
        <div>
          <h2>关于</h2>
          <p>
            CNode 社区为国内最大最具影响力的 Node.js 开源技术社区，致力于
            Node.js 的技术研究。
          </p>
          <p>
            CNode 社区由一批热爱 Node.js
            技术的工程师发起，目前已经吸引了互联网各个公司的专业技术人员加入，我们非常欢迎更多对
            Node.js 感兴趣的朋友。
          </p>
          <p>CNode 的 SLA 保证是，一个9，即 90.000000%。</p>
        </div>
        <div>
          <h2>移动客户端</h2>
          <p>
            源码地址：
            <a href="https://github.com/soliury/noder-react-native"
              >https://github.com/soliury/noder-react-native</a
            >
            。
          </p>
          <p>立即体验 CNode 客户端，直接扫描页面右侧二维码。</p>
          <p>
            另，安卓用户同时可选择：<a
              href="https://github.com/TakWolf/CNode-Material-Design"
              >https://github.com/TakWolf/CNode-Material-Design</a
            >
            ，这是 Java 原生开发的安卓客户端。
          </p>
        </div>
      </template>
    </Panel>
  </div>
</template>

<script>
import Panel from "../layout/Panel";
export default {
  name: "About",
  components: { Panel }
};
</script>

<style lang="less">
.about {
  margin-left: 140px;
  margin-top: 20px;
  .header a {
    color: orange;
  }
  h2 {
    border-bottom: 1px solid #eee;
  }
}
</style>
