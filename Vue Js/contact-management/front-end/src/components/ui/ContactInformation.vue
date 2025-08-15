<script setup>
const { contact } = defineProps(["contact"]);
</script>

<template>
  <div class="mb-6 pb-6 border-b border-gray-700">
    <div class="flex items-center">
      <div
        class="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center mr-4 shadow-md"
      >
        <i class="fas fa-user text-white"></i>
      </div>
      <div>
        <h2 class="text-xl font-semibold text-white">
          {{ contact.first_name }} {{ contact.last_name }}
        </h2>
        <p class="text-gray-300 text-sm">
          {{ contact.email }} • {{ contact.phone }}
        </p>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
