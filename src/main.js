import Vue from 'vue'
import App from './App.vue'
import Buefy from 'buefy'
import vuetify from './plugins/vuetify'
// import vuetify from '@/plugins/vuetify'
// import Vuetify from 'vuetify/lib/framework'
// import 'material-design-icons-iconfont/dist/material-design-icons.css'

// Vue.use(Vuetify, {
//   iconfont: 'md'
// })

Vue.use(Buefy)

Vue.config.productionTip = false

new Vue({
  el: '#app',
  // vuetify: new Vuetify(),
  vuetify,
  render: h => h(App)
})
