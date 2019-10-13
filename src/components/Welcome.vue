<template>
   <div class="chat container">
       <h2 class="center-align">Chat Messages</h2>
       <div class="card">
           <div class="card-content">
               <div class="messages">
                   <ul>
                     <li v-for="mess in message" :key="mess.id">
                      <span class="blue-grey lighten-4">{{mess.name}}:</span> 
                      <span class="brown lighten-3">{{mess.content}}</span> 
                      <span class="red lighten-4 time">{{mess.timestamp}}</span>     
                    </li>  
                   </ul>
               </div>
               <div class="card-action">
                   <NewMessage :name="name"/>
               </div>
           </div>
       </div>
   </div>
</template>

<script>
import db from '@/firebase/init'
import  NewMessage from '@/components/NewMessage'
import moment from 'moment'
export default {
    Name: 'Welcome',
    props:['name'],
    components:{
        NewMessage
    },
    data(){
        return{
        message : []
        }
    },
    created(){
        let ref = db.collection('message').orderBy('timestamp')

        ref.onSnapshot(snapshot => {
            snapshot.docChanges().forEach(change =>{
                if (change.type == 'added') {
                    let doc = change.doc
                    this.message.push({
                        id: doc.id,
                        name: doc.data().name,
                        content:doc.data().content,
                        timestamp:moment(doc.data().timestamp).format('llll')
                    })
                }
            })
        })
    }
}
</script>

<style>

.chat .span{
    margin: 20px;
}
.chat .time{
    display: block;
    font-size: 0.7em;
}

</style>