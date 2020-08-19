<template>
<div class="wrap">
    <div>
         <div class="form">
            <div class="error">
                {{error}}
            </div>
        <form action="" @submit.prevent="login">
            <h2>Login</h2>
            <div>
                <input type="email" placeholder="email" v-model="user.email">
            </div>
            <div>
                <input type="password" placeholder="password" v-model="user.password">
            </div>
            <div>
                <button type="submit">Login</button>
            </div>
          
        </form>
        
    </div>
    </div>
</div>
    
</template>
<script>
import * as firebase from 'firebase/app';
import 'firebase/auth'
export default {
    props:['app'],
    data(){
        return{
            user:{
                email:'',
                password:''
            },
            error:''
        }
    },
    methods:{
        login: async function(){
            try {
                firebase.auth().signInWithEmailAndPassword(this.user.email, this.user.password).then(cred=>{
                    this.app.user= cred.user
                    this.app.loggedin=true;
                    console.log(cred.user)
                    this.$router.replace({'name': 'display'})
                })
               
                
                
            } catch (error) {
                this.error=error;
            }
            
               
        }
    },
     created(){
        if (this.app.loggedin==true) {
            this.$router.replace({'name': 'display'})
        }
       
    }

    
    
}
</script>
<style scoped>
    .wrap{
        width: 80%;
        margin: auto;
        background-color: rgb(49, 4, 109);
        height: 700px;
    }
    .form{
        width: 90%;
        margin: auto;
        margin-top: 100px;

    }
    div{
        margin: 20px;
    }
    input{
        width: 50%;
        height: 30px;
        border-radius: 3px;
        background-color: burlywood;
    }
    button{
        width: 15%;
        height: 30px;
        background-color: rgb(190, 139, 17);
    }

</style>
