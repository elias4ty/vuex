<template>
	<ul class="list">
      <li v-for="p in products">
        <span>{{p.name}} --- {{p.price}} 元</span>
        <button @click="add(p)" :disabled="!p.quan">点击添加</button>
      </li>
    </ul>
</template>

<script>
export default {
	computed : {
		products(){
			return this.$store.state.list.listpros
		}
	},
	created(){
		this.$store.dispatch('getListPros')
	},
	methods : {
		add(p) {
			this.$store.dispatch('add',p)
		}
	}
}	
</script>
