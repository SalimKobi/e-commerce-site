import { createApp } from "vue";
import { createRouter, createWebHistory } from "vue-router"

import App from "./App.vue";
import "./index.css";
import NavBar from "./components/Nav.vue";
import Footer from "./components/Footer.vue";
import Cart from "./components/cart.vue";
import Home from "./components/Home.vue";

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/cart', component: Cart },
        { path: '/', component: Home },
    ]
});
const app = createApp(App);

app.component("NavBar", NavBar);
app.component("Footer", Footer);

app.use(router);

app.mount("#app");

