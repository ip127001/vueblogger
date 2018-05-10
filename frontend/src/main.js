import Vue from 'vue'
import VueRouter from 'vue-router'
import axios from 'axios'
import Vuelidate from 'vuelidate'

import App from './App.vue'
import { routes } from './routes.js'

Vue.use(VueRouter);
Vue.use(Vuelidate);

const router = new VueRouter({
  mode: 'history',
  routes
})

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
