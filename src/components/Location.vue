<template>
  <div class="border-bottom pb-2 d-flex justify-content-between align-items-center">
    <h4>{{title}}</h4>
    <div>{{location}}</div>
  </div>
</template>

<script>
export default {
    name : "Location",
    props:{
        title : String,
        location : String
    }
}
</script>

<style>

</style>