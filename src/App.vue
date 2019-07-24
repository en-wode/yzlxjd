<template>
  <div id="app">
      <vHead></vHead>
          <router-view/>
      <vFooter></vFooter>
  </div>
</template>

<script>
import vHead from './components/header.vue';
import vFooter from './components/footer.vue';
export default {
    name: 'App',
    components: {
        vHead, vFooter
    }
}
</script>

<style>
#app {
  /*font-family: 'Avenir', Helvetica, Arial, sans-serif;*/
    font-family: 'Microsoft YaHei',SimHei,SimYou,SimSun,Arial;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
}
</style>
