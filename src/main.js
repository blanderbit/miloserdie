import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import main from './main/main.vue'
import rubricsOne from './rubrics/rubricsOne.vue'
import catalog from './rubrics/rubricks.vue'
import about from './about/about_us.vue'
import helps from './helps/help.vue'
Vue.use(VueRouter)

let linkcss = document.querySelectorAll('link')
let linkjs = document.querySelectorAll('script')
links(linkcss,'css')
// links(linkjs,js)
function links(link,name){
	for(let i = 1;i<link.length;i++){
		if(link[i].href.split('/').length >5 ) {
			let one = link[i].href.split('/').splice(0, 3).join('/')
			let two = link[i].href.split('/').splice(5).join('/')
			let rel = one + "/" + two
			link[i].href = rel
		}
	}
}
const router = new VueRouter({
    mode: 'history',
    routes:[
        {path: '/main',name:'main', component: main},
        {path: '/catalog/:name/:id',name:'catalog', component: rubricsOne},
        {path: '/catalogs',name:'catalogs', component: catalog},
        {path: '/about-us',name:'about-us', component: about},
        {path: '/helps',name:'helps', component: helps},
    ],
})

new Vue({
    el: '#app',
    render: h => h(App),
    router
})