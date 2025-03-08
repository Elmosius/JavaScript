<script setup>
import { ref } from "vue";
import Counter from "./Counter.vue";
import CounterStateless from "./CounterStateless.vue";

const counterName = "count";
const counter = ref(0);
</script>

<template>
  <Counter :name="counterName" initial-count="10" />
  <Counter name="elmo" initial-count="20" />
  <CounterStateless :counter="counter" name="John" />
  <CounterStateless :counter="counter" name="Budi" />
  <button @click="counter++">Increment Counter</button>
</template>

<style scoped></style>
