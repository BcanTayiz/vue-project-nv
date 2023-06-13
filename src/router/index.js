import {createRouter,createWebHistory} from 'vue-router'
import Details from '../views/Details.vue'
import Home from '../views/Home.vue'


const routes = [
    {
        path:'/',
        name:'Home',
        component:Home
    },
    {
        path:'/details/:id',
        name:'details',
        component:Details
    }
]


const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes
})

export default router