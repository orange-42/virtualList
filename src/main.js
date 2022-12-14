import { createApp } from 'vue'
import Antd from 'ant-design-vue'
import router from './router'
import './style.css'
import App from './App.vue'
import 'ant-design-vue/dist/antd.css'

createApp(App).use(Antd).use(router).mount('#app')
