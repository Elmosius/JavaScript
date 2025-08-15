<script setup>
import { reactive } from "vue";
import { useLocalStorage } from "@vueuse/core";
import { contactCreate } from "../../lib/api/ContactApi.js";
import { alertError, alertSuccess } from "../../lib/alert.js";
import { useRouter } from "vue-router";
import SubHeader from "../ui/SubHeader.vue";
import FormContact from "../ui/FormContact.vue";

const router = useRouter();
const token = useLocalStorage("token", null);
const contact = reactive({
  first_name: "",
  last_name: "",
  email: "",
  phone: "",
});

async function handleSubmit() {
  const res = await contactCreate(token.value, contact);

  if (res.status === 200) {
    await alertSuccess("Contact created successfully");
    await router.push("/dashboard");
  } else {
    await alertError("Contact creation failed");
  }
}
</script>

<template>
  <SubHeader
    title="Back to Contacts"
    title2="Create New Contact"
    icon="user-plus"
    to="dashboard"
  />
  <div
    class="bg-gray-800 bg-opacity-80 rounded-xl shadow-custom border border-gray-700 overflow-hidden max-w-2xl mx-auto animate-fade-in"
  >
    <div class="p-8">
      <FormContact
        :handleSubmit="handleSubmit"
        :contact="contact"
        type="create"
      />
    </div>
  </div>
</template>

<style scoped></style>
