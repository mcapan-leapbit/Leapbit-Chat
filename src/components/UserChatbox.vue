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
import moment from "moment";

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
            "conversation/" +
            this.$cookies.get("conversation_id")
        )
        .then((res) => (this.admin_chat = res.data));
  },
  methods: {
    sendMessage(message, timestamp) {
      let msg = { admin: false, message: message, timestamp: timestamp };
      let values = {
        $setOnInsert: {
          email: this.admin_chat.email,
          full_name: this.admin_chat.full_name,
          last_updated: moment().unix(),
        },
        $push: { messages: msg },
      };
      let packet = {
        conversation_id: this.$cookies.get("conversation_id"),
        values: values,
      };

      this.axios
        .post(process.env.VUE_APP_SERVER + "message", packet)
        .then(function (response) {
          console.log(response);
        })
        .catch(function (error) {
          console.log(error);
        });
    },
  },
};
</script>
