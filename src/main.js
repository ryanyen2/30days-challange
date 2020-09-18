import Vue from 'vue';
import App from './App.vue';
import { BootstrapVue, IconsPlugin } from "bootstrap-vue";
import VueRouter from "vue-router";
import VueResource from "vue-resource";

import Routes from './routes';

Vue.use(BootstrapVue);
Vue.use(VueResource);
Vue.use(IconsPlugin);
Vue.use(VueRouter);

import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
Vue.config.productionTip = false


const router = new VueRouter({
  routes: Routes,
  mode: "history",
});

new Vue({
  render: h => h(App),
  router: router,
}).$mount('#app')
