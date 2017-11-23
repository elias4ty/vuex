import * as goods from '../goods'

export default {
	state : {
		listpros : []
	},
	mutations : {
 		add(state,{id}){
 			let pro = state.listpros.find(p => id === p.id)
 			pro.quan--	
 		},
		getListPros(state){
			state.listpros = goods.getPros();
		}	 		
	},
	actions : {
		getListPros({commit}){
			commit('getListPros')
		}		
	}
}