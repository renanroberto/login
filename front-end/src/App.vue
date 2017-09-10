<template>
  <main id="app" class="phone-viewport">
    <md-theme md-name="main">
      <md-toolbar>
        <h1 class="md-title" style="flex: 1">{{ title }}</h1>
      </md-toolbar>

      <md-toolbar class="md-dense md-accent">
        <router-link tag="md-button" class="md-primary" :to="{ name: 'Main' }" exact>Início</router-link>
        <router-link tag="md-button" class="md-primary" :to="{ name: 'Login' }" v-if="!online">Login</router-link>
        <router-link tag="md-button" class="md-primary" :to="{ name: 'Hello' }">Hello Vue</router-link>
        <span style="flex: 1;"></span>
        <md-button class="md-primary" @click="logout">Logout</md-button>
      </md-toolbar>
    </md-theme>
    <router-view></router-view>
  </main>
</template>

<script>
import router from './router'

export default {
  name: 'app',

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
