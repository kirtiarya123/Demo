import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from './components/Login.vue';
import SignUp from './components/SignUp.vue';
import Home from './components/Home.vue';
import About from './components/About.vue';
import Products from './components/Products.vue';
import Contact from './components/Contact.vue';
import Billing from './components/Billing.vue';

Vue.use(VueRouter)
const routes = [
    {
        name: 'Login',
        path: '/',
        component: Login,
    },
    {
        name: 'SignUp',
        path: '/signup',
        component: SignUp,
    },
    {
        name: 'Home',
        path: '/home',
        component: Home,
    },
    {
        name: 'About',
        path: '/about',
        component: About,
    },
    {
        name: 'Products',
        path: '/products',
        component: Products,
    },
    {
        name: 'Contact',
        path: '/contact',
        component: Contact,
    },
   
  
    {
        name: 'Billing',
        path: '/billing',
        component: Billing,
    }
    
];

const router = new VueRouter({
    mode: 'history',
    routes
  })
export default router;
