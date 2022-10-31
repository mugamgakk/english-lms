<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
  <router-link to="/" class="navbar-brand">Home</router-link>
  <button class="navbar-toggler" type="button">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item" :class="$route.path === '/' ? 'active' : ''">
        <router-link to="/" class="nav-link">Home</router-link>
      </li>
      <li class="nav-item" :class="$route.path === '/reservation' ? 'active' : ''">
        <router-link to="/reservation" class="nav-link">예약 및 평가</router-link>
      </li>
    </ul>
  </div>
</nav>

</template>

<script>
export default {
  name : "Navbar",
}
</script>

<style>

</style>