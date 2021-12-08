import { createApp } from 'vue'
import router from './router/router'
import App from './App.vue'
import store from './vuex/store'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

createApp(App).use(ElementPlus).use(store).use(router).mount('#app')
