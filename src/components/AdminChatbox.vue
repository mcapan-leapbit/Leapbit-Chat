<template>
  <div class="mask-cbox">
    <AdminTopBar />
    <div class="chat-body" ref="chatBody">
      <AdminMessage
        v-for="message in admin_chat.messages"
        :key="message.conversation_id"
        :messageData="message"
        :full_name="admin_chat.full_name"
      />
    </div>
    <AdminInput @sendingMessage="sendingMessage" />
  </div>
</template>

<script>
import AdminTopBar from "./AdminTopBar.vue";
import AdminMessage from "./AdminMessage.vue";
import AdminInput from "./AdminInput.vue";
import moment from "moment";

export default {
  name: "AdminChatbox",
  components: {
    AdminTopBar,
    AdminMessage,
    AdminInput,
  },
  data() {
    return {
      admin_chat: {},
    };
  },
  // sockets: {
  //   connect() {},
  //   disconnect() {},
  // },
  mounted() {
    this.$refs.chatBody.scrollTop = this.$refs.chatBody.scrollHeight;
    this.axios
      .get(
        process.env.VUE_APP_SERVER +
          "conversation/9bc4866a-eabe-4992-aff9-f5d7ebdf6316"
      )
      .then((res) => (this.admin_chat = res.data));
    console.log(this.admin_chat);
  },
  methods: {
    sendingMessage(messageText) {
      this.$socket.client.emit("messageSent", {
        admin: true,
        text: messageText,
        date: moment().format("MMMM Do YYYY, HH:mm:ss "),
      });
    },
  },
};
</script>