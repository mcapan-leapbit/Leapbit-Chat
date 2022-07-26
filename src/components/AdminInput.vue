<template>
  <div class="send-msg">
    <form @submit.prevent="handleSubmit" action="post" class="chat-entry">
      <input
        v-model="messageSent"
        type="text"
        class="chat-entry-text"
        placeholder="Upišite svoju poruku..."
        id="chat-input-text"
        ref="inputText"
      />
      <input
        type="image"
        name="submit"
        :src="require('../../public/assets/images/icon-send.svg')"
        class="chat-send-icon"
        alt="send message"
        ref="sendImage"
        id="admin-chat-icon"
        :style="sendBtnOpacity"
      />
    </form>
  </div>
</template>

<script>
export default {
  name: "AdminInput",
  data() {
    return {
      messageSent: "",
    };
  },
  methods: {
    handleSubmit() {
      if (!this.messageSent.trim()) return;

      this.$emit("sendingMessage", this.messageSent.trim());
      this.messageSent = "";
    },
  },
  computed: {
    sendBtnOpacity() {
      if (this.messageSent.trim()) return "opacity : 1";
      else return "opacity: 0.5";
    },
  },
};
</script>
