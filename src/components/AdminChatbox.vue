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
      conversationId: "0b1f646f-6628-4509-bdf2-e13fdba8be1f",
    };
  },

  beforeMount() {
    this.axios
      .get(process.env.VUE_APP_SERVER + "conversation/" + this.conversationId)
      .then((res) => (this.admin_chat = res.data));
  },
  mounted() {
    this.$socket.client.on("confirmToClient", (confirmedMsg) => {
      console.log(confirmedMsg);
      console.log(this.admin_chat);
      this.admin_chat.messages.push(confirmedMsg.values.$push.messages);
    });
  },
  updated() {
    this.$refs.chatBody.scrollTop = this.$refs.chatBody.scrollHeight;
  },
  methods: {
    sendingMessage(messageText) {
      const msg = {
        admin: true,
        message: messageText,
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
        conversation_id: this.admin_chat.conversation_id,
        values: values,
      };

      this.$socket.client.emit("messageSent", packet);
    },
  },
};
</script>