<template>
  <Navbar/>
  <div class="container mt-4">
    <router-view></router-view>
  </div>
</template>

<script>
import Navbar from "./components/Navbar.vue";
import "./style/common.scss";

export default {
  name: 'App',
  components: {
    Navbar
  }
}
</script>

<style lang="scss">
</style>
