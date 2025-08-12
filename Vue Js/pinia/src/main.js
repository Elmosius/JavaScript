import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import { createPinia } from "pinia";
import { createRouter, createWebHistory } from "vue-router";

import Counter from "./components/Counter.vue";
import MultipleCounter from "./components/MultipleCounter.vue";
import ToDoList from "./components/ToDoList.vue";
import AddTodo from "./components/AddTodo.vue";
import UpdateTodo from "./components/UpdateTodo.vue";

const pinia = createPinia();
const router = createRouter({
  routes: [
    {
      path: "/todolist",
      children: [
        {
          path: "",
          component: ToDoList,
          name: "todolist",
        },
        {
          path: "add",
          name: "add-todolist",
          component: AddTodo,
        },
        {
          path: "edit/:id",
          name: "edit-todolist",
          component: UpdateTodo,
          props: true,
        },
      ],
    },
    {
      path: "/counter",
      name: "counter",
      component: Counter,
    },
    {
      path: "/multiple-counter",
      name: "multiple-counter",
      component: MultipleCounter,
    },
  ],
  history: createWebHistory(),
});

createApp(App).use(pinia).use(router).mount("#app");
