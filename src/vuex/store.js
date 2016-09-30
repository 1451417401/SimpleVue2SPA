import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
export default new Vuex.Store({
	state: {
		count: 0
	},
	actions:{
		decrementAsync({commit}){
			setTimeout(()=>{
				commit('decrement')
			},1000)
		}
	},
	mutations: {
	  	increment: state => state.count++,
	    decrement: state => state.count--
	},
	getters:{
		getCount: state=>{
			return state.count
		}
	}
})