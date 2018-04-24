<template>
  <div id="app">
    <img src="./assets/logo.png">
    <div>Write your Post!</div>
    <postWrite v-on:submit-post='summitPost'></postWrite>
  </div>
</template>

<script>
import postWrite from './components/inputPost'
import ApolloClient from 'apollo-boost';
console.log(ApolloClient);
const client = new ApolloClient({
  uri: '/graphql'
});
console.log(client)
import gql from 'graphql-tag'

export default {
  name: 'App',
  methods:{
    summitPost: function(data){
      console.log(data);
      client.mutate({
        mutation: gql`mutation($title:String!,$text:String!){createDraft(title:$title,text:$text){
              id
            }}`,
        variables: {
          title:data.title,
          text:data.text
        }
      }).then((data)=>console.log(data));
    }
  },
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
