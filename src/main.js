import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import Buefy from 'buefy'

Vue.use(Buefy)

Vue.config.productionTip = false

new Vue({
  vuetify,
  render: h => h(App)
}).$mount('#app')
