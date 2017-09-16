<template>
  <div class="welcome">
    <h2 class="md-title">Olá {{ name }}, seja bem vindo!</h2>
  </div>
</template>

<script>
export default {
  name: 'main',

  props: ['name', 'email']
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
