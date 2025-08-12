<script setup>
import { ref } from "vue";
import { useToDoList } from "../useToDoList";
import { useRouter } from "vue-router";

const name = ref("");
const todoList = useToDoList();
const router = useRouter();

function handleAddTodo() {
  todoList.add(name.value);
  router.push({
    name: "todolist",
  });
}
</script>

<template>
  <h1>Add Todo</h1>
  <router-link :to="{ name: 'todolist' }">Back to Todo List</router-link>
  <br />

  <input type="text" placeholder="Enter todo name" v-model="name" />
  <button @click="handleAddTodo">Add</button>
</template>

<style scoped></style>
