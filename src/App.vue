<template>
<!--   <div id="app">
    <img src="./assets/logo.png">
    <h1></h1>
    <h2>Essential Links</h2>
    <ul>
      <li><a href="https://vuejs.org" target="_blank">Core Docs</a></li>
      <li><a href="https://forum.vuejs.org" target="_blank">Forum</a></li>
      <li><a href="https://gitter.im/vuejs/vue" target="_blank">Gitter Chat</a></li>
      <li><a href="https://twitter.com/vuejs" target="_blank">Twitter</a></li>
    </ul>
    <h2>Ecosystem</h2>
    <ul>
      <li><a href="http://router.vuejs.org/" target="_blank">vue-router</a></li>
      <li><a href="http://vuex.vuejs.org/" target="_blank">vuex</a></li>
      <li><a href="http://vue-loader.vuejs.org/" target="_blank">vue-loader</a></li>
      <li><a href="https://github.com/vuejs/awesome-vue" target="_blank">awesome-vue</a></li>
    </ul>
    <div class="elias">{{count}}---{{countx}}</div>
    <button @click="haha">点击X2</button>
  </div> -->
  <div id="app">
    <list></list>
    <cart></cart>
    <p>结算</p>    
  </div>
</template>

<style>
html,body{
  width: 100%;
  height: 100%;
}  
body{
  display: flex;
  justify-content: center;
  align-items: center;
}

p{
  text-align: center;
}

#app{
  margin:0;
  width: 50%;
}

li span{
  display: block;
  text-align: center;
  margin: 10px 0;
}
.list button{
  display: block;
  margin : 0 auto;
}

.fade-enter-active, .fade-leave-active {
  transition: opacity .5s
}
.fade-enter, .fade-leave-to /* .fade-leave-active in below version 2.1.8 */ {
  opacity: 0
}

</style>

<script>

import {mapState} from 'vuex'
import {mapGetters} from 'vuex'
import {mapMutations} from 'vuex'
import {mapActions} from 'vuex'
import list from './list.vue'
import cart from './cart.vue'

export default {
    components : {
      list,
      cart
    }
}
</script>

<style>
/*#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}*/
</style>
