import Vue from 'vue';
import VueRouter from 'vue-router';
import { routes } from "./Routes";
import appConfig from "../app-config.json";
Vue.use(VueRouter);

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})
router.beforeEach((to, _, next) => {
  document.title = `${(to.meta && to.meta.title) ? to.meta.title : appConfig.title} | ${appConfig.author}`;
  next();
});
export default router;
