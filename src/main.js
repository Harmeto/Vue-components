import './assets/main.css'

// material icons 
import 'material-icons/iconfont/material-icons.css';

import { createApp } from 'vue'
import { createPinia } from 'pinia'

// vue navigation app bar
import navBar from './components/NavBar.vue'

import App from './App.vue'
import router from './router'

const app = createApp(App)

// components
app.component('NavBar', navBar)

app.use(createPinia())
app.use(router)

app.mount('#app')
