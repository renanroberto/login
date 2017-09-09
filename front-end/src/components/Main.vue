<template>
  <div class="text-center">
    <md-button @click="check">Check</md-button>
    <md-button @click="logout">Logout</md-button>
  </div>
</template>

<script>
export default {
  name: 'main',

  data () {
    return {
      user: ''
    }
  },

  methods: {
    check () {
      this.axios
      .get('/api/checklogin')
      .then(res => {
        console.log(res.data)
      })
      .catch(error => {
        console.log('Error:', error)
      })
    },

    logout () {
      this.axios.get('/api/logout')
    }
  }
}
</script>

<style scoped>
  .text-center{
    text-align: center;
  }
</style>
