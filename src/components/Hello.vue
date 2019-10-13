<template>
  <div class="hello container">
  <div class="card blue-grey darken-1">
        <div class="card-content white-text center-align">
          <span class="card-title">Welcome</span>
          <form @submit.prevent="enterChat">
          <div class="input-field">
          <input id="text" name="name" v-model="name">
          <label for="Name">Enter your Name</label>
          <div class="input-field">
          <input id="password">
          <label for="Password">Enter your Password</label>
          <p class="red-text">{{this.feedback}}</p>
          <button class="btn waves-effect waves-light" type="submit" name="action">Enter Chat
          <i class="material-icons right">send</i>
          </button>

          </div>
          </div>
          </form>
        </div>
        </div>
  </div>
</template>

<script>
export default {
  name: 'Hello',
  data () {
    return {
      name:null,
      feedback : null
    }
  },
  methods: {
    enterChat(){
      if (this.name) {
        this.$router.push({ name: 'Welcome', params: {name : this.name} })
      } else {
        this.feedback = "please Enter a Name"
      }
     
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.hello{
  max-width: 600px;
}
.hello .card{
  margin-top: 100px;
  border-radius: 30px;
}
.hello .card-title{
  text-align: center;
}
.hello button{
  margin : 30px auto;
}
.input-field{
  color: white;
}
</style>
