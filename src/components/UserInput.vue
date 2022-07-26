<template>
  <form @submit.prevent="sendMessage()" class="user_chat_entry">
    <input
      v-model="message"
      type="text"
      class="user_chat_entry_text"
      placeholder="Enter your message..."
    />
    <input
      type="image"
      class="user_chat_entry_image"
      name="submit"
      :src="require('../../public/assets/images/icon-send.svg')"
      alt="send"
      :style="sendBtnOpacity"
    />
  </form>
</template>

<script>
export default {
  name: "UserInput",
  data() {
    return {
      message: "",
    };
  },
  methods: {
    sendMessage() {
      if (!this.message.trim()) return;
      this.$emit("submit-msg", this.message.trim());
      this.message = "";
    },
  },
  computed: {
    sendBtnOpacity() {
      if (this.message.trim()) return "opacity: 1";
      else return "opacity: 0.5";
    },
  },
};
</script>
