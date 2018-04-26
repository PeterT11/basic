<template>
  <v-navigation-drawer permanent>
    <v-toolbar flat>
      <v-list>
        <v-list-tile>
          <v-list-tile-avatar>
            <img src="../assets/logo.png">
          </v-list-tile-avatar>
          <v-list-tile-title class="title">
            Web Posts
          </v-list-tile-title>
        </v-list-tile>
      </v-list>
    </v-toolbar>
    <v-divider></v-divider>
    <v-list dense class="pt-0">

      <v-list-tile to="Home">
        <v-list-tile-action>
          <v-icon>home</v-icon>
        </v-list-tile-action>
        <v-list-tile-content>
          <v-list-tile-title>home</v-list-tile-title>
        </v-list-tile-content>
      </v-list-tile>

      <v-list-group prepend-icon="description" value="true" no-action>

        <v-list-tile slot='activator'>
            <v-list-tile-title>Posts</v-list-tile-title>
        </v-list-tile>

        <v-list-tile to="Posts:Feed">
          <v-list-tile-content>
            <v-list-tile-title>Feed</v-list-tile-title>
          </v-list-tile-content>            
          <v-list-tile-action>
            <v-icon v-text="'assignment'"></v-icon>
          </v-list-tile-action>
        </v-list-tile>

        <v-list-tile to="Posts:Drafts">
                      <v-list-tile-content>
          <v-list-tile-title>Drafts</v-list-tile-title>
                    </v-list-tile-content>
          <v-list-tile-action>
            <v-icon v-text="'assignment'"></v-icon>
          </v-list-tile-action>
        </v-list-tile>

      </v-list-group>

      <v-list-tile to="writePost">
        <v-list-tile-action>
          <v-icon>add</v-icon>
        </v-list-tile-action>
        <v-list-tile-content>
          <v-list-tile-title>New Post</v-list-tile-title>
        </v-list-tile-content>
      </v-list-tile>

      <v-list-tile to="about">
        <v-list-tile-action>
          <v-icon>question_answer</v-icon>
        </v-list-tile-action>
        <v-list-tile-content>
          <v-list-tile-title>About</v-list-tile-title>
        </v-list-tile-content>
      </v-list-tile>

    </v-list>
  </v-navigation-drawer>
</template>

<script>
  console.log('bad');
  export default {
    name: "myNavi",
  }

</script>

<style scoped>


</style>
