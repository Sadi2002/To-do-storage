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
        const lowerCaseSearch = this.search.toLowerCase();
        const upperFirstLetter = lowerCaseSearch.charAt(0).toUpperCase();

        this.allTasks.push({
          title: upperFirstLetter + lowerCaseSearch.slice(1),
          isCompleted: false,
        });

        this.search = "";
      }
    },
    completed(task) {
      task.isCompleted = !task.isCompleted;
    },
    clearChecked() {
      this.allTasks = this.allTasks.filter((task) => {
        return !task.isCompleted;
      });
    },
    clearAll() {
      this.allTasks = [];
    },
  },
});
