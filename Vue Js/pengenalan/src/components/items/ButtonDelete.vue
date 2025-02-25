<template>
  <button @click="$emit('onClick')">
    <slot />
  </button>
</template>
