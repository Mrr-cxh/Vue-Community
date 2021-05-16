<template>
  <div class="message">
    <Panel style="width:70%">
      <template #header>
        <router-link to="/" class="message_home">主页</router-link>
        <span> / 新消息</span>
      </template>
      <!-- 这里要先判断是不是null，否则data会是 null，会报错 null.has_read_message…… -->
      <template #content v-if="data !== null">
        <span v-if="!data.hasnot_read_messages.length">无消息 </span>
        <div v-else v-for="item in data.hasnot_read_messages" :key="item.id">
          <span>
            <a :href="item.author.avatar_url">{{ item.author.loginname }}</a>
            回复了你d话题
            <router-link :to="`/topic/${item.topic.id}`">{{
              item.topic.title
            }}</router-link>
          </span>
        </div>
      </template>
    </Panel>
    <br />
    <Panel style="width:70%">
      <template #header>
        <span>过往消息</span>
      </template>
      <!-- 这里要先判断是不是null，否则data会是 null，会报错 null.has_read_message…… -->
      <template #content v-if="data !== null">
        <span v-if="!data.has_read_messages.length">无消息</span>
        <div v-else v-for="item in data.has_read_messages" :key="item.id">
          <span>
            <a :href="item.author.avatar_url">{{ item.author.loginname }}</a>
            在话题
            <router-link :to="`/topic/${item.topic.id}`">{{
              item.topic.title
            }}</router-link>
            @了你
          </span>
        </div>
      </template>
    </Panel>
  </div>
</template>

<script>
import Panel from "../layout/Panel";
export default {
  name: "Message",
  components: { Panel },
  data() {
    return {
      data: null
    };
  },
  created() {
    const res = this.$axios
      .get(`messages?accesstoken=${this.getToken}&&mdrender=false`)
      .then(item => {
        this.data = item.data;
      });
  },
  beforeDestroy() {
    this.$axios.post(`message/mark_all`, {
      accesstoken: this.getToken
    });
  },
  computed: {
    istoken() {
      return JSON.parse(localStorage.getItem("token"));
    },
    getToken() {
      return JSON.parse(localStorage.getItem("token")).token;
    }
  }
};
</script>

<style lang="less">
.message {
  margin-top: 20px;
  margin-left: 134px;
  .message_home {
    color: orange;
  }
  .content {
    padding: 18px 10px;
  }
}
</style>
