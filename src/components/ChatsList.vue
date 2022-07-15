<template>
  <div class="chats-list">
    <div class="chats-top">
      <div class="search-pack">
        <div class="search-pack-left">
          <span class="search-label">Search for chat</span>
          <input class="search-box" type="text" placeholder="Search" />
        </div>
      </div>
      <div class="active-box">
        <span class="status-label">Status</span>
        <div class="status-box">
          <span class="status-icon"></span>
          <span class="status-placeholder">Active</span>
          <img
            src="../../public/assets/images/icon-chevron.svg"
            class="status-chevron"
          />
        </div>
      </div>
    </div>
    <div class="status-divider"></div>
    <div class="scrollable-messages">
      <ChatsListMessage
        v-for="admin_message in admin_messages"
        :key="admin_message.id"
        :full_name="admin_message.full_name"
        :timestamp="admin_message.timestamp"
        :email="admin_message.email"
        :message="admin_message.message_text"
        :notif_number="admin_message.new_message"
      />
    </div>
  </div>
</template>

<script>
import ChatsListMessage from "../../src/components/ChatsListMessage.vue";
import admin_messages from "../../src/assets/admin_messages.json";

export default {
  name: "ChatsList",
  components: {
    ChatsListMessage,
  },
  data() {
    return {
      admin_messages: admin_messages,
    };
  },
};
</script>
