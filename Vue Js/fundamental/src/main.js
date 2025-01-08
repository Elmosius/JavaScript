import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import OptionsComponent from "./components/OptionsComponent.vue";

const app = createApp(App);

// Component Registration Globally
app.component("OptionsComponent", OptionsComponent);

app.mount("#app");
