<script setup>
import {nextTick, ref} from "vue";

  let count = ref({
    value: 0,
    name : 'Elmo'
  });

  async function increment() {
    count.value = {
      ...count.value,
      value: count.value.value + 1
    }

    count.value.value++
    await nextTick();
    count.value.value++
    await nextTick();
    count.value.value++
    await nextTick();

    console.info('increment count after nextTick', count.value);
  }
</script>

<template>
  <h1 > {{count.name}}
    {{count.value}}
  </h1>
  <button v-on:click="increment">
    Click Me!

  </button>
</template>

<style scoped>

</style>