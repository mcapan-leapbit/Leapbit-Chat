<template>
  <div class="send-msg">
    <form action="post" class="chat-entry">
      <input
        type="text"
        class="chat-entry-text"
        placeholder="Upišite svoju poruku..."
      />
      <input
        type="image"
        name="submit"
        src="../../public/assets/images/icon-send.svg"
        class="chat-send-icon"
        alt="send message"
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
  mounted() {
    const textForm = document.querySelector(".chat-entry-text");

    const sendImg = document.querySelector(".chat-send-icon");

    if (textForm.value) sendImg.classList.add("is-full");

    textForm.addEventListener("input", () => {
      if (textForm.value) {
        sendImg.classList.add("is-full");
      } else {
        sendImg.classList.remove("is-full");
      }
    });
  },
};
</script>

<style lang="scss">
@import "/public/sass/homepage.scss";
</style>