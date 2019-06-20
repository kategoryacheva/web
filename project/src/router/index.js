import Vue from 'vue'
import Router from 'vue-router'
import Header from './../components/Header.vue'
import Create from './../components/Create.vue'
import Post from './../components/Post.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'header',
      component: Header
    },
    {
      path: '/create',
      name: 'create',
      component: Create
    },
    {
      path: '/post/:postId',
      name: 'post',
      component: Post,
      props: true
    }
  ],
  mode: 'history'
})
