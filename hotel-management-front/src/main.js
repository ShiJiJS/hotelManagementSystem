import axios from 'axios'
import Vue from 'vue'
import VueAxios from 'vue-axios'
import App from './App.vue'
import './assets/css/global.css'
import './plugins/element.js'
import router from './router'

Vue.prototype.$axios = axios
Vue.use(VueAxios, axios)

/*在请求头中验证Token的部分，不会写，摸了 2022/08/22 by Daniel Li
axios.defaults.baseURL = 
axios.interceptors.request.use(config => {
  NProgress.start()
  // 登录授权 请求验证是否有token  需要授权的 API ，必须在请求头中使用 `Authorization` 字段提供 `token` 令牌
  config.headers.Authorization = window.sessionStorage.getItem('token')
  return config // 必须返回否则没有值
})
// 在reponse拦截器中,隐藏进度条 NProgress.done()
axios.interceptors.response.use(config => {
  NProgress.done()
  return config
})
Vue.prototype.$http = axios
*/

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
