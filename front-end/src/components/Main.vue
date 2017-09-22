<template>
  <div class="container">
    <h2 class="md-title">Olá {{ name }}, seja bem vindo!</h2>

    <div class="chat-container">
      <div class="chat-view">
        <div class="chat-message">
          <div>Some message...</div>
        </div>
        <div class="chat-message">
          <div>Some message big message to debug...</div>
        </div>
      </div>

      <form id="chat-login" @submit.prevent>
        <div class="chat-input">
          <md-input-container md-inline>
            <label>Envie uma mensagem...</label>
            <md-input type="text"></md-input>
          </md-input-container>

          <span style="align-self: center">
            <md-button type="submit" class="md-accent md-raised md-icon-button">
              <md-icon>send</md-icon>
            </md-button>
          </span>
        </div>
      </form>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  name: 'main',

  props: ['name', 'email']
}
</script>

<style scoped>
.container {
  display: flex;
  flex-direction: column;

  justify-content: center;
  align-items: center;
}

@media only screen and (max-width: 500px) {
  .chat-container {
    min-width: 100%;
    padding: 10px;
    background-color: #B0BEC5;
    border: 1px solid #90A4AE;
  }
}
@media only screen and (min-width: 500px) {
  .chat-container {
    min-width: 50vw;
    padding: 10px;
    background-color: #B0BEC5;
    border: 1px solid #90A4AE;
  }
}

.chat-view {
  display: flex;
  min-height: 25vh;

  flex-direction: column;
  justify-content: flex-start;


  padding: 10px;
  box-shadow: 0 0 5px grey;
  background-color: white;
}

.chat-message {
  margin: 3px;
}
.chat-message div {
  display: inline-block;

  padding-top: 2px;
  padding-bottom: 2px;
  padding-left: 10px;
  padding-right: 10px;

  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  border-bottom-right-radius: 10px;

  background-color: lightblue;
}

.chat-input {
  display: flex;
}
</style>
