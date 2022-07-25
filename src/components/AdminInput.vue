<template>
  <div class="send-msg">
    <form @submit.prevent="handleSubmit" action="post" class="chat-entry">
      <input
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
        v-model="messageSent"
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
      const textForm = this.$refs.inputText;
      const sentMessage = textForm.value;
      if (!sentMessage.trim()) return;

      this.$emit("sendingMessage", sentMessage.trim());
      textForm.value = "";
      this.$refs.sendImage.style.opacity = 0.5;
    },
  },
  mounted() {
    const textForm = this.$refs.inputText;
    const sendImg = this.$refs.sendImage;

    textForm.addEventListener("input", () => {
      if (textForm.value.trim()) {
        sendImg.style.opacity = 1;
      } else {
        sendImg.style.opacity = 0.5;
      }
    });
  },
};
</script>
