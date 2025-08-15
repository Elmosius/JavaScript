<script setup>
import { useLocalStorage } from "@vueuse/core";
import { contactDetail, contactUpdate } from "../../lib/api/ContactApi.js";
import { onBeforeMount, reactive } from "vue";
import { alertError, alertSuccess } from "../../lib/alert.js";
import { useRouter } from "vue-router";
import SubHeader from "../ui/SubHeader.vue";
import FormContact from "../ui/FormContact.vue";

const { id } = defineProps(["id"]);
const token = useLocalStorage("token", null);
const router = useRouter();

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
  const res = await contactUpdate(token.value, id, contact);

  if (res.status === 200) {
    await alertSuccess("Contact updated successfully");
    await router.push("/dashboard");
  } else {
    await alertError("Contact update failed");
  }
}

onBeforeMount(async () => {
  await fetchContact();
});
</script>

<template>
  <SubHeader
    title="Back to Contacts"
    title2="Edit Contact"
    to="dashboard"
    icon="user-edit"
  />

  <div
    class="bg-gray-800 bg-opacity-80 rounded-xl shadow-custom border border-gray-700 overflow-hidden max-w-2xl mx-auto animate-fade-in"
  >
    <div class="p-8">
      <FormContact
        :handleSubmit="handleSubmit"
        :contact="contact"
        type="edit"
      />
    </div>
  </div>
</template>

<style scoped></style>
