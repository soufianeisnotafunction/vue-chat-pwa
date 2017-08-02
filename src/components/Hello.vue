<template>
  <div class="hello">
    <md-card v-for="card in cards" :key="card.id" class="card">
      <md-card-media>
        <img :src="card.url" :alt="card.info">
      </md-card-media>
  
      <md-card-content>
        <span class="md-headline">{{card.title}}</span>
      </md-card-content>
    </md-card>
  </div>
</template>

<script>
import data from '../data.js'
export default {
  name: 'hello',
  data() {
    return {
      cards:data.pictures
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.card{
  margin-bottom: 25px;
}
</style>
