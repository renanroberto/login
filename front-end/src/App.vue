<template>
  <main id="app" class="phone-viewport">
    <md-theme md-name="main">
      <md-toolbar>
        <h1 class="md-title" style="flex: 1">{{ title }}</h1>
      </md-toolbar>

      <md-tabs class="md-accent">
        <md-tab id="main" md-label="Início" :md-disabled="!online">
          <CcMain :name="user.name"></CcMain>
        </md-tab>
        <md-tab id="hello" md-label="Hello">
          <CcHello></CcHello>
        </md-tab>
        <!-- Login information -->
        <md-tab v-if="!online" id="login" md-label="Login" md-active>
          <CcLogin @auth="login"></CcLogin>
        </md-tab>
        <md-tab v-if="online" id="logout" md-label="Logout">
          <md-button class="md-accent md-raised" @click="logout">Logout</md-button>
        </md-tab>
      </md-tabs>
    </md-theme>
  </main>
</template>

<script>
// import router from './router'

import CcMain from './components/Main'
import CcHello from './components/Hello'
import CcLogin from './components/Login'

export default {
  name: 'app',

  components: {
    CcMain, CcHello, CcLogin
  },

  data () {
    return {
      title: 'Sistema de Login',
      online: false,
      user: { name: '', email: '' }
    }
  },

  methods: {
    login ([name, email]) {
      this.online = true
      this.user.name = name
      this.user.email = email
    },

    logout () {
      this.axios
      .get('/api/logout')
      .then(() => {
        this.online = false
        this.user = {}
      })
      .catch(err => {
        console.log('Error on logout', err)
      })
    }
  },

  beforeMount () {
    this.axios
    .get('/api/login')
    .then(res => {
      this.online = res.data.auth
      this.user = res.data.user
    })
    .catch(err => {
      console.log(err.message)
    })
  }
}
</script>

<style>
.center{
  display: flex;
  width: 100vw;

  padding-top: 100px;

  justify-content: center;
  align-items: center;
}
</style>
