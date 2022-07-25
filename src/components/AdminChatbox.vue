<template>
  <div class="mask-cbox">
    <AdminTopBar :fullName="fullName" :email="email" :initials="initials" />
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
  props: ["conv_id"],
  components: {
    AdminTopBar,
    AdminMessage,
    AdminInput,
  },
  data() {
    return {
      admin_chat: {},
      conversationId: "0b1f646f-6628-4509-bdf2-e13fdba8be1f",
      fullName: "",
      email: "",
      initials: "",
    };
  },
  watch: {
    conv_id(newConv_id) {
      this.axios.get("conversation/" + newConv_id).then((res) => {
        this.admin_chat = res.data;
        this.fullName = res.data.full_name;
        this.email = res.data.email;
        this.initials = this.makeInitials();
      });
    },
  },
  mounted() {
    this.$socket.client.on("confirmToClient", (confirmedMsg) => {
      if (confirmedMsg.conversation_id == this.conv_id) {
        this.admin_chat.messages.push(confirmedMsg.values.$push.messages);
      }
    });
  },
  updated() {
    this.$refs.chatBody.scrollTop = this.$refs.chatBody.scrollHeight;
  },
  methods: {
    sendingMessage(messageText) {
      if (!this.conv_id) return;
      const msg = {
        admin: true,
        message: messageText,
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
        conversation_id: this.conv_id,
        values: values,
      };

      this.$socket.client.emit("messageSent", packet);
    },
    makeInitials() {
      let names = this.fullName.split(" "),
        initials = names[0].substring(0, 1).toUpperCase();

      if (names.length > 1) {
        initials += names[names.length - 1].substring(0, 1).toUpperCase();
      }
      return initials;
    },
  },
};
</script>
