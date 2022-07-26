<template>
  <div class="messages_box">
    <br />
    <div class="user-chat-body" ref="scrollBody">
      <UserMessage
        v-if="chatEmpty"
        :messageData="this.welcome_msg"
        full_name="Admin"
      />
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
import { toRaw } from "vue";

export default {
  name: "UserChatbox",
  props: {
    full_name: String,
    email: String,
  },
  data() {
    return {
      admin_chat: {},
      welcome_msg: {
        admin: true,
        message: "Welcome! Here you can send your first message.",
        timestamp: "",
      },
      fetched: false,
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
        .then((res) => {
          this.admin_chat = res.data;
          this.fetched = true;
        })
        .catch((err) => console.log(err));
  },
  mounted() {
    this.$socket.client.emit("login", this.$cookies.get("conversation_id"));

    this.$socket.client.on("confirmToClient", (confirmedMsg) => {
      this.admin_chat.messages.push(confirmedMsg.values.$push.messages);
      this.fetched = false;
    });
  },
  updated() {
    this.$refs.scrollBody.scrollTop = this.$refs.scrollBody.scrollHeight;
  },
  computed: {
    chatEmpty() {
      if (this.fetched) {
        if (!this.admin_chat) return true;
        console.log(this.admin_chat.messages);
        if (!toRaw(this.admin_chat.messages)) return true;
        else if (!toRaw(this.admin_chat.messages).length) return true;
        return false;
      } else return false;
    },
  },
  methods: {
    sendMessage(message) {
      if (
        !this.$cookies.get("conversation_id") ||
        !this.admin_chat.full_name ||
        !this.admin_chat.email
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
        $set: {
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
