<script setup>
import { useLocalStorage } from "@vueuse/core";
import { userLogout } from "../../lib/api/UserApi.js";
import { useRouter } from "vue-router";
import { alertError } from "../../lib/alert.js";
import { onBeforeMount } from "vue";

const token = useLocalStorage("token", null);
const router = useRouter();
async function handleLogout() {
  const res = await userLogout(token.value);
  if (res.status === 200) {
    token.value = null;
    await router.push({
      name: "login",
    });
  } else {
    await alertError("Failed to logout");
  }
}

onBeforeMount(async () => {
  await handleLogout();
});
</script>

<template></template>

<style scoped></style>
