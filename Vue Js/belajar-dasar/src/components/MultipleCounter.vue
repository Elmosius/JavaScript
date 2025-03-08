<script setup>
import { ref } from "vue";
import Counter from "./Counter.vue";
import CounterStateless from "./CounterStateless.vue";

const counterName = "count";
const counter = ref(0);

function increment(value) {
  counter.value += value;
}
</script>

<template>
  <Counter :name="counterName" initial-count="10" />
  <Counter name="elmo" initial-count="20" />
  <CounterStateless
    :counter="counter"
    name="John"
    :increment="1"
    @click="increment"
  />
  <CounterStateless
    :counter="counter"
    name="Budi"
    :increment="2"
    @click="increment"
  />
</template>

<style scoped></style>
