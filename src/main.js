import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import cookie from "vue-cookie";
import uuid from "vue-uuid";
import VueSocketIOExt from "vue-socket.io-extended";
import { io } from "socket.io-client";

const socket = io("http://localhost:3000");

const vue = createApp(App).use(store).use(router);

vue.use(cookie);
vue.use(uuid);
vue.use(VueSocketIOExt, socket);
//vue.config.globalProperties.$socket = socket;
vue.mount("#app");
