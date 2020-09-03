<template>
<div class="wrap">
    <div class="form">
        <form action=" " @submit.prevent="post">
            <div>
                <input type="text" placeholder="Title" v-model="diary.title" required>
            </div>
            <div>
                <textarea name="body" id="" cols="30" rows="10" placeholder="write here" v-model="diary.body" required></textarea>
            </div>
            <div>
                <button type="submit">submit</button>
            </div>
        </form>
    </div>
   
</div>
    
</template>

<script>
/* eslint-disable */
import axios from 'axios'
import * as firebase from 'firebase/app';
import 'firebase/firestore'
export default {
    props:['app'],
    created(){
        
       let m =new Date().toLocaleString()
       this.diary.date=m
       this.diary.user_id=this.app.user.uid
        console.log(this.app.user);
       
    },

    data(){
        return{
            diary: {
                title:'',
                body:'',
                date:'',
                user_id:''
            },
            
        }
    },
    methods:{
        post: function(){
            firebase.firestore().collection('diary').add({
                title: this.diary.title,
                body: this.diary.body,
                data: new Date().toLocaleString(),
                user_id: this.app.user.uid

            })
        
        }
    }
 
    
    
}
</script>
<style scoped>
    .wrap{
        width: 50%;
        margin: auto;
        background-color: rgb(49, 4, 109);
        height: 700px;
    }
    .form{
        width: 90%;
        margin: auto;
    }
    div{
        margin: 10px;
    }
    input{
        width: 100%;
        height: 30px;
        border-radius: 3px;
        background-color: burlywood;
    }
    textarea{
         width: 100%;
        height: 230px;
        border-radius: 8px; 
        background-color: burlywood; 
    }

</style>
