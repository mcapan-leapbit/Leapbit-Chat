import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import VueSocketIOExt from "vue-socket.io-extended";
import io from "socket.io-client";
import VueCookies from "vue3-cookies";
import uuid from "vue-uuid";
import axios from "axios";
import VueAxios from "vue-axios";

const socket = io(process.env.VUE_APP_BASE_URL);
const vue = createApp(App).use(store).use(router);

axios.defaults.baseURL = process.env.VUE_APP_BASE_URL;
vue.use(VueAxios, axios);
vue.use(VueCookies, { expireTimes: "30d" });
vue.use(uuid);

vue.use(VueSocketIOExt, socket);
//vue.config.globalProperties.$socket = socket;
vue.mount("#app");
