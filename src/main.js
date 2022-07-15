import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import VueSocketIOExt from "vue-socket.io-extended";
import { io } from "socket.io-client";
import VueCookies from "vue3-cookies";
import { uuid } from "vue-uuid";
import axios from "axios";
import VueAxios from "vue-axios";

const socket = io("http://localhost:3000");
const vue = createApp(App).use(store).use(router);

vue.use(VueAxios, axios);
vue.use(VueCookies, { expireTimes: "1d" });
vue.use(uuid);

vue.use(VueSocketIOExt, socket);
//vue.config.globalProperties.$socket = socket;
vue.mount("#app");
