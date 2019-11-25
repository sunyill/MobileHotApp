import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// 引入vant及样式
import Vant from 'vant'
import 'vant/lib/index.css'
// 引入导航栏通用样式
import './styles/index.less'
Vue.use(Vant)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
