import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

export default new VueRouter({
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
				},
				{
					path: 'orders',
					component: function(resolve){
			            require(['./components/Orders'], resolve)
		 	        } 
				},
				{
					path: 'setting',
					component: function(resolve){
			            require(['./components/Setting'], resolve)
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