<script setup>
import { ref } from "vue";
import { useToDoList } from "../useToDoList";
import { useRouter } from "vue-router";

const { id } = defineProps(["id"]);
const todoList = useToDoList();
const name = ref(todoList.get(Number(id)).name);
const router = useRouter();

function handleUpdateTodo() {
  todoList.update(Number(id), name.value);
  router.push({
    name: "todolist",
  });
}
</script>

<template>
  <h1>Update Todo</h1>
  <router-link :to="{ name: 'todolist' }">Back to Todo List</router-link>
  <br />

  <input type="text" placeholder="enter todo name" v-model="name" />
  <button @click="handleUpdateTodo">Add</button>
</template>

<style scoped></style>
