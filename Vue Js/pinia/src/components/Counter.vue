<script setup>
import {useCounter} from "../store.js";

const counterStore = useCounter()
counterStore.$subscribe((mutation, state) => {
  console.log(mutation, state)
})

counterStore.$onAction((action) => {
  console.log(action)
})
</script>

<template>
  <div>
    <h1>Counter: {{ counterStore.counter }}</h1>
    <button @click="counterStore.increment()">Click Me</button>
    <button @click="counterStore.reset()">Reset</button>
  </div>
</template>

<style scoped>

</style>