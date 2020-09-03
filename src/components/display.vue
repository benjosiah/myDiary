<template>
<div class="container">
    <div class="row">
        <ul>
            <li v-for="data in datas">
                <button v-on:click="deletepost(data.id)" > <img src="../assets/download.jpg" alt=""></button>
                <button v-on:click="popedit"> <img src="../assets/office-07-128.png" alt=""></button>
                <h3>{{data.title}}</h3>
                 {{data.data}}
                 <p>
                {{data.body}}
                </p>
               
            </li>
        </ul>
    </div>
    <div  class="edit" v-show="editbar">
        <button @click="close"> <img src="../assets/delete-sign.png" alt=""></button>
        <form action=" " @submit.prevent="edit">
            <div>
                <input type="text" placeholder="Title" v-model="diary.title">
            </div>
            <div>
                <textarea name="body" id="" cols="30" rows="10" placeholder="write here" v-model="diary.body"></textarea>
            </div>
            <div>
                <button type="submit">submit</button>
            </div>
        </form>
    </div>
</div>
    
</template>
<script>
import * as firebase from 'firebase/app';
import 'firebase/firestore'

export default {
    props:['app'],
    created(){
        // firebase.firestore().settings({timestampsInSnapshots: true})
        firebase.firestore().collection('diary').get().then((snapshot)=>{
            snapshot.docs.forEach(doc=>{
             
                    if (doc.data.user_id==this.app.user.uid) {
                      this.datas.push(doc.data())  
                    }
                
            })
        })
    },
    data(){
        return{
            datas:[],
             diary: {
                title:'',
                body:'',
                date:'',
                user_id:'',
                updated:""
            },
            editbar:false

        }
    },
    methods:{
        edit: function(){
            // firebase.firestore().collection('diary').doc(id).edit(this,diary);
        },
        deletepost: function(id){
            // firebase.firestore().collection('diary').doc(id).delete();
        },
        popedit: function(id){
            this.datas.forEach(data=>{
                if (data.id==id) {
                    this.diary.title=data.title;
                    this.diary.body=data.body;
                    this.diary.date=data.date;
                    this.diary.updated=new Date().toLocaleString();
                    this.diary.user_id=data.user_id;
                }
            });
            this.editbar=true
        },
        close: function(){
            this.editbar=false
        },
    }
    
}
</script>
<style scoped>
    /* .wrap{
        width: 80%;
        margin: auto;
        position: relative;
    } */
    .wrap .dd{
       width: 70%;
       overflow:scroll; 
       overflow-x: hidden;
       scroll-margin: 5px;
       margin: auto;
       margin-top: 20px;
       height: 530px;
    }
    .wrap .edit{
        width: 70%;
        margin: auto;
       margin-top: 20px;
       border-radius: 20px;
       background-color: rgb(248, 246, 241);
        position: relative;
       position: absolute;
      
       top: 50px;
       right:135px;
    }
    ul{
        list-style: none;
    }
    li{
        width: 99%;
        /* height: 100px; */
        margin: 6px;
        padding: 5px;
        border-radius: 6px;
        background-color:azure;
        color: black;
        text-align: justify;
        
    }
    li h3{
        margin-bottom: 0px;
        border-bottom: solid;
    }
    li p{
        width: 90%;
        margin: auto;
        margin-top: 4px;
        -ms-text-kashida-space: 6px;
        margin-bottom: 10px;
    }
    button , img{
        width: 20px;
        height: 20px;

    }
    .edit div{
        margin: auto;
        margin-top: 10px;
        width: 80%;
    }
    .edit div input{
        margin-top: 30px;
        width: 100%;
        height: 30px;
        border-radius: 3px;
        background-color: burlywood;
    }
    .edit div textarea{
         width: 100%;
         margin-top: 10px;
        height: 230px;
        border-radius: 8px; 
        background-color: burlywood; 
    }
    .edit button{
        right:0px ;
        top:0px;
        border-radius: 100%;
        border: 0px;
        position:absolute;
    }
    .edit button img{
        border-radius: 100%
    }
    .edit div button{
        position:initial;
        margin-bottom: 20px;
        border-radius: 10%;
    }
     

</style>
