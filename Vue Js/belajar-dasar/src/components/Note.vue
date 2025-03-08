<script setup>
import {
  onBeforeMount,
  onMounted,
  onUpdated,
  reactive,
  ref,
  useTemplateRef,
} from "vue";

const notes = reactive([]);
const note = ref();
const noteInput = useTemplateRef("noteInput");

const noteList = useTemplateRef("noteList");

function addNote() {
  notes.push(note.value);
  note.value = "";
  noteInput.value.focus();
  if (noteList.value) {
    noteList.value.forEach((note) => {
      console.log(note.textContent);
    });
  }
}

// lifecycle hooks
onBeforeMount(() => {
  console.info("onBeforeMount");
});

onMounted(() => {
  console.info("onMounted");
});

onUpdated(() => {
  console.info("onUpdated");
});
</script>

<template>
  <h2>Buat Note</h2>
  <div>
    <input
      ref="noteInput"
      type="text"
      v-model="note"
      placeholder="Tulis note mu di sini"
      autofocus
    />
    <button @click="addNote">Tambah Note</button>
  </div>

  <h3>Daftar Note</h3>
  <ul>
    <li v-for="note in notes" :key="note.id" ref="noteList">{{ note }}</li>
  </ul>
</template>

<style scoped></style>
