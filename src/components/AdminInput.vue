<template>
  <div class="send-msg">
    <form action="post" class="chat-entry">
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
        @click="sendMessage"
        ref="sendImage"
        id="admin-chat-icon"
      />
    </form>
  </div>
</template>

<script>
export default {
  name: "AdminInput",
  data() {
    return {
      messageSent: null,
    };
  },
  methods: {
    sendMessage() {},
  },
  mounted() {
    console.log("montirano");
    const textForm = this.$refs.inputText;
    const sendImg = this.$refs.sendImage;
    if (textForm.value) sendImg.classList.add("is-full");
    textForm.addEventListener("input", () => {
      if (textForm.value) {
        sendImg.style.opacity = 1;
      } else {
        sendImg.style.opacity = 0.5;
      }
    });
  },
};
</script>
