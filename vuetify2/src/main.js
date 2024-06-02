import Vue from 'vue'
import App from './App.vue'

import router from './router'//라우터만든거 불러오기
import vuetify from './plugins/vuetify'

Vue.config.productionTip = false

new Vue({
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')
