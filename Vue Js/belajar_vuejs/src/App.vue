<script setup>
import { ref } from 'vue'
// import HelloWorld from './components/HelloWorld.vue'

const helloWorld = ref('Hello World!')
const counter = ref(0)
const button = ref('btn')

function increment() {
  counter.value++
}
</script>

<template>
  <h1>
    {{ helloWorld }}
  </h1>

  <!-- import -->
  <!-- <HelloWorld /> -->

  <button :class="button" @click="increment()">
    {{ counter }}
  </button>
</template>

<style scoped>
.btn {
  display: flex;
  background-color: green;
  padding: 1rem;
  text-align: center;
  color: aliceblue;
} 
</style>
