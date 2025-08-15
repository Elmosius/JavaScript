<script setup>
const { to, title, icon, title2 } = defineProps({
  to: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  icon: {
    type: String,
    optional: true,
  },
  title2: {
    type: String,
    required: true,
  },
});
</script>

<template>
  <div class="flex items-center mb-6">
    <RouterLink
      :to="`/${to}`"
      class="text-blue-400 hover:text-blue-300 mr-4 flex items-center transition-colors duration-200"
    >
      <i class="fas fa-arrow-left mr-2"></i> {{ title }}
    </RouterLink>
    <h1 class="text-2xl font-bold text-white flex items-center">
      <i
        :class="[
          icon ? `fas fa-${icon} text-blue-400 mr-3` : 'text-blue-400 mr-3',
        ]"
      ></i>
      {{ title2 }}
    </h1>
  </div>
</template>

<style scoped></style>
