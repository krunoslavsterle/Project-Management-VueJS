import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './App.vue';

import { routes } from './routes.js';
import store from './store/store.js';

Vue.use(VueRouter);

const router = new VueRouter({
    mode: 'history',
    routes: routes
});

new Vue({
    el: '#app',
    router: router,
    store: store,
    render: h => h(App)
});
