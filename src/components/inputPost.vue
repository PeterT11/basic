<template>
  <div>
    <v-card color="grey lighten-4" flat>
      <v-card-text>
        <v-subheader>Write a Post: {{title}}</v-subheader>
        <v-container fluid>
          <v-layout row>
            <v-flex xs12>
              <v-text-field v-model="title" name="title" label="Title"></v-text-field>
            </v-flex>
          </v-layout>
          <v-layout row>
            <v-flex xs12>
              <v-text-field v-model="text" name="text" label="Text" textarea></v-text-field>
            </v-flex>
          </v-layout>
        </v-container>
      </v-card-text>
      <v-btn @click="submitPost">Submit</v-btn>
    </v-card>
  </div>
</template>


<script>
  import ApolloClient from "apollo-boost";
  import gql from "graphql-tag";
  //import router from './router'

  const client = new ApolloClient({
    uri: "/graphql"
  });
  console.log('that')
  export default {
    name: 'writePost',
    data: function () {
      return {
        title: 'abcd',
        text: 'def'
      };
    },
    created() {
      console.log('cr11111eated:', this.title);
    },
    methods: {
      submitPost() {
        client.mutate({
            mutation: gql `
            mutation($title: String!, $text: String!) {
              createDraft(title: $title, text: $text) {
                id
              }
            }
          `,
            variables: {
              title: this.title,
              text: this.text
            }
          })
          .then(data => console.log(data));
      }
    }
  }

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>


</style>
