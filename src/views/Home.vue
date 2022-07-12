<template>
  <div class="home">
    <div class="main_title">
      <span class="gradient_text huge">COMING SOON</span>
      <p class="description negative">
        Soon we will be online with you.<br />
        In the meantime, you can contact our sales department through the chat
        in the bottom right corner.
      </p>
    </div>

    <FloatingChat />
  </div>
</template>

<script>
import FloatingChat from "../../src/components/FloatingChat.vue";

export default {
  name: "Home",
  components: {
    FloatingChat,
  },
};
</script>
