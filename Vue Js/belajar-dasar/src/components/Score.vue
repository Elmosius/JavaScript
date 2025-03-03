<script setup>
import { ref } from "vue";

const score = ref(0);
</script>

<template>
  <div>
    <h2>Score App</h2>
    <!--    v-show itu displaynya none-->
    <div v-show="score">
      <p>Your score: {{ score }}</p>
    </div>
    <div v-if="score > 90">
      <p>Yayy your score: {{ score }}</p>
    </div>
    <div v-else-if="score > 60">
      <p>Good your score: {{ score }}</p>
    </div>
    <div v-else>
      <p>Nooo your score: {{ score }}</p>
    </div>
  </div>
</template>

<style scoped></style>
