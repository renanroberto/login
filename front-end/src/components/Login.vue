<template>
  <div id="login" class="center">
    <div class="login">
      <md-theme md-name="login">
        <form id="form-login" v-on:submit.prevent="onSubmit">
          <div class="md-title">Login</div>

          <md-input-container :class="emailInfo === 'invalid' ? 'md-input-invalid' : ''" :md-theme="emailInfo === 'invalid' ?  'warning' : 'success'">
            <label>Email</label>
            <md-input type="email" v-model="email" required></md-input>

            <md-icon v-if="emailInfo === 'valid'" class="md-accent">check_circle</md-icon>
            <md-icon v-if="emailInfo === 'invalid'" class="md-warn">close</md-icon>
            <md-spinner v-if="emailInfo === 'checking'" :md-size="20" md-indeterminate></md-spinner>

            <span class="md-error">Insira um email válido</span>
          </md-input-container>

          <md-input-container :class="passInfo === 'invalid' ? 'md-input-invalid' : ''" :md-theme="passInfo === 'invalid' ?  'warning' : 'success'">
            <label>Senha</label>
            <md-input type="password" v-model="password" required></md-input>

            <md-icon v-if="passInfo === 'valid'" class="md-accent">check_circle</md-icon>
            <md-icon v-if="passInfo === 'invalid'" class="md-warn">close</md-icon>
            <md-spinner v-if="passInfo === 'checking'" :md-size="20" md-indeterminate></md-spinner>

            <span class="md-error">A senha precisa ter 8 dígitos ou mais</span>
          </md-input-container>

          <div style="color: red" v-show="loginFail">
            <md-icon>error_outline</md-icon>
            <small>Login ou senha estão incorretos</small>
          </div>

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
import _ from 'lodash'

export default {
  name: 'login',

  data () {
    return {
      email: '',
      password: '',

      emailInfo: '',
      passInfo: '',

      loginFail: false,

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
      .catch(err => {
        console.log(err.message)
        this.loginFail = true
      })
      .then(() => {
        this.searching = false
      })
    },

    checkEmail: _.debounce(function () {
      if (this.email.indexOf('@') === -1) {
        this.emailInfo = 'invalid'
      } else {
        this.emailInfo = 'valid'
      }
    }, 500),

    checkPass: _.debounce(function () {
      if (this.password.length < 8) {
        this.passInfo = 'invalid'
      } else {
        this.passInfo = 'valid'
      }
    }, 500)
  },

  watch: {
    email: function () {
      this.emailInfo = 'checking'
      this.checkEmail()
    },

    password: function () {
      this.passInfo = 'checking'
      this.checkPass()
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
