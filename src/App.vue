<script setup>
import { RouterView } from 'vue-router'
</script>

<template>
  <body>
  <header class="header">
    <NavBar />  
  </header>
  
  <RouterView />

  </body>
</template>

<style scoped>
  .carousel{
    margin-top: 7em;
  }
</style>
