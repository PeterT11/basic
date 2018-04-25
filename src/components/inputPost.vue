<template>
  <div>
    <v-card color="grey lighten-4" flat>
      <v-card-text>
        <v-subheader>Write a Post</v-subheader>
        <v-container fluid>
          <v-layout row>
            <v-flex xs12>
              <v-text-field
                v-model="title"
                name="title"
                label="Title"                              
              ></v-text-field>
            </v-flex>
          </v-layout>
          <v-layout row>
            <v-flex xs12>
              <v-text-field
                v-model="text"
                name="text"
                label="Text"
                textarea                
              ></v-text-field>
            </v-flex>
          </v-layout>
        </v-container>
      </v-card-text>
      <v-btn @click="$emit('submit-post',{title,text})">Submit</v-btn>
    </v-card>

  </div>

</template>


<script>
console.log("good");
export default {
  name: 'writePost',
  data:function(){
    return {title:'',text:''};
  } 
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
