<template>
  <div class="topic_create">
    <div class="left">
      <Panel>
        <template #header>
          <router-link to="/" class="createHome">主页</router-link>
          <span> / 发布话题</span>
        </template>
        <template #content>
          选择板块：<el-select v-model="value" placeholder="请选择">
            <el-option
              v-for="item in arr.tab"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            >
            </el-option>
          </el-select>
          <el-input
            v-model="arr.title"
            placeholder="标题字数 10 字以上"
          ></el-input>
          <Editor
            output-format="text"
            v-model="arr.content"
            model-events="blur"
            api-key="9mieih2cqsubf30b1omff3w107ojvjfvzhmb7haq4giiy754"
            :init="{
              language: 'zh_CN',
              elementpath: false, // 隐藏底栏的元素路径
              branding: false, //隐藏右下角技术支持
              height: 500,
              menubar: false, // 是否显示菜单栏
              // 工具栏按钮
              toolbar:
                'cut copy paste pastetext | forecolor backcolor bold italic underline strikethrough link anchor '
            }"
          />
          <el-button type="primary" @click="postSubmit">提交</el-button>
        </template>
      </Panel>
    </div>
  </div>
</template>

<script>
import Panel from "../layout/Panel";
import Editor from "@tinymce/tinymce-vue";
export default {
  name: "TopicCreate",
  components: { Panel, Editor },
  data() {
    return {
      arr: {
        title: "",
        tab: [
          {
            value: "ask",
            label: "问答"
          },
          {
            value: "share",
            label: "分享"
          },
          {
            value: "job",
            label: "招聘"
          },
          {
            value: "dev",
            label: "客户端测试"
          }
        ],
        content: ""
        // accesstoken: this.getToken
      },
      value: ""
    };
  },
  methods: {
    postSubmit() {
      const res = this.$axios.post("/topics", {
        // accesstoken: this.arr.accesstoken,
        accesstoken: this.getToken,
        title: this.arr.title,
        tab: this.value,
        content: this.arr.content
      });
      this.$router.push("/");
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
.topic_create {
  .left {
    margin-left: 134px;
    margin-top: 20px;
    width: 70%;
    .createHome {
      color: orange;
    }
    .el-input {
      margin: 12px 0px;
    }
    .tox-tinymce {
      margin-bottom: 10px;
    }
  }
}
</style>
