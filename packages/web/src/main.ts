import Vue from 'vue'
import App from './app/index.vue'
import router from './router'
import store from './store'
import './registerServiceWorker'
import './style/core/base.scss'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
