<script setup>
import {ref} from 'vue'

const searchValue = ref('')

const props = defineProps(['placeholder'])

const onSearch = () => {
  //handle the onsearch event
  console.log(searchValue.value)
}

</script>

<template>
  <div class="input__container">
    <input type="search" name="search__input" id="search__input" class="material__search" :placeholder="props.placeholder" v-model="searchValue">
    <button class="search__icon" @click="onSearch">
      <i class="material-icons">search</i>
    </button>
  </div>
</template>

<style lang="scss" scoped>
.input__container {
  display: flex;
  align-items: center;
  background-color: #fff; 
  border-radius: 4px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1); 
}

.material__search {
  border: none;
  outline: none;
  flex: 1;
  padding: 8px;
  font-size: 16px;
}

.search__icon {
  background-color: #007bff; 
  border: none;
  outline: none;
  color: #fff; 
  padding: 6px;
  border-radius: 4px; 
  cursor: pointer;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
}
</style>