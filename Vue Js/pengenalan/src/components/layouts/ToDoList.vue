<script setup>
import ButtonDelete from '../items/ButtonDelete.vue'

defineProps({
  todos: {
    type: Array,
    required: true
  }
})
</script>

<template>
  <div>
    <h1>Todo List</h1>
    <div class="grid-container" v-if="todos.length > 0">
      <div class="card" v-for="item of todos" :key="item.id">
        <div class="card-content">
          <h2>{{ item.todo }}</h2>
          <ButtonDelete @on-click="$emit('remove', item.id)">Delete</ButtonDelete>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.grid-container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 8px;
}

.card {
  background-color: #f1f1f1;
  padding: 16px 8px;
  border-radius: 8px;
}

.card-content {
  display: flex;
  justify-content: space-between;
}

h1 {
  margin-bottom: 1rem;
}

h2 {
  font-size: 20px;
}
</style>
