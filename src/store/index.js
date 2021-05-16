import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    userInfo: null,
    token: ""
  },
  // 方法
  mutations: {
    getToken: (state, token) => {
      state.token = token;
    },
    getUserInfo: (state, userInfo) => {
      state.userInfo = userInfo;
    }
  },
  // 计算属性
  getters: {},
  actions: {},
  modules: {}
});
