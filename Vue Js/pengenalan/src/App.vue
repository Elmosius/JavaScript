<script setup>
import { ref, onMounted } from 'vue' // buat nyimpen data
import FormToDo from './components/layouts/FormToDo.vue'
import ToDoList from './components/layouts/ToDoList.vue'

const todos = ref([]) //  state

onMounted(() => {
  const data = JSON.parse(localStorage.getItem('todos'))
  if (data) todos.value = data
})

function add(data) {
  console.info(data.todo)
  todos.value.push({
    id: crypto.randomUUID(),
    todo: data.todo
  })
  save()
  data.clear()
}

function remove(id) {
  todos.value = todos.value.filter((e) => e.id !== id)
  save()
}

function save() {
  localStorage.setItem('todos', JSON.stringify(todos.value))
}
</script>

<template>
  <section class="wrapper">
    <FormToDo @addTodo="add" />
    <ToDoList :todos="todos" @remove="remove" />
  </section>
</template>

<style scoped>
.wrapper {
  display: flex;
  flex-direction: column;
  height: 100vh;
  justify-content: center;
  align-items: center;
}
</style>
