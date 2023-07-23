<script setup>
import { RouterView } from 'vue-router'
import Carousel from './components/CarrouselT1.vue'
</script>

<template>
  <body>
  <header class="header">
    <NavBar />  
  </header>

  <Carousel />
  
  <RouterView />

  </body>

  
</template>

<style scoped>
  .carousel{
    margin-top: 7em;
  }
</style>
