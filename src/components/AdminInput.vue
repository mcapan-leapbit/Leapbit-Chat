<template>
  <div class="send-msg">
    <form action="post" class="chat-entry">
      <input
        type="text"
        class="chat-entry-text"
        placeholder="Upišite svoju poruku..."
        id="chat-input-text"
      />
      <!-- <input
        type="image"
        name="submit"
        src="../../public/assets/images/icon-send.svg"
        class="chat-send-icon"
        alt="send message"
      /> -->
      <img
        src="../../public/assets/images/icon-send.svg"
        alt="nema slike"
        class="chat-send-icon"
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
  mounted() {
    console.log("montirano");
    const textForm = document.getElementById("chat-input-text");

    const sendImg = document.querySelectorAll("admin-chat-icon");

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
