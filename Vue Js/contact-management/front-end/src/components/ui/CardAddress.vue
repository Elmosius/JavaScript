<script setup>
const { id, addresses, handleDeleteAddress } = defineProps([
  "id",
  "addresses",
  "handleDeleteAddress",
]);
</script>

<template>
  <div
    v-for="(address, i) in addresses"
    :key="address.id"
    class="bg-gray-700 bg-opacity-50 p-5 rounded-lg shadow-md border border-gray-600 card-hover"
  >
    <div class="flex items-center mb-3" v-if="i === 0">
      <div
        class="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center mr-3 shadow-md"
      >
        <i class="fas fa-home text-white"></i>
      </div>
      <h4 class="text-lg font-semibold text-white">Home Address</h4>
    </div>
    <div class="flex items-center mb-3" v-else>
      <div
        class="w-10 h-10 bg-purple-500 rounded-full flex items-center justify-center mr-3 shadow-md"
      >
        <i class="fas fa-building text-white"></i>
      </div>
      <h4 class="text-lg font-semibold text-white">Work Address</h4>
    </div>
    <div class="space-y-3 text-gray-300 ml-2 mb-4">
      <p class="flex items-center">
        <i class="fas fa-road text-gray-500 w-6"></i>
        <span class="font-medium w-24">Street:</span>
        <span>{{ address.street }}</span>
      </p>
      <p class="flex items-center">
        <i class="fas fa-city text-gray-500 w-6"></i>
        <span class="font-medium w-24">City:</span>
        <span>{{ address.city }}</span>
      </p>
      <p class="flex items-center">
        <i class="fas fa-map text-gray-500 w-6"></i>
        <span class="font-medium w-24">Province:</span>
        <span>{{ address.province }}</span>
      </p>
      <p class="flex items-center">
        <i class="fas fa-flag text-gray-500 w-6"></i>
        <span class="font-medium w-24">Country:</span>
        <span>{{ address.country }}</span>
      </p>
      <p class="flex items-center">
        <i class="fas fa-mailbox text-gray-500 w-6"></i>
        <span class="font-medium w-24">Postal Code:</span>
        <span>{{ address.postal_code }}</span>
      </p>
    </div>
    <div class="flex justify-end space-x-3">
      <RouterLink
        :to="`/dashboard/contact/detail/${id}/addresses/edit/${address.id}`"
        class="px-4 py-2 bg-gradient text-white rounded-lg hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-800 transition-all duration-200 font-medium shadow-md flex items-center"
      >
        <i class="fas fa-edit mr-2"></i> Edit
      </RouterLink>
      <button
        @click="handleDeleteAddress(address.id)"
        class="px-4 py-2 bg-gradient-to-r from-red-600 to-red-500 text-white rounded-lg hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 focus:ring-offset-gray-800 transition-all duration-200 font-medium shadow-md flex items-center"
      >
        <i class="fas fa-trash-alt mr-2"></i> Delete
      </button>
    </div>
  </div>
</template>

<style scoped></style>
