<template>
  <div class="mask-cbox">
    <AdminTopBar />
    <div class="chat-body" ref="chatBody">
      <AdminMessage
        v-for="message in admin_chat.messages"
        :key="message.id"
        :messageData="message"
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
  sockets: {
    connect() {
      // this.$socket.client.emit("fetchMyChat", {
      //   convo_id:
      //     process.env.VUE_APP_SERVER +
      //     "conversation/9bc4866a-eabe-4992-aff9-f5d7ebdf6316",
      // });
      if (this.$cookies.isKey("conversation_id"))
        this.axios
          .get(
            process.env.VUE_APP_SERVER +
              "conversation/9bc4866a-eabe-4992-aff9-f5d7ebdf6316"
          )
          .then((res) => (this.admin_chat = res.data));
    },
  },
  mounted() {
    this.$refs.chatBody.scrollTop = this.$refs.chatBody.scrollHeight;
  },
  methods: {
    sendingMessage(messageText) {
      this.$socket.client.emit("messageSent", {
        admin: true,
        text: messageText,
        date: moment().format("MMMM Do YYYY, HH:mm:ss "),
      });
    },
    receiveChat(messagesFromDB) {
      console.log(messagesFromDB);
      this.admin_chat = messagesFromDB;
    },
  },
};
</script>