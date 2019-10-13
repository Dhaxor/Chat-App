<template>
    <div class="NewMessage">
      <form @submit.prevent="addMessage">
          <label for="Addmessage">Message (enter to add): </label>
          <input type="text" name="new-messsage" v-model="newMessage">
          <p class="red-text">{{feedback}}</p>
      </form>
    </div>
</template>

<script>

import db from '@/firebase/init'
export default {
    Name:'NewMessage',
    props:['name'],
    data(){
       return{
           newMessage: null,
            feedback: null
             
       }
    },
      methods:{
          addMessage(){
              if (this.newMessage) {
                  db.collection('message').add({
                      content: this.newMessage,
                      name: this.name,
                      timestamp: Date.now()
                  }).catch(err=> {
                       console.log(err)
                  })
                  this.newMessage = null
                  this.feedback = null
              } else {
                  this.feedback = "Please enter a message"
              }
          }
      }
}
</script>