<template>
  <div class="messages_box">
    <br />
    <div class="user-chat-body" ref="scrollBody">
      <UserMessage
        v-for="message in admin_chat"
        :key="message.id"
        :messageData="message"
        :full_name="full_name"
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
import { uuid } from "vue-uuid";

export default {
  name: "UserChatbox",
  props: {
    full_name: String,
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
    if (this.$cookies.isKey("conversation_id"))
      this.axios.get(`${process.env.ORIGIN_LINK}${this.$cookies.get("conversation_id")}`)
        .then(res => this.admin_chat = res); // edit this
  },
  methods: {
    sendMessage(message, timestamp) {
      if (!this.$cookies.isKey("conversation_id"))
        this.$cookies.set("conversation_id", uuid.v4());
      alert(`${this.full_name} sent message:\n${message}\n${timestamp}`);
    },
  },
};
</script>
