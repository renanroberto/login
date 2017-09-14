<template>
  <main id="app" class="phone-viewport">
    <md-theme md-name="main">
      <md-toolbar>
        <h1 class="md-title" style="flex: 1">{{ title }}</h1>
      </md-toolbar>

      <md-tabs class="md-accent" @change="changeRoute">
        <md-tab id="main" md-label="Início" :md-active="path === '/'" :md-disabled="!online"></md-tab>
        <md-tab id="hello" md-label="Hello" :md-active="path === '/hello'"></md-tab>

        <md-tab v-if="!online" id="login" md-label="Login" :md-active="path === '/login'"></md-tab>
        <md-tab v-if="online" id="logout" md-label="Logout"></md-tab>
      </md-tabs>

      <!-- <md-toolbar class="md-dense md-accent">
        <router-link tag="md-button" class="md-primary" :to="{ name: 'Main' }" exact>Início</router-link>
        <router-link tag="md-button" class="md-primary" :to="{ name: 'Login' }">Login</router-link>
        <router-link tag="md-button" class="md-primary" :to="{ name: 'Hello' }">Hello</router-link>

        <span style="flex: 1"></span>

        <md-button class="md-primary" @click="logout">Logout</md-button>
      </md-toolbar> -->
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
      path: router.currentRoute.path,
      online: false
    }
  },

  methods: {
    changeRoute (tab) {
      switch (tab) {
        case 0:
          router.push({ name: 'Main' })
          break
        case 1:
          router.push({ name: 'Hello' })
          break
        case 2:
          if (!this.online) router.push({ name: 'Login' })
          else this.logout()
          break
      }
    },
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
