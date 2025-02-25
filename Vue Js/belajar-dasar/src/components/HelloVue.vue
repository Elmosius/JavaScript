<script setup>
console.info("hello vue");

const hello = "<i>Hello Vue</i>";

const data = {
  id: "hello",
  class: "hello",
};
const buttonDisabled = false;
</script>

<template>
  <div>
    <h1 v-bind="data">{{ hello.toUpperCase() }}</h1>
    <h2>{{ 100 * 200 }}</h2>
    <h1 :class="data.class" v-html="hello.toLowerCase()"></h1>
    <button :disabled="buttonDisabled">Click Me</button>
  </div>
</template>

<style scoped>
.hello {
  color: brown;
}
</style>
