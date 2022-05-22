import { createRouter,createWebHashHistory } from "vue-router";

import Consultation from '../view/Consultation.vue'
import Home from '../view/Home.vue'
import Spot from '../view/Spot.vue'

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/consultation',
        name: 'Consultation',
        component: Consultation
    },
    {
        path: '/spot',
        name: 'Spot',
        component: Spot
    }
]

const router = createRouter({
    history:createWebHashHistory(),
    routes
})

export default router