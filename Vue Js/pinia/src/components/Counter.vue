<script setup>
import {useCounter} from "../store.js";

const counterStore = useCounter()
counterStore.$subscribe((mutation, state) => {
  console.log(mutation, state)
})

function handleClick(){
  counterStore.counter++
}

function reset(){
  counterStore.$patch({
    counter: 0
  })
}
</script>

<template>
  <div>
    <h1>Counter: {{ counterStore.counter }}</h1>
    <button @click="handleClick">Click Me</button>
    <button @click="reset">Reset</button>
  </div>
</template>

<style scoped>

</style>