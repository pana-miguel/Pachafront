import { createApp } from 'vue'
import App from './App.vue'
import router from '../router/';

new Vue({
router,
render: h => h(App)
}).$mount('#app');

createApp(App).mount('#app')

const routes = [
    { path: '/', component: () => import('./components/Home.vue') },
    { path: '/video/:id', component: () => import('./components/Video.vue') }
];