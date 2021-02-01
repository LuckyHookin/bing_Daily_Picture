import Vue from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify';
import axios from 'axios'
import VueAxios from 'vue-axios'
const instance = axios.create({
  baseURL: 'https://a2b4be01-6c86-4855-b330-a7a311dbf588.bspapp.com/http/api/',
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
