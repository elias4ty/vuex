import Vue from 'vue'
import Vuex from 'vuex'
import {goods} from './goods'
import list from './modules/list.js'
import cart from  './modules/cart.js'

Vue.use(Vuex)

let store = new Vuex.Store({
	state : {
		goods
	},
	// getters : {
	// 	countx : state => (state.count+1)
	// },
	// mutations : {
	// 	double(state){
	// 		setTimeout(()=>{
	// 			state.count *=2	
	// 		},1000)			
			
	// 	}
	// },
	// actions : {
	// 	add({commit}){
	// 		return new Promise((rv,rj) => {
	// 			setTimeout(()=>{
	// 				rv('double')	
	// 			},1000)
	// 		})
	// 	},
	// 	_async({dispatch,commit}){
	// 		dispatch('add').then((res) => {
	// 			commit(res)
	// 		})
	// 	} 
	// },
	modules : {
		cart,
		list
	},
	actions : {
		add({commit},product){
			if(product.quan > 0)
				commit('add',{id:product.id})
		}
	}
})

export {store}