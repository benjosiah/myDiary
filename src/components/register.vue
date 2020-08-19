<template>
<div class="wrap">
    <div>
         <div class="form">
             <h3>Register</h3>
              <div class="error">
                {{error}}
            </div>
        <form action="" @submit.prevent="register">
            <div>
                <input type="email" placeholder="Title" v-model="user.email">
            </div>
            <div>
                <input type="password" name="" id="" v-model="user.password">
            </div>
            <div>
                <button type="submit">Register</button>
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
        register: async function(){
            try {
                const user =firebase.auth().createUserWithEmailAndPassword(this.user.email, this.user.password)
                location.reload()
                this.$router.replace({'name': 'display'})
            } catch (error) {
                this.error=error;
            }
            
               
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
