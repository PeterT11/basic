<template>
  <div id="app">    
    <v-app>
      <v-layout row>
        <v-navigation-drawer permanent>
    <v-toolbar flat>
      <v-list>
        <v-list-tile>
          <v-list-tile-avatar>
            <img src="./assets/logo.png" >
          </v-list-tile-avatar>
          <v-list-tile-title class="title">
            Web Posts
          </v-list-tile-title>
        </v-list-tile>
      </v-list>
    </v-toolbar>
    <v-divider></v-divider>
    <v-list dense class="pt-0">
      <v-list-tile v-for="item in items" :key="item.title" @click="">

        <v-list-tile-action>
          <v-icon>{{ item.icon }}</v-icon>
        </v-list-tile-action>
        <v-list-tile-content>
                 <router-link to = '/Write'>
          <v-list-tile-title>{{ item.title }}</v-list-tile-title>
        </router-link>
        </v-list-tile-content>
      </v-list-tile>
    </v-list>
  </v-navigation-drawer>
      <v-flex>
  <router-view></router-view>
      </v-flex>
      </v-layout>
    </v-app>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      //     drawer: true,
      items: [
        { title: "Home", icon: "dashboard" },
        { title: "Posts", icon: "description" },
        { title: "Write a Post", icon: "add" },
        { title: "About", icon: "question_answer" }
      ],
      right: null
    };
  },
  methods: {
    selectRoute: function(item) {
      switch (item) {
        case "Home":
          console.log("here:home");
          break;
        case "Posts":
          console.log("here:Posts");
          break;
        case "Write Post":
          //        router.push({ path: '/Write' });
          console.log("here:Write");
          break;
        case "About":
          console.log("here:About");
          break;
        default:
          console.log("here:default");
      }
    },
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
