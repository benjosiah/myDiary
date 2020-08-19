<template>
    <header>
        <ul v-if="app.loggedin">
            <li>
                <router-link to="/"> myDiary|</router-link>
            </li>
             <li>
               <router-link to="/write"> Record Event|</router-link>
            </li>
            <li>
                <button @click="signout">
                    Log out
                </button>
            
            </li>

        </ul>
        <ul v-else>
            <li>
               <router-link to="/login"> Login| </router-link>
            </li>
             <li>
               <router-link to="/register"> Register| </router-link>
            </li>
        
        </ul>
    </header>
</template>
<script>
import * as firebase from 'firebase/app';
import 'firebase/auth'
export default {
    props:['app'],
    methods:{
        signout: function(){
            try {
                firebase.auth().signOut().then(cred=>{
                 this.$router.replace({'name': 'login'})
                })
            } catch (error) {
                this.error=error;
            }
            
               
        }
    }
    
}
</script>
<style scoped>
    header{
        width: 100%;
        height: 40px;
        background-color: blueviolet;
    }
    ul{
        margin: 0px;
    }
    li{
        display: inline;
        margin: 0rem;
        margin: 10px;
        padding: 0px;
        vertical-align: middle;
        -ms-flex-item-align: center;
    }
</style>

