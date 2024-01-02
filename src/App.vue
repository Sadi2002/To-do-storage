<template>
  <div class="container">
    <div class="container-up">
      <h1>Twoja lista</h1>
      <Search />
      <Tasks />
    </div>
    <Clear />
  </div>
</template>

<script>
import Search from "./components/Search.vue";
import Tasks from "./components/Tasks.vue";
import Clear from "./components/Clear.vue";
export default {
  name: "App",
  components: { Search, Tasks, Clear },
};
</script>

<style></style>
