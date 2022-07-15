<template>
  <div class="messages_box">
    <br />
    <div class="user-chat-body" ref="scrollBody">
      <UserMessage
        v-for="message in admin_chat.messages"
        :key="message.conversation_id"
        :messageData="message"
        :full_name="admin_chat.full_name"
      />
    </div>

    <UserInput @submit-msg="sendMessage" />

    <br />
  </div>
</template>

<script>
import UserInput from "../../src/components/UserInput.vue";
import UserMessage from "../../src/components/UserMessage.vue";
import { uuid } from "vue-uuid";

export default {
  name: "UserChatbox",
  props: {
    full_name: String,
    email: String,
  },
  data() {
    return {
      admin_chat: {},
    };
  },
  components: {
    UserMessage,
    UserInput,
  },
  mounted() {
    this.$refs.scrollBody.scrollTop = this.$refs.scrollBody.scrollHeight;
    if (this.$cookies.isKey("conversation_id"))
      this.axios
        .get(
          process.env.VUE_APP_SERVER +
            "conversation/9bc4866a-eabe-4992-aff9-f5d7ebdf6316"
        )
        .then((res) => (this.admin_chat = res.data)); // edit this
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
