<script setup>
const text = "ini dari child slot main gg gaming";
</script>

<template>
  <div>
    <header v-if="$slots.header">
      <slot name="header"></slot>
    </header>

    <main v-if="$slots.main">
      <slot name="main" :text="text"></slot>
    </main>

    <footer v-if="$slots.footer">
      <slot name="footer"></slot>
    </footer>
  </div>
</template>
