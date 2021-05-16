<template>
  <div class="userInfo" v-if="user">
    <div class="left">
      <Panel class="user_info">
        <template #header>
          <router-link to="/">主页</router-link>
        </template>
        <template #content>
          <div class="user_header">
            <img width="40px" :src="user.avatar_url" alt="" />
            <span>{{ user.loginname }}</span>
          </div>
          <div>积分{{ user.score }}</div>
          <div>注册时间 {{ formatDate(user.create_at) }}</div>
        </template>
      </Panel>
      <Panel class="recent">
        <template #header>
          <span>最近创建的话题</span>
        </template>
        <template #content>
          <div v-for="item in user.recent_topics.slice(0, 5)" :key="item.id">
            <router-link :to="`/user/${item.author.loginname}`"
              ><img width="40px" :src="item.author.avatar_url" alt="" />
            </router-link>
            <router-link :to="`/topic/${item.id}`" class="title">
              {{ item.title }}
            </router-link>
            <span>{{ formatDate(item.last_reply_at) }}</span>
          </div>
        </template>
      </Panel>
      <Panel class="replies">
        <template #header>
          <span>最近参与的话题</span>
        </template>
        <template #content>
          <div v-for="item in user.recent_replies" :key="item.id">
            <router-link :to="`/user/${item.author.loginname}`"
              ><img width="40px" :src="item.author.avatar_url" alt="" />
            </router-link>
            <router-link :to="`/topic/${item.id}`" class="title">
              {{ item.title }}
            </router-link>
            <span>{{ formatDate(item.last_reply_at) }}</span>
          </div>
        </template>
      </Panel>
    </div>
    <div class="right">
      <Panel>
        <template #header>
          <span>用户信息</span>
        </template>
        <template #content>
          <div class="user_header">
            <img width="40px" :src="user.avatar_url" alt="" />
            <span>{{ user.loginname }}</span>
          </div>
          <div>积分{{ user.score }}</div>
        </template>
      </Panel>
      <Panel class="qrcode">
        <template #header>
          <span>作者二维码</span>
        </template>
        <template #content>
          <img style="width:100%" src="../assets/wechat.jpg" alt="" />
        </template>
      </Panel>
      <Panel class="wechat_public">
        <template #header>
          <span>作者的小屋</span>
        </template>
        <template #content>
          <img style="width:100%" src="../assets/gongzhonghao.jpg" alt="" />
        </template>
      </Panel>
    </div>
  </div>
</template>

<script>
import Panel from "../layout/Panel";
import moment from "moment";
moment.locale("zh-cn");
export default {
  name: "User",
  components: { Panel },
  data() {
    return {
      user: null
    };
  },
  computed: {
    formatDate() {
      return function(date) {
        return moment(date).fromNow();
      };
    }
  },
  watch: {
    "$route.params.loginname": {
      async handler() {
        const { loginname } = this.$route.params;
        const res = await this.$axios.get(`/user/${loginname}`);
        this.user = res.data;
      },
      immediate: true
    }
  }
};
</script>

<style lang="less">
.userInfo {
  margin-left: 134px;
  display: flex;
  .recent,
  .replies {
    .content > div {
      display: flex;
      align-items: center;
      justify-content: space-between;
      img {
        margin-right: 10px;
      }
      .title {
        width: 820px;
      }
    }
  }
  .left {
    width: 70%;
    .panel {
      margin-left: 134px;
      margin: 20px 0;
      .content {
        > div {
          margin-bottom: 8px;
        }
        .user_header {
          display: flex;
          align-items: center;
          span {
            margin-left: 10px;
          }
        }
      }
    }
  }
  .right {
    width: 20%;
    margin-top: 20px;
    .qrcode,
    .wechat_public {
      margin-top: 20px;
    }
    .panel {
      margin-left: 20px;
      .user_header {
        display: flex;
        align-items: center;
        margin-bottom: 10px;
        span {
          margin-left: 10px;
        }
      }
    }
  }
}
</style>
