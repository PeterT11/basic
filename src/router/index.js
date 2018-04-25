import Vue from 'vue';
import Router from 'vue-router';
import writePost from '../components/inputPost.vue';

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/Write',
      name: 'writePost',
      component: writePost
    }
  ]
})
