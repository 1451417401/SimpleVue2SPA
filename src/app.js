import Vue from 'vue'
import VueResource from 'vue-resource'
import VueRouter from 'vue-router'
import Vuex from 'vuex'
import store from './vuex/store'
import App from './components/App'
import Element from 'element-ui'
import 'element-ui/lib/theme-default/index.css'

Vue.use(VueResource)
Vue.use(VueRouter)
Vue.use(Vuex)

Vue.use(Element)

const router=new VueRouter({
	routes:[
		{
			path: '/',
			beforeEnter: (route,redirect,next)=>{
				redirect({
			        path: '/home',
			        query: { redirect: route.fullPath }
			    })
			}
			// component: function(resolve){
	        //    require(['./components/Home'], resolve)
	        // } 
		},
		{
			path: '/home',
			component: require('./components/Home'),
			children: [
				{
					path: '/',
					component: function(resolve){
			            require(['./components/Goods'], resolve)
		 	        } 
				},
				{
					path: 'goods',
					component: function(resolve){
			            require(['./components/Goods'], resolve)
		 	        } 
				}
			]
		},
		{
			path: '/login',
			component: function(resolve){
	            require(['./components/Login'], resolve)
	        } 
		}
	]
})


new Vue({
	router,
	store,
  	el: '#app',
  	render: h => h(App)
})