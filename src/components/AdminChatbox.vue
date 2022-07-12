<template>
  <div class="mask-cbox">
    <AdminTopBar />
    <div class="chat-body">
      <AdminMessage
        v-for="message in admin_chat"
        :key="message.id"
        :messageData="message"
      />
    </div>
    <AdminInput />
  </div>
</template>

<script>
import AdminTopBar from "./AdminTopBar.vue";
import AdminMessage from "./AdminMessage.vue";
import AdminInput from "./AdminInput.vue";

import admin_chat from "../../src/assets/admin_chat.json";
export default {
  name: "AdminChatbox",
  components: {
    AdminTopBar,
    AdminMessage,
    AdminInput,
  },
  data() {
    return {
      admin_chat: admin_chat,
    };
  },
};
</script>