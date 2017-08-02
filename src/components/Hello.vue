<template>
  <div class="hello">
    <md-card v-for="card in cats" :key="card.id" class="card">
      <md-card-media>
        <img :src="card.url" :alt="card.title">
      </md-card-media>
  
      <md-card-content>
        <span class="md-headline">{{card.title}}</span>
      </md-card-content>
    </md-card>
  </div>
</template>

<script>
import Firebase from 'firebase'
import data from '../data.js'
const config = {
  apiKey: "AIzaSyCEq39n_xZW0QtRIX4_Gfbm0fpB21eTjq0",
  authDomain: "pwadojo.firebaseapp.com",
  databaseURL: "https://pwadojo.firebaseio.com",
  projectId: "pwadojo",
  storageBucket: "pwadojo.appspot.com",
  messagingSenderId: "445295830164"
}
var firebaseApp = Firebase.initializeApp(config)
var db = Firebase.database()
export default {
  name: 'hello',
  data() {
    return {
      cards:data.pictures
    }
  },
  firebase:{
  cats : db.ref('pictures')
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.card{
  margin-bottom: 25px;
}
</style>
