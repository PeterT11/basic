<template>
  <div id="app">
    <img src="./assets/logo.png">
    <div>Write your Post!</div>
    <postWrite></postWrite>
  </div>
</template>

<script>
import postWrite from './components/inputPost'

export default {
  name: 'App',
  components: {
    postWrite
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
