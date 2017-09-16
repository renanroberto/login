import Vue from 'vue'

import VueMaterial from 'vue-material'
import 'vue-material/dist/vue-material.css'

import axios from 'axios'
import VueAxios from 'vue-axios'

import App from './App'
import router from './router'

Vue.config.productionTip = false

Vue.use(VueMaterial)
Vue.use(VueAxios, axios)

Vue.material.registerTheme({
  main: {
    primary: 'blue',
    accent: 'black'
  },
  login: {
    primary: 'blue',
    accent: {
      color: 'light-green',
      hue: 'A700'
    },
    warn: {
      color: 'red',
      hue: 'A700'
    }
  },
  success: {
    primary: {
      color: 'light-green',
      hue: 'A700'
    },
    accent: {
      color: 'light-green',
      hue: 'A700'
    }
  }
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
