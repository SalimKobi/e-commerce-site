import { createApp } from 'vue';
import App from './App.vue';
import "./index.css";
import NavBar from "./components/Nav.vue";
import Footer from "./components/Footer.vue";
import Form from "./components/Form.vue";
import Cart from "./components/cart.vue";
import Home from "./components/Home.vue";
import ProductDetails from "./components/ProductDetails.vue";

import { createRouter, createWebHistory } from "vue-router"
import { createStore } from 'vuex';


const store = createStore({
    state() {
        return {
            products: [
                {
                    id: 200,
                    product_name: "shirt1",
                    image_url: "xyz1",
                    description: "this is a very good product made with cotton1"
                },
                {
                    id: 201,
                    product_name: "shirt2",
                    image_url: "xyz2",
                    description: "this is a very good product made with cotton2"
                },
                {
                    id: 202,
                    product_name: "shirt3",
                    image_url: "xyz3",
                    description: "this is a very good product made with cotton3"
                },
            ]
        };
    }
});


const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/cart', component: Cart },
        { path: '/', component: Home },
        { path: '/product-details', component: ProductDetails },
        { path: '/form', component: Form },
    ]
});

const app = createApp(App);
app.mount('#app');

app.component("NavBar", NavBar);
app.component("Footer", Footer);

app.use(router);
app.use(store);