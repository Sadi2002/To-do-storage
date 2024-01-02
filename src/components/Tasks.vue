<template>
  <div class="tasks">
    <div
      v-for="task of store.allTasks"
      :key="task"
      class="task"
      @click="store.completed(task)"
    >
      <div :class="{ completed: task.isCompleted }" class="complete-circle">
        <i v-if="task.isCompleted" class="fas fa-check"></i>
      </div>
      <span :class="{ completedTitle: task.isCompleted }">{{
        task.title
      }}</span>
    </div>
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
