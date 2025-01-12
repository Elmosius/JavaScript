<script setup>
import { ref, computed } from "vue";
import CustomButton from "./CustomButton.vue";

const count2 = ref(0);

const testComputed = computed(() => {
  console.info("render");
  return count2.value > 5 ? "Lebih dari 5" : "Kurang dari 5";
});
</script>

<template>
  <div>
    <div>Coba computed properties:</div>
    {{ testComputed }}
    <CustomButton @click="count2++" :nama="`${count2} click me`" />
  </div>
</template>
