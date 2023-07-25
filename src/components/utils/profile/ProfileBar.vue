<script setup>
import { ref } from 'vue'
import { onClickOutside } from '@vueuse/core'

defineProps({
  full_name: {
    type: String,
    required: false,
    default() {
      return 'Carlos Salvo'
    }
  },
  image: {
    type: String,
    required: false,
    default() {
      return 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png'
    }
  }
})

const showDropdown = ref(false)
const element_ref = ref(null)

const toggleDropdown = async () => {
  showDropdown.value = !showDropdown.value
}

onClickOutside(element_ref, () => showDropdown.value = false)

</script>

<template>
  <div class="profile" @click="toggleDropdown" ref="element_ref" >
    <span>{{ full_name }}</span>
    <img :src="image" alt="profile__picture">
    <i class="material-icons dropdown__arrow">arrow_drop_down</i>

    <div v-if="showDropdown" class="dropdown-content">
      <p>Perfil</p>
      <p>Tareas</p>
      <p>Projectos</p>
    </div>
  </div>
</template>


<style lang="scss" scoped>
.profile {
  position: relative;
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
    img {
      display: none;
    }

    margin: 0 0 0 12px;
  }

  &:hover span {
    font-weight: bold;
  }

  .dropdown-content {
    position: absolute;
    top: 40px;
    left: 0px;
    right: 0;
    background-color: white;
    border: 1px solid #ccc;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.15);
    padding: 5px;
    z-index: 99;
    min-width: 120px;
  }
}
</style>