import Vue from 'vue'
import VueResource from 'vue-resource'
import router from './router'
import store from './vuex/store'
import App from './components/App'
import Element from 'element-ui'
import 'element-ui/lib/theme-default/index.css'

Vue.use(VueResource)
Vue.use(Element)


new Vue({
	router,
	store,
  	el: '#app',
  	render: h => h(App)
})