// 封装 axios
import axios from "axios";
import Vue from "vue";
axios.defaults.baseURL = "https://cnodejs.org/api/v1";
axios.interceptors.response.use(res => {
  return res.data;
});
Vue.prototype.$axios = axios;
export default axios;
