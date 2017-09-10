<template>
  <div class="welcome">
    <h2 class="md-title">Olá {{ user }}, seja bem vindo!</h2>
  </div>
</template>

<script>
export default {
  name: 'main',

  data () {
    return {
      user: '',
      email: ''
    }
  },

  methods: {
    userInfo () {
      this.axios
      .get('/api/checklogin')
      .then(res => {
        this.user = res.data.name
        this.email = res.data.email
      })
    }
  },

  beforeMount () {
    this.userInfo()
  }
}
</script>

<style scoped>
.welcome{
  display: flex;
  width: 100vw;

  justify-content: center;
  align-items: center;
}
</style>
