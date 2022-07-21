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
        .get("conversation/" + this.$cookies.get("conversation_id"))
        .then((res) => (this.admin_chat = res.data));
  },
  mounted() {
    this.$socket.client.emit("login", this.$cookies.get("conversation_id"));

    this.$socket.client.on("confirmToClient", (confirmedMsg) => {
      this.admin_chat.messages.push(confirmedMsg.values.$push.messages);
    });
  },
  updated() {
    this.$refs.scrollBody.scrollTop = this.$refs.scrollBody.scrollHeight;
  },
  methods: {
    sendMessage(message) {
      if (
        !this.$cookies.get("conversation_id").trim() ||
        !this.admin_chat.full_name.trim() ||
        !this.admin_chat.email.trim()
      ) {
        alert(
          "There has been an error while signing in. Please refresh page and try again." +
            "\ncookie: " +
            this.$cookies.get("conversation_id").trim() +
            "\nfull_name: " +
            this.admin_chat.full_name +
            "\nemail: " +
            this.admin_chat.email
        );
        this.$cookies.remove("conversation_id");
        window.location.reload();
        return false;
      }
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
