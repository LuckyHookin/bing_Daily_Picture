import Vue from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify';
import axios from 'axios'
import VueAxios from 'vue-axios'
const instance = axios.create({
  baseURL: 'https://env-00jy5x2duz72.dev-hz.cloudbasefunction.cn/http/api/',
})
Vue.config.productionTip = false

Vue.use(VueAxios, instance)


new Vue({
  router,
  vuetify,
  render: h => h(App),
  mounted() {
    document.dispatchEvent(new Event('render-event'))
  }
}).$mount('#app')
