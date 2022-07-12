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

    <UserInput />

    <br />
  </div>
</template>

<script>
import UserInput from "../../src/components/UserInput.vue";
import UserMessage from "../../src/components/UserMessage.vue"
import admin_chat from "../../src/assets/admin_chat.json";

export default {
  name: "UserChatbox",
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
};
</script>
