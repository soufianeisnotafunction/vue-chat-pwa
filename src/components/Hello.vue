<template>
  <div class="hello">
    <md-card>
      <md-card-media>
        <img src="assets/card-image-2.jpg" alt="People">
      </md-card-media>
  
      <md-card-content>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio itaque ea nostrum.
      </md-card-content>
    </md-card>
  </div>
</template>

<script>
export default {
  name: 'hello',
  data() {
    return {
      data: 'Welcome to Your Vue.js PWA'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
h1,
h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #35495E;
}
</style>
