import '@babel/polyfill'
import 'mutationobserver-shim'
import Vue from 'vue';
import './plugins/bootstrap-vue'
import App from './App.vue';
import router from './router';
import store from './state/store';
import VueToast from 'vue-toast-notification';
import { BootstrapVue, BootstrapVueIcons } from 'bootstrap-vue';
import "./design/index.scss";
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import 'vue-toast-notification/dist/theme-sugar.css';
// import 'leaflet/dist/leaflet.css';

Vue.use(VueToast);
Vue.use(BootstrapVue);
Vue.use(BootstrapVueIcons);

Vue.config.productionTip = false;

// Vue Instance
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app-root');
