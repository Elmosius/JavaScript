<script setup>
import { ref } from "vue";
import CustomButton from "./CustomButton.vue";

const { count } = defineProps(["count"]);
const isTrue = ref(true);

function hide() {
  isTrue.value = !isTrue.value;
}
</script>
<template>
  <div>
    <h5>Conditional rendering:</h5>
    <h2 v-if="isTrue">Hei! {{ count }}</h2>
    <h2 v-else>Yow {{ count }}</h2>
    <h2 v-show="isTrue">GG! {{ count }}</h2>
    <CustomButton @click="hide()" :nama="`Hide`" />
  </div>
</template>
