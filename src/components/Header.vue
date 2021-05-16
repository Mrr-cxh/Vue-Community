<template>
  <header>
    <el-row type="flex" justify="space-around">
      <el-col :span="6">
        <router-link class="logo" to="/">
          <img src="../assets/Downy.png" alt="" />
        </router-link>
      </el-col>
      <el-col :span="6">
        <h2>毛茸茸的秘密基地</h2>
      </el-col>
      <el-col :span="10">
        <div class="nav">
          <router-link to="/">首页</router-link>
          <el-badge is-dot hidden>
            <!--  -->
            <router-link to="/message" v-if="istoken || userInfo"
              >未读消息
            </router-link>
          </el-badge>
          <router-link to="/getstart">新手入门12</router-link>
          <router-link to="/api">API</router-link>
          <router-link to="/about">关于</router-link>
          <router-link to="/"><span @click="quit">退出</span></router-link>
        </div>
      </el-col>
    </el-row>
  </header>
</template>

<script>
export default {
  name: "Header",
  computed: {
    userInfo() {
      return this.$store.state.userInfo;
    },
    istoken() {
      return JSON.parse(localStorage.getItem("token"));
    }
  },
  methods: {
    quit() {
      localStorage.removeItem("token");
      this.$store.state.userInfo = null;
      this.$router.push("/");
      location.reload();
    }
  }
};
</script>

<style lang="less">
header {
  background-color: white;
  img {
    width: 60px;
    height: 60px;
    margin-left: 140px;
    margin-top: 4px;
  }
  h2 {
    text-align: center;
    letter-spacing: 2px;
  }
  a {
    color: #000;
    margin: 0 10px;
  }
  .el-badge {
    margin-top: -4px;
  }
  a:hover {
    color: #a26060;
  }
  .nav {
    margin-top: 24px;
    text-align: center;
  }
}
</style>
