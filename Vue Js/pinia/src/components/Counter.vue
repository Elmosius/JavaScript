<script setup>
import {useCounter} from "../store.js";

const counterStore = useCounter()

function handleClick(){
  counterStore.counter++
}
</script>

<template>
  <div>
    <h1>Counter: {{ counterStore.counter }}</h1>
    <button @click="handleClick">Click Me</button>
  </div>
</template>

<style scoped>

</style>