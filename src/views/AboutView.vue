<script setup>
import { ref, computed } from 'vue'
import { useRoute } from 'vue-router'
import ProfileBar from '../components/utils/profile/ProfileBar.vue';
import Profile from '@/components/utils/profile/ProfileComponent.vue'
// get routes
const currentRoute = useRoute()

// routes where not showing divs 
const routesToExclude = ['/profile']

const showDivs = computed(() => !routesToExclude.some(route => currentRoute.path.includes(route)))

// refs
const isMenuOpen = ref(false)
const rotation = ref(0)

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
  rotation.value += 90
}

const user = {
  name: 'carlos',
  last_name: 'salvo',
  profile_image: 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png',
  phone_number: '+56949812078',
  mail: 'bad.thg@gmail.com'
}
</script>

<template>
  <div class="parent">
    <div class="div1">
      <nav>
        <div class="title" @click="toggleMenu">
          <span>Nav Section</span>
          <i class="material-icons dropdown__arrow" :style="{ transform: `rotate(${rotation}deg)` }" >menu</i>
        </div>
        <div class="right__section">
          <SearchInput placeholder="Search..." />
          <ProfileBar />
        </div>
      </nav>
    </div>
    <div class="div2" :class="{ 'show-menu': isMenuOpen }">
      <nav>
        Side Nav
      </nav>
    </div>
    <div v-if="showDivs" class="div6">
      <div class="div3">div3 </div>
      <div class="div4">div4 </div>
      <div class="div5">div5 </div>
    </div>
    <Profile :user="user" v-else class="div6" />
  </div>
</template>

<style lang="scss" scoped>
.parent {
display: grid;
grid-template-columns: repeat(4, 1fr);
grid-template-rows: repeat(5, 1fr);
grid-column-gap: 0px;
grid-row-gap: 0px;
height: 100%;
}

.div1 { 
  z-index: 99;
  grid-area: 1 / 1 / 2 / 5; 
  nav{
    width: 100%;
    height: 5em;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid #DBDBDB;
    
    .title{
      margin: 2em;
      display: flex;
      flex-direction: row;
      align-items: center;

      span{
        transition: font-weight 0.4s ease-in;
      }
      
      .dropdown__arrow{
        cursor: pointer;
        z-index: 99;
        transition: transform 0.3s ease;
      }

      &:hover *{
        font-weight: bold;
      }

    }
    .right__section{
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: space-between;
      width: 80%;

        input{
          border-radius: 5px;
          border-color: gray;
        }
        
    }
    
  }
}
.div2 { 
  grid-area: 1 / 1 / 6 / 2; 
  width: 80%;
  opacity: 0;
}
.div3 { grid-area: 1 / 1 / 6 / 2; }
.div4 { grid-area: 1 / 2 / 6 / 3; }
.div5 { grid-area: 1 / 3 / 6 / 4; }

.div6 { display:grid; grid-area: 2 / 2 / 6 / 5; position: relative; }

.show-menu {
  z-index: 1;
  opacity: 1;
  position: relative;
  pointer-events: initial;
  top: 5em;
}
</style>
