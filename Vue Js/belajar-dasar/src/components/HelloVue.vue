<script setup>
console.info("hello vue");

const hello = "<i>Hello Vue</i>";
</script>

<template>
  <h3>Directive v-html:</h3>
  <h1 class="hello">{{ hello }}</h1>
  <h1 class="hello" v-html="hello"></h1>
</template>

<style scoped>
.hello {
  color: brown;
}
</style>
