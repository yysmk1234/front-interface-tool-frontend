import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import router from './router/index'
import 'view-design/dist/styles/iview.css';
import axios from 'axios'
import VueAxios from 'vue-axios'
import { Message , Switch , Modal } from 'view-design'


Vue.use(VueAxios, axios)
Vue.config.productionTip = false
Vue.use(VueRouter)
Vue.prototype.$Message=Message
Vue.component('i-switch',Switch)
Vue.prototype.$Modal = Modal

new Vue({
  render: h => h(App),
  router 
}).$mount('#app')
