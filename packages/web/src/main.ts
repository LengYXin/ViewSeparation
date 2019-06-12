import Vue from 'vue'
import App from '@/app/index.vue'
import router from './app/router'
import './registerServiceWorker'
import './style/core/base.scss'
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
