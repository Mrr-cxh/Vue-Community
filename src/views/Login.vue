<template>
  <div class="login">
    <el-form label-width="80px">
      <el-form-item label="用户名">
        <el-input
          placeholder="随便输入用户名，无限制(可以不写)"
          v-model="name"
        ></el-input>
      </el-form-item>
      <el-form-item label="token">
        <el-input placeholder="请输入token" v-model="token"></el-input>
      </el-form-item>
      <el-button><router-link to="/">取消</router-link></el-button>
      <el-button type="primary" @click="login">确定</el-button>
    </el-form>
  </div>
</template>

<script>
export default {
  name: "Login",
  data() {
    return {
      name: "",
      token: "6908a8ba-8edc-4b56-8d44-c70d0af022fb"
    };
  },
  methods: {
    login() {
      this.$store.commit("getToken", this.token);
      this.$axios
        // .post("/accesstoken", { accesstoken: this.token })
        .post("/accesstoken", { accesstoken: this.getToken })
        .then(res => {
          this.$router.push("/");
          const userInfo = res;
          delete userInfo.success;
          this.$store.commit("getUserInfo", userInfo);
          userInfo.token = this.token;
          // console.log(userInfo);
          const token = JSON.stringify(userInfo);
          localStorage.setItem("token", token);
        })
        .catch(err => {
          alert("密码有误");
        });
    }
  },
  computed: {
    getToken() {
      return this.$store.state.token;
    }
  }
};
</script>

<style lang="less">
.login {
  width: 35%;
  margin: 0 auto;
  margin-top: 100px;
  background-color: white;
  padding: 20px;
  .el-form {
    width: 100%;
    margin-top: 20px;
  }
  .el-button:first-of-type {
    margin-left: 320px;
  }
}
</style>
