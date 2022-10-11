//引入Luyou 组件
import VirtualList from '../components/VirtualList.vue'
import HelloWorld from '../components/HelloWorld.vue'
import Home from '../components/Home.vue'


import { createRouter, createWebHashHistory } from 'vue-router'

//创建router实例对象，去管理一组一组的路由规则
const routes = [
  {
    path: '/',
    component: Home
  },
  {
    path: '/virtualList',
    component: VirtualList
  },
  {
    path: '/list',
    component: HelloWorld
  }
]


//配置路由
const router = createRouter({
  history: createWebHashHistory(),
  routes,//这里是routes：routes的缩写，同时此处还可以定义路由
})


export default router