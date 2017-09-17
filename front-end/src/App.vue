<template>
  <main id="app" class="phone-viewport">
    <md-theme md-name="main">
      <md-toolbar>
        <h1 class="md-title" style="flex: 1">{{ title }}</h1>
      </md-toolbar>

      <md-tabs class="md-accent" @change="t => tab = t">
        <md-tab id="main" md-label="Início" :md-active="online" :md-disabled="!online">
          <CcMain :name="user.name"></CcMain>
        </md-tab>
        <md-tab id="hello" md-label="Hello">
          <CcHello></CcHello>
        </md-tab>
        <!-- Login information -->
        <md-tab v-if="!online" id="login" md-label="Login" :md-active="!online">
          <CcLogin @auth="login"></CcLogin>
        </md-tab>
        <md-tab v-if="online" id="logout" md-label="Logout">
        </md-tab>
      </md-tabs>

      <md-dialog ref="logoutMsg">
        <md-dialog-title>{{ title }}</md-dialog-title>

        <md-dialog-content>Que a Força esteja com você</md-dialog-content>

        <md-dialog-actions>
          <md-button class="md-accent" @click="logout">Ok</md-button>
        </md-dialog-actions>
      </md-dialog>
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
      user: { name: '', email: '' },
      tab: 0
    }
  },

  methods: {
    login ([name, email]) {
      this.online = true
      this.user.name = name
      this.user.email = email
    },

    logout () {
      this.closeDialog('logoutMsg')
      this.axios
      .get('/api/logout')
      .then(() => {
        this.online = false
        this.user = {}
      })
      .catch(err => {
        console.log('Error on logout', err)
      })
    },

    openDialog (ref) {
      this.$refs[ref].open()
    },

    closeDialog (ref) {
      this.$refs[ref].close()
    }
  },

  watch: {
    tab: function () {
      if (this.online && this.tab === 2) {
        this.openDialog('logoutMsg')
      }
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
