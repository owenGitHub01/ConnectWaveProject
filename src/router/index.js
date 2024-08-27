import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../components/HomeView.vue'
import Cart from '../components/Cart.vue'
import ProductList from '../components/ProductList.vue';
import BundleList from '../components/BundleList.vue';
import AboutView from '../components/AboutView.vue';
import ProductListShowItem from '../components/ProductListShowItem.vue';
import BundleListShowItem from '../components/BundleListShowItem.vue';


const router = createRouter({
    history: createWebHashHistory(),
    routes: [
        {
            path: '/',
            name: 'home',
            component: HomeView
        },
        {
            path: '/cart',
            name: 'cart',
            component: Cart
        },
        {
            path: '/devices',
            name: 'devices',
            component: ProductList
        },
        {
            path: '/bundles',
            name: 'bundles',
            component: BundleList
        },
        {
            path: '/about',
            name: 'about',
            component: AboutView
        },
        {
            path: '/devices/:id',
            name: 'ProductDetails',
            component: ProductListShowItem,
            props: true
        },
        {
            path: '/bundle/:name',
            name: 'BundleDetails',
            component: BundleListShowItem,
            props: true
        }
    ],
    scrollBehavior() {
        document.getElementById('app').scrollIntoView({ behavior: 'smooth' });
    }
});

export default router