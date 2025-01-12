<script setup>
import { ref } from "vue";

const text = ref("");
const text2 = ref("");

function handleChangeText(e) {
  text.value = e.target.value;
}
</script>

<template>
  <div>
    <h5>Event Handling | v-model form input binding:</h5>
    <input @change="(e) => handleChangeText(e)" type="text" :value="text" />

    <input type="text" v-model="text2" />

    <h6>hasil:</h6>
    <span>{{ text }}</span> |
    <span> {{ text2 }}</span>
  </div>
</template>
