<script setup>
console.info("hello vue");

const hello = "<i>Hello Vue</i>";

const data = {
  id: "hello",
  class: "hello",
};
const buttonDisabled = true;
</script>

<template>
  <div>
    <h1 v-bind="data">{{ hello }}</h1>
    <h1 :class="data.class" v-html="hello"></h1>
    <button :disabled="buttonDisabled">Click Me</button>
  </div>
</template>

<style scoped>
.hello {
  color: brown;
}
</style>
