<template>
    <header>
       
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
            <a class="navbar-brand" href="#">Navbar</a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav mr-auto" v-if="app.loggedin">
                    <li class="nav-item active">
                        <router-link to="/"> List <span class="sr-only">(current)</span></router-link>
                    </li>
                    <li class="nav-item">
                        <router-link to="/write" class="nav-link"> Record Event</router-link>
                    </li>
                     <li class="nav-item">
                        <button type="button" class="btn btn-light">Log Out</button>
                    </li>
                </ul>
                <ul class="navbar-nav mr-auto" v-else>
                    <li class="nav-item active">
                        <router-link to="/login" class="nav-link"> login <span class="sr-only">(current)</span></router-link>
                    </li>
                    <li class="nav-item">
                        <router-link to="/register" class="nav-link"> Sign up</router-link>
                    </li>
                   
                </ul>
               
            </div>
        </nav>
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
    .bg-dark{
        background-color: rgba(220, 238, 220, 0.333);
    }
</style>

