<template>
<div class="container">
    <div class="row">
         <div class="form">
            <div class="error">
                {{error}}
            </div>
            <form  @submit.prevent="login">
                <div class="form-group col-6 pop"  >
                    <label for="exampleInputEmail1">Email address</label>
                    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
                      placeholder="email" v-model="user.email" required>
                    <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
                </div>
                <div class="form-group form-group col-6 pop" >
                    <label for="exampleInputPassword1">Password</label>
                    <input type="password" class="form-control" id="exampleInputPassword1"
                     placeholder="password" v-model="user.password" required>
                </div>
                <div class="form-group form-check form-group col-6 pop"> 
                    <input type="checkbox" class="form-check-input" id="exampleCheck1">
                    <label class="form-check-label" for="exampleCheck1">Check me out</label>
                </div>
                <div class="col-6 pop">
                    <button type="submit" class="btn btn-primary ">Submit</button>
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
        margin: auto;
    }
  
   .pop{
       /* text-align: center; */
   }

</style>
