<template>
  <div class="search">
    <input
      type="text"
      v-model="store.search"
      placeholder="Wpisz zadanie do zrobienia..."
    />
    <i @click="store.addTask" class="fas fa-plus"></i>
  </div>
</template>

<script>
import { todos } from "../store/store";
export default {
  setup() {
    const store = todos();

    return { store };
  },
};
</script>
