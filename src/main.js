import Vue from 'vue'
import App from './App.vue'

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

import VueRouter from 'vue-router'
import './pages/PAD_assist'

import axios from 'axios';

//axios.defaults.baseURL = '/cors';
axios.defaults.timeout = 10000;
Vue.prototype.$axios = axios;
Vue.use(VueRouter)
Vue.use(ElementUI);

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  mounted(){
    
  }
}).$mount('#app')
