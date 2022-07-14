<template>
  <div class="messages_box">
    <br />
    <div class="user-chat-body" ref="scrollBody">
      <UserMessage
        v-for="message in admin_chat"
        :key="message.id"
        :messageData="message"
      />
    </div>

    <UserInput @submit-msg="sendMessage" />

    <br />
  </div>
</template>

<script>
import UserInput from "../../src/components/UserInput.vue";
import UserMessage from "../../src/components/UserMessage.vue";
import admin_chat from "../../src/assets/admin_chat.json";
import uuid from "vue-uuid";

export default {
  name: "UserChatbox",
  props: {
    name: String,
    email: String,
  },
  data() {
    return {
      admin_chat: admin_chat,
    };
  },
  components: {
    UserMessage,
    UserInput,
  },
  mounted() {
    this.$refs.scrollBody.scrollTop = this.$refs.scrollBody.scrollHeight;
  },
  methods: {
    sendMessage(message, timestamp) {
      this.$cookie.set("uuid", uuid.v4(), 1);
      alert(`${this.name} sent message:\n${message}\n${timestamp}`);
    },
  },
};
</script>
