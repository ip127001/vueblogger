import Vue from 'vue'
import VueRouter from 'vue-router'
import axios from 'axios'

import App from './App.vue'
import { routes } from './routes.js'

Vue.use(VueRouter);

axios.defaults.baseURL = 'http://localhost:8081'
axios.defaults.headers.common['Authorization'] = 'fasfdsa'
axios.defaults.headers.get['Accepts'] = 'application/json'

const router = new VueRouter({
  mode: 'history',
  routes
})

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
