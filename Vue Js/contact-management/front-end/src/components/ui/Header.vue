<script setup>
const { title, icon } = defineProps({
  title: {
    type: String,
    required: true,
  },
  icon: {
    type: String,
    optional: true,
  },
});
</script>

<template>
  <div class="flex items-center mb-6">
    <i
      :class="[
        icon
          ? `fas fa-${icon} text-blue-400 text-2xl mr-3`
          : 'text-blue-400 text-2xl mr-3',
      ]"
    ></i>
    <h1 class="text-2xl font-bold text-white">{{ title }}</h1>
  </div>
</template>

<style scoped></style>
