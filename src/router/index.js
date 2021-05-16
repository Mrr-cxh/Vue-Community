import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/login",
    component: () => import("../views/Login")
  },
  {
    path: "/about",
    component: () => import("../views/About")
  },
  {
    path: "/api",
    component: () => import("../views/API")
  },
  {
    path: "/getstart",
    component: () => import("../views/Getstart")
  },
  {
    path: "/message",
    component: () => import("../views/Message")
  },
  {
    path: "/topic/create",
    component: () => import("../views/TopicCreate")
  },
  {
    path: "/topic/:topicId",
    name: "topic",
    component: () => import("../views/Topic")
  },
  {
    path: "/user/:loginname",
    name: "user",
    component: () => import("../views/User")
  },
  {
    path: "/",
    component: Home,
    children: [
      {
        path: ":tab",
        component: Home,
        name: "home"
      }
    ]
  }
];

const router = new VueRouter({
  mode: "hash",
  base: process.env.BASE_URL,
  routes
});

export default router;
