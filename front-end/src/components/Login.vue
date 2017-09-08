<template>
  <div id="login" class="center">
    <div class="login">
      <md-theme md-name="login">
        <form v-on:submit.prevent='onSubmit'>
          <div class="md-title">Login</div>

          <md-input-container>
            <label>Email</label>
            <md-input type="email" v-model="email" required></md-input>
          </md-input-container>

          <md-input-container md-has-password>
            <label>Senha</label>
            <md-input type="password" v-model="password" required></md-input>
          </md-input-container>

          <div style="text-align: right">
            <md-button class="md-raised md-accent" @click="onSubmit">Login</md-button>
          </div>
        </form>
      </md-theme>
    </div>
  </div>
</template>

<script>
export default {
  name: 'login',

  data () {
    return {
      email: '',
      password: ''
    }
  },

  methods: {
    onSubmit () {
      console.log('Submit!')
    }
  }
}
</script>

<style scoped>
.login{
  min-width: 300px;
  background-color: white;
  padding: 10px;
  box-shadow: 0px 0px 5px lightgrey;
}
</style>
