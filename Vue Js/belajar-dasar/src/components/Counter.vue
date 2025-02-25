<script setup>
  import {ref} from "vue";

  let count = ref({
    value: 0,
    name : 'Elmo'
  });

  function increment() {
    count.value = {
      ...count.value,
      value: count.value.value + 1
    }
  }
</script>

<template>
  <h1 >
    {{count.value}}
  </h1>
  <button v-on:click="increment">
    Click Me!

  </button>
</template>

<style scoped>

</style>