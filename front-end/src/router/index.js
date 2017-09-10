import Vue from 'vue'
import Router from 'vue-router'

import Hello from '@/components/Hello'
import Main from '@/components/Main'
import Login from '@/components/Login'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    { path: '/', name: 'Main', component: Main, beforeEnter: restrict },
    { path: '/login', name: 'Login', component: Login },
    { path: '/hello', name: 'Hello', component: Hello }
  ],
  linkActiveClass: 'md-raised'
})

function restrict (to, from, next) {
  Vue.axios
  .get('/api/checklogin')
  .then(res => {
    next()
  })
  .catch(() => {
    alert('Você não está logado')
    next('/login')
  })
}
