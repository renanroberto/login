<template>
  <div class="text-center">
    <p>{{ msg }}</p>
  </div>
</template>

<script>
export default {
  name: 'main',
  data () {
    return {
      msg: 'Uma menssagem para debug...'
    }
  }
}
</script>

<style scoped>
  .text-center{
    text-align: center;
  }
</style>
