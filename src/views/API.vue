<template>
  <div class="api">
    <Panel style="width:70%">
      <template #header>
        <router-link to="/">主页</router-link>
        <span> / API</span>
      </template>
      <template #content>
        <p>
          以下 api 路径均以
          <a href="https://cnodejs.org/api/v1">https://cnodejs.org/api/v1</a>
          为前缀
        </p>
        <div class="theme">
          <h2>主题</h2>
          <div>
            <h4>get /topics 主题首页</h4>
            <p>接收 get 参数</p>
            <ul>
              <li>page <code>Number</code> 页数</li>
              <li>
                tab <code>String</code> 主题分类。目前有 <code>ask</code>
                <code>share</code> <code>job </code><code>good</code>
              </li>
              <li>limit <code>Number</code> 每一页的主题数量</li>
              <li>
                mdrender <code>String</code> 当为
                <code>false</code> 时，不渲染。默认为
                <code>true</code>，渲染出现的所有
                <code>markdown</code> 格式文本。
              </li>
            </ul>
            <p>示例：<a href="#">/api/v1/topics</a></p>
          </div>
          <div>
            <h4>get /topic/:id 主题详情</h4>
            <p>接收 get 参数</p>
            <ul>
              <li>
                mdrender <code>String</code> 当为
                <code>false</code> 时，不渲染。默认为
                <code>true</code> ，渲染出现的所有 markdown 格式文本。
              </li>
              <li>
                accesstoken <code>String</code>
                当需要知道一个主题是否被特定用户收藏以及对应评论是否被特定用户点赞时，才需要带此参数。会影响返回值中的
                <code>is_collect</code> 以及 <code>replies</code> 列表中的
                <code>is_uped</code> 值。
              </li>
            </ul>
            <p>示例：<a href="#">/api/v1/topic/5433d5e4e737cbe96dcef312</a></p>
          </div>
          <div>
            <h4>post /topics 新建主题</h4>
            <p>接收 post 参数</p>
            <ul>
              <li>accesstoken <code>String</code> 用户的 accessToken</li>
              <li>title <code>String</code> 标题</li>
              <li>
                tab <code>String</code> 目前有 <code>ask</code>
                <code>share</code>
                <code>job</code>
                <code>dev</code>
                。开发新客户端的同学，请务必将你们的测试帖发在 <code>dev</code>
                专区，以免污染日常的版面，否则会进行封号一周处理。
              </li>
              <li>content <code>String</code> 主体内容</li>
            </ul>
            <p>返回值示例</p>
            <code>{success: true, topic_id: '5433d5e4e737cbe96dcef312'}</code>
          </div>
          <div>
            <h4>post /topics/update 编辑主题</h4>
            <p>接收 post 参数</p>
            <ul>
              <li>accesstoken <code>String</code> 用户的 accessToken</li>
              <li>topic_id <code>String</code> 主题id</li>
              <li>title <code>String</code> 标题</li>
              <li>
                tab String 目前有 <code>ask</code>
                <code>share</code>
                <code>job</code>
              </li>
              <li>content <code>String</code> 主体内容</li>
            </ul>
            <p>返回值示例</p>
            <code>{success: true, topic_id: '5433d5e4e737cbe96dcef312'}</code>
          </div>
        </div>
        <div class="theme_collect">
          <h2>主题收藏</h2>
          <div>
            <h4>post /topic_collect/collect 收藏主题</h4>
            <p>接收 post 参数</p>
            <ul>
              <li>accesstoken <code>String</code> 用户的 accessToken</li>
              <li>topic_id <code>String</code> 主题的id</li>
            </ul>
            <p>返回值示例</p>
            <code>{"success": true}</code>
          </div>
          <div>
            <h4>post /topic_collect/de_collect 取消主题</h4>
            <p>接收 post 参数</p>
            <ul>
              <li>accesstoken <code>String</code> 用户的 accessToken</li>
              <li>topic_id <code>String</code> 主题的id</li>
            </ul>
            <p>返回值示例</p>
            <code>{"success": true}</code>
          </div>
          <div>
            <h4>get /topic_collect/:loginname 用户所收藏的主题</h4>
            <p>示例：<a href="#">/api/v1/topic_collect/alsotang</a></p>
          </div>
        </div>
        <div class="comments">
          <h2>评论</h2>
          <div>
            <h4>post /topic/:topic_id/replies 新建评论</h4>
            <p>接收 post 参数</p>
            <ul>
              <li>accesstoken <code>String</code> 用户的 accessToken</li>
              <li>content <code>String</code> 评论的主体</li>
              <li>
                reply_id
                <code>String</code>
                如果这个评论是对另一个评论的回复，请务必带上此字段。这样前端就可以构建出评论线索图。
              </li>
            </ul>
            <p>返回值示例</p>
            <code>{success: true, reply_id: '5433d5e4e737cbe96dcef312'}</code>
          </div>
          <div>
            <h4>post /reply/:reply_id/ups 为评论点赞</h4>
            <p>接收 post 参数</p>
            <ul>
              <li>accesstoken <code>String</code></li>
            </ul>
            <p>
              接口会自动判断用户是否已点赞，如果否，则点赞；如果是，则取消点赞。点赞的动作反应在返回数据的
              <code>action</code> 字段中，<code>up</code> or <code>down</code>。
            </p>
            <p>返回值示例</p>
            <code>{"success": true, "action": "down"}</code>
          </div>
        </div>
        <div class="author">
          <h2>用户</h2>
          <div>
            <h4>get /user/:loginname 用户详情</h4>
            <p>示例<a href="#">/api/v1/user/alsotang</a></p>
          </div>
          <div>
            <h4>post /accesstoken 验证 accessToken 的正确性</h4>
            <p>接收 post 参数</p>
            <ul>
              <li>accesstoken <code>String</code> 用户的 accessToken</li>
            </ul>
            <p>如果成功匹配上用户，返回成功信息。否则 403。</p>
            <p>返回值示例</p>
            <code
              >{success: true, loginname: req.user.loginname, id: req.user.id,
              avatar_url: req.user.avatar_url}</code
            >
          </div>
        </div>
        <div class="messages">
          <h2>消息通知</h2>
          <div>
            <h4>get /message/count 获取未读消息数</h4>
            <p>接收 get 参数</p>
            <ul>
              <li>accesstoken <code>String</code></li>
            </ul>
            <p>返回值示例</p>
            <code>{ data: 3 }</code>
          </div>
        </div>
        <div class="knowledge">
          <h2>知识点</h2>
          <p>
            1.如何获取 accessToken？ 用户登录后，在设置页面可以看到自己的
            accessToken。 建议各移动端应用使用手机扫码的形式登录，验证使用
            /accesstoken 接口，登录后长期保存 accessToken。
          </p>
        </div>
      </template>
    </Panel>
  </div>
</template>

<script>
import Panel from "../layout/Panel";
export default {
  name: "API",
  components: { Panel }
};
</script>

<style lang="less">
.api {
  margin-left: 140px;
  margin-top: 20px;
  .header a {
    color: orange;
  }
  a {
    color: #08c;
  }
  li {
    font-size: 14px;
    color: #333;
    line-height: 2em;
  }
  code {
    color: #000;
    background-color: #fcfafa;
    padding: 4px 6px;
    font-size: 12px;
  }
  h2,
  h4 {
    border-bottom: 1px solid #eee;
  }
  h4 {
    margin-top: 40px;
  }
  .content > div div:last-of-type {
    margin-bottom: 34px;
  }
}
</style>
