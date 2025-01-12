<script setup>
import { ref } from "vue";
const isActive = ref(false);
</script>

<template>
  <div>
    <h5>Coba Class Style Binding</h5>
    <button @click="isActive = !isActive" :class="{ active: isActive }">Status: {{ isActive }}</button>

    <p></p>

    <button @click="isActive = !isActive" :style="{ backgroundColor: isActive ? 'red' : 'blue' }">Status: {{ isActive }}</button>
  </div>
</template>

<style scoped>
.active {
  background-color: red;
}

.button {
  background-color: blue;
  color: white;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1.2rem;
  margin-top: 10px;
  display: block;
  width: 100%;
  text-align: center;
}
</style>
