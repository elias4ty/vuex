import * as goods from '../goods'

export default {
	state : {
		add : []
	},
	getters : {
	   products(state,...sts){
	   		let rootState = sts[1];
	   		let _p = state.add.map(({id,quan}) => {

	   			let $p = rootState.goods.find(g => id === g.id)
	   			return {
	   				quan,
	   				name : $p.name,
	   				price : $p.price
	   			}
	   		})
	   		return _p
	   }
	},
	mutations : {
		add(state,{id}){
			let cartPro = state.add.find(p => p.id === id) 
			if(!cartPro){
				state.add.push({
					id,
					quan : 1
				})					
			}else{
				cartPro.quan++
			}
		}
	}
}