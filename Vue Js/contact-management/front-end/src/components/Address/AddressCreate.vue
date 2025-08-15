<script setup>
import { useLocalStorage } from "@vueuse/core";
import { useRouter } from "vue-router";
import { contactDetail } from "../../lib/api/ContactApi.js";
import { alertError, alertSuccess } from "../../lib/alert.js";
import { onBeforeMount, reactive } from "vue";
import { addressCreate } from "../../lib/api/AddressApi.js";
import SubHeader from "../ui/SubHeader.vue";
import ContactInformation from "../ui/ContactInformation.vue";
import FormAddress from "../ui/FormAddress.vue";

const { id } = defineProps(["id"]);
const token = useLocalStorage("token", null);
const router = useRouter();

const address = reactive({
  street: "",
  city: "",
  province: "",
  country: "",
  postal_code: "",
});

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
async function handleSubmit() {
  const res = await addressCreate(token.value, id, address);

  if (res.status === 200) {
    await alertSuccess("Address added successfully");
    await router.push(`/dashboard/contact/detail/${id}`);
  } else {
    await alertError("Address add failed");
  }
}
onBeforeMount(async () => {
  await fetchContact();
});
</script>

<template>
  <SubHeader
    title="Back to Contact Details"
    title2="Add New Address"
    icon="plus-circle"
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
        type="create"
      />
    </div>
  </div>
</template>

<style scoped></style>
