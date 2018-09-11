import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import main from './main/main.vue'
Vue.use(VueRouter)

const router = new VueRouter({
    base: "/main",
    routes:[
        {path: '/main',name:'main', component: main},
    ],
})

new Vue({
    el: '#app',
    render: h => h(App),
    router
})