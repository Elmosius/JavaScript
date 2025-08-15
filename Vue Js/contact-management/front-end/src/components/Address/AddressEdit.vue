<script setup>
import { useLocalStorage } from "@vueuse/core";
import { onBeforeMount, reactive } from "vue";
import { contactDetail } from "../../lib/api/ContactApi.js";
import { alertError, alertSuccess } from "../../lib/alert.js";
import { addressDetail, addressUpdate } from "../../lib/api/AddressApi.js";
import { useRouter } from "vue-router";
import SubHeader from "../ui/SubHeader.vue";
import ContactInformation from "../ui/ContactInformation.vue";
import FormAddress from "../ui/FormAddress.vue";

const router = useRouter();
const { id, addressId } = defineProps(["id", "addressId"]);
const token = useLocalStorage("token", null);

const contact = reactive({
  first_name: "",
  last_name: "",
  email: "",
  phone: "",
});

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

const address = reactive({
  street: "",
  city: "",
  province: "",
  country: "",
  postal_code: "",
});

async function fetchAddress() {
  const res = await addressDetail(token.value, id, addressId);

  if (res.status === 200) {
    const data = await res.json();
    address.street = data.data.street;
    address.city = data.data.city;
    address.province = data.data.province;
    address.country = data.data.country;
    address.postal_code = data.data.postal_code;
  } else {
    await alertError("Address not found");
  }
}

async function handleSubmit() {
  const res = await addressUpdate(token.value, id, addressId, address);

  if (res.status === 200) {
    await alertSuccess("Address updated successfully");
    await router.push(`/dashboard/contact/detail/${id}`);
  } else {
    await alertError("Address update failed");
  }
}

onBeforeMount(async () => {
  await fetchContact();
  await fetchAddress();
});
</script>

<template>
  <SubHeader
    title="Back to Contact Details"
    title2="Edit Address"
    icon="map-marker-alt"
    :to="`dashboard/contact/detail/${id}`"
  />

  <div
    class="bg-gray-800 bg-opacity-80 rounded-xl shadow-custom border border-gray-700 overflow-hidden max-w-2xl mx-auto animate-fade-in"
  >
    <div class="p-8">
      <ContactInformation :contact="contact" />

      <FormAddress
        :handleSubmit="handleSubmit"
        :id="id"
        :address="address"
        type="edit"
      />
    </div>
  </div>
</template>

<style scoped></style>
