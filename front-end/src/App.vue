<template>
  <main id="app" class="phone-viewport">
    <md-theme md-name="main">
      <md-toolbar>
        <h1 class="md-title" style="flex: 1">{{ title }}</h1>
      </md-toolbar>

      <md-toolbar class="md-dense md-accent">
        <router-link tag="md-button" class="md-primary" :to="{ name: 'Main' }">Início</router-link>
        <router-link tag="md-button" class="md-primary" :to="{ name: 'Login' }">Login</router-link>
        <router-link tag="md-button" class="md-primary" :to="{ name: 'Hello' }">Hello Vue</router-link>
      </md-toolbar>
    </md-theme>
    <router-view></router-view>
  </main>
</template>

<script>
export default {
  name: 'app',

  data () {
    return {
      title: 'Sistema de Login'
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
.link-bar{
  text-align: center;
  background-color: lightgrey;
}
</style>
