<script setup>
import { ref } from 'vue'

const updateData = ref(false)

const update = () => {
  updateData.value = !updateData.value
} 

defineProps({
  user: {
    type: Object,
    required: true
  }
})
</script>

<template>
  <div class="profile__grid">
    <div class="profile__actions">
      <button class="actions" @click="update">
        Actualizar Datos
      </button>
      <button class="actions" @click="update">
        Ver Tareas
      </button>
    </div>
    <div v-if="updateData">
      <div  v-for="(value, key) in user" :key="key" class="user__info">
        <p class="info__label">{{ key }}</p>
        <p class="info__value">{{ value }}</p>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.profile__grid {
  display: grid;
  grid-template-areas:
    "actions actions"
    "info info"; /* Definimos el área para los elementos */
  grid-gap: 16px; /* Espacio entre los elementos */
  border-radius: 8px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
  padding: 16px;
}

.profile__actions {
  grid-area: actions;
  display: table-row-group;
}

.actions {
  background-color: #2196f3;
  color: white;
  border: none;
  border-radius: 4px;
  padding: 8px 16px;
  cursor: pointer;
  margin-inline: 12px;
}

.user__info {
  grid-area: info; /* Asignamos el área con nombre 'info' */
  margin-top: 16px;
  display: grid;
  grid-template-columns: auto 1fr; /* Etiqueta - Valor */
  grid-gap: 8px; /* Espacio entre las etiquetas y valores */
}

.info__label {
  font-weight: bold;
}

.info__value {
  /* Estilo del valor (ajústalo según tus preferencias) */
  font-size: 16px;
  color: #333;
}
</style>