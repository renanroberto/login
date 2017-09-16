<template>
  <div id="login" class="center">
    <div class="login">
      <md-theme md-name="login">
        <form id="form-login" v-on:submit.prevent="onSubmit">
          <div class="md-title">Login</div>

          <md-input-container :class="emailValid ? '' : 'md-input-invalid'" :md-theme="emailValid ? 'success' : ''">
            <label>Email</label>
            <md-input type="email" v-model="email" required></md-input>
            <md-icon v-show="emailValid && email !== ''" class="md-accent">check_circle</md-icon>
            <span class="md-error">Insira um email válido</span>
          </md-input-container>

          <md-input-container :class="passValid ? '' : 'md-input-invalid'" :md-theme="passValid ? 'success' : ''" md-has-password>
            <label>Senha</label>
            <md-input type="password" v-model="password" required></md-input>
            <span class="md-error">A senha precisa ter 8 dígitos ou mais</span>
          </md-input-container>

          <md-layout md-gutter>
            <md-layout>
              <md-spinner v-show="searching" md-indeterminate></md-spinner>
            </md-layout>
            <md-layout md-flex="33" md-flex-offset="33">
              <md-button type="submit" class="md-raised md-accent">Login</md-button>
            </md-layout>
          </md-layout>
          <md-progress v-show="false" md-indeterminate></md-progress>
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
      password: '',

      emailValid: true,
      passValid: true,

      searching: false
    }
  },

  methods: {
    onSubmit () {
      this.searching = true
      this.axios
      .post('/api/login', {
        email: this.email,
        password: this.password
      })
      .then(res => {
        if (res.data.auth) {
          this.$emit('auth', [res.data.name, res.data.email])
        }
      })
      .catch(error => {
        console.log('Error on login', error)
      })
      .then(() => {
        this.searching = false
      })
    }
  },

  watch: {
    email: function () {
      if (this.email.indexOf('@') === -1) {
        this.emailValid = false
      } else {
        this.emailValid = true
      }
    },
    password: function () {
      if (this.password.length >= 8) {
        this.passValid = true
      } else {
        this.passValid = false
      }
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
