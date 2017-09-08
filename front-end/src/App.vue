<template>
  <main id="app" class="phone-viewport">
    <md-theme md-name="main">
      <md-toolbar>
        <h1 class="md-title">{{ title }}</h1>
      </md-toolbar>
      <div class="link-bar">
        <!-- router link -->
        <router-link :to="{ name: 'Main' }">
          <md-button class="md-raised md-primary">Início</md-button>
        </router-link>

        <!-- router.push -->
        <md-button class="md-raised md-primary" @click="go('Login')">Login</md-button>

        <router-link :to="{ name: 'Hello' }">
          <md-button class="md-raised md-primary">Hello Vue</md-button>
        </router-link>
      </div>
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
      title: 'Login System'
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
