<template>
  <Carousel :autoplay="6000" :wrap-around="true">
    <Slide v-for="slide in images" :key="slide">
      <img class="carousel__item" :src="slide.image">
    </Slide>

    <template #addons>
      <Pagination />
    </template>
  </Carousel>
</template>

<script >
import { defineComponent } from 'vue'
import { Carousel, Pagination, Slide } from 'vue3-carousel'

import 'vue3-carousel/dist/carousel.css'


export default defineComponent({
  name: 'AutoplayCarousel',
  components: {
    Carousel,
    Slide,
    Pagination,
  },
  props: {
    images: {
      type: Array,
      requeired: false,
      default() {
        return [
          {
            title: 'Rana',
            route: '/about',
            image: 'https://www.nationalgeographic.com.es/medio/2022/12/12/rana-1_66a9a5c8_221212161515_1280x720.jpg'
          }
        ]
      }

    }
  }
})
</script>