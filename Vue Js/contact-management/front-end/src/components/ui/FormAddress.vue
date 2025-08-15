<script setup>
const { handleSubmit, address, type, id } = defineProps([
  "handleSubmit",
  "address",
  "type",
  "id",
]);
</script>

<template>
  <form @submit.prevent="handleSubmit">
    <div class="mb-5">
      <label for="street" class="block text-gray-300 text-sm font-medium mb-2"
        >Street</label
      >
      <div class="relative">
        <div
          class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none"
        >
          <i class="fas fa-road text-gray-500"></i>
        </div>
        <input
          type="text"
          id="street"
          name="street"
          class="w-full pl-10 pr-3 py-3 bg-gray-700 bg-opacity-50 border border-gray-600 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200"
          placeholder="Enter street address"
          value="123 Main St"
          v-model="address.street"
          required
        />
      </div>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 gap-5 mb-5">
      <div>
        <label for="city" class="block text-gray-300 text-sm font-medium mb-2"
          >City</label
        >
        <div class="relative">
          <div
            class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none"
          >
            <i class="fas fa-city text-gray-500"></i>
          </div>
          <input
            type="text"
            id="city"
            name="city"
            class="w-full pl-10 pr-3 py-3 bg-gray-700 bg-opacity-50 border border-gray-600 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200"
            placeholder="Enter city"
            value="New York"
            v-model="address.city"
            required
          />
        </div>
      </div>
      <div>
        <label
          for="province"
          class="block text-gray-300 text-sm font-medium mb-2"
          >Province/State</label
        >
        <div class="relative">
          <div
            class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none"
          >
            <i class="fas fa-map text-gray-500"></i>
          </div>
          <input
            type="text"
            id="province"
            name="province"
            class="w-full pl-10 pr-3 py-3 bg-gray-700 bg-opacity-50 border border-gray-600 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200"
            placeholder="Enter province or state"
            value="NY"
            v-model="address.province"
            required
          />
        </div>
      </div>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 gap-5 mb-6">
      <div>
        <label
          for="country"
          class="block text-gray-300 text-sm font-medium mb-2"
          >Country</label
        >
        <div class="relative">
          <div
            class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none"
          >
            <i class="fas fa-flag text-gray-500"></i>
          </div>
          <input
            type="text"
            id="country"
            name="country"
            class="w-full pl-10 pr-3 py-3 bg-gray-700 bg-opacity-50 border border-gray-600 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200"
            placeholder="Enter country"
            value="USA"
            v-model="address.country"
            required
          />
        </div>
      </div>
      <div>
        <label
          for="postal_code"
          class="block text-gray-300 text-sm font-medium mb-2"
          >Postal Code</label
        >
        <div class="relative">
          <div
            class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none"
          >
            <i class="fas fa-mail-bulk text-gray-500"></i>
          </div>
          <input
            type="text"
            id="postal_code"
            name="postal_code"
            class="w-full pl-10 pr-3 py-3 bg-gray-700 bg-opacity-50 border border-gray-600 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200"
            placeholder="Enter postal code"
            value="10001"
            v-model="address.postal_code"
            required
          />
        </div>
      </div>
    </div>

    <div class="flex justify-end space-x-4">
      <RouterLink
        :to="`/dashboard/contact/detail/${id}`"
        class="px-5 py-3 bg-gray-700 text-white rounded-lg hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 focus:ring-offset-gray-800 transition-all duration-200 flex items-center shadow-md"
      >
        <i class="fas fa-times mr-2"></i> Cancel
      </RouterLink>
      <button
        type="submit"
        class="px-5 py-3 bg-gradient text-white rounded-lg hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-800 transition-all duration-200 font-medium shadow-lg transform hover:-translate-y-0.5 flex items-center"
      >
        <i
          :class="[
            type === 'create' ? 'fas fa-plus-circle mr-2' : 'fas fa-save mr-2',
          ]"
        ></i>
        {{ type === "create" ? "Create Contact" : "Save Changes" }}
      </button>
    </div>
  </form>
</template>

<style scoped></style>
