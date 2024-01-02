import { defineStore } from "pinia";

export const todos = defineStore("store", {
  state: () => ({
    search: "",
    allTasks: [],
    isCompleted: false,
  }),
  actions: {
    addTask() {
      if (this.search !== "") {
        this.allTasks.push({ title: this.search, isCompleted: false });
        this.search = "";
      }
    },
    completed(task) {
      task.isCompleted = !task.isCompleted;
    },
  },
});
