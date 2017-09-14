<template>
  <main id="app" class="phone-viewport">
    <md-theme md-name="main">
      <md-toolbar>
        <h1 class="md-title" style="flex: 1">{{ title }}</h1>
      </md-toolbar>

      <md-tabs class="md-accent">
        <md-tab md-label="Início">
      </md-tabs>
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
      title: 'Sistema de Login'
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
