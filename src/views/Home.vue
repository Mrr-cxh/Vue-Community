<template>
  <div class="home">
    <Panel style="width:70%">
      <template #header>
        <div class="nav">
          <router-link to="/" exact-active-class="activeNav">首页</router-link>
          <router-link to="/good" exact-active-class="activeNav"
            >精华</router-link
          >
          <router-link to="/share" exact-active-class="activeNav"
            >分享</router-link
          >
          <router-link to="/ask" exact-active-class="activeNav"
            >问答</router-link
          >
          <router-link to="/job" exact-active-class="activeNav"
            >招聘</router-link
          >
          <router-link to="/dev" exact-active-class="activeNav"
            >客户端测试</router-link
          >
        </div>
      </template>
      <template #content>
        <div v-if="posts.length">
          <div class="post-item" v-for="(post, index) in posts" :key="index">
            <router-link :to="`/user/${post.author.loginname}`"
              ><el-avatar
                :src="post.author.avatar_url"
                :title="post.author.loginname"
                class="avator"
              >
              </el-avatar
            ></router-link>
            <div class="comment">
              <span class="reply_count">{{ post.reply_count }} </span>
              <span class="count_seperator">/</span>
              <span class="visit_count"> {{ post.visit_count }}</span>
            </div>
            <span
              v-if="!tab || post.top || post.good"
              :class="post.top || post.good ? 'active-tab' : 'tab'"
              >{{ post | getPostChineseTab }}</span
            >
            <router-link
              class="title"
              :to="{ name: 'topic', params: { topicId: post.id } }"
              >{{ post.title }}</router-link
            >
            <span class="date">{{ formatDate(index) }}</span>
          </div>
          <el-pagination
            background
            layout="prev, pager, next"
            :total="tabPageTotal"
            :page-size="40"
            :current-page="currentPage"
            @current-change="changePage"
          >
          </el-pagination>
        </div>
      </template>
    </Panel>
    <div class="right" style="width:20%">
      <Panel>
        <template #header v-if="userInfo || istoken">
          <span>个人信息</span>
        </template>
        <template #header v-else>
          <span>Node.js 专业中文社区</span>
        </template>

        <template #content v-if="userInfo || istoken">
          <img
            :src="istoken.avatar_url || userInfo.avatar_url"
            alt=""
            class="user"
          />
          <span>用户名：{{ istoken.loginname || userInfo.loginname }}</span>
        </template>
        <template #content v-else>
          <el-button type="primary">
            <router-link to="/login" class="loginbtn">点击我登录</router-link>
          </el-button>
        </template>
      </Panel>

      <Panel v-if="userInfo || istoken" class="publish">
        <template #content>
          <router-link to="/topic/create">
            <el-button type="primary">发布话题</el-button>
          </router-link>
        </template>
      </Panel>

      <Panel class="qrcode" style="width:100%">
        <template #header>
          <span>作者二维码</span>
        </template>
        <template #content>
          <img style="width:100%" src="../assets/wechat.jpg" alt="" />
        </template>
      </Panel>

      <Panel class="wechat_public" style="width:100%">
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
  name: "Home",
  components: { Panel },
  data() {
    return {
      posts: [],
      currentPage: 1
    };
  },
  watch: {
    tab: {
      async handler(newValue) {
        this.currentPage = 1;
        const queryTab = newValue ? `&tab=${newValue}` : "";
        const res = await this.$axios.get(
          `/topics?page=${this.currentPage}&limit=40&tab=${queryTab}`
        );
        this.posts = res.data;
        // console.log(this.posts);
      },
      immediate: true
    }
  },
  computed: {
    tab() {
      return this.$route.params.tab;
    },
    tabPageTotal() {
      if (this.tab === "good") {
        return 710;
      } else if (this.tab === "share") {
        return 450;
      } else if (this.tab === "ask") {
        return 450;
      } else if (this.tab === "job") {
        return 520;
      } else {
        return 700;
      }
    },
    // 计算属性传参
    formatDate() {
      return function(id) {
        return moment(this.posts[id].create_at)
          .startOf("day")
          .fromNow(this.posts[id].last_reply_at);
      };
    },
    userInfo() {
      return this.$store.state.userInfo;
    },
    istoken() {
      return JSON.parse(localStorage.getItem("token"));
    }
  },
  methods: {
    changePage(val) {
      this.currentPage = val;
      const queryTab = this.tab ? `&tab=${this.tab}` : "";
      if (queryTab) {
        const res = this.$axios
          .get(`/topics?page=${this.currentPage}&limit=40&tab=${queryTab}`)
          .then(item => {
            this.posts = item.data;
          });
      } else {
        const res = this.$axios
          .get(`/topics?page=${this.currentPage}&limit=40`)
          .then(item => {
            this.posts = item.data;
          });
      }
    }
  }
};
</script>
<style lang="less">
.home {
  margin-left: 134px;
  display: flex;
  .right {
    margin-left: 20px;
    .publish {
      margin-top: 20px;
      .header {
        display: none;
      }
    }
    .header {
      padding: 10px;
    }
    .loginbtn {
      color: white;
    }
    .user {
      width: 60px;
      display: block;
      margin-bottom: 10px;
    }
  }
  .header {
    margin-top: 20px;
    .activeNav {
      background: orange;
      padding: 2px 4px;
      border-radius: 3px;
      color: white;
    }
    .nav a {
      margin: 0 10px;
    }
    .nav a:hover {
      color: #a26060;
    }
  }
  .post-item {
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin: 8px 0;
    .comment {
      width: 100px;
      margin-left: 10px;
      .reply_count {
        margin-left: 10px;
        color: #9e78c0;
      }
      .count_seperator {
        font-size: 10px;
      }
      .visit_count {
        color: #b4b4b4;
        font-size: 10px;
      }
    }
    .title {
      margin-left: 10px;
      width: 65%;
      display: inline-block;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
    .date {
      margin-left: 60px;
      text-align: right;
      min-width: 50px;
      display: inline-block;
      white-space: nowrap;
      color: #778087;
    }
    .active-tab {
      background: orange;
      padding: 2px 4px;
      border-radius: 3px;
      color: #fff;
      font-size: 12px;
    }
    .tab {
      background-color: #e5e5e5;
      color: #999;
      padding: 2px 4px;
      border-radius: 3px;
      font-size: 12px;
    }
  }
  .el-pagination {
    margin-top: 30px;
  }
}
</style>
