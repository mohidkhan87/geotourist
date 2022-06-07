<template>
  <div id="app">
    <Index />
  </div>
</template>

<script>
import Index from './views/create/index.vue'
export default {
  name: 'App',
  components: {
    Index
  }
}

</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
