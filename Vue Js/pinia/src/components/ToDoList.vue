<script setup>
import { useToDoList } from "../useToDoList.js";

const todoList = useToDoList();
</script>

<template>
  <h1>ToDolist</h1>
  <router-link :to="{ name: 'add-todolist' }">Add Todo</router-link>

  <table>
    <thead>
      <tr>
        <th>No</th>
        <th>Name</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="todo in todoList.todos" :key="todoList.id">
        <td>{{ todo.id }}</td>
        <td>{{ todo.name }}</td>
        <router-link
          :to="{
            name: 'edit-todolist',
            params: { id: todo.id },
          }"
        >
          <td>Update</td>
        </router-link>
        <button @click="todoList.remove(todo.id)">Delete</button>
      </tr>
    </tbody>
  </table>
</template>

<style scoped>
table {
  width: 100%;
}

td {
  padding: 10px;
}

.router-link-exact-active {
  color: red;
}
</style>
