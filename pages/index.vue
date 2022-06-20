<template>
  <div class="home">
  <div class="title-container">
    <h2>Orange Music</h2>
    <p>Input your email address to get updates when we launch!</p>
    <input 
      type="text" 
      v-model="emailAddress"
      
    />
    <button type="button"  @click="handleEmailAddress">Add email address</button>
  </div>
</div>
</template>

<script>
  import {sdk} from '../init';
  export default {
    name: 'IndexPage',
    data(){
      emailAddress: ''
    },
    methods: {
      handleEmailAddress: async function(){
        try {
          await sdk.database.createDocument('62b04c6107bba18a7dc5', 'unique()',{
            "emailAddress": this.emailAddress
          })
          this.emailAddress= '',
          alert("Email saved successfully!")
        } catch (error) {
          console.log(error)
          
        }

      }
    }
  }
</script>

<style>
  body{
    margin: 0;
    padding: 0;
  }
  .home{
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    background-image: url('https://res.cloudinary.com/amarachi-2812/image/upload/v1649445450/music-banner_zveuix.jpg');
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
  }
  .title-container h2{
    color: #fff;
    font-size: 32px;

  }
  .title-container p{
    color: rgba(255, 255, 255, 0.815);
    font-size: 18px;
      
  }
  .title-container input{
    outline: none;
    height: 30px;
    width: 250px;
      
  }
  .title-container button{
    height: 35px;
    background-color: #111;
    color: #fff;
    border: 1px solid #111;
    cursor: pointer;
      
  }
</style>
