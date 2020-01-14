import Vue from 'vue'
import VueRouter from 'vue-router'
import Dashboard from '../components/Dashboard.vue'
import Category from '../components/Category.vue'

Vue.use(VueRouter)

export default new VueRouter({
    routes: [
        { 
            path: '/', 
            name: 'Dashboard',
            component: Dashboard 
        },
        {
            path: '/category/:categoryID',
            name: 'Category',
            component: Category
        }
    ]
})

