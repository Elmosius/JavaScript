<script setup>
import { nextTick, ref } from "vue";

const { name, initialCount } = defineProps(["name", "initialCount"]);

let count = ref({
  value: Number(initialCount),
  name: name,
});

async function increment() {
  count.value = {
    ...count.value,
    value: count.value.value + 1,
  };

  count.value.value++;
  await nextTick();
  count.value.value++;
  await nextTick();
  count.value.value++;
  await nextTick();

  console.info("increment count after nextTick", count.value);
}
</script>

<template>
  <h1>
    {{ name }}
    {{ count.value }}
  </h1>
  <button v-on:click="increment">Click Me!</button>
</template>

<style scoped></style>
