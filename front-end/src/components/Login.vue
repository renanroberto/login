<template>
  <div id="login" class="center">
    <div class="login">
      <form v-on:submit.prevent='onSubmit'>
        <div>
          Login: {{ email }} <span v-if="email && password">|</span> {{ password }}
        </div>
        <div>
          <input type="email" name="email" v-model="email" placeholder="Email" required autocomplete autofocus>
        </div>
        <div>
          <input type="password" name="password" v-model="password" placeholder="Senha" required>
        </div>
        <div>
          <input type="submit" value="Entrar">
        </div>
      </form>
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
  background-color: white;
  padding: 10px;
  box-shadow: 0px 0px 5px lightgrey;
}
</style>
