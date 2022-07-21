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
        <ChatsList @conv_selected="setConversation" />
        <AdminChatbox :conv_id="conv_id" />
      </div>
    </div>
  </div>
</template>

<style lang="scss">
@import "../../src/assets/sass/index.scss";
</style>

<script>
import Sidebar from "../../src/components/Sidebar.vue";

import ChatsList from "../../src/components/ChatsList.vue";

import AdminChatbox from "../components/AdminChatbox.vue";

export default {
  name: "Admin",
  data: function () {
    return {
      conv_id: "",
    };
  },
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
  methods: {
    setConversation(conversation_id) {
      this.conv_id = conversation_id;
    },
  },
};
</script>
