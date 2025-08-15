<script setup>
import { useLocalStorage } from "@vueuse/core";
import { onBeforeMount, reactive, ref } from "vue";
import { contactDetail } from "../../lib/api/ContactApi.js";
import { alertConfirm, alertError, alertSuccess } from "../../lib/alert.js";
import { addressDelete, addressList } from "../../lib/api/AddressApi.js";
import SubHeader from "../ui/SubHeader.vue";
import CardAddress from "../ui/CardAddress.vue";

const { id } = defineProps(["id"]);
const token = useLocalStorage("token", null);
const contact = reactive({
  first_name: "",
  last_name: "",
  email: "",
  phone: "",
});

const addresses = ref([]);

async function fetchAddress() {
  const res = await addressList(token.value, id);
  const data = await res.json();

  if (res.status === 200) {
    addresses.value = data.data;
  } else {
    await alertError("Address not found");
  }
}

async function fetchContact() {
  const res = await contactDetail(token.value, id);
  const data = await res.json();

  if (res.status === 200) {
    contact.first_name = data.data.first_name;
    contact.last_name = data.data.last_name;
    contact.email = data.data.email;
    contact.phone = data.data.phone;
  } else {
    await alertError("Contact not found");
  }
}

async function handleDeleteAddress(idAddress) {
  if (!(await alertConfirm("Are you sure you want to delete this address?"))) {
    return;
  }
  const res = await addressDelete(token.value, id, idAddress);

  if (res.status === 200) {
    await alertSuccess("Address deleted successfully");
    await fetchAddress();
  } else {
    await alertError("Address delete failed");
  }
}

onBeforeMount(async () => {
  await fetchContact();
  await fetchAddress();
});
</script>

<template>
  <SubHeader
    title="Back to Contacts"
    icon="id-card"
    title2="Contact Details"
    to="dashboard"
  />

  <div
    class="bg-gray-800 bg-opacity-80 rounded-xl shadow-custom border border-gray-700 overflow-hidden max-w-2xl mx-auto animate-fade-in"
  >
    <div class="p-8">
      <!-- Contact Header -->
      <div class="mb-8 text-center">
        <div
          class="w-20 h-20 bg-gradient rounded-full mx-auto flex items-center justify-center mb-4 shadow-lg"
        >
          <i class="fas fa-user text-3xl text-white"></i>
        </div>
        <h2 class="text-2xl font-bold text-white mb-2">
          {{ contact.first_name }} {{ contact.last_name }}
        </h2>
        <div class="w-24 h-1 bg-gradient mx-auto rounded-full"></div>
      </div>

      <!-- Contact Information -->
      <div class="space-y-5 mb-8">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div
            class="bg-gray-700 bg-opacity-50 p-5 rounded-lg shadow-md border border-gray-600 transition-all duration-200 hover:bg-opacity-70"
          >
            <div class="flex items-center mb-2">
              <i class="fas fa-user-tag text-blue-400 mr-2"></i>
              <h3 class="text-gray-300 text-sm font-medium">First Name</h3>
            </div>
            <p class="text-white text-lg ml-6">{{ contact.first_name }}</p>
          </div>
          <div
            class="bg-gray-700 bg-opacity-50 p-5 rounded-lg shadow-md border border-gray-600 transition-all duration-200 hover:bg-opacity-70"
          >
            <div class="flex items-center mb-2">
              <i class="fas fa-user-tag text-blue-400 mr-2"></i>
              <h3 class="text-gray-300 text-sm font-medium">Last Name</h3>
            </div>
            <p class="text-white text-lg ml-6">{{ contact.last_name }}</p>
          </div>
        </div>

        <div
          class="bg-gray-700 bg-opacity-50 p-5 rounded-lg shadow-md border border-gray-600 transition-all duration-200 hover:bg-opacity-70"
        >
          <div class="flex items-center mb-2">
            <i class="fas fa-envelope text-blue-400 mr-2"></i>
            <h3 class="text-gray-300 text-sm font-medium">Email</h3>
          </div>
          <p class="text-white text-lg ml-6">{{ contact.email }}</p>
        </div>

        <div
          class="bg-gray-700 bg-opacity-50 p-5 rounded-lg shadow-md border border-gray-600 transition-all duration-200 hover:bg-opacity-70"
        >
          <div class="flex items-center mb-2">
            <i class="fas fa-phone text-blue-400 mr-2"></i>
            <h3 class="text-gray-300 text-sm font-medium">Phone</h3>
          </div>
          <p class="text-white text-lg ml-6">{{ contact.phone }}</p>
        </div>
      </div>

      <!-- Addresses Section -->
      <div class="mb-8">
        <div class="flex items-center mb-5">
          <i class="fas fa-map-marker-alt text-blue-400 mr-3"></i>
          <h3 class="text-xl font-semibold text-white">Addresses</h3>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-5">
          <!-- Add Address Card -->
          <div
            class="bg-gray-700 bg-opacity-50 p-5 rounded-lg border-2 border-dashed border-gray-600 shadow-md card-hover"
          >
            <RouterLink
              :to="`/dashboard/contact/detail/${id}/addresses/create`"
              class="block h-full"
            >
              <div
                class="flex flex-col items-center justify-center h-full text-center py-4"
              >
                <div
                  class="w-16 h-16 bg-gradient rounded-full flex items-center justify-center mb-4 shadow-lg transform transition-transform duration-300 hover:scale-110"
                >
                  <i class="fas fa-plus text-2xl text-white"></i>
                </div>
                <h4 class="text-lg font-semibold text-white">Add Address</h4>
              </div>
            </RouterLink>
          </div>

          <CardAddress
            :id="id"
            :addresses="addresses"
            :handleDeleteAddress="handleDeleteAddress"
          />
        </div>
      </div>

      <!-- Action Buttons -->
      <div class="flex justify-end space-x-4">
        <RouterLink
          to="/dashboard"
          class="px-5 py-3 bg-gray-700 text-white rounded-lg hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 focus:ring-offset-gray-800 transition-all duration-200 flex items-center shadow-md"
        >
          <i class="fas fa-arrow-left mr-2"></i> Back
        </RouterLink>
        <RouterLink
          :to="{
            name: 'contact-edit',
          }"
          class="px-5 py-3 bg-gradient text-white rounded-lg hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-800 transition-all duration-200 font-medium shadow-lg transform hover:-translate-y-0.5 flex items-center"
        >
          <i class="fas fa-user-edit mr-2"></i> Edit Contact
        </RouterLink>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
