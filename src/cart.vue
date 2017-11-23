<template>
	<div id="cart">
		<p v-show="products && !products.length">请添加物品</p>
	    <ul class="checkout">
	    		<li v-for="p in products" v-show="products"><span>{{p.name}} --- {{p.price}} 元 x {{p.quan}}</span></li>
	    </ul>
	    <p v-show="total && total > 0">Total : {{total}} 元</p>
	</div>
</template>

<script>

	export default{
		computed : {
			products(){
				return this.$store.getters.products
			},
		    total(state){
		   		let t = this.products.reduce((total,p) => {
		   				let _t = total + p.quan*p.price
								return _t
							},
						0)
		   		return 	t
		    }
		}
	}
</script>
