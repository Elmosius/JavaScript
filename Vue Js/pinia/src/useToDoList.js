import { defineStore } from "pinia";
import { reactive } from "vue";

export const useToDoList = defineStore("todolist", () => {
  const todos = reactive([]);

  function add(name) {
    todos.push({
      id: Math.floor(Math.random() * 100),
      name,
    });
  }

  function get(id) {
    return todos.find((e) => e.id === id);
  }

  function remove(id) {
    const index = todos.findIndex((e) => e.id === id);
    if (index !== -1) todos.splice(index, 1);
  }

  function update(id, name) {
    const index = todos.findIndex((e) => e.id === id);
    if (index !== -1) todos[index].name = name;
  }

  return {
    todos,
    add,
    get,
    remove,
    update,
  };
});
