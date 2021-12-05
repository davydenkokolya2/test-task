import { createWebHistory, createRouter } from 'vue-router'
// import Vue from 'vue'
// import VueRouter from 'vue-router'

import StartPage from '../components/StartPage'
import QuestionsPage from '../components/QuestionsPage'

// Vue.use(VueRouter);

let router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'StartPage',
            component: StartPage

        },
        {
            path: '/questionspage',
            name: 'QuestionsPage',
            component: QuestionsPage,
            props: true,
        }
    ]
})

export default router;