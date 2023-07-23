import './assets/main.css'

// material icons 
import 'material-icons/iconfont/material-icons.css';

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

const app = createApp(App)

// register components 
import navBar from '@/components/navbar/NavBar.vue'
import carousel from '@/components/carousel/CarrouselT1.vue'
import searchInput from '@/components/utils/inputs/SearchInput.vue'
// components
app.component('NavBar', navBar)
app.component('CarouselT1', carousel)
app.component('SearchInput', searchInput)

// mount app 
app.use(createPinia()).use(router).mount('#app')

