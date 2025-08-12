<script setup>
import { useCounter } from "../store.js";

const counterStore = useCounter();
counterStore.$subscribe((mutation, state) => {
  console.log(mutation, state);
});

counterStore.$onAction((action) => {
  console.log(action);
});

function logDoubled() {
  console.log(counterStore.doubled);
}
</script>

<template>
  <div>
    <h1>Counter: {{ counterStore.counter }}</h1>
    <button @click="counterStore.increment()">Click Me +1</button>
    <button @click="counterStore.doubleIncrement()">Click Me +2</button>
    <button @click="counterStore.reset()">Reset</button>
    <button @click="logDoubled">logDoubled</button>
  </div>
</template>

<style scoped></style>
