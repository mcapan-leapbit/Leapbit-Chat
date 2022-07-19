<template>
  <div class="dash">
    <div class="dashboard-left-menu">
      <Sidebar />
    </div>
    <div class="right-col">
      <div class="messages">
        Messages <span class="rectangle"><span class="-new">2 new</span></span>
      </div>
      <div class="msg-row">
        <ChatsList />
        <AdminChatbox />
      </div>
    </div>
  </div>
</template>

<style lang="scss">
@import "../../public/sass/index.scss";
</style>

<script>
import Sidebar from "../../src/components/Sidebar.vue";

import ChatsList from "../../src/components/ChatsList.vue";

import AdminChatbox from "../components/AdminChatbox.vue";

export default {
  name: "Admin",
  components: {
    Sidebar,
    ChatsList,
    AdminChatbox,
  },
  sockets: {
    connect() {
      this.$socket.client.emit("login", process.env.VUE_APP_ADMIN_ID);
    },
  },
};
</script>