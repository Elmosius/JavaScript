<script setup>
import MyButton from "./MyButton.vue";

function clickHandler() {
  alert("Button clicked");
}
</script>

<template>
  <!--  fallthrough elements-->
  <MyButton @click="clickHandler" name="Elmo"></MyButton>
</template>

<style scoped></style>
