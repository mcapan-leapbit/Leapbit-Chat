<template>
  <AdminTopBar />
  <div class="chat-body">
    <AdminMessage />
  </div>
  <AdminInput />
</template>

<script>
import AdminTopBar from "./AdminTopBar.vue";
import AdminMessage from "./AdminMessage.vue";
import AdminInput from "./AdminInput.vue";
export default {
  name: "AdminChatbox",
  components: {
    AdminTopBar,
    AdminMessage,
    AdminInput,
  },
};
</script>

<style lang="scss">
@import "/public/sass/homepage.scss";
</style>
