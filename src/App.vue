<template>
  <div id="app">
    <header>
      <span>Chat PWA</span>
    </header>
    <main>
      <hello></hello>
    </main>
  </div>
</template>

<script>
import Hello from './components/Hello'

export default {
  name: 'app',
  components: {
    Hello
  }
}
</script>

<style>


main {
  text-align: center;
  margin-left: 15px;
  margin-right: 15px;
  margin-top: 10px;

}

header {
  margin: 0;
  height: 56px;
  padding: 0 16px 0 24px;
  background-color: #35495E;
  color: #ffffff;
}

header span {
  display: block;
  position: relative;
  font-size: 20px;
  line-height: 1;
  letter-spacing: .02em;
  font-weight: 400;
  box-sizing: border-box;
  padding-top: 16px;
}
</style>
