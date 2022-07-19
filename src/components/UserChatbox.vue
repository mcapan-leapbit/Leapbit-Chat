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
  beforeMount() {
    if (this.$cookies.get("conversation_id"))
      this.axios
        .get(
          process.env.VUE_APP_SERVER +
            "conversation/" +
            this.$cookies.get("conversation_id")
        )
        .then((res) => (this.admin_chat = res.data));
  },
  mounted() {
    this.$socket.client.emit("login", this.$cookies.get("conversation_id"));

    this.$socket.client.on("confirmToClient", (confirmedMsg) => {
      console.log(confirmedMsg);
      console.log(this.admin_chat);
      this.admin_chat.messages.push(confirmedMsg.values.$push.messages);
    });
  },
  updated() {
    this.$refs.scrollBody.scrollTop = this.$refs.scrollBody.scrollHeight;
  },
  methods: {
    sendMessage(message) {
      const msg = {
        admin: false,
        message: message,
        timestamp: moment().format("MMMM Do YYYY, HH:mm:ss "),
      };
      const values = {
        $setOnInsert: {
          last_updated: moment().unix(),
        },
        $push: {
          messages: msg,
        },
      };

      const packet = {
        conversation_id: this.$cookies.get("conversation_id"),
        values: values,
      };

      this.$socket.client.emit("messageSent", packet);
    },
  },
};
</script>
