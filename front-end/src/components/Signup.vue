<template>
  <div class="center">
    <div style="display: flex">
      <md-icon style="color: red">error_outline</md-icon>
      <h1 class="md-title">&nbsp; Em construção...</h1>
    </div>
  </div>
</template>

<script>
import _ from 'lodash'

export default {
  name: 'signup',

  data () {
    return {
      email: '',
      password: '',

      emailInfo: '',
      passInfo: '',

      loading: false
    }
  },

  methods: {
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
</style>
