<template>
  <div class="clear-completed">
    <button @click="store.clearChecked">Wyczyść zrobione</button>
    <button @click="store.clearAll">Wyczyść wszystko</button>
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
