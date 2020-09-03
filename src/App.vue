<template>
  <div id="app">
    <app-header :app='this'></app-header>
    <router-view :app='this'/>
  </div>
    
  
</template>

<script>
import * as firebase from 'firebase/app';
import 'firebase/auth'
import Header from './components/header'
export default {
  name: 'app',
  components:{
    'app-header': Header
  },
  created(){
     firebase.auth().onAuthStateChanged(user=>{
       this.user=user
       console.log(user)
       if (user) {
         this.loggedin=true;
       }else{
         this.loggedin=false
       }
       console.log(process.env.VUE_APP_URL)
     })

     
  },
  data(){
    return{
      loggedin:true,
      user:null
    }
  }
}
</script>

<style>
body{
   background-color: rgb(49, 4, 109);
   margin: 0px;
   padding: 0px;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: bisque;
  /* margin-top: 60px; */
}
</style>
