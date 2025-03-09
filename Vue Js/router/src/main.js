import {createApp} from 'vue'
import './style.css'
import App from './App.vue'


// inisialisasi untuk pake vue routernya
import {createRouter, createWebHistory} from 'vue-router'

const router = createRouter({
    routes: [],
    history: createWebHistory()
})

createApp(App).use(router).mount('#app')
