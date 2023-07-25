<script setup lang="ts">
defineProps({
  full_name: {
    type: String, 
    required: false,
    default(){
      return 'Carlos Salvo'
    }
  },
  image: {
    type: String, 
    required: false,
    default(){
      return 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png'
    }
  }
})
</script>

<template>
  <div class="profile">
    <span>{{ full_name }}</span>
    <img :src="image" alt="profile__picture">
    <i class="material-icons dropdown__arrow">arrow_drop_down</i>
  </div>
</template>


<style lang="scss" scoped>
.profile {
  display: flex;
  flex-direction: row;
  align-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  margin: 2.5em;
  transition: font-weight 0.4s ease;

  img {
    margin-left: 5px;
    border-radius: 100%;
    width: 2.5em;
  }

  @media(max-width: 600px) {
    img{
      display: none;
    }
    
    margin: 0 0 0 12px;
  }

  &:hover span {
    font-weight: bold;
  }
}
</style>