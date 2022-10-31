<template>
  <Navbar/>
  <div class="container mt-4">
    <router-view></router-view>
  </div>
</template>

<script>
import Navbar from "./components/Navbar.vue";

export default {
  name: 'App',
  components: {
    Navbar
  }
}
</script>

<style lang="scss">
  // h1{
  //   color: red;
  // }
</style>
