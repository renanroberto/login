<template>
  <main id="app" class="phone-viewport">
    <md-theme md-name="main">
      <md-toolbar>
        <h1 class="md-title" style="flex: 1">{{ title }}</h1>
      </md-toolbar>

      <md-tabs class="md-accent">
        <md-tab id="main" md-label="Início" :md-disabled="!online"><CcMain></CcMain></md-tab>
        <md-tab id="hello" md-label="Hello"><CcHello></CcHello></md-tab>

        <md-tab v-if="!online" id="login" md-label="Login" md-active><CcLogin></CcLogin></md-tab>
        <md-tab v-if="online" id="logout" md-label="Logout">Aguarde...</md-tab>
      </md-tabs>
    </md-theme>
  </main>
</template>

<script>
import router from './router'

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
      online: false
    }
  },

  methods: {
    logout () {
      this.axios
      .get('/api/logout')
      .then(() => {
        alert('Volte sempre!')
      })
      .then(() => {
        router.push({ name: 'Login' })
      })
    }
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
