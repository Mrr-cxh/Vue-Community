import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import Moment from "moment";
import "./filters/index";
import "./plugins/axios";
import "./plugins/element.js";
import "./assets/global.css";

Vue.config.productionTip = false;

new Vue({
  Moment,
  router,
  store,
  render: h => h(App)
}).$mount("#app");
