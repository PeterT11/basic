<template>
  <div class="Write a Post">
  <div><input v-model="title" placeholder="Please input title"></div>
  <div>
    <textarea rows="4" cols="50" v-model="text" placeholder="Please input text"></textarea>
  </div>      
  <button @click="$emit('submit',{title,text})">Submit</button>  
  </div>
</template>


<script>
console.log("good");
export default {
  name: 'PostWrite',
  data:function(){
    return {title,text};
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
