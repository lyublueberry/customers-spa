import Vue from 'vue'
import VueRouter from 'vue-router'
import AllUsersPage from '../pages/AllUsersPage.vue'
import UserPage from '../pages/UserPage.vue'
Vue.use(VueRouter)


const routes = [
  {
    path: '/',
    name: 'main',
    component: AllUsersPage,

  },
  {
    path: '/user/:id',
    name: 'user',
    component: UserPage,

  }
]

const router = new VueRouter({
  mode: 'hash',
  routes,

})

export default router