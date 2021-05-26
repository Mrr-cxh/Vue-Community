<template>
  <div class="topic" v-if="topic">
    <div class="left" style="width:70%">
      <Panel>
        <template #content>
          <div class="topic_header">
            <div class="title">
              <span class="activeNav">{{ topic | getPostChineseTab }}</span>
              <h2>{{ topic.title }}</h2>
            </div>
            <div class="topic_changes">
              <span>发布于 {{ formatDate(topic.id) }} </span>
              <span>作者 {{ topic.author.loginname }} </span>
              <span>{{ topic.visit_count }} 次浏览 </span>
              <span>最后一次编辑是 {{ formatDate2(topic.id) }} </span>
              <span>来自 {{ topic | getPostChineseTab }} </span>
              <el-button
                type="warning"
                class="coll_btn"
                @click="collect(topic.id)"
                v-if="topic && istoken"
                >{{ topic.is_collect ? "取消收藏" : "收藏" }}</el-button
              >
            </div>
          </div>
          <div v-html="topic.content"></div>
        </template>
      </Panel>
      <Panel class="topicTwo">
        <template #header>
          <span>回复{{ topic.reply_count }}</span>
        </template>
        <template #content>
          <div>
            <div
              v-for="comment in topic.replies"
              :key="comment.id"
              class="comment_item"
            >
              <div class="comment_author">
                <img :src="comment.author.avatar_url" width="30px" />
                <span>{{ comment.author.loginname }}</span>
              </div>
              <span v-html="comment.content"></span>
              <div>
                <!-- 没登陆 如果没有点赞数不显示点赞按钮 -->
                <!-- 登陆了 没有点赞数显示点赞按钮不显示点赞个数 -->
                <el-button
                  @click="upClick(comment.id)"
                  :class="{ 'up-active': comment.is_uped }"
                  >点赞{{ comment.ups.length }}</el-button
                >
                <el-button v-if="istoken" @click="otherSubmit(comment)"
                  >回复</el-button
                >
                <div v-if="comment.id === reply_id">
                  <!-- <textarea v-model="reply_text" ref="textarea"></textarea> -->
                  <Editor
                    output-format="text"
                    v-model="reply_text"
                    model-events="blur"
                    api-key="9mieih2cqsubf30b1omff3w107ojvjfvzhmb7haq4giiy754"
                    :init="{
                      language: 'zh_CN',
                      elementpath: false, // 隐藏底栏的元素路径
                      branding: false, //隐藏右下角技术支持
                      height: 200,
                      menubar: false, // 是否显示菜单栏
                      // 工具栏按钮
                      toolbar:
                        'cut copy paste pastetext | forecolor backcolor bold italic underline strikethrough link anchor '
                    }"
                  />
                  <el-button @click="otherSubmit1(comment.id)" type="primary"
                    >回复</el-button
                  >
                </div>
              </div>
            </div>
          </div>
          <br /><br />
          <div>
            <!-- <textarea v-model.trim="text"> </textarea> -->
            <Editor
              output-format="text"
              v-model="text"
              model-events="blur"
              api-key="9mieih2cqsubf30b1omff3w107ojvjfvzhmb7haq4giiy754"
              :init="{
                language: 'zh_CN',
                elementpath: false, // 隐藏底栏的元素路径
                branding: false, //隐藏右下角技术支持
                height: 150,
                menubar: false, // 是否显示菜单栏
                // 工具栏按钮
                toolbar:
                  'cut copy paste pastetext | forecolor backcolor bold italic underline strikethrough link anchor'
              }"
            />
            <el-button @click="submit" type="primary">回复</el-button>
          </div>
        </template>
      </Panel>
    </div>
    <div class="right" style="width:20%">
      <Panel>
        <template #header>
          <span>用户信息</span>
        </template>
        <template #content>
          <div class="user_header">
            <img width="40px" :src="topic.author.avatar_url" alt="" />
            <p>{{ topic.author.loginname }}</p>
          </div>
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
import Editor from "@tinymce/tinymce-vue";
export default {
  name: "Topic",
  components: { Panel, Editor },
  data() {
    return {
      topic: null,
      // 回复文章的评论内容
      text: "",
      // 回复的评论 id
      reply_id: "",
      // 回复评论的评论内容
      reply_text: ""
    };
  },
  computed: {
    istoken() {
      return JSON.parse(localStorage.getItem("token"));
    },
    formatDate() {
      return function(id) {
        return moment(this.topic.create_at)
          .startOf("day")
          .fromNow();
      };
    },
    formatDate2() {
      return function(id) {
        return moment(this.topic.last_reply_at)
          .startOf("hour")
          .fromNow();
      };
    },
    /*  getToken() {
      return this.$store.state.token;
    } */
    getToken() {
      return JSON.parse(localStorage.getItem("token")).token;
    },
    getUserId() {
      return JSON.parse(localStorage.getItem("token")).id;
    }
  },
  async created() {
    const { topicId } = this.$route.params;
    // 需要判断登录了吗
    // const token = true;
    const token = localStorage.getItem("token");
    const url = token
      ? // ? `/topic/${topicId}?accesstoken=6908a8ba-8edc-4b56-8d44-c70d0af022fb`
        `/topic/${topicId}?accesstoken=${this.getToken}`
      : `/topic/${topicId}`;
    const res = await this.$axios.get(url);
    // console.log(res.data);
    this.topic = res.data;
  },
  methods: {
    async upClick(id) {
      // 点赞之前要判断登没登陆
      // 还要判断是不是自己的评论 评论的作者的 loginname 是不是自己
      if (this.istoken || !this.topic) {
        // 如何更新页面 点赞变色 个数加一
        // 方案一 根据请求的结果 up or down 去更新对应评论的 is_uped 以及 ups,更新 ups 需要用户(自己)的id
        // 6088d3f54d20cb572468f2ee
        if (this.topic.author.loginname !== this.istoken.loginname) {
          const res = await this.$axios.post(`reply/${id}/ups`, {
            accesstoken: this.getToken
          });
          const userId = this.getUserId;
          const currentComment = this.topic.replies.find(
            item => item.id === id
          );
          currentComment.is_uped = res.action === "up" ? true : false;
          res.action === "up"
            ? currentComment.ups.push(userId)
            : currentComment.ups.splice(currentComment.ups.indexOf(userId), 1);
          // 方案二 重新请求一遍 需要网络请求，得看实际情况
        } else {
          alert("不能给自己的内容点赞");
        }
      } else {
        alert("请登录用户！");
      }
    },
    collect(id) {
      if (this.topic.is_collect) {
        this.$axios.post(`topic_collect/de_collect`, {
          accesstoken: this.getToken,
          topic_id: id
        });
      } else {
        this.$axios.post(`topic_collect/collect`, {
          accesstoken: this.getToken,
          topic_id: id
        });
      }
      this.topic.is_collect = !this.topic.is_collect;
    },
    // 文章的回复
    async submit() {
      const { text } = this;
      if (text) {
        const res = await this.$axios.post(`topic/${this.topic.id}/replies`, {
          accesstoken: this.getToken,
          content: `${text} `
        });
        // 如何更新页面
        // 1.根据后台 id 和 text 做假的评论对象更新 topic
        const newComment = {
          id: res.reply_id,
          is_uped: false,
          ups: [],
          content: text,
          author: {
            avatar_url: this.istoken.avatar_url,
            loginname: this.istoken.loginname
          }
        };
        this.topic.replies.push(newComment);
        this.text = "";
        // 2.重新请求
      }
    },
    otherSubmit(comment) {
      // 让对应评论的富文本框出现
      // console.log(id);
      const { id, author } = comment;
      this.reply_id = id;
      this.reply_text = `@${author.loginname} `;
    },
    async otherSubmit1(id) {
      const { reply_text } = this;
      if (reply_text) {
        const res = await this.$axios.post(`topic/${this.topic.id}/replies`, {
          accesstoken: this.getToken,
          content: `${reply_text}`,
          reply_id: id
        });
        const newComment = {
          id: res.reply_id,
          is_uped: false,
          ups: [],
          content: `${reply_text} `,
          author: {
            avatar_url: this.istoken.avatar_url,
            loginname: this.istoken.loginname
          }
        };
        this.topic.replies.push(newComment);
        this.reply_text = "";
        this.reply_id = "";
      }
    }
  }
};
</script>

<style lang="less">
.topic {
  margin-top: 20px;
  margin-left: 134px;
  display: flex;
  .right {
    margin-left: 20px;
    .qrcode,
    .wechat_public {
      margin-top: 20px;
    }
    .header {
      display: block;
    }
  }
  .header {
    display: none;
  }
  .content {
    .topic_header {
      padding-bottom: 10px;
      border-bottom: 1px solid #eee;
    }
    .topic_header .topic_changes {
      font-size: 12px;
      color: #838383;
      letter-spacing: 0.5px;
      span:before {
        content: "•";
      }
      span:last-child:before {
        content: "";
      }
      .coll_btn {
        margin-left: 320px;
      }
    }
    .topic_header .title {
      display: flex;
      align-items: center;
      h2 {
        display: inline-block;
        margin-left: 10px;
      }
      .activeNav {
        background: orange;
        padding: 2px 4px;
        border-radius: 3px;
        color: white;
      }
    }
  }
  .markdown-text p img {
    width: 100%;
    height: auto;
  }
}
.topicTwo {
  margin-top: 20px;
  .header {
    display: block;
  }
  .content .comment_item {
    padding-bottom: 10px;
    margin-bottom: 14px;
    border-bottom: 1px solid #ccc;
    .comment_author {
      display: flex;
      align-items: center;
      img {
        margin-right: 10px;
      }
    }
    .up-active {
      color: orange;
    }
  }
}
</style>
