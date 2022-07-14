import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
const cookie = require("vue-cookie");
const uuid = require("vue-uuid");

createApp(App).use(store).use(router).mount("#app");
App.use(cookie).use(uuid);
