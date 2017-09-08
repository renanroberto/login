<template>
  <main id="app" class="phone-viewport">
    <md-theme md-name="main">
      <md-toolbar>
        <!-- Menu Button  -->
        <!-- <md-button>
          <md-icon>menu</md-icon>
        </md-button> -->

        <h1 class="md-title" style="flex: 1">{{ title }}</h1>
      </md-toolbar>

      <md-toolbar class="md-dense md-accent">
        <!-- router link -->
        <router-link :to="{ name: 'Main' }">
          <md-button class="md-primary">Início</md-button>
        </router-link>

        <!-- router.push('to') -->
        <md-button class="md-primary" @click="go('Login')">Login</md-button>

        <!-- Vue Material router-link -->
        <router-link tag="md-button" class="md-primary" :to="{ name: 'Hello' }">Hello Vue</router-link>
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
      title: 'Sistema de Login'
    }
  },

  methods: {
    go (to) {
      router.push({ name: to })
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
