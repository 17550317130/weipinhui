import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import denglu from '../views/denglu.vue'
import nvzhuang from '../views/nvzhuang/nvzhuang.vue'
import nanzhuang from '../views/nanzhuang/nanzhuang.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },{
    path: '/denglu',
    name: 'Denglu',
    component: denglu
  },
  {
    path: '/nvzhuang',
    name: 'Nvzhuang',
    component: nvzhuang
  }
  ,
  {
    path: '/nanzhuang',
    name: 'Nanzhuang',
    component: nanzhuang
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
