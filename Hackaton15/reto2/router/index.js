import Vue from "vue";
import VueRouter from "vue-router";
import Home from "./components/Home.vue";
import Video from "../src/App.vue";

Vue.use(VueRouter);

const routes = [
  { path: "/", component: Home },
  { path: "/video/:id", component: Video },
];

const router = new VueRouter({
  routes,
});

export default router;
