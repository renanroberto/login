import Vue from 'vue'

import VueMaterial from 'vue-material'
import 'vue-material/dist/vue-material.css'

import axios from 'axios'
import VueAxios from 'vue-axios'

// import lodash from 'lodash'
// import VueLodash from 'vue-lodash/dist/vue-lodash.min'

import App from './App'
import router from './router'

Vue.config.productionTip = false

Vue.use(VueMaterial)
Vue.use(VueAxios, axios)
// Vue.use(VueLodash, lodash)

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
    },
    warn: {
      color: 'light-green',
      hue: 'A700'
    }
  },
  warning: {
    primary: {
      color: 'red',
      hue: 'A700'
    },
    accent: {
      color: 'red',
      hue: 'A700'
    },
    warn: {
      color: 'red',
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
