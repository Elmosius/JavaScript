<script setup>
import MyButton from "./MyButton.vue";
import Container from "./Container.vue";

function clickHandler() {
  alert("Button clicked");
}
</script>

<template>
  <!-- coba slot-->
  <Container>
    <template #header>
      <h1>My Button App</h1>
    </template>

    <!-- nama attr bisa diganti apapun -->
    <template #default="attr">
      <!-- Coba fallthrough attr -->
      <MyButton @click="clickHandler" :name="attr.counter" />
    </template>

    <template #footer>
      <p>Copyright 2025 @Elmo</p>
    </template>
  </Container>
</template>

<style scoped></style>
