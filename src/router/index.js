import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import History from '../components/History.vue';
import Login from '../components/Login.vue';
import Register from '../components/Register.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: {
      title: 'Chasier App',
    },
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('../views/About.vue'),
    meta: {
      title: 'About',
    },
  },
  {
    path: '/history',
    name: 'Histroy',
    component: History,
    meta: {
      title: 'History',
    },
  },
  {
    path: '/login',
    name: 'Login',
    component: Login,
    meta: {
      title: 'Login to Your Account | Most Populer Chasier Aplication',
    },
  },
  {
    path: '/register',
    name: 'Register',
    component: Register,
    meta: {
      title: 'Regist Your Account | Most Populer Chasier Aplication',
    },
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
