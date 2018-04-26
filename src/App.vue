<template>
  <div id="app">
    <v-app>
      <v-layout row>
        <my-navi/>
        <v-flex>
          <router-view/>
        </v-flex>
      </v-layout>
    </v-app>
  </div>
</template>


<script>

import myNavi from './components/Navi.vue';

export default {
  name: "App", 
  components: {
    myNavi
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #910c43;
  width: 80%;
  margin: 60px auto;
}
</style>
